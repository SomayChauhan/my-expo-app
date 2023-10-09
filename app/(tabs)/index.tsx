import TabOneScreen from './one';
import TabTwoScreen from './two';
import TabThreeScreen from './three';

export type TTab = {
  key: string;
  title: string;
  focusedIcon: string;
  component: any;
  unfocusedIcon?: string;
  color?: string;
  badge?: boolean;
};

const Tabs: TTab[] = [
  {
    key: 'One',
    title: 'Tab One',
    focusedIcon: 'image-album',
    color: '#6200ee',
    component: TabOneScreen,
  },
  {
    key: 'library',
    title: 'Library',
    focusedIcon: 'inbox',
    badge: true,
    unfocusedIcon: 'inbox-outline',
    component: TabTwoScreen,
  },
  {
    key: 'library',
    title: 'Favorites',
    focusedIcon: 'heart',
    unfocusedIcon: 'inbox-outline',
    component: TabThreeScreen,
  },
];
export default Tabs;
