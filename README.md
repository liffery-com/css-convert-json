
# css-convert-json Typescript

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [About](#about)
- [Installation](#installation)
  - [NPM](#npm)
- [Usage](#usage)
  - [JavaScript / Typescript](#javascript--typescript)
  - [npm run / CLI](#npm-run--cli)
- [Sample](#sample)
  - [JSON](#json)
  - [CSS](#css)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## About

Can convert CSS to JSON and back to CSS.

## Installation

### NPM

```bash
npm install css-convert-json
```

## Usage

### JavaScript / Typescript

```typescript

import { toCSS, toJSON } from 'css-convert-json';

// To JSON
const json = toJSON(cssString);

// To CSS
const css = toCSS(jsonObject);
```

## Sample

See `src/__tests__/toCSSandJSON.spec.ts` 

### JSON

```json
{
  "children": {
    "@media (max-width: 800px)": {
      "children": {
        "#main #comments": {
          "children": {},
          "attributes": {
            "margin": "0px",
            "width": "auto",
            "background": "red"
          }
        },
        "#main #buttons": {
          "children": {},
          "attributes": {
            "padding": "5px 10px",
            "color": "blue"
          }
        }
      },
      "attributes": {}
    },
    "#main #content": {
      "children": {},
      "attributes": {
        "margin": "0 7.6%",
        "width": "auto"
      }
    },
    "#nav-below": {
      "children": {},
      "attributes": {
        "border-bottom": "1px solid #ddd",
        "margin-bottom": "1.625em",
        "background-image": "url(http://www.example.com/images/im.jpg)"
      }
    }
  },
  "attributes": {}
}
```

### CSS

```css
@media (max-width: 800px) {
  #main #comments {
    margin: 0px;
    width: auto;
    background: red;
  }
  #main #buttons {
    padding: 5px 10px;
    color: blue;
  }
}
#main #content {
  margin: 0 7.6%;
  width: auto;
}
#nav-below {
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.625em;
  background-image: url(http://www.example.com/images/im.jpg);
}
```
