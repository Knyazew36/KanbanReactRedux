import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Task from '../components/Taks/Task';
const RouteApp = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { index: true, path: '/', element: _jsx(Dashboard, {}) }), _jsx(Route, { index: true, path: '/task/:id', element: _jsx(Task, {}) })] }));
};
export default RouteApp;
