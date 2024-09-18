import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Constants } from "common";

import { Button } from "common/components";

import { withCommon } from "common/hocs";

import styles from "./Portal.module.css";

import { OrderList, OrderDetail, ZoneList } from "ui";
import { tenderAllData } from "./sample";
import { DashBoard } from "..";

const MENU_ITEMS = {
  Dashboard: [
    {
      title: "Dashboard",
      path: "/portal/dashboard",
      content: () => {
        return <DashBoard />;
      },
    },
  ],
  Zones: [
    {
      title: "Zones",
      path: "/portal/zones",
      content: () => {
        return <ZoneList />;
      },
    },
    {
      title: "Sites",
      path: "/portal/sites",
      content: () => {
        return <div>portal/dashboard</div>;
      },
    },
    {
      title: "Systems",
      path: "/portal/systems",
      content: () => {
        return <div>portal/dashboard</div>;
      },
    },
  ],
  Accounts: [
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
  Settings: [
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
  "System Calculator": [
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
      content: (identifier) => {
        return identifier ? (
          <OrderDetail id={identifier} />
        ) : (
          <OrderList info={tenderAllData} />
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
  Support: [
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
};

const PortalPage = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  const [content, setContent] = useState(null);
  const [pages, setPages] = useState(null);
  const [identifier, setIdentifier] = useState(null);

  const load = () => {
    setMenuItems(
      Object.keys(MENU_ITEMS).map((TITLE, index) => {
        return (
          <div key={TITLE}>
            <div>{TITLE}</div>
            {MENU_ITEMS[TITLE].map((item, index) => (
              <div
                key={`${item}-${index}`}
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
            ))}
          </div>
        );
      })
    );
    for (let key in MENU_ITEMS) {
      for (let v of MENU_ITEMS[key]) {
        if (props.location.pathname.includes(v.path)) {
          const match = props.location.pathname.match(/(\d+)$/);
          const identifier = match ? match[1] : null;
          identifier
            ? setContent(v.content(identifier))
            : setContent(v.content());
        }
      }
    }
  };

  useEffect(() => {
    load();
  }, [props.location.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.sideContainer}>
        <div
          className={styles.logoContainer}
          style={{ backgroundColor: Constants.Colors.secondary }}
        >
          <img
            className={styles.logo}
            src="/assets/images/icons/sideheader.svg"
          />
        </div>

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
