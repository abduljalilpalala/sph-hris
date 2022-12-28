import React, { FC } from 'react'

type Props = {
  className?: string
}

const MyOvertimeIcon: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg
      viewBox="0 0 22 23"
      fill="current"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1255_19054)">
        <path
          d="M11.351 3.6605V2.95265H11.9361C12.13 2.95265 12.2872 2.79579 12.2872 2.6023C12.2872 2.40882 12.13 2.25195 11.9361 2.25195H10.0638C9.86985 2.25195 9.71271 2.40882 9.71271 2.6023C9.71271 2.79579 9.86985 2.95265 10.0638 2.95265H10.6489V3.6605C5.58757 3.84553 1.52698 8.01162 1.52698 13.1071C1.52698 18.3199 5.77654 22.5608 10.9999 22.5608C16.2234 22.5608 20.4729 18.3199 20.4729 13.1071C20.4729 8.01162 16.4123 3.84553 11.351 3.6605ZM10.9999 21.8601C6.16369 21.8601 2.22911 17.9335 2.22911 13.1071C2.22911 8.28064 6.16369 4.35405 10.9999 4.35405C15.8362 4.35405 19.7708 8.28064 19.7708 13.1071C19.7708 17.9335 15.8362 21.8601 10.9999 21.8601Z"
          fill="current"
        />
        <path
          d="M2.6935 6.64761C2.76508 6.64761 2.83735 6.62584 2.89965 6.58062L8.35153 2.62503C8.42684 2.57037 8.47735 2.48811 8.49186 2.39632C8.50637 2.30453 8.48381 2.21073 8.42904 2.13561C7.73104 1.17747 6.60478 0.605469 5.4164 0.605469C4.62698 0.605469 3.87125 0.851041 3.23091 1.31565C2.42693 1.89896 1.89865 2.75984 1.74348 3.73965C1.58831 4.71947 1.82474 5.70091 2.40928 6.50326C2.47795 6.59753 2.585 6.64761 2.6935 6.64761ZM2.43699 3.84906C2.56286 3.05414 2.99149 2.35568 3.64372 1.88242C4.16334 1.50545 4.7763 1.30617 5.4164 1.30617C6.26275 1.30617 7.07019 1.66357 7.63798 2.27641L2.78698 5.79607C2.45352 5.20683 2.32957 4.52747 2.43699 3.84906Z"
          fill="current"
        />
        <path
          d="M13.6483 2.62498L19.1002 6.58057C19.1625 6.62579 19.2347 6.64756 19.3063 6.64756C19.4148 6.64756 19.5218 6.59753 19.5905 6.50322C20.175 5.70087 20.4115 4.71942 20.2563 3.73961C20.1012 2.7598 19.5729 1.89896 18.769 1.31561C18.1286 0.851041 17.3728 0.605469 16.5834 0.605469C15.395 0.605469 14.2688 1.17747 13.5708 2.13561C13.516 2.21073 13.4934 2.30453 13.508 2.39632C13.5225 2.48811 13.573 2.57037 13.6483 2.62498ZM16.5834 1.30617C17.2235 1.30617 17.8365 1.50545 18.3561 1.88242C19.0083 2.35568 19.4369 3.05414 19.5628 3.84906C19.6703 4.52747 19.5463 5.20683 19.2128 5.79607L14.3618 2.27641C14.9296 1.66357 15.7371 1.30617 16.5834 1.30617Z"
          fill="current"
        />
        <path
          d="M11.3511 7.27452V6.80738C11.3511 6.61389 11.1939 6.45703 11 6.45703C10.8061 6.45703 10.6489 6.61389 10.6489 6.80738V7.27452C10.6489 7.468 10.8061 7.62487 11 7.62487C11.1939 7.62487 11.3511 7.468 11.3511 7.27452Z"
          fill="current"
        />
        <path
          d="M8.07755 8.40615C8.13709 8.40615 8.19752 8.39101 8.25275 8.35915C8.42065 8.26241 8.47818 8.04813 8.38124 7.88057L8.1472 7.47604C8.05021 7.30843 7.83545 7.25102 7.66765 7.34781C7.49974 7.44455 7.44222 7.65883 7.53916 7.82639L7.7732 8.23092C7.83826 8.34327 7.95627 8.40615 8.07755 8.40615Z"
          fill="current"
        />
        <path
          d="M6.11328 9.88608L5.70792 9.65252C5.53988 9.55568 5.32526 9.61314 5.22837 9.78074C5.13143 9.94831 5.18895 10.1626 5.35685 10.2593L5.76222 10.4929C5.81754 10.5247 5.87788 10.5399 5.93742 10.5399C6.05875 10.5399 6.17675 10.4771 6.24177 10.3647C6.33871 10.1971 6.28114 9.98283 6.11328 9.88608Z"
          fill="current"
        />
        <path
          d="M5.50566 13.1062C5.50566 12.9127 5.34853 12.7559 5.1546 12.7559H4.68651C4.49259 12.7559 4.33545 12.9127 4.33545 13.1062C4.33545 13.2997 4.49259 13.4566 4.68651 13.4566H5.1546C5.34853 13.4566 5.50566 13.2997 5.50566 13.1062Z"
          fill="current"
        />
        <path
          d="M5.53271 16.6082C5.59225 16.6082 5.65268 16.5931 5.70792 16.5612L6.11328 16.3276C6.28118 16.2309 6.33871 16.0166 6.24177 15.8491C6.14483 15.6815 5.93007 15.6241 5.76222 15.7208L5.35686 15.9544C5.18895 16.0511 5.13143 16.2654 5.22837 16.433C5.29343 16.5454 5.41139 16.6082 5.53271 16.6082Z"
          fill="current"
        />
        <path
          d="M7.7732 17.9838L7.53916 18.3884C7.44222 18.5559 7.49974 18.7702 7.66765 18.867C7.72297 18.8988 7.78331 18.914 7.84285 18.914C7.96418 18.914 8.08218 18.8511 8.1472 18.7387L8.38124 18.3342C8.47818 18.1666 8.42065 17.9524 8.25275 17.8556C8.08476 17.7588 7.87009 17.8162 7.7732 17.9838Z"
          fill="current"
        />
        <path
          d="M10.6489 18.9402V19.4073C10.6489 19.6008 10.8061 19.7577 11 19.7577C11.1939 19.7577 11.3511 19.6008 11.3511 19.4073V18.9402C11.3511 18.7467 11.1939 18.5898 11 18.5898C10.8061 18.5898 10.6489 18.7467 10.6489 18.9402Z"
          fill="current"
        />
        <path
          d="M13.747 17.8556C13.5791 17.9523 13.5216 18.1666 13.6185 18.3342L13.8525 18.7387C13.9176 18.8511 14.0356 18.9139 14.1569 18.9139C14.2164 18.9139 14.2769 18.8988 14.3321 18.8669C14.5 18.7702 14.5575 18.5559 14.4606 18.3884L14.2265 17.9838C14.1296 17.8163 13.9148 17.7588 13.747 17.8556Z"
          fill="current"
        />
        <path
          d="M16.7716 16.433C16.8685 16.2654 16.811 16.0512 16.6431 15.9544L16.2377 15.7209C16.0697 15.6241 15.855 15.6815 15.7582 15.8491C15.6612 16.0166 15.7187 16.2309 15.8866 16.3277L16.292 16.5612C16.3473 16.5931 16.4077 16.6082 16.4672 16.6082C16.5885 16.6082 16.7065 16.5454 16.7716 16.433Z"
          fill="current"
        />
        <path
          d="M16.4941 13.1062C16.4941 13.2997 16.6513 13.4566 16.8452 13.4566H17.3133C17.5072 13.4566 17.6644 13.2997 17.6644 13.1062C17.6644 12.9127 17.5072 12.7559 17.3133 12.7559H16.8452C16.6513 12.7559 16.4941 12.9127 16.4941 13.1062Z"
          fill="current"
        />
        <path
          d="M16.292 9.65248L15.8866 9.88605C15.7187 9.9828 15.6612 10.1971 15.7582 10.3646C15.8232 10.477 15.9412 10.5399 16.0625 10.5399C16.122 10.5399 16.1825 10.5247 16.2377 10.4929L16.6431 10.2593C16.811 10.1625 16.8685 9.94827 16.7716 9.78071C16.6745 9.61315 16.4599 9.55569 16.292 9.65248Z"
          fill="current"
        />
        <path
          d="M13.9223 8.40617C14.0436 8.40617 14.1616 8.34334 14.2267 8.23094L14.4607 7.82641C14.5576 7.65885 14.5001 7.44457 14.3322 7.34783C14.1642 7.25099 13.9496 7.30845 13.8527 7.47606L13.6186 7.88059C13.5217 8.04816 13.5792 8.26243 13.7471 8.35917C13.8024 8.39098 13.8627 8.40617 13.9223 8.40617Z"
          fill="current"
        />
        <path
          d="M15.7921 13.1077C15.7921 12.9142 15.635 12.7574 15.441 12.7574H11.9928C11.9419 12.6143 11.8609 12.4854 11.7572 12.3783C11.7531 12.3737 11.7492 12.3689 11.7447 12.3645L8.7699 9.39573C8.57096 9.1972 8.3065 9.08789 8.02518 9.08789C7.74386 9.08789 7.47939 9.19725 7.28045 9.39573C6.86989 9.80555 6.86989 10.4723 7.28045 10.8822L9.94681 13.5431V15.6712C9.94681 16.2508 10.4193 16.7223 11 16.7223C11.5807 16.7223 12.0532 16.2508 12.0532 15.6712V13.4581H15.441C15.635 13.4581 15.7921 13.3012 15.7921 13.1077ZM10.6489 13.1077C10.6489 12.9145 10.8064 12.7574 11 12.7574C11.1936 12.7574 11.3511 12.9145 11.3511 13.1077C11.3511 13.3009 11.1936 13.4581 11 13.4581C10.8064 13.4581 10.6489 13.3009 10.6489 13.1077ZM7.777 9.89122C7.84328 9.82503 7.93146 9.78859 8.02522 9.78859C8.11898 9.78859 8.20717 9.82503 8.27345 9.89122L10.5462 12.1594C10.3296 12.2631 10.1537 12.4386 10.0498 12.6548L7.77704 10.3867C7.64008 10.2501 7.64008 10.0278 7.777 9.89122ZM11 16.0216C10.8064 16.0216 10.6489 15.8644 10.6489 15.6712V14.0985C10.7588 14.1374 10.8769 14.1588 11 14.1588C11.1231 14.1588 11.2412 14.1374 11.3511 14.0985V15.6712C11.3511 15.8644 11.1936 16.0216 11 16.0216Z"
          fill="current"
        />
        <path
          d="M11 5.05469C6.55088 5.05469 2.93127 8.66694 2.93127 13.107C2.93127 17.5471 6.55088 21.1593 11 21.1593C12.8811 21.1593 14.7138 20.4963 16.1603 19.2924C16.3092 19.1685 16.3292 18.9476 16.205 18.799C16.0809 18.6504 15.8595 18.6304 15.7106 18.7543C14.39 19.8533 12.7172 20.4586 11 20.4586C6.93804 20.4586 3.6334 17.1607 3.6334 13.107C3.6334 9.0533 6.93804 5.75539 11 5.75539C15.0619 5.75539 18.3666 9.0533 18.3666 13.107C18.3666 14.8206 17.7601 16.4901 16.6589 17.8081C16.5347 17.9567 16.5547 18.1776 16.7036 18.3015C16.8527 18.4255 17.0739 18.4055 17.198 18.2568C18.4043 16.8132 19.0687 14.9843 19.0687 13.107C19.0687 8.66694 15.4491 5.05469 11 5.05469Z"
          fill="current"
        />
      </g>
      <defs>
        <clipPath id="clip0_1255_19054">
          <rect width="22" height="21.9553" fill="current" transform="translate(0 0.605469)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MyOvertimeIcon
