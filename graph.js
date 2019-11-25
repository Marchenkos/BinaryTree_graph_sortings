function Graph(vertexList = {}) {
    this.vertexList = vertexList;

    this.depthSearch = (searchElement, graph = this.vertexList, reviewedVertexes = []) => {
        let alreadyReviewedVertexes = reviewedVertexes;
        let result;

        for (let prop in graph) {
            if (alreadyReviewedVertexes.includes(prop)) {
                continue;
            } else {
                alreadyReviewedVertexes.push(prop);
            }

            if (searchElement == prop) {
                return graph[prop];
            } else {
                result = graph[prop] instanceof Object ? this.depthSearch(searchElement, graph[prop], alreadyReviewedVertexes) : null;
            }

            if(result) {
                return result;
            }
        }

        return result;
    };

    this.widthSearch = (searchElement, graph = this.vertexList, childNodes = []) => {
        let childrenArray = childNodes;
        let countOfProps = 0;
        let result;

        for (let prop in graph) {
            if (searchElement == prop) {
                return graph[prop];
            } else {
                if (graph[prop] instanceof Array) {
                    childrenArray = [...childrenArray, ...graph[prop]];
                }

                countOfProps++;

                if(countOfProps == Object.keys(graph).length) {
                    result = childrenArray.length ? this.widthSearch(searchElement, childrenArray.shift(), childrenArray) : null;
                }
            }
        }

        return result;
    };
}

const graph1 = new Graph(
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
console.log(graph1.widthSearch("Q"));
console.log(graph1.depthSearch("B"));
