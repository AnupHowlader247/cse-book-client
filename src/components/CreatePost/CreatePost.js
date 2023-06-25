import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { UserInfo } from '../../UserContext/AuthProvider';

function CreatePost() {
  const notify = () => toast.success('Post success!');
  const {user} = useContext(UserInfo)

  const [ap,setAP] = useState(false)  
  const [wp,setWP] = useState(false)  
  const [t,setT] = useState(false)  
  const [fyp,setFyp] = useState(false)  
  const [others,setOthers] = useState(false)  

 
  const handleForm = (e) => {
    e.preventDefault();
    const topic = ap && 'Android Apps'|| wp && 'Web Project' || t && 'Thesis' || fyp && 'Final Year Project'  || others && 'Others';
    const text = e.target.text.value;
    const email = user.email;

    const info = {
      topic,
      text,
      email
    }

    fetch('http://localhost:5000/post', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
       notify();
       e.target.reset();
      });
  }

  const handleAP = ()=> {
    setAP(true)
    setWP(false)
    setT(false)
    setFyp(false)
  }
  const handleWP = ()=> {
    setAP(false)
    setWP(true)
    setT(false)
    setFyp(false)
  }
  const handleT = ()=> {
    setAP(false)
    setWP(false)
    setT(true)
    setFyp(false)
  }
  const handlefyp = ()=> {
    setAP(false)
    setWP(false)
    setT(false)
    setFyp(true)
  }

  const handleOthers = ()=> {
    setAP(false)
    setWP(false)
    setT(false)
    setFyp(false)
    setOthers(true)
  }

  return (
    <div className='mx-auto w-full md:w-1/2 border-solid border-2  p-3 bg-base-100 rounded my-3'>
      <form onSubmit={handleForm}>
      <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Android Apps</span>
                      <input type="checkbox" checked={ap && !wp && !t && !fyp ? 'checked' : undefined} className="checkbox" onClick={handleAP}/>
                      <span className="label-text">Web Project</span>
                      <input type="checkbox" checked={!ap && wp && !t && !fyp ? 'checked' : undefined}  className="checkbox" onClick={handleWP}/>
                      <span className="label-text">Thesis</span>
                      <input type="checkbox" checked={!ap && !wp && t && !fyp ? 'checked' : undefined}  className="checkbox" onClick={handleT}/>
                      <span className="label-text">Final Year Project</span>
                      <input type="checkbox" checked={!ap && !wp && !t && fyp ? 'checked' : undefined}  className="checkbox" onClick={handlefyp}/>
                      <span className="label-text">Others</span>
                      <input type="checkbox" checked={!ap && !wp && !t && !fyp && others ? 'checked' : undefined}  className="checkbox" onClick={handleOthers}/>
                    </label>
                  </div>

        <div className=" w-1/2 mx-auto my-2">
          <textarea className="textarea input-bordered w-full" placeholder="Type here..." name="text"></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
