"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFadeIn = void 0;
var react_1 = require("react");
/**
 * @description React 18의 automatic batching으로 최소 delay 100ms가 주어집니다.
 */
function useFadeIn(duration, delay) {
    if (duration === void 0) { duration = 0; }
    if (delay === void 0) { delay = 100; }
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            if (ref.current) {
                ref.current.style.opacity = '1';
                ref.current.style.transition = "opacity ".concat(duration, "s ease-in-out");
            }
        }, delay);
    }, []);
    return {
        ref: ref,
        style: { opacity: '0' },
    };
}
exports.useFadeIn = useFadeIn;
//# sourceMappingURL=useFadeIn.js.map