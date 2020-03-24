/* Array.prototype.filter - Exercise 3

* Write the CONTENTS of the `filterOnPrice` function
* ATTENTION PLEASE, this time it receives TWO arguments:
   1. The first is an array (as usual). It contains OBJECTS, each of which having
      two attributes: name and price
   2. The second is a MAXIMUM PRICE
* Your goal is to return an array, containing ONLY the products whose price isn't ABOVE
  the "maximum price" provided as 2nd argument

SMALL HINT:
* Contrary to the quest examples, and the other exercises, this one is difficult to
solve if you write the function you give to filter OUTSIDE filterOnPrice.
* Your best bet is to directly write an anonymous function inside filter's parentheses
(it may be an arrow function, but it doesn't have to)

const sample = 
      [
        { name: 'iPhone X', price: 1159 },
        { name: 'Xiaomi Mi A2', price: 209 },
        { name: 'Samsung Galaxy Note 9', price: 992 },
        { name: 'Huawei P20', price: 480 },
        { name: 'Huawei P20 Pro', price: 649 }
      ];

const maximumPrice = 500 ;


Expected OUTPUT for these sample arguments:
  [
    { name: 'Xiaomi Mi A2', price: 209 },
    { name: 'Huawei P20', price: 480 }
  ]
*/

function filterOnPrice(products, maxPrice) {
  var newArrey = [] ;
  var i = 0 ;
  products.map(phone => { 
    if(phone['price'] <= maxPrice){
      newArrey[i] = phone ;
      i++ ;
    }
  })
  return newArrey ;
}


// DON'T TOUCH THIS!
module.exports = filterOnPrice;
