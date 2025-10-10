"use client"
import { useGeometryContext } from '@/packages/editor/context/geometry.context'
import { useGeometry } from '@/packages/editor/hooks/useGeometry'
import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { activeGeometry } = useGeometryContext()
  const { createGeometry } = useGeometry()

  useEffect(() => {
    if (!canvasRef.current || !activeGeometry || !containerRef.current) return

    // Sizes
    const sizes = {
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    }

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("#f6f3f4")

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    )
    camera.position.set(0, 20, 10)
    scene.add(camera)

    // Geometry
    const geometry = createGeometry(activeGeometry.value, activeGeometry.parameters)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      sizes.width = containerRef.current.offsetWidth
      sizes.height = containerRef.current.offsetHeight

      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [activeGeometry])

  return (
    <div ref={containerRef} className="w-full h-screen">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

export default Scene
