import { BeakerIcon } from '@heroicons/react/solid'
import React from 'react'
import {
  useSpring,
  animated,
} from "react-spring";

const Background = () => {
  const element1 = useSpring({
    from: {rotateZ: 0, x:550 ,y:60},
      
    to: async next => {
      while(1){
      
      await next({rotateZ: 180, x:550, y:375, backgroundColor: 'blue', config:{duration:2450}})
      await next({rotateZ: 0, x:550, y:60, backgroundColor: 'yellow'})

      //  
      
      
      
    }},
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
    from: {rotateX: 0, x:1200,y:75 },
    to: {rotateX: 180, x:1200, y:275 },
    config:{duration:2000}
  })

  return (
    <div>
    
    <animated.svg style={element1} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
</animated.svg>
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
