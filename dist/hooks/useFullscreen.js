"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFullscreen = void 0;
var react_1 = require("react");
function useFullscreen() {
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isFull = _a[0], setIsFull = _a[1];
    var triggerFull = (0, react_1.useCallback)(function () {
        if (ref.current) {
            ref.current.requestFullscreen();
            setIsFull(true);
            // TODO : 브러우저 호환성 고려하기
            // if (ref.current.webkitReqeustFullscreen) {
            // ref.current.webkitReqeustFullscreen()
            // }
            // if (ref.current.mozReqeustFullscreen) {
            // ref.current.mozReqeustFullscreen()
            // if(ref.current.msReqeustFullscreen) {
            // ref.current.msReqeustFullscreen()
        }
    }, []);
    var exitFull = (0, react_1.useCallback)(function () {
        document.exitFullscreen();
        setIsFull(false);
    }, []);
    return { ref: ref, triggerFull: triggerFull, exitFull: exitFull, isFull: isFull };
}
exports.useFullscreen = useFullscreen;
//# sourceMappingURL=useFullscreen.js.map