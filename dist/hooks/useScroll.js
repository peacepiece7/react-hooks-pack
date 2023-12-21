"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScroll = void 0;
var react_1 = require("react");
function useScroll() {
    var _a = (0, react_1.useState)({ x: 0, y: 0 }), state = _a[0], setState = _a[1];
    var onScroll = (0, react_1.useCallback)(function () {
        if (typeof window === 'undefined')
            return;
        setState({ x: window.scrollX, y: window.scrollY });
    }, []);
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', onScroll);
        return function () { return window.removeEventListener('scroll', onScroll); };
    }, []);
    return state;
}
exports.useScroll = useScroll;
//# sourceMappingURL=useScroll.js.map