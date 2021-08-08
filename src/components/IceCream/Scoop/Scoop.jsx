import React from 'react'
import Classes from './Scoop.module.css'

function Scoop({scoop}) {
    return (
        <div class={[Classes.scoop, Classes[scoop]].join(' ')}></div>
    )
}

export default Scoop
