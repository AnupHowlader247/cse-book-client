import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../UserContext/AuthProvider";

const OwnPost = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(UserInfo);
  useEffect(() => {
    fetch(`http://localhost:5000/allOwnPost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <>
        {data?.map((post, index) => {
          return (
            <div
              className=" bg-white drop-shadow-lg rounded-lg p-2 mt-5"
              key={index}
            >
              <div className="header flex gap-2 p-2">
                <div className="name flex items-center">
                  <span className="font-semibold">{post.name}</span>
                </div>
              </div>
              <p className="font-semibold">{post.text}</p>
              <hr />
            </div>
          );
        })}
      </>
    </div>
  );
};

export default OwnPost;
