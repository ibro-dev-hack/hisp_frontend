import { DashboardIcon } from 'assets/icons/DashboardIcon';
import { Boutique } from 'assets/icons/Boutique';
import { SettingIcon } from 'assets/icons/SettingIcon';
import { DASHBOARD, SETTINGS, BOUTIQUE, CATEGORIE, COMMUNICATION } from './constants';
import { CategoryIcon } from 'assets/icons/CategoryIcon';
import { CommunicationIcon } from 'assets/icons/CommunicationIcon';

export const sidebarMenu = [
   {
      name: "Dashboard",
      path: DASHBOARD,
      icon: <DashboardIcon />,
      exact: true,
      isCollapsed: false,
   },
   {
      name: "Boutique",
      path: BOUTIQUE,
      icon: <Boutique />,
      exact: false,
      isCollapsed: false,
   },
   {
      name: "Categorie",
      path: CATEGORIE,
      icon: <CategoryIcon />,
      exact: false,
      isCollapsed: false,
   },
   {
      name: "Communication",
      path: COMMUNICATION,
      icon: <CommunicationIcon />,
      exact: false,
      isCollapsed: false,
   },
   {
      name: "Parametre",
      path: SETTINGS,
      icon: <SettingIcon />,
      exact: false,
      isCollapsed: false,
   },
]