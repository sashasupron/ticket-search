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
exports.default = BoxMain;
const React = __importStar(require("react"));
const material_1 = require("@mui/material");
const inputDeparture_tsx_1 = __importDefault(require("./inputs/inputDeparture.tsx"));
const inputDestination_tsx_1 = __importDefault(require("./inputs/inputDestination.tsx"));
const passengersAmount_tsx_1 = __importDefault(require("./selects/passengersAmount.tsx"));
const class_tsx_1 = __importDefault(require("./selects/class.tsx"));
const departureDate_tsx_1 = __importDefault(require("./date/departureDate.tsx"));
const arrivalDate_tsx_1 = __importDefault(require("./date/arrivalDate.tsx"));
const search_tsx_1 = __importDefault(require("./buttons/search.tsx"));
function BoxMain() {
    return (<material_1.Box component="form" sx={{
            position: 'absolute',
            bottom: 110,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 780,
            height: 150,
            borderRadius: 2,
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
        }} noValidate autoComplete="off">
      <material_1.Grid container spacing={2} sx={{
            marginTop: '-10px'
        }}>

        {/* Первая строка */}
        <material_1.Grid item xs={4}>
          <inputDeparture_tsx_1.default />
        </material_1.Grid>

        <material_1.Grid item xs={4}>
          <inputDestination_tsx_1.default />
        </material_1.Grid>

        <material_1.Grid item xs={4}>
          <passengersAmount_tsx_1.default />
        </material_1.Grid>

        {/* Вторая строка */}
        <material_1.Grid item xs={3}>
          <departureDate_tsx_1.default />
        </material_1.Grid>

        <material_1.Grid item xs={3}>
          <arrivalDate_tsx_1.default />
        </material_1.Grid>

        <material_1.Grid item xs={3}>
          <class_tsx_1.default />
        </material_1.Grid>
        
        <material_1.Grid item xs={3}>
          <search_tsx_1.default />
        </material_1.Grid>

      </material_1.Grid>
    </material_1.Box>);
}
