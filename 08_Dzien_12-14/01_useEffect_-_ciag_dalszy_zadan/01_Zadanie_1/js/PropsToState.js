import React, {useEffect, useState} from "react";
import ShowInfo from "./ShowInfo";

const PropsToState = (props) => {
    const [text, setText] = useState(props.text);

    useEffect(() => {
            const interval = setInterval(() => setText(prev => prev + "."), 1000);
            return () => clearInterval(interval);
        }, []
    )

    return <ShowInfo info={text}/>;
}

export default PropsToState;