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
    let sortArray = array;

    for (let i = 1; i < sortArray.length; i++) {
        if (sortArray[i] < sortArray[i - 1]) {
            [sortArray[i - 1], sortArray[i]] = [sortArray[i], sortArray[i - 1]];

            if (i > 1) {
                i = i - 2;
            }
        }
    }

    return sortArray;
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
    const sortArray = array;

    if(sortArray.length <= 1) {
        return sortArray;
    }

    const middle = findMiddle(sortArray);
    const firstPart = sortArray.slice(0, middle);
    const secondPart = sortArray.slice(middle);

    return merge(mergeSort(firstPart), mergeSort(secondPart));
}

function quickSort(array) {
    let sortArray = array;

    const middle = findMiddle(sortArray);
    const mainElement = sortArray[middle];

    if (sortArray.length <= 2) {
        return sortArray;
    }

    for (let i = 0, n = sortArray.length - 1; i <= middle && n >= middle; i++) {
        if ( sortArray[i] >= mainElement) {
            if ( sortArray[n] <= mainElement) {
                [sortArray[i], sortArray[n]] = [sortArray[n], sortArray[i]];
            }

            n--;
            i--;

            continue;
        }

        if ( sortArray[n] <= mainElement) {
            if ( sortArray[i] >= mainElement) {
                [sortArray[i], sortArray[n]] = [sortArray[n], sortArray[i]];
            }

            continue;
        }
    }

    return [...quickSort(sortArray.slice(0, middle + 1)), ...quickSort(sortArray.slice(middle + 1))];
}

const array = [14, 8, 9, 5, 1, 3, 2];
console.log(quickSort(array));
console.log(bubbleSort(array));
console.log(ShellSort(array));
console.log(linearSort(array));
console.log(mergeSort(array));
console.log(selectionSort(array));