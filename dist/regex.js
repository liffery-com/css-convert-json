"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.altX = exports.lineAttrX = exports.commentX = exports.lineX = exports.endX = exports.selX = void 0;
exports.selX = /([^\s\;\{\}][^\;\{\}]*)\{/g;
exports.endX = /\}/g;
exports.lineX = /([^\;\{\}]*)\;/g;
exports.commentX = /\/\*[\s\S]*?\*\//g;
exports.lineAttrX = /([^\:]+):([^\;]*);/;
// This is used, a concatenation of all above. We use alternation to
// capture.
exports.altX = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gim;
//# sourceMappingURL=regex.js.map