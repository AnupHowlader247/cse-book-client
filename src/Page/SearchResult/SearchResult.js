import { useLocation } from "react-router-dom";


function SearchResult() {
    const location = useLocation()
    console.log(location)
  return (
    <div className='bg-slate-200'>
   {
        location.state?.map((post, index) => {
          return <div className=" bg-white drop-shadow-lg rounded-lg p-2 mt-5" key={index}>
            <div className="header flex gap-2 p-2">
              <div className="name flex items-center">
                <span className="font-semibold">{post.email}
                </span>
              </div>
            </div>
            <p className='font-semibold'>{post.text}</p>
            <div className="reaction flex gap-5 p-2 mt-2">
              {/* <Like post={post}/>
           <Comment post={post}/> */}
            </div>
            <hr />
          </div>
        })
      }
    </div>
  );
}

export default SearchResult;
