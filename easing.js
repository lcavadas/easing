/*!
 * Collection of easing equations
 *
 * t - Current time (in frames or seconds)
 * b - Starting value
 * c - Change needed in value
 * d - Expected easing duration (in frames or seconds)
 *
 * @author Luis Serralheiro
 */
(function () {
  var Easing = {};
  Math.Easing = Math.Easing || Easing;

  Easing.none = function (t, b, c, d) {
    return b + c;
  };

  Easing.linear = function (t, b, c, d) {
    return c * t / d + b;
  };

  Easing.easeInQuad = function (t, b, c, d) {
    return c * (t /= d) * t + b;
  };

  Easing.easeOutQuad = function (t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  };

  Easing.easeInOutQuad = function (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  };

  Easing.easeOutInQuad = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutQuad(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInQuad((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInCubic = function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  };

  Easing.easeOutCubic = function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  };

  Easing.easeInOutCubic = function (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  };

  Easing.easeOutInCubic = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutCubic(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInCubic((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInQuart = function (t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  };

  Easing.easeOutQuart = function (t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  };

  Easing.easeInOutQuart = function (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  };

  Easing.easeOutInQuart = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutQuart(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInQuart((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInQuint = function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  };

  Easing.easeOutQuint = function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  };

  Easing.easeInOutQuint = function (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  };

  Easing.easeOutInQuint = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutQuint(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInQuint((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  };

  Easing.easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  };

  Easing.easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  };

  Easing.easeOutInSine = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutSine(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInSine((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInExpo = function (t, b, c, d) {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b - c * 0.001;
  };

  Easing.easeOutExpo = function (t, b, c, d) {
    return (t === d) ? b + c : c * 1.001 * (-Math.pow(2, -10 * t / d) + 1) + b;
  };

  Easing.easeInOutExpo = function (t, b, c, d) {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b - c * 0.0005;
    }
    return c / 2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + b;
  };

  Easing.easeOutInExpo = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutExpo(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInExpo((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInCirc = function (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  };

  Easing.easeOutCirc = function (t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  };

  Easing.easeInOutCirc = function (t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  };

  Easing.easeOutInCirc = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutCirc(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInCirc((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInElastic = function (t, b, c, d, params) {
    params = params || {};
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    var p = params.period || d * 0.3;
    var s;
    var a = params.amplitude;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  };

  Easing.easeOutElastic = function (t, b, c, d, params) {
    params = params || {};
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    var p = params.period || d * 0.3;
    var s;
    var a = params.amplitude;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
  };

  Easing.easeInOutElastic = function (t, b, c, d, params) {
    params = params || {};
    if (t === 0) {
      return b;
    }
    if ((t /= d / 2) === 2) {
      return b + c;
    }
    var p = params.period || d * (0.3 * 1.5);
    var s;
    var a = params.amplitude;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
  };

  Easing.easeOutInElastic = function (t, b, c, d, params) {
    params = params || {};
    if (t < d / 2) {
      return Easing.easeOutElastic(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInElastic((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInBack = function (t, b, c, d, params) {
    params = params || {};
    var s = params.overshoot || 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  };

  Easing.easeOutBack = function (t, b, c, d, params) {
    params = params || {};
    var s = params.overshoot || 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  };

  Easing.easeInOutBack = function (t, b, c, d, params) {
    params = params || {};
    var s = params.overshoot || 1.70158;
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  };

  Easing.easeOutInBack = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutBack(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInBack((t * 2) - d, b + c / 2, c / 2, d, params);
  };

  Easing.easeInBounce = function (t, b, c, d) {
    return c - Easing.easeOutBounce(d - t, 0, c, d) + b;
  };

  Easing.easeOutBounce = function (t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    }
  };

  Easing.easeInOutBounce = function (t, b, c, d) {
    if (t < d / 2) {
      return Easing.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    } else {
      return Easing.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
  };

  Easing.easeOutInBounce = function (t, b, c, d, params) {
    if (t < d / 2) {
      return Easing.easeOutBounce(t * 2, b, c / 2, d, params);
    }
    return Easing.easeInBounce((t * 2) - d, b + c / 2, c / 2, d, params);
  };
}());