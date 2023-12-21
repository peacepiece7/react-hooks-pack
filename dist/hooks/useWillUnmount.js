"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWillUnmount = void 0;
var react_1 = require("react");
/**
 * useWillUnmount hook
 * 컴포넌트가 언마운트 될 때 함수를 호출합니다.
 * @param {Function} callback 컴포넌트가 언마운트 될 때 호출 할 콜백 함수
 */
function useWillUnmount(callback) {
    (0, react_1.useEffect)(function () {
        return callback;
    }, []);
}
exports.useWillUnmount = useWillUnmount;
//# sourceMappingURL=useWillUnmount.js.map