"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strAttr = void 0;
const strAttr = (name, value, depth = 0) => {
    let response = '';
    for (let i = 0; i <= depth; ++i) {
        response += '  ';
    }
    return response + name + ': ' + value + ';\n';
};
exports.strAttr = strAttr;
//# sourceMappingURL=strAttr.js.map