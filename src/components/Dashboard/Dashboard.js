import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Backlog from '../Backlog/Backlog';
import Finished from '../Finished/Finished';
import Progress from '../Progress/Progress';
import Ready from '../Ready/Ready';
const Dashboard = () => {
    return (_jsxs("main", { className: ' py-[25px] px-[19px] h-full grid grid-cols-1 gap-6 lg:grid-cols-4', children: [_jsx(Backlog, {}), _jsx(Progress, {}), _jsx(Ready, {}), _jsx(Finished, {})] }));
};
export default Dashboard;
