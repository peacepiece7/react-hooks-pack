"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBeforeLeaveMouse = exports.useLeaveBeforeSave = void 0;
var react_1 = require("react");
function useLeaveBeforeSave(cb) {
    var handler = (0, react_1.useCallback)(function (ev) {
        if (cb())
            ev.preventDefault();
    }, [cb]);
    (0, react_1.useEffect)(function () {
        window.addEventListener('beforeunload', handler);
        return function () { return window.removeEventListener('beforeunload', handler); };
    }, []);
}
exports.useLeaveBeforeSave = useLeaveBeforeSave;
function useBeforeLeaveMouse(cb) {
    // 전역으로 선언하기엔 이름이 너무 흔합니다.
    var html = (0, react_1.useMemo)(function () {
        var _a;
        return typeof document !== 'undefined'
            ? (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()
            : null;
    }, []);
    if (!html) {
        throw new Error('only supported in browser, plz check your env');
    }
    var handler = (0, react_1.useCallback)(function (ev) {
        if (ev.clientY <= 0 ||
            ev.clientY >= html.bottom ||
            ev.clientX <= 0 ||
            ev.clientX >= html.right)
            cb();
    }, [cb]);
    (0, react_1.useEffect)(function () {
        window.addEventListener('mouseout', handler);
        return function () { return window.removeEventListener('mouseout', handler); };
    }, []);
}
exports.useBeforeLeaveMouse = useBeforeLeaveMouse;
//# sourceMappingURL=useBeforeLeave.js.map