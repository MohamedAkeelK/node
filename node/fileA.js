// const exportsFromFileB = require('./fileB')

// exportsFromFileB()
// console.log(exportsFromFileB)

//**** you can require twice to the the same as ^ */
// require('./fileB')
// require('./fileB') 




//************************* snippet 1/

// const exportsFromSnip1 = require('./snip1')
// console.log(exportsFromSnip1)

// require('./snip1')
// require('./snip1')



//************************** snippet 2 */

// const exportsFromSnip2 = require('./snip2')
// console.log(exportsFromSnip2)

// require('./snip2')
// console.log(require('./snip2'))




//**************************** snippet 3 */

// const exportsFromSnip3 = require('./snip3')
// console.log(exportsFromSnip3)

require('./snip3')
console.log(require('./snip3'))