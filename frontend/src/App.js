"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const main_page_1 = __importDefault(require("./main-page/main_page"));
require("./App.css");
const navigation_1 = __importDefault(require("./navigation/navigation"));
const temp_1 = __importDefault(require("./main-page/temp"));
const styles_1 = require("@mui/material/styles");
const theme = (0, styles_1.createTheme)({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});
function App() {
    return (<styles_1.ThemeProvider theme={theme}>
        <navigation_1.default />
        <main_page_1.default />
        <temp_1.default />
    </styles_1.ThemeProvider>);
}
exports.default = App;
