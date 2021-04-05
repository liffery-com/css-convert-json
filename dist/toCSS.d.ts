import { JSONNode } from './toJSON';
/**
 * @param node
 *            A JSON node.
 * @param depth
 *            The depth of the current node; used for indentation and
 *            optional.
 * @param breaks
 *            Whether to add line breaks in the output.
 */
export declare const toCSS: (node: JSONNode, depth?: number, breaks?: number) => string;
