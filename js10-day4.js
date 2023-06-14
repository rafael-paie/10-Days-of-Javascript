// Day 4: Classes
class Polygon {
    constructor(heights) 
    {
        var polygon_perimeter = 0;
        for (var index in heights)
            {
                polygon_perimeter += heights[index];
            }
        
        this.my_perimeter = polygon_perimeter;
    }
    
     perimeter() 
    {
        return this.my_perimeter;
    }
    
}


// Day 4: Count Objects
function getCount(objects) {
    var count = 0;
    for (var index in objects)
        {
            if (objects[index].x == objects[index].y)
                {
                    count++;
                }
        }
    return count;
}


// Day 4: Create a Retangle Object
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a+b);
    this.area = a * b;
}