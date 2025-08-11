import {React,use,useState} from 'react'
import { v4 as uuidV4 } from 'uuid';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    const joinRoom=(e)=>{
        if(!roomID || !name){
            toast.error('Room ID and Username is required')
            return
        }

        navigate(`/editor/${roomID}`,
            {
                state:{
                    name,
                }
            }
        )
    }

    const handleInputEnter =(e)=>{
        if(e.code=== 'Enter'){
            joinRoom()
        }
    }

    const [roomID,setRoomID]=useState('')
    const [name,setName]=useState('')

    const createNewRoom=(e) =>{

        e.preventDefault();
        const id=uuidV4();
        console.log(id);
        setRoomID(id)

    }

  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img src='/zofro.png' className="homePageLogo" alt='zofro logo'/>
            <h4 className='mainLabel'>paste the invitation code</h4>
            <div className='inputGroup'>
                <input type='text' className='inputBox'placeholder='roomID' onChange={(e)=> setRoomID(e.target.value)} value={roomID} onKeyUp={handleInputEnter}/>
                <input type='text' className='inputBox'placeholder='name' onChange={(e)=>setName(e.target.value)} value={name} onKeyUp={handleInputEnter}/>
                
                <button className='btn joinBtn' onClick={joinRoom}>Join</button>

                <span className='CreateInfo'>
                    If you dont have an invite code? &nbsp;
                    <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>
                </span>
            </div>
        </div>
         </div>
  )
}

export default Home