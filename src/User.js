import React from "react"
import { useState, useEffect } from "react"
// export const Task = (props) => {
//     return <div className='taskList'
//             style={{background: props.complete === true ? 'green' : 'white'}}>
//                 <h1>{props.taskName}</h1>
//                 <button onClick={() => props.isComplete(props.id)}>complete</button>
//                 <button onClick={() => props.deleteTask(props.id)}>X</button>
//             </div>
// }


export const Image = (props) => {
    return (
        <div><img src={props.src} setFalse={props.setFalse}/></div>
    )
}
