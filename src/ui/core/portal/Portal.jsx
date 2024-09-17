import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Constants } from "common";

import { Button } from "common/components";

import { withCommon } from "common/hocs";

import styles from "./Portal.module.css";

import { OrderList, OrderDetail } from "ui";
import { tenderAllData } from "../tenders/sample";

const MENU_ITEMS = [
  {
    title: "Dashboard",
    path: "/portal/dashboard",
    content: () => {
      return <div>
        portal/dashboard
      </div>
    }
  },
  {
    title: "Sales",
    path: "/portal/sales",
    content: () => {
      return <div>
        portal/dashboard
      </div>
    }
  },
  {
    title: "Service Center",
    path: "/portal/service-center",
    content: () => {
      return <div>
        portal/Service
      </div>
    }
  },
  {
    title: "Owner",
    path: "/portal/owner",
    content: () => {
      return <div>
        portal/owner
      </div>
    }
  },
  {
    title: "Orders",
    path: "/portal/orders",
    content: (identifier) => {
      console.log("identifier", identifier);
      return identifier ? <OrderDetail /> : <OrderList info={tenderAllData} />;
    },
  },
];

const PortalPage = (props) => {
  const [menuItems, setMenuItems] = useState([]);
  const [content, setContent] = useState(null);
  const [page, setPage] = useState(null);
  const [identifier, setIdentifier] = useState(null);

  const load = () => {
    setMenuItems(
      MENU_ITEMS.map((item, index) => (
        <div
          key={`menu-${index}`}
          className={styles.menuItemContainerItem}
          style={{
            backgroundColor: props.location.pathname.includes(item.path)
              ? Constants.Colors.white
              : "transparent",
          }}
          onClick={() =>
            props.location.pathname !== item.path && props.navigate(item.path)
          }
        >
          {item.title}
        </div>
      ))
    );

    let currentItem = MENU_ITEMS.filter((item) => {
      return props.location.pathname.includes(item.path);
    });

    const match = props.location.pathname.match(/(\d+)$/);
    const identifier = match ? match[1] : null;
    setContent(currentItem[0]["content"](identifier))
      
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
          <img className={styles.logo} src={Constants.Images.Icons.Logo} />
        </div>

        <div className={styles.menuItemContainer}>{menuItems}</div>

        <Button
          type={"secondaryoutline"}
          text={"Logout"}
          style={{
            margin: "20px 15px",
          }}
        />
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
