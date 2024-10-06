"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material"); // Импортируем Typography из Material-UI
function Description() {
    return (<div className="description-container">
      <material_1.Typography style={{
            color: 'rgba(255, 255, 255, 1)',
            fontFamily: 'Roboto',
            fontWeight: '100',
            fontSize: '40px',
            textAlign: 'left',
            // marginLeft: '80px',
            // marginTop: '-100px',
            marginBottom: '40px',
        }}>
        Explore your adventures! Book flights now!
      </material_1.Typography>

      {/* <Typography
          style={{
            color: 'rgba(255, 255, 255, 1)',
            fontFamily: 'Roboto',
            fontWeight: '100',
            fontSize: '30px',
            textAlign: 'center',
            // marginLeft: '80px',
            marginBottom : '20px',
          }}
        >
          Book flights now!
        </Typography> */}
    </div>);
}
exports.default = Description;
