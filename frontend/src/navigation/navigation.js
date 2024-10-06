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
exports.default = NavBar;
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
require("./navigation.css");
const airplane_travelling_around_earth_svgrepo_com_svg_1 = __importDefault(require("./airplane-travelling-around-earth-svgrepo-com.svg"));
function NavBar() {
    const [isScrolled, setIsScrolled] = (0, react_1.useState)(false); // Состояние для отслеживания прокрутки
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Получаем текущую позицию прокрутки
            if (scrollPosition > 0) {
                setIsScrolled(true); // Если прокрутка произошла, устанавливаем isScrolled в true
            }
            else {
                setIsScrolled(false); // В противном случае устанавливаем isScrolled в false
            }
        };
        window.addEventListener('scroll', handleScroll); // Добавляем обработчик события прокрутки
        return () => {
            window.removeEventListener('scroll', handleScroll); // Удаляем обработчик события при размонтировании компонента
        };
    }, []);
    return (<material_1.AppBar position="fixed" className={isScrolled ? 'scrolled' : 'transparent'} sx={{ bgcolor: isScrolled ? 'rgba(128, 75, 31, 0.8)' : 'transparent',
            height: 80,
            paddingTop: 1.5,
            paddingLeft: 3,
        }} elevation={isScrolled ? 4 : 0}>

            <material_1.Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <material_1.Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <material_1.SvgIcon component="span">
                        <img src={airplane_travelling_around_earth_svgrepo_com_svg_1.default} alt="Airplane Icon" style={{ width: '120%', height: 'auto' }}/>
                    </material_1.SvgIcon>
                    <material_1.Typography variant="h5" component="div" sx={{ fontFamily: 'Roboto', marginLeft: 2 }}>
                        TBSky
                    </material_1.Typography>
                </material_1.Box>

                <material_1.Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <material_1.Typography variant="h5" component="div" sx={{ marginTop: 0.5, }}>
                        Login
                    </material_1.Typography>
                    <material_1.Typography variant="h5" component="div" sx={{ marginTop: 0.5, marginLeft: 3 }}>
                        Promotions
                    </material_1.Typography>
                    <material_1.Typography variant="h5" component="div" sx={{ marginTop: 0.5, marginLeft: 3, marginRight: 2, }}>
                        Contact Us
                    </material_1.Typography>
                </material_1.Box>
            </material_1.Toolbar>
        </material_1.AppBar>);
}
