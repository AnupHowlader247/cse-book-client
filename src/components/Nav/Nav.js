import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";

function Nav() {
  const {logout} = useContext(UserInfo)
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()
 const handleSearch = (event) => {
  if (event.key === 'Enter') {
    fetch(`http://localhost:5000/searchPost/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        navigate('/home/searchResult', {state:data} )
      })
   
   }
 
 }
 
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to={'/home'}>CSE-BOOK</Link>
        </div>
        <div>
        <Link to={'/home/profile'} className="btn btn-ghost normal-case text-xl">Profile</Link>
        <Link to={'/home/notifications'} className="btn btn-ghost normal-case text-xl">Notifications</Link>
        <Link to={'/home/messages'} className="btn btn-ghost normal-case text-xl">Messages</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleSearch}/>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://st.depositphotos.com/2218212/2938/i/950/depositphotos_29387653-stock-photo-facebook-profile.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><a onClick={logout}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
