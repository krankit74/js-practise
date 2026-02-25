// Question: Remove Duplicates from Sorted Array
// # Example 1:

// # Input: nums = [1,1,2]
// # Output: 2, nums = [1,2,_]
// # Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// # It does not matter what you leave beyond the returned k (hence they are underscores).
// # Example 2:

// # Input: nums = [0,0,1,1,1,2,2,3,3,4]
// # Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// # Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// # It does not matter what you leave beyond the returned k (hence they are underscores).


/*let nums = [1,1,2]
let res = [];
let count;

for(let i=0; i<nums.length; i++){
    count=0;
    for(let j=i; i<nums.length; j++){
        if(nums[j] == nums[j+1])
            count++;
    }
    if(count > 0){
        res.push(arr[i])
    }
}
console.log(res)
*/

let arr= [0,1,1,1,2,2,3,3,4];

let ans=[];


ans[0]=arr[0];
let ind=1;
let n=arr.length;
for(let i=1;i<n;i++){
    if(arr[i]!=arr[i-1]){
        ans[ind]=arr[i];
        ind++;
    }
}

for(let i of ans){
    console.log(i);
}


// Question: Longest Common Prefix
// # Write a function to find the longest common prefix string amongst an array of strings.

// # If there is no common prefix, return an empty string "".



// # Example 1:

// # Input: strs = ["flower","flow","flight"]
// # Output: "fl"
