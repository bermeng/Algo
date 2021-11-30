// 直接插入排序
function insertSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            swap(arr, j, j - 1);
        }
    }
}

// 折半插入排序
function insertSortWithBinarySearch(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        let cur = arr[i];
        let low = 0;
        let high = i - 1;

        // binary search
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] > cur) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        for (let j = i; j > high + 1 && arr[j] < arr[j - 1]; j--) {
            swap(arr, j, j - 1);
        }
    }
}

// 希尔排序
function shellSort(arr) {
    const len = arr.length;
    let h = len >>> 1; // h/2

    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                swap(arr, j, j - h);
            }
        }

        // h = h/2
        h >>>= 1;
    }
}

// helper func
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

// test case
const arr1 = [4, 6, 1, 2, 7, 9];
const arr2 = [6, 5, 4, 3, 2, 2, 2, 1, 1];
const arr3 = [10, 11, 12, 12, 13, 13, 14, 15, 15, 15];
const arr4 = [-1, -3, 1, 2, 0, 0, 4, 5];

const arr5 = [4, 6, 1, 2, 7, 9];
const arr6 = [6, 5, 4, 3, 2, 2, 2, 1, 1];
const arr7 = [10, 11, 12, 12, 13, 13, 14, 15, 15, 15];
const arr8 = [-1, -3, 1, 2, 0, 0, 4, 5];

const arr9 = [4, 6, 1, 2, 7, 9];
const arr10 = [6, 5, 4, 3, 2, 2, 2, 1, 1];
const arr11 = [10, 11, 12, 12, 13, 13, 14, 15, 15, 15];
const arr12 = [-1, -3, 1, 2, 0, 0, 4, 5];

insertSort(arr1);
insertSort(arr2);
insertSort(arr3);
insertSort(arr4);
console.log('insertSort arr1: ', arr1);
console.log('insertSort arr2: ', arr2);
console.log('insertSort arr3: ', arr3);
console.log('insertSort arr4: ', arr4);

console.log('-------------------------------');

insertSortWithBinarySearch(arr5);
insertSortWithBinarySearch(arr6);
insertSortWithBinarySearch(arr7);
insertSortWithBinarySearch(arr8);
console.log('insertSortWithBinarySearch arr5: ', arr5);
console.log('insertSortWithBinarySearch arr6: ', arr6);
console.log('insertSortWithBinarySearch arr7: ', arr7);
console.log('insertSortWithBinarySearch arr8: ', arr8);

console.log('-------------------------------');

shellSort(arr9);
shellSort(arr10);
shellSort(arr11);
shellSort(arr12);
console.log('shellSort arr9: ', arr9);
console.log('shellSort arr10: ', arr10);
console.log('shellSort arr11: ', arr11);
console.log('shellSort arr12: ', arr12);
