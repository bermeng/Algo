function quickSort(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[low];

    while (low < high) {
        while (low < high && arr[high] >= pivot) --high;
        arr[low] = arr[high];
        while (low < high && arr[low] <= pivot) ++low;
        arr[high] = arr[low];
    }

    arr[low] = pivot;

    return low;
}

// 非递归实现
function quickSort2(arr, low, high) {
    const tmp = [];
    tmp.push(high);
    tmp.push(low);

    let left, right;

    while (tmp.length > 0) {
        left = tmp.pop();
        right = tmp.pop();

        if (left < right) {
            const pivotIndex = partition(arr, left, right);

            if (pivotIndex > left) {
                tmp.push(pivotIndex - 1);
                tmp.push(left);
            }

            if (right > pivotIndex) {
                tmp.push(high);
                tmp.push(pivotIndex + 1);
            }
        }
    }
}

/* test case */

let arr = [2, 3, 6, 1, 7, 7, 8, 4];
let arr1 = [49, 38, 65, 97, 76, 13, 27, 49];

quickSort(arr, 0, arr.length - 1);
quickSort(arr1, 0, arr1.length - 1);

console.log('sorted arr with quickSort: ', arr);
console.log('sorted arr1 with quickSort: ', arr1);

console.log('---------------------------------------')

quickSort1(arr, 0, arr.length - 1);
quickSort1(arr1, 0, arr1.length - 1);

console.log('sorted arr with quickSort1: ', arr);
console.log('sorted arr1 with quickSort1: ', arr1);
