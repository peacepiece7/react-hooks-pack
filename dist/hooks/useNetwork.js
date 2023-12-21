"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNetwork = void 0;
var react_1 = require("react");
function useNetwork(onChange) {
    var _a = (0, react_1.useState)(navigator.onLine), status = _a[0], setStatus = _a[1];
    var handleChange = function () {
        if (typeof onChange === 'function') {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);
        return function () {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        };
    }, []);
    return status;
}
exports.useNetwork = useNetwork;
//# sourceMappingURL=useNetwork.js.map