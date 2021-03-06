/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
import { config } from './configReadonly'
import {
  createChainClass,
  createChain,
  createNode,
  createArrayNode,
  createConditionalNode,
  createFunctionAssignmentNode,
  createObjectNode,
  createParenthesisNode,
  createRelationalNode,
  createReviver,
  createBlockNode,
  createOperatorNode,
  createSymbolNode,
  createAccessorNode,
  createConstantNode,
  createRangeNode,
  createAssignmentNode,
  createFunctionNode,
  createIndexNode,
  createParse,
  createEvaluate,
  createHelpClass,
  createSimplify,
  createRationalize,
  createCompile,
  createHelp,
  createParserClass,
  createDerivative,
  createParser,
  createFilterTransform,
  createMapTransform,
  createForEachTransform,
  createSubsetTransform,
  createApplyTransform,
  createRangeTransform,
  createMaxTransform,
  createMinTransform,
  createSumTransform,
  createMeanTransform,
  createVarianceTransform,
  createStdTransform
} from '../factoriesNumber'
import {
  typed,
  Range,
  nthRoot,
  e,
  _false,
  LN10,
  LOG10E,
  _NaN,
  phi,
  SQRT1_2, // eslint-disable-line camelcase
  tau,
  version,
  string,
  filter,
  map,
  combinationsWithRep,
  pickRandom,
  randomInt,
  compare,
  compareText,
  smaller,
  larger,
  erf,
  format,
  clone,
  typeOf,
  unaryMinus,
  abs,
  cbrt,
  cube,
  expm1,
  floor,
  lcm,
  log2,
  multiplyScalar,
  sign,
  square,
  xgcd,
  pow,
  log1p,
  norm,
  bitAnd,
  bitOr,
  leftShift,
  rightLogShift,
  not,
  xor,
  matrix,
  combinations,
  acos,
  acot,
  acsc,
  asec,
  asin,
  atan,
  atanh,
  cosh,
  coth,
  csch,
  sech,
  sinh,
  tanh,
  isNegative,
  isZero,
  ResultSet,
  round,
  LN2,
  _null,
  SQRT2,
  number,
  forEach,
  size,
  random,
  compareNatural,
  equalText,
  largerEq,
  print,
  isNumeric,
  isPrime,
  replacer,
  addScalar,
  exp,
  gcd,
  mod,
  sqrt,
  divideScalar,
  add,
  bitNot,
  rightArithShift,
  or,
  subset,
  acosh,
  acsch,
  asinh,
  cos,
  csc,
  sin,
  isInteger,
  isNaN,
  catalan,
  _Infinity,
  pi,
  _true,
  apply,
  partitionSelect,
  equalScalar,
  smallerEq,
  unequal,
  hasNumericValue,
  unaryPlus,
  fix,
  multiply,
  log,
  bitXor,
  index,
  acoth,
  atan2,
  sec,
  isPositive,
  hypot,
  composition,
  range,
  equal,
  mode,
  quantileSeq,
  numeric,
  log10,
  divide,
  gamma,
  cot,
  LOG2E,
  factorial,
  permutations,
  prod,
  min,
  mean,
  ceil,
  and,
  tan,
  boolean,
  multinomial,
  max,
  median,
  subtract,
  deepEqual,
  mad,
  stirlingS2,
  variance,
  std,
  bellNumbers,
  asech,
  sum
} from './pureFunctionsNumber.generated'

const math = {} // NOT pure!
const mathWithTransform = {} // NOT pure!
const classes = {} // NOT pure!

export const Chain = createChainClass({ math })
export const chain = createChain({ Chain, typed })
export const Node = createNode({ mathWithTransform })
export const ArrayNode = createArrayNode({ Node })
export const ConditionalNode = createConditionalNode({ Node })
export const FunctionAssignmentNode = createFunctionAssignmentNode({ Node, typed })
export const ObjectNode = createObjectNode({ Node })
export const ParenthesisNode = createParenthesisNode({ Node })
export const RelationalNode = createRelationalNode({ Node })
export const reviver = createReviver({ classes })
export const BlockNode = createBlockNode({ Node, ResultSet })
export const OperatorNode = createOperatorNode({ Node })
export const SymbolNode = createSymbolNode({ Node, math })
export const AccessorNode = createAccessorNode({ Node, subset })
export const ConstantNode = createConstantNode({ Node })
export const RangeNode = createRangeNode({ Node })
export const AssignmentNode = createAssignmentNode({ matrix, Node, subset })
export const FunctionNode = createFunctionNode({ Node, SymbolNode, math })
export const IndexNode = createIndexNode({ Node, Range, size })
export const parse = createParse({ AccessorNode, ArrayNode, AssignmentNode, BlockNode, ConditionalNode, ConstantNode, FunctionAssignmentNode, FunctionNode, IndexNode, ObjectNode, OperatorNode, ParenthesisNode, RangeNode, RelationalNode, SymbolNode, config, numeric, typed })
export const evaluate = createEvaluate({ parse, typed })
export const Help = createHelpClass({ parse })
export const simplify = createSimplify({ ConstantNode, FunctionNode, OperatorNode, ParenthesisNode, SymbolNode, add, config, divide, equal, isZero, mathWithTransform, multiply, parse, pow, subtract, typed })
export const rationalize = createRationalize({ ConstantNode, FunctionNode, OperatorNode, ParenthesisNode, SymbolNode, add, config, divide, equal, isZero, mathWithTransform, multiply, parse, pow, simplify, subtract, typed })
export const compile = createCompile({ parse, typed })
export const help = createHelp({ Help, mathWithTransform, typed })
export const Parser = createParserClass({ parse })
export const derivative = createDerivative({ ConstantNode, FunctionNode, OperatorNode, ParenthesisNode, SymbolNode, config, equal, isZero, numeric, parse, simplify, typed })
export const parser = createParser({ Parser, typed })

Object.assign(math, {
  typed,
  chain,
  nthRoot,
  e,
  false: _false,
  LN10,
  LOG10E,
  NaN: _NaN,
  phi,
  SQRT1_2,
  tau,
  version,
  string,
  filter,
  map,
  combinationsWithRep,
  pickRandom,
  randomInt,
  compare,
  compareText,
  smaller,
  larger,
  erf,
  format,
  clone,
  typeOf,
  reviver,
  unaryMinus,
  abs,
  cbrt,
  cube,
  expm1,
  floor,
  lcm,
  log2,
  multiplyScalar,
  sign,
  square,
  xgcd,
  pow,
  log1p,
  norm,
  bitAnd,
  bitOr,
  leftShift,
  rightLogShift,
  not,
  xor,
  matrix,
  combinations,
  acos,
  acot,
  acsc,
  asec,
  asin,
  atan,
  atanh,
  cosh,
  coth,
  csch,
  sech,
  sinh,
  tanh,
  isNegative,
  isZero,
  round,
  'E': e,
  LN2,
  null: _null,
  SQRT2,
  number,
  forEach,
  size,
  random,
  compareNatural,
  equalText,
  largerEq,
  print,
  isNumeric,
  isPrime,
  replacer,
  addScalar,
  exp,
  gcd,
  mod,
  sqrt,
  divideScalar,
  add,
  bitNot,
  rightArithShift,
  or,
  subset,
  acosh,
  acsch,
  asinh,
  cos,
  csc,
  sin,
  isInteger,
  isNaN,
  catalan,
  Infinity: _Infinity,
  pi,
  true: _true,
  apply,
  partitionSelect,
  equalScalar,
  smallerEq,
  unequal,
  hasNumericValue,
  unaryPlus,
  fix,
  multiply,
  log,
  bitXor,
  index,
  acoth,
  atan2,
  sec,
  isPositive,
  hypot,
  composition,
  'PI': pi,
  range,
  equal,
  mode,
  quantileSeq,
  numeric,
  log10,
  divide,
  gamma,
  cot,
  LOG2E,
  factorial,
  permutations,
  prod,
  min,
  mean,
  ceil,
  and,
  tan,
  boolean,
  parse,
  evaluate,
  multinomial,
  max,
  median,
  subtract,
  simplify,
  rationalize,
  compile,
  deepEqual,
  mad,
  help,
  stirlingS2,
  variance,
  derivative,
  parser,
  std,
  bellNumbers,
  asech,
  sum,
  config
})

Object.assign(mathWithTransform, math, {
  filter: createFilterTransform({ typed }),
  map: createMapTransform({ typed }),
  forEach: createForEachTransform({ typed }),
  subset: createSubsetTransform({ matrix, typed }),
  apply: createApplyTransform({ isInteger, typed }),
  range: createRangeTransform({ matrix, config, larger, largerEq, smaller, smallerEq, typed }),
  max: createMaxTransform({ config, larger, numeric, typed }),
  min: createMinTransform({ config, numeric, smaller, typed }),
  sum: createSumTransform({ add, config, numeric, typed }),
  mean: createMeanTransform({ add, divide, typed }),
  variance: createVarianceTransform({ add, apply, divide, isNaN, multiply, subtract, typed }),
  std: createStdTransform({ sqrt, typed, variance })
})

Object.assign(classes, {
  Range,
  Chain,
  Node,
  ArrayNode,
  ConditionalNode,
  FunctionAssignmentNode,
  ObjectNode,
  ParenthesisNode,
  RelationalNode,
  ResultSet,
  BlockNode,
  OperatorNode,
  SymbolNode,
  AccessorNode,
  ConstantNode,
  RangeNode,
  AssignmentNode,
  FunctionNode,
  IndexNode,
  Help,
  Parser
})

Chain.createProxy(math)

export { embeddedDocs as docs } from '../expression/embeddedDocs/embeddedDocs'
