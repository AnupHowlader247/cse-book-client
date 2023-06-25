import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";

function Nav() {
  const { logout, user } = useContext(UserInfo);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      fetch(`http://localhost:5000/searchPost/${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
          navigate("/home/searchResult", { state: data });
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/photo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to={"/home"}>
            CSE-BOOK
          </Link>
        </div>
        <div>
          <Link
            to={"/home/profile"}
            className="btn btn-ghost normal-case text-xl"
          >
            Profile
          </Link>
          <Link
            to={"/home/type"}
            className="btn btn-ghost normal-case text-xl"
          >
            Type
          </Link>
          <Link
            to={"/home/batch"}
            className="btn btn-ghost normal-case text-xl"
          >
            Batch
          </Link>
          <Link
            to={"/home/messages"}
            className="btn btn-ghost normal-case text-xl"
          >
            Messages
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={data?.img} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
