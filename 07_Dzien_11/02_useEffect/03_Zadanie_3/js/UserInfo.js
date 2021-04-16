import React, {useEffect, useState} from 'react';

const UserInfo = () => {
    const [userName, setUserName] = useState({name: "Jan", surname: "Kowalski"});

    useEffect(() => setUserName({name: "John", surname: "Smith"}), []);

    return <p>{userName.name} {userName.surname}</p>;
};

export default UserInfo;