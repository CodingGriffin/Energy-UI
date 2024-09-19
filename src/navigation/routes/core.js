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
  AddSystemPage,
  Tenders,
  TenderDetail,
} from "ui";
import { AddSystemToZone, DashBoard, ZoneList } from "ui/core";
import { AddOrderPage } from "ui/core/add-order/AddOrder";

export const CoreRoutes = [
  {
    path: "/",
    component: Page1,
  },
  {
    path: "/page2",
    component: Page2,
  },
  {
    path: "/contact-details",
    component: ContactDetails,
  },
  {
    path: "/quote",
    component: Quote,
  },
  {
    path: "/step/:identifier",
    component: Step,
  },
  {
    path: "/todo",
    component: TodoPage,
  },
  {
    path: "/submit",
    component: Submit,
  },
  {
    path: "/thank-you",
    component: ThankYou,
  },
  {
    path: "/portal/:page",
    component: Portal,
  },
  {
    path: "/zones",
    component: ZoneList,
  },
  {
    path: "/add-system-to-zone",
    component: AddSystemToZone,
  },
  {
    path: "/dashboard",
    component: DashBoard,
  },
  {
    path: "/portal/:page/:id",
    component: Portal,
  },
  {
    path: "/add-system",
    component: AddSystemPage,
  },
  {
    path: "/tenders",
    component: Tenders,
  },
  {
    path: "/tenders/:identifier",
    component: TenderDetail,
  },
  {
    path: "/add-order",
    component: AddOrderPage,
  },
];
