import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";


function IndividualChat() {
    const location = useLocation()

    const {user} = useContext(UserInfo)
    const [data,setData] = useState([])
    const [re,setRe] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/individualChat/${location.state.to + '&' + location.state.sender}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    },[user, re])

    const handleForm = (e) => {
     e.preventDefault()
     const message = e.target.text.value;
     const info = {
        to: user.email === location.state.to ? location.state.sender: location.state.to ,
        sender:  user.email, 
        message : message
     }

     fetch('http://localhost:5000/storeMessages', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setRe(!re)
        e.target.reset()
      })
    }

  return (
    <div className=' w-11/12 mx-auto'>
        {
            data.map((info,index)=>{
                return <div key={index}>
              <p>{info.senderName}</p>
              <p>{info.message}</p>
                </div>
            })
        }
      <form onSubmit={handleForm}>
      <div className=" w-1/2 mx-auto my-2">
          <textarea className="textarea input-bordered w-full" placeholder="Type here..." name="text"></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Sent</button>
        </div>
      </form>
    </div>
  );
}

export default IndividualChat;
