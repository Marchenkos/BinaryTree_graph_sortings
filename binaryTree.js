let BinaryTree = function(root = null) {
    this.root = root;

    this.createNode = (value) => {
        let node = {};
        node.value = value;
        node.left = null;
        node.right = null;

        return node;
    },

    this.add = (node) => {
        let currentNode = this.createNode(node);

        if(!this.root) {
            this.root = currentNode;
        } else {
            this.insertNode(currentNode);
        }

        return this;
    },

    this.insertNode = (currentNode, root = this.root) => {
        let value = currentNode.value;

        if(value === root.value) {
            return;
        } else if(value > root.value){
            if(!root.left) {
                root.left = currentNode;

                return;
            } else {
                this.insertNode(currentNode, root.left);
            }
        } else if(value < root.value) {
            if(!root.right) {
                root.right = currentNode;

                return;
            } else {
                this.insertNode(currentNode, root.right);
            }
        }
    },

    this.searchMin = (root = this.root) => {
        let currentValue = root;

        if(currentValue.right) {
            this.searchMin(currentValue.right);
        } else {
            console.log(`Min node: ${currentValue.value}`);
        }
    },

    this.searchMax = (root = this.root) => {
        let currentValue = root;

        if(currentValue.left) {
            this.searchMax(currentValue.left);
        } else {
            console.log(`Max node: ${currentValue.value}`);
        }
    },

    this.getTree = () => {
        console.log(this.root)
    }
}

let bin1 = new BinaryTree();
bin1.add(13).add(15).add(12).add(10).add(24).add(30).add(44).add(2);
bin1.searchMax();
bin1.searchMin();
bin1.getTree();