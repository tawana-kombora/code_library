/** 
 * This is a **CODE LIBRARY** where I keep code I've written to reduce
 * the amount of times I rewrite code certain pieces of code.
*/

//  Capitalize Function
export function capitalize(word) {
    let capitalized = (word.substring(0, 1).toUpperCase()) + (word.substring(1).toLowerCase());
    // console.log(capitalized) - console.log only for checking that it works
    return capitalized;
}
