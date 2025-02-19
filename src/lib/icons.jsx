import React from "react";

export const HomieIcon = ({
  size = 28,
  fillColor = "#2511BE",
  strokeColor = "#FFFAFA",
  strokeWidth = 1.2,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="14"
        cy="14"
        r="12.6"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <g clipPath="url(#clip0)">
        <path
          d="M14.1427 18.5715L15.857 20L20.1427 14.5715M16.7142 9.14288C16.9415 8.91555 17.2498 8.78784 17.5713 8.78784C17.7305 8.78784 17.8881 8.8192 18.0352 8.88011C18.1823 8.94103 18.3159 9.03032 18.4284 9.14288C18.541 9.25544 18.6303 9.38907 18.6912 9.53614C18.7521 9.68321 18.7835 9.84084 18.7835 10C18.7835 10.1592 18.7521 10.3168 18.6912 10.4639C18.6303 10.611 18.541 10.7446 18.4284 10.8572L11.2856 18L8.99988 18.5715L9.57131 16.2857L16.7142 9.14288Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="13.7143" height="13.7143" fill="white" transform="translate(7.28564 7.14282)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DrawerCloseIcon = ({ size = 18, color = "#E8EAED", ...props }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M13.5 13V5L9.5 9L13.5 13ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM5 16V2H2V16H5ZM7 16H16V2H7V16Z"
          fill={color}
        />
      </svg>
    );
  };

  export const DrawerOpenIcon = ({ size = 18, color = "#E8EAED", ...props }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g transform="scale(-1,1) translate(-18,0)">
          <path
            d="M13.5 13V5L9.5 9L13.5 13ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM5 16V2H2V16H5ZM7 16H16V2H7V16Z"
            fill={color}
          />
        </g>
      </svg>
    );
  };
  