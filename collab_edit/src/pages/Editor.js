import React, { useState } from 'react'
import Client from '../components/Client'
import CodeArea from '../components/CodeArea'

const Editor = () => {

  const [clients, setClient]=useState(
    [{socketId:1,name:'Raj'},
      {socketId:2,name:'King'},
      {socketId:3,name:'queen'}])
  return (
    <div className='mainWrap'>
      <div className='aside'>
          <div className='innerAside'>

            <h3>Connected</h3>

            <div className='clientsList'>
              {
                clients.map((client)=>
                
                  (<Client key={client.socketId} name={client.name}/>))
                
              }
 
            </div>

          </div>
            <button className='btn copyBtn'>Copy ROOM ID</button>
            <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className='editorWrap'>
        <CodeArea/>

      </div>
    </div>
  )
}

export default Editor