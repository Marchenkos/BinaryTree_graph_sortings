function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

function selectionSort(array) {
    let minElement = array[0];
    let minElementIndex;

    for (let i = 0; i < array.length - 1; i++) {
        minElementIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < minElement) {
                minElement = array[j];
                minElementIndex = j;
            }
        }

        if(i != minElementIndex) {
            [array[i], array[minElementIndex]] = [array[minElementIndex], array[i]];
        }
    }

    return array;
}

function linearSort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            [array[i - 1], array[i]] = [array[i], array[i - 1]];

            if (i > 1) {
                i = i - 2;
            }
        }
    }

    return array;
}

function ShellSort(array) {
    for (let i = Math.floor(array.length / 2); i > 0; i /= 2) {
        for (let j = i; j < array.length; j++) {
            for (let k = j - i; k >= 0 && array[k] > array[k + i]; k -= i){
                [array[k], array[k + i]] = [array[k + i], array[k]];
            }
        }
    }

    return array;
}

function findMiddle(array) {
    return Math.floor(array.length / 2);
}

function merge(firstArray, secondArray) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < firstArray.length && j < secondArray.length) {
        result.push(
            (firstArray[i] < secondArray[j]) ?
                firstArray[i++] : secondArray[j++]
        );
    }

    return [
        ...result,
        ...firstArray.slice(i),
        ...secondArray.slice(j)
    ];
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }

    const middle = findMiddle(array);
    const firstPart = array.slice(0, middle);
    const secondPart = array.slice(middle);

    return merge(mergeSort(firstPart), mergeSort(secondPart));
}

function quickSort(array) {
    const middle = findMiddle(array);
    const mainElement = array[middle];

    if (array.length <= 2) {
        return array;
    }

    for (let i = 0, n = array.length - 1; i <= middle && n >= middle; i++) {
        if ( array[i] >= mainElement) {
            if ( array[n] <= mainElement) {
                [array[i], array[n]] = [array[n], array[i]];
            }

            n--;
            i--;

            continue;
        }

        if ( array[n] <= mainElement) {
            if ( array[i] >= mainElement) {
                [array[i], array[n]] = [array[n], array[i]];
            }

            continue;
        }
    }

    return [...quickSort(array.slice(0, middle + 1)), ...quickSort(array.slice(middle + 1))];
}

const array = [14, 8, 9, 5, 1, 3, 2];
console.log(quickSort(array));
console.log(bubbleSort(array));
console.log(ShellSort(array));
console.log(linearSort(array));
console.log(mergeSort(array));
console.log(selectionSort(array));