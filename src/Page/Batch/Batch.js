import { Link } from "react-router-dom";


function Batch() {
 

   
    return (
      <div>
        <div className="my-3">
       
            Batch-10
      
          <Link
            to={"/home/batchPost/"}
            className="btn btn-ghost normal-case text-xl"
            state={{batch:'Batch-10'}}
          >
            <button className="btn btn-primary">
                    Visit
                  </button>
          </Link>


        
        </div>

        <div className="my-3">
       
            Batch-11
      
          <Link
            to={"/home/batchPost/"}
            className="btn btn-ghost normal-case text-xl"
            state={{batch:'Batch-11'}}
          >
            <button className="btn btn-primary">
                    Visit
                  </button>
          </Link>


        
        </div>

        <div className="my-3">
       
            Batch-12
      
          <Link
            to={"/home/batchPost/"}
            className="btn btn-ghost normal-case text-xl"
            state={{batch:'Batch-12'}}
          >
            <button className="btn btn-primary">
                    Visit
                  </button>
          </Link>


        
        </div>

        <div className="my-3">
       
            Batch-13
      
          <Link
            to={"/home/batchPost/"}
            className="btn btn-ghost normal-case text-xl"
            state={{batch:'Batch-13'}}
          >
            <button className="btn btn-primary">
                    Visit
                  </button>
          </Link>


        
        </div>



    
         
      </div>
    );
  }
  
  export default Batch;
  