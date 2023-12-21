"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInput = void 0;
var react_1 = require("react");
function useInput(init, validator) {
    var _a = (0, react_1.useState)(init), state = _a[0], setState = _a[1];
    var onChange = (0, react_1.useCallback)(function (value) {
        if (typeof validator !== 'function')
            return;
        var willUpdate = validator(value);
        if (willUpdate)
            setState(value);
    }, [validator]);
    return [state, setState, onChange];
}
exports.useInput = useInput;
//# sourceMappingURL=useInput.js.map