function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}

const result = add(5, 10); // Correct usage
console.log(result); // Output: 15

try {
  const result2 = add(5, '10'); // Incorrect usage
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers.
}

//Alternative approach using type guards
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function add2(a: any, b: any): number {
    if(!isNumber(a) || !isNumber(b)){
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

console.log(add2(5,10)); //15

try{
    console.log(add2(5, "10"));
}catch(e){
    console.error(e.message) // Both arguments must be numbers
}