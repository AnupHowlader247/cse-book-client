import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";
import { useContext } from "react";

function Register() {
  const navigate = useNavigate();
  const { createUser } = useContext(UserInfo);
  let photoUrl;
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const id = e.target.id.value;
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
            id,
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
                  <label className="label">
                    <span className="label-text">Id</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Id"
                    className="input input-bordered"
                    name="id"
                    required
                  />
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
