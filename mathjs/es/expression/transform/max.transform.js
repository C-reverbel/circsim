import { isBigNumber, isCollection, isNumber } from '../../utils/is';
import { factory } from '../../utils/factory';
import { errorTransform } from './utils/errorTransform';
import { createMax } from '../../function/statistics/max';
var name = 'max';
var dependencies = ['typed', 'config', 'numeric', 'larger'];
export var createMaxTransform = /* #__PURE__ */factory(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      config = _ref.config,
      numeric = _ref.numeric,
      larger = _ref.larger;
  var max = createMax({
    typed: typed,
    config: config,
    numeric: numeric,
    larger: larger
  });
  /**
   * Attach a transform function to math.max
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function max
   * from one-based to zero based
   */

  return typed('max', {
    '...any': function any(args) {
      // change last argument dim from one-based to zero-based
      if (args.length === 2 && isCollection(args[0])) {
        var dim = args[1];

        if (isNumber(dim)) {
          args[1] = dim - 1;
        } else if (isBigNumber(dim)) {
          args[1] = dim.minus(1);
        }
      }

      try {
        return max.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});