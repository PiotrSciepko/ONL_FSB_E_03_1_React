import React, {useEffect, useState} from 'react';

const BookInfo = ({isbn}) => {
    const [title, setTitle] = useState();

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(data => data.json())
            .then(book => setTitle(book.items[0].volumeInfo.title))
    }, []);

    return title ? <h1>{title}</h1> : "Czekam na dane...";

};

export default BookInfo;