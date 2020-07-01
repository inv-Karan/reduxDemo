// immutable usage

import { map } from 'immutable';

let book = Map({ title : "Harry Potter" });

function publish(book) {
    book.set("isPublished", true);
}

publish(book);

console.log(book);
console.log(book.get("title"));

console.log(book.toJS());