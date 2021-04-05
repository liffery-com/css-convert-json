import { toJSON } from './toJSON';
import { toCSS } from './toCSS';

export interface CssAttributes {
  [attribute: string]: string
}

export interface Children {
  [attribute: string]: {
    children: Children,
    attributes: CssAttributes
  }
}

export interface JSONNode {
  children: Children,
  attributes: CssAttributes
}

export { toJSON, toCSS };
