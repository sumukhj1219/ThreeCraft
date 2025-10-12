"use client"

import { useGeometryContext } from '@/packages/editor/context/geometry.context'
import { useSceneContext } from '@/packages/editor/context/scene.context'
import { useGeometry } from '@/packages/editor/hooks/useGeometry'
import { useLight } from '@/packages/editor/hooks/useLight'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const { activeGeometries } = useGeometryContext()
  const { createGeometry } = useGeometry()
  const [selectedObject, setSelectedObject] = useState<THREE.Mesh | null>(null)
  const [selectedObjectIndex, setSelectedObjectIndex] = useState<number | null>(null);
  const { color, light } = useSceneContext()
  const { createLight } = useLight()

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const sizes = {
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    }

    console.log(color)

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(color)
    sceneRef.current = scene
    scene.fog = new THREE.Fog(
      0xf6f3f4,
      40,
      60
    )

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    )
    camera.position.set(3, 3, 3)
    scene.add(camera)
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    // Orbit Controls
    const orbitControls = new OrbitControls(camera, renderer.domElement)
    orbitControls.enableDamping = true

    // Grid & Axes
    const gridHelper = new THREE.GridHelper(100, 100)
    scene.add(gridHelper)
    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)

    // TransformControls
    const transformControls = new TransformControls(camera, renderer.domElement)
    scene.add(transformControls.getHelper())

    // Disable orbit while dragging
    transformControls.addEventListener("dragging-changed", (event) => {
      orbitControls.enabled = !event.value
    })

    // Raycaster for object selection
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()

    const onClick = (event: MouseEvent) => {
      if (!canvasRef.current || !sceneRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const meshes = scene.children.filter(c => c instanceof THREE.Mesh) as THREE.Mesh[];
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const selected = intersects[0].object as THREE.Mesh;
        setSelectedObject(selected);

        const index = selected.userData.index;
        setSelectedObjectIndex(index);

        transformControls.attach(selected);
      } else {
        setSelectedObject(null);
        setSelectedObjectIndex(null);
        transformControls.detach();
      }
    };

    canvasRef.current.addEventListener("click", onClick)

    // transformControls.addEventListener("objectChange", () => {
    //   if (selectedObject && selectedObjectIndex !== null) {
    //     const pos = selectedObject.position;
    //     console.log(pos)
    //     setActiveGeometries(prev => {
    //       const newState = [...prev];
    //       const item = { ...newState[selectedObjectIndex] }; 
    //       item.position = { x: pos.x, y: pos.y, z: pos.z };
    //       newState[selectedObjectIndex] = item;
    //       return newState;
    //     });
    //   }
    // });


    // Animate
    const animate = () => {
      orbitControls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    // Resize
    const handleResize = () => {
      const width = containerRef.current?.offsetWidth || 0
      const height = containerRef.current?.offsetHeight || 0
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvasRef.current?.removeEventListener("click", onClick)
      renderer.dispose()
    }
  }, [color])

  // Add geometry meshes
  useEffect(() => {
    if (!sceneRef.current) return

    activeGeometries.forEach((geo, index) => {
      if (sceneRef.current!.getObjectByName(`geo-${index}`)) return;

      const geometry = createGeometry(geo.value, geo.parameters);
      const material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.userData.index = index;
      mesh.name = `geo-${index}`;

      mesh.position.set(
        geo.position?.x ?? index * 3,
        geo.position?.y ?? 0,
        geo.position?.z ?? 0
      );

      sceneRef.current!.add(mesh);
    });

    // Lights
    if (light) {
      const lighting = createLight(light)

      if (lighting) {
        sceneRef.current!.children
          .filter(obj => (obj as any).isLight)
          .forEach(oldLight => sceneRef.current!.remove(oldLight))

        sceneRef.current!.add(lighting)
      }
    }

    console.log(sceneRef.current)


  }, [activeGeometries, light])


  return (
    <div ref={containerRef} className="w-full h-screen">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

export default Scene
