function calculate_area(radius){
    return 3.14 * radius * radius;
}

function calculate_perimeter(radius){
    return 2 * 3.14 * radius;
}

module.exports=calculate_area;
module.exports=calculate_perimeter;

const fs = require('fs');
console.log(calculate_area(2))
