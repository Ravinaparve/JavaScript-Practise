var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (nums[mid] == target) return true;

        if (nums[l] == nums[mid] && nums[mid] == nums[r]) { // only this condition is stoping us from identifying the sorted half . so wheneever we identify this conditon we can trim down our serach space. (eg : [1,0,1,1,1]; x=0; will return false when this condition is not provided)
            l++;
            r--;
            continue; // continue triming down while l=mid=r
        }
        // if left sorted
        if (nums[l] < nums[mid]) {
            if (nums[l] <= target && target <= nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        else if (nums[l] > nums[mid]) {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return false;
};

let nums = [1, 0, 1, 1, 1], target = 0
let res = search(nums, target);
console.log(res);
