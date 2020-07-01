// lodash usage

import { compose, pipe } from "lodash/fp"; //A JavaScript utility library delivering consistency, modularity, performance, & extras

const transform = compose(wrapInDiv, wrapInDiv1, toLowerCase, trim); /*used lodash higher order function for other functions' reference passing*/
console.log(transform(input)); /*better execution of result*/

const transform1 = pipe(trim, toLowerCase, wrapInDiv, wrapInDiv1); /*used lodash higher order function for other functions' reference passing with order of those functions' execution*/
console.log(transform1(input)); /*better execution of result1*/