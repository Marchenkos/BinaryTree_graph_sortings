function arraySort() {
    this.array = [14, 8, 9, 5, 1, 3, 2];

    this.bubbleSort = () => {
        let sortArray = this.array;
        let currentPosition = 0;
        let nextPosition = 1;
        let period = 0;

        while (period < sortArray.length) {
            if (sortArray[currentPosition]  > sortArray[nextPosition]) {
                [sortArray[currentPosition], sortArray[nextPosition]] = [sortArray[nextPosition], sortArray[currentPosition]];
            }

            if (nextPosition <= sortArray.length) {
                currentPosition = nextPosition;
                nextPosition++;
            } else {
                currentPosition = 0;
                nextPosition = 1;
                period++;
            }
        }

        return sortArray;
    }, 

    this.selectionSort = () => {
        let sortArray = this.array;
        let startPosition = 0;
        let max = sortArray[0];
        let indexMaxElem;

        while (startPosition < sortArray.length) {
            for (let i = startPosition; i < sortArray.length; i++) {
                if (max < sortArray[i]) {
                    max = sortArray[i];
                    indexMaxElem = i;
                }
            }

            [sortArray[startPosition], sortArray[indexMaxElem]] = [sortArray[indexMaxElem], sortArray[startPosition]];
            startPosition = startPosition + 1;
            max = -10000;
        }

        return sortArray;
    }

    this.linearSort = () => {
        let sortArray = this.array;
        let currentPosition = 1;

        while (currentPosition < sortArray.length) {
            if (sortArray[currentPosition] < sortArray[currentPosition - 1]) {
                [sortArray[currentPosition - 1], sortArray[currentPosition]] = [sortArray[currentPosition], sortArray[currentPosition - 1]];

                if (currentPosition > 1) {
                    currentPosition = currentPosition - 1;
                } else {
                    currentPosition++;
                }
            } else {
                currentPosition++;
            }
        }

        return sortArray;
    }

    this.ShellSort = () => {
        let sortArray = this.array;
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
    this.findMiddle = array => {
        return Math.floor(array.length / 2);
    };

    this.merge = (firstArray, secondArray) => {
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
    };

    this.mergeSort = (array = this.array) => {
        const sortArray = array;

        if(sortArray.length <= 1) {
            return sortArray;
        }

        const middle = this.findMiddle(sortArray);
        const firstPart = sortArray.slice(0, middle);
        const secondPart = sortArray.slice(middle);

        return this.merge(this.mergeSort(firstPart), this.mergeSort(secondPart));
    };

    this.quickSort = (array = this.array) => {
        let sortArray = array;

        const middle = this.findMiddle(sortArray);
        const mainElement = sortArray[middle];

        if (sortArray.length <= 2) {
            return sortArray;
        }

        let i = 0;
        let n = sortArray.length - 1;

        while (i <= middle && n >= middle) {
            if ( sortArray[i] >= mainElement) {
                if ( sortArray[n] <= mainElement) {
                    [sortArray[i], sortArray[n]] = [sortArray[n], sortArray[i]];
                }

                n--;

                continue;
            }

            if ( sortArray[n] <= mainElement) {
                if ( sortArray[i] >= mainElement) {
                    [sortArray[i], sortArray[n]] = [sortArray[n], sortArray[i]];
                }

                i++;

                continue;
            }

            i++;
        }
        return [...this.quickSort(sortArray.slice(0, middle + 1)), ...this.quickSort(sortArray.slice(middle + 1))];
    };
}


let firstArray = new arraySort();

console.log(firstArray.quickSort());
console.log(firstArray.bubbleSort());
console.log(firstArray.ShellSort());
console.log(firstArray.linearSort());
console.log(firstArray.mergeSort());
console.log(firstArray.selectionSort());