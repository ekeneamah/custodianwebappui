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
  },
  {
    name: 'Complaints',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'General Insurance',
        url: '/base/complaints/General Insurance'
      },
      {
        name: 'Life Insurance',
        url: '/base/complaints/Life Insurance'
      },
      {
        name: 'Trustees Limited',
        url: '/base/complaints/Trustees Limited'
      },
      {
        name: 'Sterling Pension',
        url: '/base/complaints/Sterling Pension'
      },
      {
        name:'Interstate Securities',
        url:'/dase/complaints/Interstate Securities'
      }
      ,
      {
        name:'UPDC FM',
        url:'/dase/complaints/UPDC FM'
      }
      ,
      {
        name:'UPDC PLC (Real Estate)',
        url:'/dase/complaints/UPDC PLC (Real Estate)'
      }
    ]
  }







];
