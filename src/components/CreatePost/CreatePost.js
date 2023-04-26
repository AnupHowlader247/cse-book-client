import { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserInfo } from '../../UserContext/AuthProvider';

function CreatePost() {
  const notify = () => toast.success('Post success!');
  const {user} = useContext(UserInfo)
 
  const handleForm = (e) => {
    e.preventDefault();
    const topic = e.target.topic.value;
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
  return (
    <div className='mx-auto w-full md:w-1/2 border-solid border-2  p-3 bg-base-100 rounded my-3'>
      <form onSubmit={handleForm}>
        <div className=" w-1/2 mx-auto">
          <input type="text" placeholder="Topic name" className="input input-bordered w-full" name="topic"/>
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
