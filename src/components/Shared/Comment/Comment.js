import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { BiComment } from "react-icons/bi";
import { UserInfo } from "../../../UserContext/AuthProvider";

const Comment = ({ post }) => {
  const { user } = useContext(UserInfo);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [re, setRe] = useState(false);

  const notify = (a) => toast.error(a);

  useEffect(() => {
    fetch(`http://localhost:5000/comments/${post?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [re]);

  const handleComments = (event) => {
    if (event.key === "Enter") {
      if (inputValue.trim().length === 0) {
        notify(`You can't comment empty`);
      } else {
        const commentsInfo = {
          email: user.email,
          comment: inputValue,
          postId: post._id,
        };

        fetch("http://localhost:5000/comments", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(commentsInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Comment done!");
            setRe(!re);
          });
      }
    }
  };

  return (
    <div className="like flex gap-1 items-center text-xl cursor-pointer">
      <button
        className="btn-default"
        type="submit"
        style={{ border: "none" }}
        onClick={() => setIsOpen(true)}
      >
        <span className="flex items-center">
          {" "}
          <BiComment /> Comment
        </span>
      </button>
      <div className={`modal p-5 ${isOpen ? "modal-open" : undefined}`}>
        <div className="modal-box relative h-fit overflow-auto">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </label>
          <h3 className="text-lg font-semibold">
            Total comments:{" "}
            <span style={{ color: "#1877F2" }}>{data?.length}</span>
          </h3>
          <div className="form-control">
            <div className="flex items-center">
              <div className="icon ml-2">
                <BiComment />
              </div>
              <div className="in w-full">
                <input
                  type="text"
                  placeholder="Your comments..."
                  className="input focus:outline-none w-full bg-base-200"
                  name="comments"
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleComments}
                />
              </div>
            </div>
          </div>
          {data?.map((comment, index) => {
            return (
              <div className="header flex gap-2 p-2" key={index}>
                <div className="img">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={comment.img} alt={comment.name} />
                    </div>
                  </div>
                </div>
                <div className="name flex items-center">
                  <span className="font-semibold">
                    {comment.name}
                    <br />
                    <span className="">{comment.comment}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
