//Implemented Stack using two queues
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i=0;i<n-1;i++){
        this.q2.push(this.q1.shift())
    }
    let ans = this.q1.shift();
    let temp = this.q1;
    this.q1= this.q2;
    this.q2 =temp;
    return ans
};

MyStack.prototype.top = function() {
    let n= this.q1.length;
    for(let i=0;i<n-1;i++){
        this.q2.push(this.q1.shift());
    }
    let ans = this.q1.shift();
    this.q2.push(ans);
    let temp = this.q1;
    this.q1 =this.q2;
    this.q2 = temp;

    return ans
};

MyStack.prototype.empty = function() {
    return this.q1.length===0;
};

//Implement stacj using one queue
var MyStack = function() {
    this.q = [];
};

MyStack.prototype.push = function(x) {
    this.q.push(x)
};

MyStack.prototype.pop = function() {
    let n = this.q.length;
    for(let i=0;i<n-1;i++){
        this.q.push(this.q.shift())
    }
    let ans = this.q.shift();
    return ans
};

MyStack.prototype.top = function() {
    let n= this.q.length;
    for(let i=0;i<n-1;i++){
        this.q.push(this.q.shift());
    }
    let ans = this.q.shift();
    this.q.push(ans);
    return ans
};

MyStack.prototype.empty = function() {
    return this.q.length===0;
};