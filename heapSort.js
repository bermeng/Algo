function heapSort(arr, descend) {
    const len = arr.length;

    heapify(arr, len, descend);

    for (let i = len - 1; i > 0; i--) {
        swap(arr, 0, i);

        if (descend) {
            minHeapAdjust(arr, 0, i);
        } else {
            maxHeapAdjust(arr, 0, i);
        }
    }
}

function heapify(arr, len, isMin) {
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        if (isMin) {
            minHeapAdjust(arr, i, len);
        } else {
            maxHeapAdjust(arr, i, len);
        }
    }
}

function maxHeapAdjust(arr, i, len) {
    const cur = arr[i];

    for (let k = i * 2 + 1; k < len; k = k * 2 + 1) {
        if (k + 1 < len && arr[k] < arr[k + 1]) {
            k++;
        }

        if (arr[k] > cur) {
            arr[i] = arr[k];
            i = k;
        } else {
            break;
        }
    }

    arr[i] = cur;
}

function minHeapAdjust(arr, i, len) {
    const cur = arr[i];

    for (let k = i * 2 + 1; k < len; k = k * 2 + 1) {
        if (k + 1 < len && arr[k] > arr[k + 1]) {
            k++;
        }

        if (arr[k] < cur) {
            arr[i] = arr[k];
            i = k;
        } else {
            break;
        }
    }

    arr[i] = cur;
}

// helper func
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// ascend -> max heap
// descend -> min heap

/* test case */
const arr1 = [4, 6, 1, 2, 7, 9];
heapSort(arr1);
console.log('sorted arr1 with ascending: ', arr1);
console.log('--------------------------');
const arr2 = [4, 6, 1, 2, 7, 9];
heapSort(arr2, true);
console.log('sorted arr2 with descending: ', arr2);
