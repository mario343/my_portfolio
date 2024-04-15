"use client";
import { Box, keyframes } from "@chakra-ui/react";

const animationFrame = keyframes`  
  from {background-position: 0% 0%;}   
  to {background-position: 100% 0%; } 
`;
const animation1 = `${animationFrame} infinite 360s linear`;

const clipPathPolygon = `
  0% 5%, 1.25% 0%, 2.5% 5%, 
  3.75% 0%, 5% 5%, 6.25% 0%, 
  7.5% 5%, 8.75% 0%, 10% 5%, 
  11.25% 0%, 12.5% 5%, 13.75% 0%, 
  15% 5%, 16.25% 0%, 17.5% 5%, 
  18.75% 0%, 20% 5%, 21.25% 0%, 
  22.5% 5%, 23.75% 0%, 25% 5%, 
  26.25% 0%, 27.5% 5%, 28.75% 0%, 
  30% 5%, 31.25% 0%, 32.5% 5%, 
  33.75% 0%, 35% 5%, 36.25% 0%, 
  37.5% 5%, 38.75% 0%, 40% 5%, 
  41.25% 0%, 42.5% 5%, 43.75% 0%, 
  45% 5%, 46.25% 0%, 47.5% 5%, 
  48.75% 0%, 50% 5%, 51.25% 0%, 
  52.5% 5%, 53.75% 0%, 55% 5%, 
  56.25% 0%, 57.5% 5%, 58.75% 0%, 
  60% 5%, 61.25% 0%, 62.5% 5%, 
  63.75% 0%, 65% 5%, 66.25% 0%, 
  67.5% 5%, 68.75% 0%, 70% 5%, 
  71.25% 0%, 72.5% 5%, 73.75% 0%, 
  75% 5%, 76.25% 0%, 77.5% 5%, 
  78.75% 0%, 80% 5%, 81.25% 0%, 
  82.5% 5%, 83.75% 0%, 85% 5%, 
  86.25% 0%, 87.5% 5%, 88.75% 0%, 
  90% 5%, 91.25% 0%, 92.5% 5%, 
  93.75% 0%, 95% 5%, 96.25% 0%, 
  97.5% 5%, 98.75% 0%, 100% 5%, 
  100% 100%, 0% 100%
`;

export default function Home() {
  return (
    <Box id="app" height="100vh" overflow="hidden" position="relative">
      <Box
        background="radial-gradient(rgb(249, 181, 51), rgb(215, 147, 23))"
        height="100%"
        overflow="hidden"
        position="relative"
      >
        <Box
          backgroundImage="Star+Pattern+3.svg"
          backgroundSize="10%"
          position="absolute"
          left="50%"
          top="0px"
          transform="translate(-50%, 0%)"
          zIndex="1"
          height="100%"
          width="100%"
          minWidth="1200px"
          opacity="0.10"
          animation={animation1}
          willChange="background-position"
        />
        <Box
          background="radial-gradient(circle, transparent 75%, rgb(215, 147, 23))"
          position="absolute"
          left="0px"
          top="0px"
          // width="100%"
          // height="100%"
          opacity="0.9"
          zIndex="2"
        />
        <Box
          position="absolute"
          zIndex="3"
          left="50%"
          bottom="0px"
          transform="translate(-50%, 0%)"
          height="28vh"
          minH="240px"
          width="100%"
          minWidth="2000px"
          bgColor="rgb(230, 230, 230)"
          clipPath={`polygon(${clipPathPolygon})`}
        >
          <Box
            height="100%"
            width="100%"
            backgroundSize="18px 18px"
            backgroundImage="linear-gradient(-45deg, rgb(230, 230, 230) 25%, rgb(240, 240, 240) 25%, rgb(240, 240, 240) 50%, rgb(230, 230, 230) 50%, rgb(230, 230, 230) 75%, rgb(240, 240, 240) 75%, rgb(240, 240, 240) 100%)"
            boxShadow="inset 0rem 0.5rem 2rem 0.25rem rgba(0, 0, 0, 0.4)"
            animation={animation1}
          />
        </Box>
      </Box>
    </Box>
  );
}
