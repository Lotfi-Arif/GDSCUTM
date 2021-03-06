import logo from "../assets/icons/gdsc_logo.svg";
import {
  useSpring,
  animated,
} from "react-spring";
const Landing = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: -300 },
    to: { x: 300 },
    config:{ duration:3000}
  })
  const google = useSpring({
    loop: { reverse: true },
    from: { color: 'red'},
    to: { color:'blue' },
    //config:{ duration:5000}
    delay: 5000
  })
  return (
    <main>
      <div className="container page absolute z-0 top-1/4 bottom-0 left-1/2 py-8 max-h-full max-w-6xl transform -translate-x-1/2 overflow-auto m-auto group ">
        <div className="info grid justify-items-center">
          <animated.div style = {styles}>
            <img
              src={logo}
              class="p-8 scale-120"
              alt="..."
              style={{styles}}
            />
          </animated.div>
          <h1 class="text-6xl font-bold">
            <animated.span style={google}>
              Google
            </animated.span>{" "}
            <span className="text-red-600">
              Developers
            </span>{" "}
            <span className="text-yellow-300">
              Student{" "}
            </span>
            <span class="text-green-700">
              Club
            </span>
          </h1>
          <div></div>
          <p class="px-8 py-8">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At, hic explicabo,
            voluptatibus tempore similique
            recusandae quod quos quibusdam quidem
            culpa accusantium dicta ducimus fugiat
            deleniti ex eveniet ad commodi quasi!
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At, hic explicabo,
            voluptatibus tempore similique
            recusandae quod quos quibusdam quidem
            culpa accusantium dicta ducimus fugiat
            deleniti ex eveniet ad commodi quasi!
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At, hic explicabo,
            voluptatibus tempore similique
            recusandae quod quos quibusdam quidem
            culpa accusantium dicta ducimus fugiat
            deleniti ex eveniet ad commodi quasi!
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <div className="invisible info grid justify-items-center py-10 group-hover:visible">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 scale-150"
            >
              Join us Today
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
