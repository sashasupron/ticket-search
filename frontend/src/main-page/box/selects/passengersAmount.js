"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PassengersAmount;
const React = __importStar(require("react"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const Select_1 = __importDefault(require("@mui/material/Select"));
function PassengersAmount() {
    const [passengerCount, setPassengerCount] = React.useState('');
    const handlePassengerChange = (event) => {
        setPassengerCount(event.target.value);
    };
    return (<div>
      <FormControl_1.default variant="filled" sx={{
            minWidth: 170,
            background: 'white',
            borderRadius: 1,
            marginRight: -8,
        }}>

        <InputLabel_1.default id="demo-simple-select-filled-label"> Passengers </InputLabel_1.default>
        
        <Select_1.default labelId="demo-simple-select-filled-label" id="passengersAmount" value={passengerCount} onChange={handlePassengerChange}>
          <MenuItem_1.default value="1">1</MenuItem_1.default>
          <MenuItem_1.default value="2">2</MenuItem_1.default>
          <MenuItem_1.default value="3">3</MenuItem_1.default>
          <MenuItem_1.default value="4">4</MenuItem_1.default>
          <MenuItem_1.default value="5">5</MenuItem_1.default>

        </Select_1.default>
      </FormControl_1.default>
          
    </div>);
}
