import React, {Component} from "react";
import ReactDOM from "react-dom";
import SpeedClickGame from "./SpeedClickGame";
import SpeedClickGame1 from "./SpeedClickGame1";

ReactDOM.render(<>
        <SpeedClickGame time={2000}/>
        <SpeedClickGame1 time={2000}/>
    </>,
    document.getElementById("app")
);
