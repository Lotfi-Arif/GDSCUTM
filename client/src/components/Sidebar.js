import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div class=" relative flex sm:hidden mt-4 group" >
    <button class="space-y-2 ">
      <span class="block w-8 h-0.5 bg-gray-600"></span>
      <span class="block w-8 h-0.5 bg-gray-600"></span>
      <span class="block w-8 h-0.5 bg-gray-600"></span>
    </button>
    <div class='dropdown absolute top-6 right-0 bg-white text-gray-800 shadow-xl rounded-lg group-focus-within:scale-100 '>
    <button class='block px-4 py-1 hover:bg-yellow-600'>Events</button>
    <button class='block px-4 py-1 hover:bg-yellow-600'>Info</button>
    <button class='block px-4 py-1 hover:bg-yellow-600'>Teams</button>
    <button class='block px-4 py-1 hover:bg-yellow-600'>Projects</button>
    </div>
    </div>
    </div>
    
  );
};


export default Sidebar;
