import { FaHome } from 'react-icons/fa';
import { FaBuilding } from "react-icons/fa";
import { TbBrandCodepen } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { AiOutlinePartition } from "react-icons/ai";
import { getDynamicPath } from '@helper/PathHelper';

export const MenuItems = [
    {
        title: 'Dashboard',
        path: getDynamicPath('/home'),
        icon: <FaHome />,
    },
    {
        title: 'Organization',
        path: getDynamicPath('/organization'),
        icon: <FaBuilding />,
    },
    {
        title: 'Brand',
        path: getDynamicPath('/brand'),
        icon: <TbBrandCodepen />,
    },
    {
        title: 'User',
        path: getDynamicPath('/user'),
        icon: <FaUsers />,
    },
    {
        title: 'Campaign',
        icon: <MdCampaign />,
        children: [
            { title: 'Campaign', path: getDynamicPath('/campaign') },
            { title: 'Deals', path: getDynamicPath('/campaign', 'deal') },
            { title: 'Gift', path: getDynamicPath('/campaign', 'gift') },
            { title: 'Sample', path: getDynamicPath('/campaign', 'sample') },
            { title: 'Usership', path: getDynamicPath('/campaign', 'usership') },
        ],
    },
    {
        title: 'BA',
        path: getDynamicPath('/ba'),
        icon: <AiOutlinePartition />,
    },
  ];