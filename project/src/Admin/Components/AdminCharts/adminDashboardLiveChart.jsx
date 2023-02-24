

// import React from "react";
// import { Chart } from "react-google-charts";
// import { Divider, Box, Heading, useColorModeValue } from "@chakra-ui/react";

// export const data = [
//   ["Year", "Sales", "Expenses"],
//   ["2020", 1000, 400],
//   ["2021", 1170, 460],
//   ["2022", 660, 1120],
//   ["2023", 1030, 540],
// ];

// export const options = {
//   curveType: "function",
//   legend: { position: "bottom" },
// };
// const LineSales = ({ title }) => {
//   return (
//     <>
//       <Box
//         mt={"6"}
//         borderRadius="md"
//         shadow="md"
//         bg={useColorModeValue("white.300", "white.700")}
//         color={useColorModeValue("gray.300", "gray.700")}
//         border="1px solid #999"
//       >
//         <Heading p="6">{title}</Heading>
//         <Divider />
//         <Box py="4" color={"white"}>
//           <Chart
//             chartType="LineChart"
//             width="100%"
//             height="400px"
//             data={data}
//             options={options}
//           />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default LineSales;

import {Line} from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
}from "chart.js";
import { Box, Heading } from "@chakra-ui/react";


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const LinearScales = ()=>{
 const data = {
  labels: ["May 12","", "May 13","", "May 14","", "May 15","", "May 16","", "May 17","","May 19","", "May 20","","May 21",],
  datasets:[{
    data:[8,9,7.8,7.9,6,7,8,6,5,7.8,5,6,5.8,9.0,4.2,6],
    backgroundColor:"transparent",
    borderColor: "#f26c6d",
    pointBorderColor: "transparent",
    pointBorderWidth:4,
    tension:0.4
  }]
 };

 
const options = {
plugins:{
  legend: false
},
scales: {
  x:{
    grid:{
      display:false
    }
  },
  y:{
    min:2,
    max:10,
    ticks:{
      stepSize:2,
      callback:(value)=> value+ "k"
    },
    grid:{
      borderDash:[10]
    }
  }
}
};




return (
  <Box marginTop={"30px"} border={"1px solid blck"}>
     <Heading>Daily Activity Graph</Heading>
    <Line data = {data} options={options}></Line>
  </Box>
);
};
export default LinearScales