"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCSS = void 0;
const strAttr_1 = require("./strAttr");
const strNode_1 = require("./strNode");
/**
 * @param node
 *            A JSON node.
 * @param depth
 *            The depth of the current node; used for indentation and
 *            optional.
 * @param breaks
 *            Whether to add line breaks in the output.
 */
const toCSS = function (node, depth = 0, breaks = 0) {
    let cssString = '';
    if (node.attributes) {
        for (const i in node.attributes) {
            const att = node.attributes[i];
            cssString += strAttr_1.strAttr(i, att, depth);
        }
    }
    if (node.children) {
        let first = true;
        for (const i in node.children) {
            if (breaks && !first) {
                cssString += '\n';
            }
            else {
                first = false;
            }
            cssString += strNode_1.strNode(i, node.children[i], depth);
        }
    }
    return cssString;
};
exports.toCSS = toCSS;
//# sourceMappingURL=toCSS.js.map