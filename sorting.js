function bubbleSort(array) {
    let sortArray = array;
    let currentPosition = 0;
    let nextPosition = 1;

    for (let period = 0; period < sortArray.length; period++) {
        if (sortArray[currentPosition]  > sortArray[nextPosition]) {
            [sortArray[currentPosition], sortArray[nextPosition]] = [sortArray[nextPosition], sortArray[currentPosition]];
        }

        if (nextPosition <= sortArray.length) {
            currentPosition = nextPosition;
            nextPosition++;
            period--;
        } else {
            currentPosition = 0;
            nextPosition = 1;
        }
    }

    return sortArray;
}

function selectionSort(array) {
    let sortArray = array;
    let max = sortArray[0];
    let indexMaxElem;

    for (let startPosition = 0; startPosition < sortArray.length; startPosition++) {
        for (let i = startPosition; i < sortArray.length; i++) {
            if (max < sortArray[i]) {
                max = sortArray[i];
                indexMaxElem = i;
            }
        }

        [sortArray[startPosition], sortArray[indexMaxElem]] = [sortArray[indexMaxElem], sortArray[startPosition]];
        max = -10000;
    }

    return sortArray;
}

function linearSort(array) {
    let sortArray = array;

    for (let currentPosition = 1; currentPosition < sortArray.length; currentPosition++) {
        if (sortArray[currentPosition] < sortArray[currentPosition - 1]) {
            [sortArray[currentPosition - 1], sortArray[currentPosition]] = [sortArray[currentPosition], sortArray[currentPosition - 1]];

            if (currentPosition > 1) {
                currentPosition = currentPosition - 2;
            }
        }
    }

    return sortArray;
}

function ShellSort(array) {
    let sortArray = array;
    const stepList = [5, 3, 1];

    for (let i = 0; i < stepList.length; i++) {
        for (let j = 0; j < stepList.length; j++) {
            for (let k = j + stepList[i]; k < sortArray.length; k = k + stepList[i]) {
                if (sortArray[k] < sortArray[k - stepList[i]]) {
                    [sortArray[k - stepList[i]], sortArray[k]] = [sortArray[k], sortArray[k - stepList[i]]];

                    if (k > stepList[i]) {
                        k = k - stepList[i] * 2;
                    }
                }
            }
        }
    }

    return sortArray;
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