import {
  Page1,
  Page2,
  ContactDetails,
  Portal,
  Quote,
  Step,
  Submit,
  ThankYou,
  TodoPage,
  Tenders,
  TenderDetail
} from 'ui';

export const CoreRoutes = [
  {
    path: '/',
    component: Page1,
  },
  {
    path: '/page2',
    component: Page2,
  },
  {
    path: '/contact-details',
    component: ContactDetails,
  },
  {
    path: '/quote',
    component: Quote,
  },
  {
    path: '/step/:identifier',
    component: Step,
  },
  {
    path: '/todo',
    component: TodoPage,
  },
  {
    path: '/submit',
    component: Submit,
  },
  {
    path: '/thank-you',
    component: ThankYou,
  },
  {
    path: '/portal/:page',
    component: Portal,
  },
  {
    path: '/tenders/list',
    component: Tenders
  },
  {
    path: '/tenders/:identifier',
    component: TenderDetail
  }
];