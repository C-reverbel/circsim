import Circuit from "./Circuit"

function create_element(name, nodes, value){
    let result = {
        type: name[0],
        name: name,
        nodes: nodes,
        value: value
    };
    return result;
}
function defMat(rows, cols) {
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix[i] = new Array(cols);
    }
    return matrix;
}


// todo refactor with circuit class
// todo add other elements to matrix
function assemble_matrix(circuit){
    // extract number of nodes and independent voltage sources (n, m)
    let nodes = [];
    let resistors = [];
    let n = 0; // number of nodes (exclude reference node)
    let m = 0; // number of independent voltage sources

    // separate resistors and sources
    circuit.forEach((item, index) => {
        nodes = nodes.concat(item.nodes);
        if(item.type === "V") m++;return
        if(item.type === "R") resistors.push(item);
    });

    // get list of nodes
    nodes = [...new Set(nodes)].sort();
    // remove 'ref' node from list to for matrix
    all_real_nodes = nodes.filter(e => e !== 0);
    all_real_nodes = all_real_nodes.filter(e => e.toString().toUpperCase() !== 'GND');
    n = all_real_nodes.length;

    circuit.forEach((c) => {
        // remove gnd node from list
        let _real_nodes = c.nodes.filter(e => e !== 0);
        _real_nodes = _real_nodes.filter(e => e.toString().toUpperCase() !== 'GND');
        c.real_nodes = _real_nodes;

        let node_dict = [];
        all_real_nodes.forEach((n, i) => {
            node_dict[n] = i;
        });

        // create dict with nodes and their indexes and append to circuit
        let _internal_nodes = [];
        _real_nodes.forEach((node, i) => {
            _internal_nodes.push(node_dict[node]);
        });
        c.internal_nodes = _internal_nodes;
    });

    // instantiate G matrix
    let G = defMat(n, n);
    let get_conductances = (resistors, nodes) => {
        let result = 0;

        resistors.forEach((res) => {
            if(res.internal_nodes.includes(nodes[0]) && res.internal_nodes.includes(nodes[1])) result += 1/res.value;
        });
        if(nodes[0] !== nodes[1]) result *= -1;
        return result;
    };
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            G[i][j] = get_conductances(resistors, [i, j]);
        }
    }
    console.log(G);

}






// instantiate circuit
let circuit = new Circuit("Meu circuito");
circuit.create_element("R1",['a',  0], 2);
circuit.create_element("V1",['b','a'],32);
circuit.create_element("R2",['b','c'], 4);
circuit.create_element("R3",['b',  0], 8);
circuit.create_element("V2",['c',  0],20);

// assemble matrix
//assemble_matrix(circuit);