function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let isSwap = false;

        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwap = true;
            }
        }

        if (!isSwap) {
            break;
        }
    }

    return arr;
}

/* test case */

const arr1 = [6, 5, 4, 3, 2, 1];
const arr2 = [1, 2, 2, 4, 1, 6, 5];

console.log('sorted arr1: ', bubbleSort(arr1));
console.log('sorted arr2: ', bubbleSort(arr2));
