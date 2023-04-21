import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-slate-200'>
    <RouterProvider router={Router} />
    <Toaster/>
    </div>
  );
}

export default App;
