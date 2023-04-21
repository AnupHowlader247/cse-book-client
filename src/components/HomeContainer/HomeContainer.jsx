import CreatePost from '../CreatePost/CreatePost';
import PostDisplay from '../PostDisplay/PostDisplay';



function HomeContainer() {
    return (
      <div className='bg-slate-200'>
     <CreatePost></CreatePost>
    <PostDisplay></PostDisplay>
      </div>
    );
  }
  
  export default HomeContainer;
  