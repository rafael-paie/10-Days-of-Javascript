// Day 1: Arithmetic Operators
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    return perimeter;
}

// Day 1: Functions
function factorial(n)
{
    if (n < 2)
        {
            return 1;
        }
    
    return n * factorial(n-1);
}

// Day 1: Let and Const
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = parseFloat(readLine());
    // Print the area of the circle:
    let area = PI * Math.pow(r,2);
    console.log(area);
    
    // Print the perimeter of the circle:
    var perimeter = 2 * PI * r;
    console.log(perimeter);
}


