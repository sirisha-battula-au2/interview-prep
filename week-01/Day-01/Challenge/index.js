//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

var twoSum = function (nums, target) {
    var result = [], ans =[];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
                ans.push(result);
            }
        }
    }
    return ans;
 }
 console.log(twoSum([2, 7, 11, 4, 5, 15], 9));