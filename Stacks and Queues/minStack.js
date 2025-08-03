//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

var MinStack = function() {
    this.stack=[]
};

MinStack.prototype.push = function(val) {
    if(this.stack.length ===0){
        this.stack.push([val,val])
    }else{
        let topElement = this.stack[this.stack.length - 1];
        let minVal = Math.min(val,topElement[1])
        this.stack.push([val,minVal])
    }
};

MinStack.prototype.pop = function() {
    this.stack.pop()
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0]
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1]
};
