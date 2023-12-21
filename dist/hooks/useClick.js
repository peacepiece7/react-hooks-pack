"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClick = void 0;
var react_1 = require("react");
// prettier-ignore
var useClick = function (onClick) {
    var element = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (element.current)
            element.current.addEventListener('click', onClick);
        return function () {
            if (element.current)
                element.current.removeEventListener('click', onClick);
        };
    }, []);
    return element;
};
exports.useClick = useClick;
//# sourceMappingURL=useClick.js.map