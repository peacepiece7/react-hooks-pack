"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTitle = void 0;
var react_1 = require("react");
var isBrowser = typeof window !== 'undefined';
function useTitle(initTitle) {
    var _a = (0, react_1.useState)(initTitle), title = _a[0], setTitle = _a[1];
    (0, react_1.useEffect)(function () {
        if (!isBrowser)
            return;
        var el = document.querySelector('title');
        el && el.setAttribute('title', title);
        setTitle(initTitle);
    }, [initTitle, title]);
    return { title: title, setTitle: setTitle };
}
exports.useTitle = useTitle;
//# sourceMappingURL=useTitle.js.map