import React, {useState} from "react";
import FakeAPI from "./data/fakeAPI"

const AccountData = () => {
    const [fakeData, setFakeData] = useState(false);
    FakeAPI.then(data => setFakeData(data));

    return fakeData && <table>
        <tbody>{fakeData.map((row, index) => <tr key={index}>
            <td style={{borderStyle: "solid", padding: "5px"}}>{row.day}</td>
            <td style={{borderStyle: "solid", padding: "5px", textAlign: "right"}}>{row.balance}</td>
            <td style={{borderStyle: "solid", padding: "5px", textAlign: "right"}}>{row.change}</td>
        </tr>)}</tbody>
    </table>
}

export default AccountData;