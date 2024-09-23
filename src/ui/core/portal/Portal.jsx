import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Constants } from "common";

import { Button, Modal } from "common/components";

import { withCommon } from "common/hocs";

import styles from "./Portal.module.css";

import { OrderList, OrderDetail, ZoneList, SystemList, SystemDetail } from "ui";
import { tenderAllData } from "./sample";
import { Compliance, DashBoard } from "..";
import { AddNewZone } from "../dashboard/components";

const MENU_ITEMS = [
  {
    title: "Dashboard",
    path: "/portal/dashboard",
    content: () => {
      return <DashBoard />;
    },
  },
  {
    title: "Zones",
    path: "/portal/zones",
    content: () => {
      return <ZoneList />;
    },
    subItems: [
      {
        title: "Sites",
        path: "/portal/sites",
        content: () => {
          return <div>portal/Sites</div>;
        },
      },
      {
        title: "Systems",
        path: "/portal/systems",
        content: (identifier) => {
          return identifier ? (
            <SystemDetail id={identifier} />
          ) : (
            <SystemList info={tenderAllData} />
          );
        },
      },
    ],
  },
  {
    title: "Accounts",
    subItems: [
      {
        title: "Assets Financial Performance",
        path: "/portal/performance",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
      {
        title: "Transactions",
        path: "/portal/transactions",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
      {
        title: "Withdraw",
        path: "/portal/withdraw",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
    ],
  },
  {
    title: "Settings",
    subItems: [
      {
        title: "Account Setup",
        path: "/portal/account-setup",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
      {
        title: "Team Setup",
        path: "/portal/team-setup",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
      {
        title: "Alerts Setup",
        path: "/portal/alerts-setup",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
    ],
  },
  {
    title: "System Calculator",
    subItems: [
      {
        title: "RFQ's",
        path: "/portal/rfq",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
      {
        title: "Orders",
        path: "/portal/orders",
        content: (identifier, showSidebar) => {
          return identifier ? (
            <OrderDetail id={identifier} handleSidebar={showSidebar}/>
          ) : (
            <OrderList info={tenderAllData} handleSidebar={showSidebar}/>
          );
        },
      },
      {
        title: "Public Tenders",
        path: "/portal/tenders",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
    ],
  },
  {
    title: "Support",
    subItems: [
      {
        title: "Tickets",
        path: "/portal/tickets",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
      {
        title: "Term and Conditions",
        path: "/portal/term-conditions",
        content: () => {
          return <div>portal/dashboard</div>;
        },
      },
    ],
  },
  {
    title: "Compliance",
    subItems: [
      {
        title: "Compliance",
        path: "/portal/compliance",
        content: () => {
          return <Compliance />;
        },
      },
    ],
  },
];


const PortalPage = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  const [content, setContent] = useState(null);
  const [pages, setPages] = useState(null);
  const [identifier, setIdentifier] = useState(null);
  const [showSidebar, setShowSidebar] = useState(1);

  const load = () => {
    const match = props.location.pathname.match(/(\d+)$/);
    const identifier = match ? match[1] : null;
    identifier? setShowSidebar(0):setShowSidebar(1);
    
    setMenuItems(
      MENU_ITEMS.map((el, index1) => (
        <div key={`${el.title}-${index1}`}>
          <div
            className={
              el.subItems
                ? styles.menuItemContainerTitle
                : styles.menuItemContainerItem
            }
            style={{
              backgroundColor: props.location.pathname.includes(el.path)
                ? "#ecedef"
                : "transparent",
            }}
            onClick={() =>
              props.location.pathname !== el.path && props.navigate(el.path)
            }
          >
            {el.title}
          </div>
          {el.subItems
            ? el.subItems.map((item, index2) => (
                <div
                  key={`${item.title}-${index2}`}
                  className={styles.menuItemContainerItem}
                  style={{
                    backgroundColor: props.location.pathname.includes(item.path)
                      ? "#ecedef"
                      : "transparent",
                  }}
                  onClick={() =>
                    props.location.pathname !== item.path &&
                    props.navigate(item.path)
                  }
                >
                  {item.title}
                </div>
              ))
            : null}
        </div>
      ))
    );

    for (let item of MENU_ITEMS) {
      if (props.location.pathname.includes(item.path)) {
        setContent(item.content ? item.content(identifier) : null);
        break;
      } else if (item.subItems) {
        item.subItems.forEach((subEl) => {
          if (props.location.pathname.includes(subEl.path)) {
            setContent(subEl.content ? subEl.content(identifier, setShowSidebar) : null);
          }
        });
      }
    }
  };

  useEffect(() => {
    load();
  }, [props.location.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.sideContainer} style={!showSidebar? {width:"0px"}:{}}>
        <div className={styles.menuItemContainer}>{menuItems}</div>
      </div>
      <div className={styles.contentContainer}>{content ? content : null}</div>
    </div>
  );
};

export const Portal = withCommon(PortalPage, {
  showHeader: true,
  isHeaderSeeThrough: true,
  onPortal: true,
});
