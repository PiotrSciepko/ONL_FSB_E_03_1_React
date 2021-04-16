import React from "react";

export default class LifeCyclesTester extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    componentDidMount() {
        console.log("komponent został zamontowany");
    }

    componentWillUnmount() {
        console.log("komponent odmontowywany");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("komponent zaktualizowany")
    }

    render() {
        console.log("renderowanie");
        return <></>
    }
}