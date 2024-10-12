import { useEffect, useState } from "react";

import { withCommon } from "common/hocs";
import { Card } from "./components";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";
import { Map } from "@vis.gl/react-google-maps";

const JoinPageComponent = (props) => {
  const navigate = useNavigate();

  const options = [
    {
      title: "I need electricity",
      desc: "If you want access to electricity at a site.",
      Icon: () => {
        return (
          <svg
            width="34"
            height="50"
            viewBox="0 0 34 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7526 0.213868C27.0462 0.391166 27.2735 0.666936 27.3971 0.996129C27.5208 1.32532 27.5337 1.68848 27.4336 2.02627L22.0308 20.3127H31.9995C32.2924 20.3126 32.579 20.4018 32.8238 20.5694C33.0686 20.737 33.261 20.9756 33.3771 21.2558C33.4932 21.5359 33.5281 21.8454 33.4773 22.1459C33.4265 22.4464 33.2924 22.7249 33.0914 22.947L9.09229 49.5079C8.86007 49.7652 8.55107 49.9329 8.21564 49.9837C7.88021 50.0346 7.53813 49.9656 7.24516 49.788C6.9522 49.6104 6.72561 49.3347 6.60235 49.0058C6.47908 48.6769 6.4664 48.3142 6.56638 47.9768L11.9692 29.6872H2.00054C1.70759 29.6873 1.42101 29.5981 1.17619 29.4305C0.93137 29.2629 0.739021 29.0243 0.622889 28.7441C0.506758 28.464 0.471927 28.1545 0.522698 27.854C0.573468 27.5535 0.707616 27.275 0.908583 27.053L24.9077 0.491977C25.1396 0.235114 25.4482 0.0675285 25.7831 0.0164687C26.1181 -0.0345911 26.4598 0.0338781 26.7526 0.210743V0.213868Z"
              fill="black"
            />
          </svg>
        );
      },
      nextUrl: "/",
    },
    {
      title: "I want to invest",
      desc: "If you want to purchase a system and earn a return on investment when electricity is consumed.",
      Icon: () => {
        return (
          <svg
            width="61"
            height="52"
            viewBox="0 0 61 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.5 9.5H48.5V51.5H12.5V9.5H18.5V6.5C18.5 4.9087 19.1321 3.38258 20.2574 2.25736C21.3826 1.13214 22.9087 0.5 24.5 0.5H36.5C38.0913 0.5 39.6174 1.13214 40.7426 2.25736C41.8679 3.38258 42.5 4.9087 42.5 6.5V9.5ZM51.5 9.5H54.5C56.0913 9.5 57.6174 10.1321 58.7426 11.2574C59.8679 12.3826 60.5 13.9087 60.5 15.5V45.5C60.5 47.0913 59.8679 48.6174 58.7426 49.7426C57.6174 50.8679 56.0913 51.5 54.5 51.5H51.5V9.5ZM9.5 9.5V51.5H6.5C4.9087 51.5 3.38258 50.8679 2.25736 49.7426C1.13214 48.6174 0.5 47.0913 0.5 45.5V15.5C0.5 12.2 3.2 9.5 6.5 9.5H9.5ZM24.5 6.5V9.5H36.5V6.5H24.5Z"
              fill="black"
            />
          </svg>
        );
      },
      nextUrl: "/",
    },
    {
      title: "I want to install",
      desc: "If you want to install systems.",
      Icon: () => {
        return (
          <svg
            width="61"
            height="52"
            viewBox="0 0 61 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.5 9.5H48.5V51.5H12.5V9.5H18.5V6.5C18.5 4.9087 19.1321 3.38258 20.2574 2.25736C21.3826 1.13214 22.9087 0.5 24.5 0.5H36.5C38.0913 0.5 39.6174 1.13214 40.7426 2.25736C41.8679 3.38258 42.5 4.9087 42.5 6.5V9.5ZM51.5 9.5H54.5C56.0913 9.5 57.6174 10.1321 58.7426 11.2574C59.8679 12.3826 60.5 13.9087 60.5 15.5V45.5C60.5 47.0913 59.8679 48.6174 58.7426 49.7426C57.6174 50.8679 56.0913 51.5 54.5 51.5H51.5V9.5ZM9.5 9.5V51.5H6.5C4.9087 51.5 3.38258 50.8679 2.25736 49.7426C1.13214 48.6174 0.5 47.0913 0.5 45.5V15.5C0.5 12.2 3.2 9.5 6.5 9.5H9.5ZM24.5 6.5V9.5H36.5V6.5H24.5Z"
              fill="black"
            />
          </svg>
        );
      },
      nextUrl: "/",
    },
    {
      title: "Just curious",
      desc: "View what a Hatronika system could mean for you",
      Icon: () => {
        return (
          <svg
            width="61"
            height="60"
            viewBox="0 0 61 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.7109 39.375C39.6892 39.375 43.5045 37.7946 46.3175 34.9816C49.1306 32.1686 50.7109 28.3532 50.7109 24.375C50.7109 20.3968 49.1306 16.5814 46.3175 13.7684C43.5045 10.9554 39.6892 9.375 35.7109 9.375C31.7327 9.375 27.9174 10.9554 25.1043 13.7684C22.2913 16.5814 20.7109 20.3968 20.7109 24.375C20.7109 28.3532 22.2913 32.1686 25.1043 34.9816C27.9174 37.7946 31.7327 39.375 35.7109 39.375ZM43.7172 21.0262C42.3728 21.8025 40.4416 20.9794 39.4066 19.185C38.3716 17.3906 38.6228 15.3075 39.9672 14.5312C41.3134 13.755 43.2428 14.5781 44.2797 16.3725C45.3128 18.1669 45.0634 20.25 43.7172 21.0262Z"
              fill="black"
            />
            <path
              d="M35.7109 45C47.1015 45 56.3359 35.7656 56.3359 24.375C56.3359 12.9844 47.1015 3.75 35.7109 3.75C24.3203 3.75 15.0859 12.9844 15.0859 24.375C15.0859 28.7381 16.4396 32.7844 18.7515 36.1181C17.5995 35.8659 16.4026 35.9075 15.2709 36.2391C14.1392 36.5707 13.109 37.1816 12.2753 38.0156L6.30901 43.9819C4.99047 45.3007 4.24982 47.0892 4.25 48.9541C4.25018 50.819 4.99116 52.6074 6.30995 53.9259C7.62874 55.2445 9.4173 55.9851 11.2822 55.985C13.147 55.9848 14.9355 55.2438 16.254 53.925L22.2203 47.9587C23.0608 47.1182 23.6745 46.0783 24.004 44.9363C24.3335 43.7942 24.3682 42.5872 24.1046 41.4281C27.5253 43.7622 31.5717 45.0073 35.7128 45M35.7128 41.25C33.4967 41.25 31.3024 40.8135 29.255 39.9655C27.2076 39.1174 25.3473 37.8744 23.7803 36.3074C22.2133 34.7404 20.9703 32.8802 20.1223 30.8328C19.2742 28.7854 18.8378 26.5911 18.8378 24.375C18.8378 22.1589 19.2742 19.9646 20.1223 17.9172C20.9703 15.8698 22.2133 14.0096 23.7803 12.4426C25.3473 10.8756 27.2076 9.63258 29.255 8.78453C31.3024 7.93648 33.4967 7.5 35.7128 7.5C40.1883 7.5 44.4805 9.2779 47.6452 12.4426C50.8099 15.6072 52.5878 19.8995 52.5878 24.375C52.5878 28.8505 50.8099 33.1427 47.6452 36.3074C44.4805 39.4721 40.1883 41.25 35.7128 41.25Z"
              fill="black"
            />
          </svg>
        );
      },
      nextUrl: "/",
    },
  ];

  return (
    <div className={styles["join-page-container"]}>
      <Map
        clickableIcons={false}
        style={{
          userSelect: "none",
          outline: "none",
        }}
        mapTypeId="hybrid"
        mapId={"b9e443513213961d"}
        disableDefaultUI={true}
        defaultZoom={6}
        defaultCenter={{ lat: -28.2125, lng: 24.069 }}
      ></Map>
      <div className={styles["join-page-content"]}>
        <div className={styles["join-page-header"]}>
          <span className={styles["join-page-step-title"]}>
            How would you join Hatronika?
          </span>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.11159 0.328508C1.88043 0.112301 1.57468 -0.00540415 1.25876 0.000190694C0.942844 0.00578554 0.641423 0.134244 0.418001 0.358502C0.194579 0.58276 0.0666002 0.885308 0.0610262 1.20241C0.0554522 1.51951 0.172718 1.8264 0.38812 2.05843L6.43653 8.12947L0.38812 14.2005C0.268311 14.3126 0.172216 14.4477 0.105567 14.5978C0.0389171 14.748 0.00307868 14.9101 0.000189779 15.0744C-0.00269912 15.2388 0.0274204 15.402 0.0887516 15.5544C0.150083 15.7068 0.241369 15.8453 0.357165 15.9615C0.472961 16.0777 0.610894 16.1694 0.762735 16.2309C0.914576 16.2925 1.07722 16.3227 1.24095 16.3198C1.40468 16.3169 1.56616 16.2809 1.71574 16.214C1.86533 16.1471 1.99995 16.0507 2.11159 15.9304L8.16 9.85939L14.2084 15.9304C14.32 16.0507 14.4547 16.1471 14.6043 16.214C14.7538 16.2809 14.9153 16.3169 15.0791 16.3198C15.2428 16.3227 15.4054 16.2925 15.5573 16.2309C15.7091 16.1694 15.847 16.0777 15.9628 15.9615C16.0786 15.8453 16.1699 15.7068 16.2312 15.5544C16.2926 15.402 16.3227 15.2388 16.3198 15.0744C16.3169 14.9101 16.2811 14.748 16.2144 14.5978C16.1478 14.4477 16.0517 14.3126 15.9319 14.2005L9.88347 8.12947L15.9319 2.05843C16.1473 1.8264 16.2645 1.51951 16.259 1.20241C16.2534 0.885308 16.1254 0.58276 15.902 0.358502C15.6786 0.134244 15.3772 0.00578554 15.0612 0.000190694C14.7453 -0.00540415 14.4396 0.112301 14.2084 0.328508L8.16 6.39955L2.11159 0.328508Z"
              fill="black"
            />
          </svg>
        </div>
        {options.map((option, index) => (
          <Card
            {...option}
            key={`option_${index}`}
            onClicked={() => navigate(option.nextUrl)}
          />
        ))}
      </div>
    </div>
  );
};

export const JoinPage = withCommon(JoinPageComponent, {
  isHeaderSeeThrough: false,
  showHeaderLoginButton: true,
  showHeaderSystemsFilters: true,
});
