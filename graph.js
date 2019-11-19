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
                return graf[prop];
            } else {
                result = graf[prop] instanceof Object ? this.depthSearch(searchElement, graf[prop], alreadyReviewedVertexes) : null;
            }

            if(result) {
                return result;
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
                return graf[prop];
            } else if(countOfProps == Object.keys(graf).length) {
                result = currentComplexVertex.length ? this.widthSearch(searchElement, currentComplexVertex.shift(), currentComplexVertex) : null;
            }
        }

        return result;
    };
}

const graf1 = new Graf(
    {"A": 7, "children": [
        { "B": 12, "children": [
            {"L": 2, "children": [
                {"O": 7}
            ]},
            {"M": 45, "children": [
                { "S":2 },
                { "Q": 45, "children": [
                    { "R": 2 }
                ]}
            ]}]
        },
        {"C": 14, "children": [
            {"D": 5, "children": [
                {"K":2}
            ]},
            {"F": 14, "children":[
                {"J":32},
                {"Z":18}
            ]}
        ]},
        {"G": 3}
    ]}
);
console.log(graf1.widthSearch("Q"));
console.log(graf1.depthSearch("B"));
