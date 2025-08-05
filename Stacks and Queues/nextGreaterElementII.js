//Method 1 - doubling to removw circular array
var nextGreaterElements = function(nums) {
    let arr =[...nums, ...nums];
    let n=arr.length;
    let ans=Array(n).fill(-1);
    let stack=[];
    stack.push(arr[n-1]);
    for(let i=n-2;i>=0;i--){        
        while(stack.length){
            let top =stack[stack.length-1];
            if(arr[i]>=top){
                stack.pop()
            }else{
                ans[i]=top;
                break;
            }
        }
        stack.push(arr[i])
    }
    return ans.slice(0,n/2)
};
//Method 2 - without doubling the array
var nextGreaterElements = function(nums) {
    
    let n=nums.length;
    let ans=Array(n).fill(-1);
    let stack=[];
    stack.push(nums[n-1]);
    for(let i=(2*n)-2;i>=0;i--){        
        while(stack.length){
            let top =stack[stack.length-1];
            if(nums[i%n]>=top){
                stack.pop()
            }else{
                ans[i%n]=top;
                break;
            }
        }
        stack.push(nums[i%n])
    }
    return ans.slice(0,n)
};