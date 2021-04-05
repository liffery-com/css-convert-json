"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const cssString = `  @media (max-width: 800px) {
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
`;
const json = {
    'children': {
        '@media (max-width: 800px)': {
            'children': {
                '#main #comments': {
                    'children': {},
                    'attributes': {
                        'margin': '0px',
                        'width': 'auto',
                        'background': 'red'
                    }
                },
                '#main #buttons': {
                    'children': {},
                    'attributes': {
                        'padding': '5px 10px',
                        'color': 'blue'
                    }
                }
            },
            'attributes': {}
        },
        '#main #content': {
            'children': {},
            'attributes': {
                'margin': '0 7.6%',
                'width': 'auto'
            }
        },
        '#nav-below': {
            'children': {},
            'attributes': {
                'border-bottom': '1px solid #ddd',
                'margin-bottom': '1.625em',
                'background-image': 'url(http://www.example.com/images/im.jpg)'
            }
        }
    },
    'attributes': {}
};
it('should return the expected css from json', () => __awaiter(void 0, void 0, void 0, function* () {
    const builtJson = index_1.toJSON(cssString);
    expect(builtJson).toEqual(json);
}));
it('should return the expected css from json', () => __awaiter(void 0, void 0, void 0, function* () {
    const builtCSS = index_1.toCSS(json);
    expect(builtCSS).toBe(cssString);
}));
//# sourceMappingURL=toCSSandJSON.spec.js.map