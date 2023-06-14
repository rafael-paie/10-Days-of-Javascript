// Day 5: Arrow Functions
function modifyArray(nums) {
    const func = nums.map(function(num) {
        
        if (num % 2 == 0)
            {
                return 2*num;
            }
        else
            {
                return 3*num;
            }
    });
    return func;
}


// Day 5: Inheritance
Rectangle.prototype.area = function() {
    return(this.w*this.h);
};

class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.h = s;
        this.w = s;
    }
};


// Day 5: Template Literals
function sides(literals, ...expressions) {
    var area = expressions[0];
    var perimeter = expressions[1];
    
    var s1 = (perimeter + Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;
    //console.log("s1: " + s1);
    var s2 = (perimeter - Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;
    //console.log("s2: " + s2);
    var array = [s1, s2];
    array =  array.sort(function (a,b) {return a-b;});
    return array;
}