// 第一种写法，target在区间[left, right]中寻找
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

// 第二种写法，target在区间[left, right)中寻找
function binarySearch2(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > target) {
            right = mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

/* test case */
let arr = [1, 3, 6, 7, 11, 20];

console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 7));
console.log(binarySearch(arr, 20));

console.log('----------------------------------------');

console.log(binarySearch2(arr, 1));
console.log(binarySearch2(arr, 7));
console.log(binarySearch2(arr, 20));