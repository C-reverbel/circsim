import Circuit from "./Circuit.js"

let circuit = new Circuit("Meu circuito");
circuit.add_element("R1",['a',  'gnd'], 2);
circuit.add_element("V1",['b',    'a'],32);
circuit.add_element("R2",['b',    'c'], 4);
circuit.add_element("R3",['b',  'gnd'], 8);
circuit.add_element("V2",['c',  'gnd'],20);

circuit._compute_node_dict();
circuit._update_true_nodes();

console.log(circuit)