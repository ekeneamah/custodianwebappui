import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/home',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },



  {
    name: 'Forms',
    title: true
  },
  {
    name: 'Saving & Investment',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Capital Builder',
        url: '/base/saveingsninvestment/Capital Builder'
      },
      {
        name: 'Esusu Shield',
        url: '/base/saveingsninvestment/Esusu Shield'
      },
      {
        name: 'Investment Plus Plan',
        url: '/base/saveingsninvestment/Investment Plus Plan'
      },
      {
        name: 'Personal Provident Plan',
        url: '/base/saveingsninvestment/Personal Provident Plan'
      }





    ]
  }







];
