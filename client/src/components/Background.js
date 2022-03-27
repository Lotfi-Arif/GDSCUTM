import React from 'react'
import {
  useSpring,
  animated,
} from "react-spring";

const Background = () => {
  const element1 = useSpring({
    loop: true,
    from: {rotateZ: 0, x:500,y:75 },
    to: {rotateZ: 180, x:500, y:275 },
    config:{duration:2000}
  })
  const element2 = useSpring({
    loop: true,
    from: {rotateZ: 0, x:800,y:75 },
    to: {rotateZ: 180, x:800, y:275 },
    config:{duration:2000},
    trail: 2000
  })
  const element3 = useSpring({
    loop: true,
    from: {rotateZ: 0, x:1000,y:75 },
    to: {rotateZ: 180, x:1000, y:275 },
    config:{duration:2000}
  })
  const element4 = useSpring({
    loop: true,
    from: {rotateZ: 0, x:1200,y:75 },
    to: {rotateZ: 180, x:1200, y:275 },
    config:{duration:2000}
  })

  return (
    <div>
    <animated.div
    style={{
      width: 80,
      height: 80,
      backgroundColor: '#46e891',
      borderRadius: 16,
      ...element1,
    }}
  />
  <animated.div
    style={{
      width: 80,
      height: 80,
      backgroundColor: '#46e891',
      borderRadius: 16,
      ...element2,
    }}
  />
  <animated.div
    style={{
      width: 80,
      height: 80,
      backgroundColor: '#46e891',
      borderRadius: 16,
      ...element3,
    }}
  />
  <animated.div
    style={{
      width: 80,
      height: 80,
      backgroundColor: '#46e891',
      borderRadius: 16,
      ...element4,
    }}
  />
  </div>
     
      
      )
    }

export default Background
