"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strNode = void 0;
const toCSS_1 = require("./toCSS");
const strNode = function (name, value, depth = 0) {
    let cssString = '';
    for (let i = 0; i <= depth; ++i) {
        cssString += '  ';
    }
    cssString += name + ' {\n';
    cssString += toCSS_1.toCSS(value, depth + 1);
    for (let i = 0; i <= depth; ++i) {
        cssString += '  ';
    }
    cssString += '}\n';
    return cssString;
};
exports.strNode = strNode;
//# sourceMappingURL=strNode.js.map