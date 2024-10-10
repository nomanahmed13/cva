import { createBrowserRouter, Navigate } from 'react-router-dom';


/************* Un Authorized *************/

import Login from '../pages/unAuthorized/login/Login';
import Password from '../pages/unAuthorized/password/Password';
import DashboardLayout from '../layouts/dashboardLayout/DashboardLayout';
import AuthLayout from '../layouts/authLayout/AuthLayout';

/************* Authorized *************/

import Home from '../pages/authorized/home/Home';
import Inbox from '../pages/authorized/inbox/Inbox';
import Recruiting from '../pages/authorized/recruiting/Recruiting';
import Calendar from '../pages/authorized/calendar/Calendar';
import Reporting from '../pages/authorized/reporting/Reporting';
import Automations from '../pages/authorized/automations/Automations';
import Imports from '../pages/authorized/imports/Imports';
import Marketplace from '../pages/authorized/marketplace/Marketplace';

import Overview from '../pages/authorized/employees/overview/Overview';
import Performance from '../pages/authorized/employees/performance/Performance';
import Training from '../pages/authorized/employees/training/Training';

import Employee from '../pages/authorized/employees/overview/employee/Employee';
import AddEmployee from '../pages/authorized/employees/overview/employee/AddEmployee';
import EmployeeDetail from '../pages/authorized/employees/overview/employee/EmployeeDetail';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/auth/login" />,
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'inbox', element: <Inbox /> },
            { path: 'recruiting', element: <Recruiting /> },
            { path: 'calendar', element: <Calendar /> },
            { path: 'reporting', element: <Reporting /> },
            { path: 'automations', element: <Automations /> },
            { path: 'imports', element: <Imports /> },
            { path: 'marketplace', element: <Marketplace /> },

            { path: 'overview', element: <Overview /> },
            { path: 'performance', element: <Performance /> },
            { path: 'training', element: <Training /> },

            { path: 'employee', element: <Employee /> },
            { path: 'employee-add', element: <AddEmployee /> },
            { path: 'employee-detail/:id', element: <EmployeeDetail /> },
        
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'password',
                element: <Password />,
            }
        ],
    },
]);

export default router;