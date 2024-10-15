import { FaHome } from 'react-icons/fa';

export const MenuItems = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaHome />,
    },
    {
        title: 'Organizations',
        path: '/organizations',
        icon: <FaHome />,
    },
    {
        title: 'Brands',
        path: '/brands',
        icon: <FaHome />,
    },
    {
        title: 'User',
        path: '/user',
        icon: <FaHome />,
    },
    {
        title: 'Campaign',
        icon: <FaHome />,
        children: [
            { title: 'Campaign', path: '/campaign' },
            { title: 'Campaign Details', path: '/campaign-details/:id' },
            { title: 'Deals', path: '/deals' },
        ],
    },
    {
        title: 'BA',
        path: '/ba',
        icon: <FaHome />,
    },
  ];