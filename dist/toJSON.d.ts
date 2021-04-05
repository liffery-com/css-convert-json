export interface CssAttributes {
    [attribute: string]: string;
}
export interface Children {
    [attribute: string]: {
        children: Children;
        attributes: CssAttributes;
    };
}
export interface JSONNode {
    children: Children;
    attributes: CssAttributes;
}
export declare const toJSON: (cssString: string, args?: {
    ordered: boolean;
    comments: boolean;
    stripComments: boolean;
    split: boolean;
}) => JSONNode;
