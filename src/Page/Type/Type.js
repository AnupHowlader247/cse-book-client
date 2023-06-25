import { Link } from "react-router-dom";


function Type() {
 

  return (
    <div>
   <div className="my-3">
       
      Android Apps
 
     <Link
       to={"/home/typePost/"}
       className="btn btn-ghost normal-case text-xl"
       state={{batch:'Android Apps'}}
     >
       <button className="btn btn-primary">
               Visit
             </button>
     </Link>


   
   </div>

   <div className="my-3">
  
     Web Project
 
     <Link
       to={"/home/typePost/"}
       className="btn btn-ghost normal-case text-xl"
       state={{batch:'Web Project'}}
     >
       <button className="btn btn-primary">
               Visit
             </button>
     </Link>


   
   </div>

   <div className="my-3">
  
      Thesis
 
     <Link
       to={"/home/typePost/"}
       className="btn btn-ghost normal-case text-xl"
       state={{batch:'Thesis'}}
     >
       <button className="btn btn-primary">
               Visit
             </button>
     </Link>


   
   </div>

   <div className="my-3">
  
      Final Year Project
 
     <Link
       to={"/home/typePost/"}
       className="btn btn-ghost normal-case text-xl"
       state={{batch:'Final Year Project'}}
     >
       <button className="btn btn-primary">
               Visit
             </button>
     </Link>


   
   </div>

    </div>
  );
}

export default Type;
