import React from "react"
import { IconProps } from ".."

const IconBellAlertSolid: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.875 2.91669C4.97932 2.79237 5.03119 2.63234 5.01964 2.47046C5.00809 2.30858 4.93402 2.15754 4.81311 2.04929C4.69219 1.94104 4.53391 1.88407 4.37174 1.89043C4.20957 1.89678 4.05624 1.96597 3.94417 2.08336C2.92039 3.22523 2.24186 4.63431 1.9875 6.14669C1.96397 6.3084 2.00472 6.4729 2.10101 6.60494C2.19729 6.73697 2.34147 6.82604 2.50263 6.85307C2.6638 6.88009 2.82914 6.84292 2.96323 6.74951C3.09732 6.65611 3.18949 6.5139 3.22 6.35335C3.43511 5.0742 4.00904 3.88242 4.875 2.91669ZM16.0558 2.08336C16.0013 2.02163 15.935 1.97131 15.861 1.93527C15.7869 1.89924 15.7064 1.87821 15.6242 1.87339C15.5419 1.86856 15.4595 1.88005 15.3818 1.90718C15.304 1.93431 15.2323 1.97655 15.1709 2.03147C15.1095 2.0864 15.0596 2.15291 15.024 2.22721C14.9884 2.3015 14.9678 2.38209 14.9634 2.46436C14.9591 2.54663 14.9711 2.62894 14.9987 2.70657C15.0262 2.7842 15.0689 2.85561 15.1242 2.91669C15.9904 3.88234 16.5646 5.07412 16.78 6.35335C16.8074 6.51691 16.8987 6.66287 17.0337 6.75914C17.1005 6.80681 17.1761 6.84084 17.2561 6.85929C17.3362 6.87775 17.419 6.88026 17.5 6.86669C17.581 6.85312 17.6585 6.82373 17.7281 6.7802C17.7977 6.73668 17.8581 6.67986 17.9058 6.613C17.9535 6.54614 17.9875 6.47055 18.0059 6.39054C18.0244 6.31053 18.0269 6.22767 18.0133 6.14669C17.7585 4.63414 17.0802 3.22506 16.0558 2.08336Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-subtle dark:tw-fill-medusa-icon-subtle-dark"
        }
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.875C8.50816 1.875 7.07742 2.46763 6.02253 3.52252C4.96763 4.57742 4.375 6.00816 4.375 7.5V8.125C4.37757 9.82433 3.74817 11.4639 2.60917 12.725C2.54077 12.8009 2.49201 12.8924 2.46716 12.9915C2.44232 13.0906 2.44214 13.1942 2.46664 13.2934C2.49115 13.3926 2.53959 13.4842 2.60773 13.5603C2.67587 13.6365 2.76163 13.6947 2.8575 13.73C4.14417 14.205 5.49084 14.555 6.88334 14.7658C6.85198 15.1943 6.90931 15.6246 7.05173 16.0299C7.19415 16.4352 7.4186 16.8068 7.71108 17.1214C8.00356 17.4361 8.35777 17.6871 8.7516 17.8587C9.14542 18.0303 9.57041 18.1189 10 18.1189C10.4296 18.1189 10.8546 18.0303 11.2484 17.8587C11.6422 17.6871 11.9964 17.4361 12.2889 17.1214C12.5814 16.8068 12.8059 16.4352 12.9483 16.0299C13.0907 15.6246 13.148 15.1943 13.1167 14.7658C14.49 14.5576 15.8386 14.2103 17.1417 13.7292C17.2374 13.6938 17.323 13.6356 17.391 13.5595C17.4591 13.4835 17.5074 13.3919 17.5319 13.2929C17.5564 13.1938 17.5563 13.0903 17.5316 12.9913C17.5068 12.8923 17.4582 12.8009 17.39 12.725C16.2513 11.4638 15.6222 9.82422 15.625 8.125V7.5C15.625 6.00816 15.0324 4.57742 13.9775 3.52252C12.9226 2.46763 11.4918 1.875 10 1.875ZM8.125 15C8.125 14.9717 8.125 14.9442 8.12667 14.9167C9.37303 15.029 10.627 15.029 11.8733 14.9167L11.875 15C11.875 15.4973 11.6775 15.9742 11.3258 16.3258C10.9742 16.6775 10.4973 16.875 10 16.875C9.50272 16.875 9.02581 16.6775 8.67418 16.3258C8.32255 15.9742 8.125 15.4973 8.125 15Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-subtle dark:tw-fill-medusa-icon-subtle-dark"
        }
      />
    </svg>
  )
}

export default IconBellAlertSolid
