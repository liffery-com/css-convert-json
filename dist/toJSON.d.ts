import { JSONNode } from './index';
export declare const toJSON: (cssString: string, args?: {
    ordered: boolean;
    comments: boolean;
    stripComments: boolean;
    split: boolean;
}) => JSONNode;
