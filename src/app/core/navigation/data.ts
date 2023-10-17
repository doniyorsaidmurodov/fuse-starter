import {FuseNavigationItem} from '../../../@fuse/components/navigation';
import {Navigation} from './navigation.types';

export const defaultNavigation: FuseNavigationItem[] = [
  {
    id   : 'example',
    title: 'Example',
    type : 'basic',
    icon : 'heroicons_outline:chart-pie',
    link : '/example'
  },
  {
    id   : 'documents',
    title: 'Documents',
    type : 'basic',
    icon : 'heroicons_outline:document',
    link : '/documents'
  }
];

export const navigation: Navigation = {
  default: defaultNavigation
}
