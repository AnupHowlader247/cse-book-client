import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useContext } from "react";
import { UserInfo } from "../../UserContext/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const {setUser} = useContext(UserInfo)
  const notify = () => toast.error('Something wrong!');

  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const info = {
      email,
      password
    }

    fetch('http://localhost:5000/loginUser', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          setUser(data.data)
        navigate('/home')
        }
        else{
          notify();
        }
      });
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Description</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" name="email"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" name="password"/>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Login</button>
              </div>
            </div>
            </form>

            <div className="form-control p-6 -mt-10">
              <p>
                Don't have an account? <Link to={'/register'} className="text-info"> Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
