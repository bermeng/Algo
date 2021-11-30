function mergeSort(arr, low, high) {
    if (high <= low) return;

    const mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let i = low;
    let j = mid + 1;

    const aux = [];

    for (let k = low; k <= high; k++) {
        aux[k] = arr[k];
    }

    for (let k = low; k <= high; k++) {
        if (i > mid) {
            arr[k] = aux[j++];
        } else if (j > high) {
            arr[k] = aux[i++];
        } else if (aux[i] > aux[j]) {
            arr[k] = aux[j++];
        } else {
            arr[k] = aux[i++];
        }
    }
}

/* test case */

const arr = [3, 1, 2, 4, 6, 7, 0, 9]

mergeSort(arr, 0, arr.length - 1)

console.log('arr: ', arr);
