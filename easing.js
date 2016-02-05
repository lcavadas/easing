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

    Easing.Bezier = (function () {
        var DEFAULT_DURATION = 600;//ms

        /**
         * The epsilon value we pass to UnitBezier::solve given that the animation is going to run over |dur| seconds.
         * The longer the animation, the more precision we need in the timing function result to avoid ugly discontinuities.
         * http://svn.webkit.org/repository/webkit/trunk/Source/WebCore/page/animation/AnimationBase.cpp
         */
        var solveEpsilon = function (duration) {
            return 1.0 / (200.0 * duration);
        };

        /**
         * Defines a cubic-bezier curve given the middle two control points.
         * NOTE: first and last control points are implicitly (0,0) and (1,1).
         * @param p1x {number} X component of control point 1
         * @param p1y {number} Y component of control point 1
         * @param p2x {number} X component of control point 2
         * @param p2y {number} Y component of control point 2
         */
        var unitBezier = function (p1x, p1y, p2x, p2y) {

            // private members --------------------------------------------

            // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).

            /**
             * X component of Bezier coefficient C
             * @const
             * @type {number}
             */
            var cx = 3.0 * p1x;

            /**
             * X component of Bezier coefficient B
             * @const
             * @type {number}
             */
            var bx = 3.0 * (p2x - p1x) - cx;

            /**
             * X component of Bezier coefficient A
             * @const
             * @type {number}
             */
            var ax = 1.0 - cx - bx;

            /**
             * Y component of Bezier coefficient C
             * @const
             * @type {number}
             */
            var cy = 3.0 * p1y;

            /**
             * Y component of Bezier coefficient B
             * @const
             * @type {number}
             */
            var by = 3.0 * (p2y - p1y) - cy;

            /**
             * Y component of Bezier coefficient A
             * @const
             * @type {number}
             */
            var ay = 1.0 - cy - by;

            /**
             * @param t {number} parametric timing value
             * @return {number}
             */
            var sampleCurveX = function (t) {
                // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
                return ((ax * t + bx) * t + cx) * t;
            };

            /**
             * @param t {number} parametric timing value
             * @return {number}
             */
            var sampleCurveY = function (t) {
                return ((ay * t + by) * t + cy) * t;
            };

            /**
             * @param t {number} parametric timing value
             * @return {number}
             */
            var sampleCurveDerivativeX = function (t) {
                return (3.0 * ax * t + 2.0 * bx) * t + cx;
            };

            /**
             * Given an x value, find a parametric value it came from.
             * @param x {number} value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param epsilon {number} accuracy limit of t for the given x
             * @return {number} the t value corresponding to x
             */
            var solveCurveX = function (x, epsilon) {
                var t0;
                var t1;
                var t2;
                var x2;
                var d2;
                var i;

                // First try a few iterations of Newton's method -- normally very fast.
                for (t2 = x, i = 0; i < 8; i++) {
                    x2 = sampleCurveX(t2) - x;
                    if (Math.abs (x2) < epsilon) {
                        return t2;
                    }
                    d2 = sampleCurveDerivativeX(t2);
                    if (Math.abs(d2) < 1e-6) {
                        break;
                    }
                    t2 = t2 - x2 / d2;
                }

                // Fall back to the bisection method for reliability.
                t0 = 0.0;
                t1 = 1.0;
                t2 = x;

                if (t2 < t0) {
                    return t0;
                }
                if (t2 > t1) {
                    return t1;
                }

                while (t0 < t1) {
                    x2 = sampleCurveX(t2);
                    if (Math.abs(x2 - x) < epsilon) {
                        return t2;
                    }
                    if (x > x2) {
                        t0 = t2;
                    } else {
                        t1 = t2;
                    }
                    t2 = (t1 - t0) * 0.5 + t0;
                }

                // Failure.
                return t2;
            };

            /**
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param epsilon {number} the accuracy of t for the given x
             * @return {number} the y value along the bezier curve
             */
            var solve = function (x, epsilon) {
                return sampleCurveY(solveCurveX(x, epsilon));
            };

            // public interface --------------------------------------------

            /**
             * Find the y of the cubic-bezier for a given x with accuracy determined by the animation duration.
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param duration {number} the duration of the animation in milliseconds
             * @return {number} the y value along the bezier curve
             */
            return function (x, duration) {
                return solve(x, solveEpsilon(+duration || DEFAULT_DURATION));
            };
        };
        return {
            /**
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param duration {number} the duration of the animation in milliseconds
             * @return {number} the y value along the bezier curve
             */
            linear: unitBezier(0.0, 0.0, 1.0, 1.0),

            /**
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param duration {number} the duration of the animation in milliseconds
             * @return {number} the y value along the bezier curve
             */
            ease: unitBezier(0.25, 0.1, 0.25, 1.0),

            /**
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param duration {number} the duration of the animation in milliseconds
             * @return {number} the y value along the bezier curve
             */
            easeIn: unitBezier(0.42, 0, 1.0, 1.0),

            /**
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param duration {number} the duration of the animation in milliseconds
             * @return {number} the y value along the bezier curve
             */
            easeOut: unitBezier(0, 0, 0.58, 1.0),

            /**
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param duration {number} the duration of the animation in milliseconds
             * @return {number} the y value along the bezier curve
             */
            easeInOut: unitBezier(0.42, 0, 0.58, 1.0),

            /**
             * @param p1x {number} X component of control point 1
             * @param p1y {number} Y component of control point 1
             * @param p2x {number} X component of control point 2
             * @param p2y {number} Y component of control point 2
             * @param x {number} the value of x along the bezier curve, 0.0 <= x <= 1.0
             * @param duration {number} the duration of the animation in milliseconds
             * @return {number} the y value along the bezier curve
             */
            cubicBezier: function (p1x, p1y, p2x, p2y, x, duration) {
                return unitBezier(p1x, p1y, p2x, p2y)(x, duration);
            }
        };
    }());
}());
