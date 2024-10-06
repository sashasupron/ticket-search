"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function InputDestination() {
    return (<div>
      <material_1.TextField id="destinationPlace" label="Where to?" variant="filled" sx={{
            background: 'white',
            borderRadius: 1,
            width: 270,
            marginLeft: 4.5,
        }}/>
    </div>);
}
exports.default = InputDestination;
