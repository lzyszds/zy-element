import type { IconProps } from "@iconify/vue";


export interface ZyIconProps extends IconProps {
  /* 自动旋转 */
  spin?: boolean;
  /* 旋转速度 */
  speedspin?: number
}
