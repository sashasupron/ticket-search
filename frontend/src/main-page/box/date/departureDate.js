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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DateDeparture;
const React = __importStar(require("react"));
const AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
const LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
const DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
function DateDeparture() {
    return (<LocalizationProvider_1.LocalizationProvider dateAdapter={AdapterDayjs_1.AdapterDayjs}>
      <DatePicker_1.DatePicker label="Departure Date" sx={{
            background: 'white',
            borderRadius: 1,
            marginTop: 1,
        }}/>
    </LocalizationProvider_1.LocalizationProvider>);
}
