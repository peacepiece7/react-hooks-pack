"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabs = void 0;
var react_1 = require("react");
function useTabs(initTab, allTabs) {
    var _a = (0, react_1.useState)(initTab), currentIndex = _a[0], setCurrentIndex = _a[1];
    return { currentItem: allTabs[currentIndex], setCurrentItem: setCurrentIndex };
}
exports.useTabs = useTabs;
//# sourceMappingURL=useTabs.js.map