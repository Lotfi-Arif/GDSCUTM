import logo from "../assets/icons/gdsc_logo.svg";

import Sidebar from "./Sidebar";
import Events from "../pages/Events";
import Teams from "../pages/Teams";
import Info from "../pages/Info";
import Projects from "../pages/Projects";
import { useState } from "react";

const Nav = () => {
  const [events, setEvents] = useState(false);
  const [info, setInfo] = useState(false);
  const [teams, setTeams] = useState(false);
  const [projects, setProjects] = useState(false);
 
  return (
    <div className="py-7">
      <div>
        {events ? <Events /> : null}
        {info ? <Info /> : null}
        {teams ? <Teams /> : null}
        {projects ? <Projects /> : null}
      </div>
      <nav className="fixed text-gray-600 drop-shadow-2xl inset-x-0 top-0 shadow-xl">
        <div className="max-w-auto mx-0 px-2 py-0 flex justify-between">
          <div className="logo and heading flex space-x-5 left-0 content-center">
            <img
              src={logo}
              alt="gdsc"
              className="logo h-14 py-3 px-2"
            />
            <div className="whitespace-nowrap py-3 text-xl font-bold">
              <h1>GDSC - UTM</h1>
            </div>
          </div>
          <Sidebar />
          <div className="hidden sm:flex">
            <ul className="flex justify-end space-x-5 mt-8 px-8">
              <li>
                <button
                  className=" focus:bg-red-400 hover:bg-red-400"
                  onClick={() =>
                    setEvents(!events)
                  }
                >
                  Events
                </button>
              </li>

              <li>
                <button
                  className=" focus:bg-red-400 hover:bg-red-400"
                  onClick={() => setInfo(!info)}
                >
                  Info
                </button>
              </li>
              <li>
                <button
                  className=" focus:bg-red-400 hover:bg-red-400"
                  onClick={() => setTeams(!teams)}
                >
                  Teams
                </button>
              </li>
              <li>
                <button
                  className=" focus:bg-red-400 hover:bg-red-400"
                  onClick={() =>
                    setProjects(!projects)
                  }
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
