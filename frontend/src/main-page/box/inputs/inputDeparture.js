"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function InputDeparture() {
    return (<div>
      <material_1.TextField id="departurePlace" label="Where from?" variant="filled" sx={{
            background: 'white',
            borderRadius: 1,
            width: 270,
        }}/>
    </div>);
}
exports.default = InputDeparture;
