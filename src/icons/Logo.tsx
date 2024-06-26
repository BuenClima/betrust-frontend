import { SvgIcon, SvgIconProps } from '@mui/material'

/**
 * @description Logo Icon
 * @param props - SvgIconProps
 * @returns React.FC
 */
export const Logo = (props: SvgIconProps) => {
  return (
    <SvgIcon
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1081.000000pt"
      height="973.000000pt"
      viewBox="0 0 1081.000000 973.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,973.000000) scale(0.100000,-0.100000)"
        fill="#2191D0"
        stroke="none"
      >
        <path
          d="M10 4860 l0 -4860 5396 0 5395 0 -4 768 c-4 824 -6 862 -62 1211
-117 717 -379 1374 -768 1926 -198 282 -544 659 -792 865 -55 45 -101 86 -103
90 -2 4 32 37 75 72 737 610 1250 1422 1493 2360 73 286 125 601 150 922 5 71
10 439 10 817 l0 689 -4315 0 -4315 0 810 -1080 810 -1080 2335 0 c1356 0
2335 -4 2335 -9 0 -18 -98 -228 -145 -311 -340 -600 -923 -1022 -1671 -1209
-360 -90 -381 -91 -1711 -91 l-1143 0 0 -1080 0 -1080 1168 0 c960 0 1189 -3
1292 -15 941 -110 1735 -621 2105 -1356 43 -85 105 -226 105 -240 0 -5 -1261
-9 -3150 -9 l-3150 0 0 3780 0 3780 -1075 0 -1075 0 0 -4860z"
        />
      </g>
    </SvgIcon>
  )
}

export default Logo
