import logo from "../assets/icons/gdsc_logo.svg";
const Info = () => {
  return (
    <div className="bg-white z-10 border-2 container page absolute top-1/4 bottom-0 left-1/2 py-8 px-4 max-h-full max-w-6xl transform -translate-x-1/2 overflow-auto shadow-2xl">
      <div className="px-4 py-2">
        <h1 className="px-4 py-2 text-5xl">Leader</h1>
        <div className="flex justify-between">
  <div className="flex w-6/12 sm:w-4/12 px-4 py-6">
    <img src={logo} alt="..." className="shadow rounded-full max-w-full h-auto align-left border-none" />
  </div>
  <div className="flex  w-6/12  sm:w-4/12 px-4 py-6">
    <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem officiis, magnam porro earum similique sequi autem quisquam exercitationem deserunt provident modi fugiat. Libero atque nihil distinctio, error reprehenderit numquam.
    Amet iste veniam id, molestiae deleniti repellat. Sequi commodi facere nisi illum, tempora saepe, error quibusdam, minima neque tempore assumenda nam corrupti necessitatibus numquam odio recusandae ducimus aspernatur ipsa sunt?</p1>
  </div>
</div>
      
    </div>
    <div className="px-4 py-2">
        <h1 className="px-4 py-2 text-5xl">Vice-Leader</h1>
        <div className="flex justify-between">
  <div className="flex w-6/12 sm:w-4/12 px-4 py-6">
    <img src={logo} alt="..." className="shadow rounded-full max-w-full h-auto align-left border-none" />
  </div>
  <div className="flex  w-6/12  sm:w-4/12 px-4 py-6">
    <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem officiis, magnam porro earum similique sequi autem quisquam exercitationem deserunt provident modi fugiat. Libero atque nihil distinctio, error reprehenderit numquam.
    Amet iste veniam id, molestiae deleniti repellat. Sequi commodi facere nisi illum, tempora saepe, error quibusdam, minima neque tempore assumenda nam corrupti necessitatibus numquam odio recusandae ducimus aspernatur ipsa sunt?</p1>
  </div>
</div>
      
    </div>
    <div className="px-4 py-2">
        <h1 className="px-4 py-2 text-5xl">Team-Leaders</h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded overflow-hidden shadow-lg hover:scale-110 transition-all duration-200">
     
     <img class="w-full" src={logo} alt="Mountain"/>
     <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">#</div>
       <p class="text-gray-700 text-base">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
       </p>
     </div>
     </div>
     <div class="rounded overflow-hidden shadow-lg hover:scale-110 transition-all duration-200">
     
     <img class="w-full" src={logo} alt="Mountain"/>
     <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">#</div>
       <p class="text-gray-700 text-base">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
       </p>
     </div>
     </div>
     <div class="rounded overflow-hidden shadow-lg hover:scale-110 transition-all duration-200">
     
     <img class="w-full" src={logo} alt="Mountain"/>
     <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">#</div>
       <p class="text-gray-700 text-base">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
       </p>
     </div>
     </div>
 
</div>


      
    </div>
    
    
    </div>
  )
}

export default Info
