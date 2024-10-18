import { FaHome } from 'react-icons/fa';
import { FaBuilding } from "react-icons/fa";
import { TbBrandCodepen } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { AiOutlinePartition } from "react-icons/ai";

export const MenuItems = [
    {
        title: 'Dashboard',
        path: '/dashboard/home',
        icon: <FaHome />,
    },
    {
        title: 'Organizations',
        path: '/organizations',
        icon: <FaBuilding />,
    },
    {
        title: 'Brands',
        path: '/brands',
        icon: <TbBrandCodepen />,
    },
    {
        title: 'User',
        path: '/user',
        icon: <FaUsers />,
    },
    {
        title: 'Campaign',
        icon: <MdCampaign />,
        children: [
            { title: 'Campaign', path: '/campaign' },
            { title: 'Deals', path: '/deals' },
        ],
    },
    {
        title: 'BA',
        path: '/ba',
        icon: <AiOutlinePartition />,
    },
  ];