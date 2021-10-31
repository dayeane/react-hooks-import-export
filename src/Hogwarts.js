import React from "react";
import whoseHouse from "./houses/whoseHouse";
import { colors, gryffMascot } from "./houses/Gryffindor";
import * as GryffFunctions from "./houses/Gryffindor";
import { colors as houseColors, gryffMascot as mascot } from "./houses/Gryffindor";
import Hufflepuff  from "./houses/Hufflepuff";


console.log(colors);
console.log(houseColors);
console.log(GryffFunctions.colors);

gryffMascot();
GryffFunctions.gryffMascot();
mascot();


// function Hogwarts() {
//   whoseHouse(); // => "HAGRID'S HOUSE!"

//   return <h1>Welcome to Hogwarts!</h1>;
// }

// export default Hogwarts;

export default function Hogwarts() {
  return (
    <div>
      <Hufflepuff />
      <whoseHouse />
    </div>
  );
}

