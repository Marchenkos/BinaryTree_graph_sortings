function Graf(vertexList = {}) {
    this.vertexList = vertexList;

    this.depthSearch = (searchElement, graf = this.vertexList, reviewedVertexes = []) => {
        let alreadyReviewedVertexes = reviewedVertexes;
        let result;

        for (let prop in graf) {
            if (alreadyReviewedVertexes.includes(prop)) {
                continue;
            } else {
                alreadyReviewedVertexes.push(prop);
            }

            if (searchElement == prop) {
                return graf[prop] instanceof Object ? graf[prop].count : graf[prop];
            } else {
                result = graf[prop] instanceof Object ? this.depthSearch(searchElement, graf[prop], alreadyReviewedVertexes) : "Nothing found";
            }
        }

        return result;
    };

    this.widthSearch = (searchElement, graf = this.vertexList, complexVertex = []) => {
        let currentComplexVertex = complexVertex;
        let countOfProps = 0;
        let result;

        for (let prop in graf) {
            if (graf[prop] instanceof Object) {
                currentComplexVertex.push(graf[prop]);
            }

            countOfProps++;

            if (searchElement == prop) {
                return graf[prop] instanceof Object ? graf[prop].count : graf[prop];
            } else if(countOfProps == Object.keys(graf).length) {
                result = currentComplexVertex.length ? this.widthSearch(searchElement, currentComplexVertex.shift(), currentComplexVertex) : "Nothing found";
            }
        }

        return result;
    };
}

const graf1 = new Graf({"A": {"B": {"L": {"O": 7, "count": 2}, "M": 10, "count": 12}, "C": {"D": {"K":2, "count": 5}, "F": 6, "count": 4}, "G": 3, "count": 7}});

console.log(graf1.widthSearch("V"));
console.log(graf1.depthSearch("B"));
