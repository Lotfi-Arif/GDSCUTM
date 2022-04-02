import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className=" relative flex sm:hidden mt-4 group" >
    <button className="space-y-2 ">
      <span className="block w-8 h-0.5 bg-gray-600"></span>
      <span className="block w-8 h-0.5 bg-gray-600"></span>
      <span className="block w-8 h-0.5 bg-gray-600"></span>
    </button>
    <div className='dropdown absolute top-6 right-0 bg-white text-gray-800 shadow-xl rounded-lg group-focus-within:scale-100 '>
    <button className='block px-4 py-1 hover:bg-yellow-600'>Events</button>
    <button className='block px-4 py-1 hover:bg-yellow-600'>Info</button>
    <button className='block px-4 py-1 hover:bg-yellow-600'>Teams</button>
    <button className='block px-4 py-1 hover:bg-yellow-600'>Projects</button>
    </div>
    </div>
    </div>
    
  );
};


export default Sidebar;
