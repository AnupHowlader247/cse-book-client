import React, { useContext, useEffect, useState } from 'react';
import { UserInfo } from '../../UserContext/AuthProvider';
import { useNavigate } from 'react-router-dom';
// import Like from '../Like/Like'
// import Comment from '../Comment/Comment'

const PostDisplay = () => {
  const [data, setData] = useState([])
  const [email, setEmail] = useState('')
  const { user } = useContext(UserInfo)
  useEffect(() => {
    fetch('http://localhost:5000/allPost')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
  }, [])

  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()
 const handleSearch = (event) => {
  if (event.key === 'Enter') {
    const info = {
     to: email,
     sender: user.email,
     message:inputValue
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
        navigate('/home/messages')
      })
   
   }
 
 }
  return (
    <>
      {
        data?.map((post, index) => {
          return <div className=" bg-white drop-shadow-lg rounded-lg p-2 mt-5" key={index}>
            <div className="header flex gap-2 p-2">
              <div className="name flex items-center">
                <span className="font-semibold">{post.email}
                  {
                    post.email != user.email ? <label htmlFor="my-modal-3" className="btn" onClick={()=>setEmail(post.email)}>Message</label> : undefined
                  }
                </span>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <textarea className="textarea textarea-success w-1/2" placeholder="Message" onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleSearch}></textarea>
                  </div>
                </div>
              </div>
            </div>
            <p className='font-semibold'>{post.text}</p>
            <div className="reaction flex gap-5 p-2 mt-2">
              {/* <Like post={post}/>
           <Comment post={post}/> */}
            </div>
            <hr />
          </div>
        })
      }
    </>
  );
};

export default PostDisplay;