import React from 'react'
import PanelHeader from './panel-header'
import PanelSubHeader from './panel-sub-header'
import PanelBody from './panel-body'


const Panel = () => {
    return (
        <div className='h-full flex flex-col'>
            <PanelHeader />
            <PanelSubHeader />
            <PanelBody />
        </div>
    )
}

export default Panel
