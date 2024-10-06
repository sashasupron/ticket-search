"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./main_page.css");
const background2_png_1 = __importDefault(require("./assets/background2.png"));
const box_tsx_1 = __importDefault(require("./box/box.tsx"));
const text_1 = __importDefault(require("./text/text"));
function MainPage() {
    return (<div className="fullscreen">
      <img src={background2_png_1.default} className="full-img"/>
      <box_tsx_1.default />
      <text_1.default />
    </div>);
}
exports.default = MainPage;
