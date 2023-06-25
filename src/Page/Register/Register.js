import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";
import { useContext, useState } from "react";

function Register() {
  const navigate = useNavigate();
  const { createUser } = useContext(UserInfo);
  let photoUrl;
  const [batch10,setBatch10] = useState(false)  
  const [batch11,setBatch11] = useState(false)  
  const [batch12,setBatch12] = useState(false)  
  const [batch13,setBatch13] = useState(false)  

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const batch = batch10 && 'Batch-10'|| batch11 && 'Batch-11' || batch12 && 'Batch-12' || batch13 && 'Batch-13';
    const email = e.target.email.value;
    const password = e.target.password.value;
    const img = e.target.photo.files[0];
    const imgbb_key = process.env.REACT_APP_imgbb_key;

    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        photoUrl = data.data.display_url;
      })
      .then(() => {
        createUser(email, password).then((userCredential) => {
          const info = {
            name,
            batch,
            email,
            password,
            img: photoUrl,
          };

          fetch("http://localhost:5000/storeUser", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((data) => navigate("/home"));
        });
      });
  };

  const handleBatch10 = ()=> {
    setBatch10(true)
    setBatch11(false)
    setBatch12(false)
    setBatch13(false)
  }
  const handleBatch11 = ()=> {
    setBatch10(false)
    setBatch11(true)
    setBatch12(false)
    setBatch13(false)
  }
  const handleBatch12 = ()=> {
    setBatch10(false)
    setBatch11(false)
    setBatch12(true)
    setBatch13(false)
  }
  const handleBatch13 = ()=> {
    setBatch10(false)
    setBatch11(false)
    setBatch12(false)
    setBatch13(true)
  }
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Description</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Batch-10</span>
                      <input type="checkbox" checked={batch10 && !batch11 && !batch12 && !batch13 ? 'checked' : undefined} className="checkbox" onClick={handleBatch10}/>
                      <span className="label-text">Batch-11</span>
                      <input type="checkbox" checked={!batch10 && batch11 && !batch12 && !batch13 ? 'checked' : undefined}  className="checkbox" onClick={handleBatch11}/>
                      <span className="label-text">Batch-12</span>
                      <input type="checkbox" checked={!batch10 && !batch11 && batch12 && !batch13 ? 'checked' : undefined}  className="checkbox" onClick={handleBatch12}/>
                      <span className="label-text">Batch-13</span>
                      <input type="checkbox" checked={!batch10 && !batch11 && !batch12 && batch13 ? 'checked' : undefined}  className="checkbox" onClick={handleBatch13}/>
                    </label>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Photo</span>
                  </label>
                  <input
                    type="file"
                    name="photo"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
                <div className="form-control p-6">
                  <p>
                    Already have an account?{" "}
                    <Link to={"/"} className="text-info">
                      {" "}
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
