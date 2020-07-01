//immer usage

import { produce } from 'immer';

let book = { title : "Harry Potter" };

function publish(book) {
    produce(book, draftBook => {
        draftBook.isPublished = true;
    })
};

let newBook = publish(book);

console.log(book);
console.log(newBook);