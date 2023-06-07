import { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../UserContext/AuthProvider";
import { Link } from "react-router-dom";

function Messages() {
  const { user } = useContext(UserInfo);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allchatUsers/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [user]);
  console.log(data);
  return (
    <div className="">
      {data.map((info, index) => {
        return (
          <div className="border" key={index}>
            {user.email === info.to ? (
              <Link to={"/home/individual"} state={info}>
                {info.sender}
              </Link>
            ) : (
              <Link to={"/home/individual"} state={info}>
                {info.to}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
