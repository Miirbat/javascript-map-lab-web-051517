const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null }, //
  { name: 'Barricade', alliance: null }, //
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null }, //
  { name: 'Megatron', alliance: null }, //
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

function uncoveringRobots(){
  return robots.map(function(robot){
    if (knownDecepticons.includes(robot.name)){
      return {name: robot.name, alliance: 'decepticon'}
    }

    return {name: robot.name, alliance: 'autobot'}
  })
}

const sortedRobots = uncoveringRobots()
// function uncoveringRobots(){
//   return robots.map(function(robot){
//     const isIncluded = knownDecepticons.includes(robot.name)
//         , { name } = robot
//         , alliance = isIncluded ? 'decepticon' : 'autobot';
//
//     return {name, alliance};
//   })
// }



const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];


  const coloredZebraStripes = zebraStripes.map((stripe, index) => {
    if (index % 2 === 0 ) {
      return {width: stripe.width, color: "black"}
    }
    return {width: stripe.width, color: "white"}
  })
