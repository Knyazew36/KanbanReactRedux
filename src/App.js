import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RouteApp from './route/Routes';
function App() {
    return (_jsxs("div", { className: 'wrapper h-screen flex flex-col justify-between bg-[#0079BF]', children: [_jsx(Header, {}), _jsx(RouteApp, {}), _jsx(Footer, {})] }));
}
export default App;
