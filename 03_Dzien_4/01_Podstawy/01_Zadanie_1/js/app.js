import React, {Component} from "react";
import ReactDOM from "react-dom";

const SearchBox = () => {
    return (
        <form>
            <input type={"text"}/>
            <button type={"submit"}>Wyszukaj</button>
        </form>
    )
}

class SearchBox1 extends Component {
    render() {
        return (
            <form>
                <input type={"text"} name={"input"}/>
                <button type={"submit"}>Wyszukaj</button>
            </form>
        )
    }
}


ReactDOM.render(
    <div>
        <SearchBox/>
        <SearchBox1/>
    </div>
    ,
    document.getElementById("app")
);
