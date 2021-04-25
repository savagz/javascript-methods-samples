/**
 * Reduce 
 * Initial = 5
 * 
 * result = (((5 * 2) + 1) * 3) + 1 = 34
 */
const initialvalue = 5;

const sum = (num) => num + 1 ;
const double = (num) => num * 2 ;
const triple = (num) => num * 3 ;

const _pipe = (f, g) => ( ...args ) => g(f( ...args ));
const pipe = ( ...fns ) => fns.reduce(_pipe);

const functions_mixed = pipe(double, sum, triple, sum);

const result = functions_mixed(initialvalue);

console.log(result);