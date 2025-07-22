import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

import TrafficLight from "../app";
const Home = () => {
	return (
		<div className="text-center">
            <h1 className="my-4"> semaforo</h1>
<TrafficLight />

			
		</div>
	);
};

export default Home;