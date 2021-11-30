function selectionSort(arr) {
    const len = arr.length;
    let i, j, min;

    for (i = 0; i < len - 1; i++) {
        min = i;

        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}

// test case
const arr = [4, 6, 1, 2, 7, 9];
selectionSort(arr);
console.log('sorted arr: ', arr);
