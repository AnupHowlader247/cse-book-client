
function CreatePost() {
  return (
    <div className='mx-auto w-full md:w-1/2 border-solid border-2  p-3 bg-base-100 rounded my-3'>
      <form>
        <div className=" w-1/2 mx-auto">
          <input type="text" placeholder="Topic name" className="input input-bordered w-full" />
        </div>
        <div className=" w-1/2 mx-auto my-2">
          <textarea className="textarea input-bordered w-full" placeholder="Type here..."></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
