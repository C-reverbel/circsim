export default class Circuit{
    constructor(name) {
        this.name = name;
        this.elements = [];
        this.node_dict = [];
        this.G = []
    }
    // add new element to circuit
    add_element(name, nodes, value){
        let result = {
            type: name[0],
            name: name,
            nodes: nodes,
            node1: nodes[0],
            node2: nodes[1],
            true_nodes: [],
            true_node1: null,
            true_node2: null,
            value: value
        };
        this.elements.push(result);
    }

    // parse netlist



    // compute conductance matrix
    _update_G(){
        this.elements.forEach((c)=>{
            // check element type
            // define matrix position
            // update matrix with element
        });
    }

    // create dictionary for nodes
    _compute_node_dict(){
        let temp_nodes = [];
        this.elements.forEach((c) => {
            temp_nodes = temp_nodes.concat(c.nodes);
        });
        // get list of all nodes
        temp_nodes = [...new Set(temp_nodes)].sort();
        // remove GND node
        let non_zero_nodes = temp_nodes.filter(e => e !== 0);
        non_zero_nodes = non_zero_nodes.filter(e => e.toString().toUpperCase() !== 'GND');
        // create node dictionary
        non_zero_nodes.forEach((n, i) => {
            this.node_dict[n] = i;
        });
        // deal with GND node
        let gnd_node = temp_nodes.filter(x => !non_zero_nodes.includes(x));
        this.node_dict[gnd_node] = null;
        //console.log(this.node_dict);
    }

    // update true_nodes attributes
    _update_true_nodes(){
        this.elements.forEach((c) => {
           c.true_node1 = this.node_dict[c.node1];
           c.true_node2 = this.node_dict[c.node2];
           if(c.true_node1 !== null) {c.true_nodes.push(c.true_node1)}
           if(c.true_node2 !== null) {c.true_nodes.push(c.true_node2)}
        });
    }

    // create empty matrix
    _defMat(rows, cols) {
        let matrix = [];
        for(let i=0; i<rows; i++) {
            matrix[i] = new Array(cols);
        }
        return matrix;
    }
}