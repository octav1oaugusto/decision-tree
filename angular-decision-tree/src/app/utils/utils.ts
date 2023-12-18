export function readFileContent(
  inputElement: HTMLInputElement,
  callback: (content: string | null) => void
): void {
  const file = inputElement.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      if (event.target) {
        const result = event.target.result as string;
        callback(result);
      }
    };

    reader.readAsText(file);
  } else {
    callback(null);
  }
}

export function getSymptomsByTail() {
  const symptoms = [
    { key: 'Modular Arithmetic', label: 'O seu algoritmo tem o sintoma' },
    {
      key: 'Matrix Multiplication',
      label: 'Uma das propriedades do algoritmo é',
    },
    { key: 'Exponentiation', label: 'O algoritmo possui a característica' },
    { key: 'Large Exponents', label: 'O algoritmo tem a propriedade' },
    { key: 'Prime Numbers', label: 'O algoritmo possui a característica' },
    { key: 'Fermat', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Modular Division', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Miller-Rabin', label: 'O algoritmo possui a característica' },
    { key: 'Coprime', label: 'O algoritmo possui a característica' },
    { key: 'GCD', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Congruence', label: 'O algoritmo tem a propriedade' },
    { key: 'LCM', label: 'O algoritmo possui a característica' },
    { key: 'Ordered', label: 'O algoritmo tem a propriedade' },
    { key: 'Search', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Modular Inverse', label: 'O algoritmo tem a propriedade' },
    { key: 'Integer Roots', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Composite Numbers', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Divisors', label: 'O algoritmo tem a propriedade' },
    { key: 'Modular Operation', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Binary', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Bitwise', label: 'O seu algoritmo tem o sintoma' },
    { key: "Two's complement", label: 'O algoritmo tem a propriedade' },
    { key: 'Shift', label: 'O algoritmo tem a propriedade' },
    { key: 'Power of Two', label: 'O algoritmo tem a propriedade' },
    { key: 'And', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Or', label: 'O algoritmo tem a propriedade' },
    { key: 'Xor', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Bit', label: 'O algoritmo possui a característica' },
    { key: 'Multiply Polynomials', label: 'O algoritmo tem a propriedade' },
    { key: 'Coefficient Vector', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Scalar Product', label: 'O algoritmo tem a propriedade' },
    { key: 'String Matching', label: 'O algoritmo possui a característica' },
    { key: 'Stack', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Queue', label: 'O algoritmo possui a característica' },
    { key: 'Array', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Minimum Value', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Tree', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Combine Sets', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Union-Find', label: 'O algoritmo possui a característica' },
    { key: 'Binary Indexed Tree', label: 'O algoritmo tem a propriedade' },
    { key: 'Sum of Values', label: 'O seu algoritmo tem o sintoma' },
    {
      key: 'Binary Associative Function',
      label: 'Uma das propriedades do algoritmo é',
    },
    { key: 'Bitwise Operations', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Minimum of Range', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Minimal', label: 'O algoritmo possui a característica' },
    { key: 'Maximal', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Binary Tree', label: 'O algoritmo possui a característica' },
    { key: 'Lazy Propagation', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Dynamic Programming', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Mininum Cost', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Optimization', label: 'O algoritmo possui a característica' },
    { key: 'Top-Down', label: 'O algoritmo tem a propriedade' },
    { key: 'Bottom-Up', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Non-greedy search', label: 'O algoritmo possui a característica' },
    { key: 'String Comparing', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Pattern Matching', label: 'O seu algoritmo tem o sintoma' },
    { key: 'String Searching', label: 'O algoritmo possui a característica' },
    { key: 'Preffix Function', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Modular Operations', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Longest Common Prefix', label: 'O algoritmo tem a propriedade' },
    {
      key: 'Breadth First Search',
      label: 'Uma das propriedades do algoritmo é',
    },
    { key: 'Depth First Search', label: 'O algoritmo tem a propriedade' },
    { key: 'Graph', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Automaton', label: 'O algoritmo possui a característica' },
    { key: 'Longest Common Substring', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Permutations', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Coefficients', label: 'O algoritmo possui a característica' },
    { key: 'Combinatory', label: 'O algoritmo tem a propriedade' },
    { key: 'Factorial', label: 'O algoritmo possui a característica' },
    { key: 'Binary Search', label: 'O algoritmo tem a propriedade' },
    { key: 'Maximum Value', label: 'O algoritmo tem a propriedade' },
    { key: 'Minimal Cost', label: 'O algoritmo possui a característica' },
    { key: 'Geometry', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Line Equation', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Normalization', label: 'O algoritmo possui a característica' },
    { key: 'Vector', label: 'Uma das propriedades do algoritmo é' },
    {
      key: 'Two-Dimesional Plane',
      label: 'O algoritmo possui a característica',
    },
    { key: 'Radius of Circle', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Center of Circle', label: 'O algoritmo possui a característica' },
    { key: 'Vectors', label: 'O algoritmo possui a característica' },
    { key: 'Circle-Line Intersection', label: 'O algoritmo tem a propriedade' },
    { key: 'Convex Polygon', label: 'O algoritmo possui a característica' },
    { key: 'Polar Distance', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Collinear', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Sets', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Orientation', label: 'O algoritmo tem a propriedade' },
    { key: 'Clockwise', label: 'O algoritmo possui a característica' },
    { key: 'Counterclockwise', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Cyclic Shift', label: 'O algoritmo possui a característica' },
    { key: 'Convex Hull Trick', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Polygons', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Undirected Graph', label: 'Uma das propriedades do algoritmo é' },
    {
      key: 'Connected Components',
      label: 'Uma das propriedades do algoritmo é',
    },
    { key: 'Acyclic Graph', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Directed Graph', label: 'O algoritmo possui a característica' },
    { key: 'Subset', label: 'O seu algoritmo tem o sintoma' },
    {
      key: 'Undirected Weighted Graph',
      label: 'O algoritmo tem a propriedade',
    },
    {
      key: 'Single Source Shortest Path',
      label: 'O algoritmo tem a propriedade',
    },
    {
      key: 'Undirected Unweighted Graph',
      label: 'O seu algoritmo tem o sintoma',
    },
    { key: 'Connected Graph', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Negative Weight Edges', label: 'O algoritmo tem a propriedade' },
    { key: 'Weighted Graph', label: 'Uma das propriedades do algoritmo é' },
    {
      key: 'Minimum Spanning Tree',
      label: 'O algoritmo possui a característica',
    },
    { key: 'Euler Tour', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Sparse Table', label: 'O algoritmo tem a propriedade' },
    {
      key: 'Connected Undirected Graph',
      label: 'O algoritmo possui a característica',
    },
    {
      key: 'Lowest Common Ancestor',
      label: 'Uma das propriedades do algoritmo é',
    },
    { key: 'Maximal Flow', label: 'O algoritmo tem a propriedade' },
    { key: 'Flow Network', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Maximum Flow', label: 'O algoritmo tem a propriedade' },
    { key: 'Residual Capacity', label: 'O algoritmo possui a característica' },
    { key: 'Residual Network', label: 'O algoritmo tem a propriedade' },
    { key: 'Max-Flow Min-Cut', label: 'O algoritmo tem a propriedade' },
    { key: 'Bipartite Graph', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Maximum Match', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Permutation', label: 'O algoritmo possui a característica' },
    { key: 'Segment Tree', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Nim', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Game Theory', label: 'O algoritmo possui a característica' },
    {
      key: 'Perfect Information',
      label: 'Uma das propriedades do algoritmo é',
    },
    { key: 'Finite Game', label: 'Uma das propriedades do algoritmo é' },
    { key: 'Xor-Sum', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Bitwise Operation', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Disjoint Set Union', label: 'O seu algoritmo tem o sintoma' },
    { key: 'Eulerian Cycle', label: 'O seu algoritmo tem o sintoma' },
  ];
  return symptoms;
}
