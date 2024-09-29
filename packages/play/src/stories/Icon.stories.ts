import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn } from "@storybook/test";

import { ZyIcon } from 'zy-element'; // 假设 Icon 是从 zy-element 引入的
import type { IconProps } from "@iconify/vue";

type Story = StoryObj<typeof ZyIcon> & { argTypes: ArgTypes }

const meta: Meta<typeof ZyIcon> = {
  title: 'Example/ZyIcon',
  component: ZyIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'text' },
      description: '图标集中的图标名称',
    },
    mode: {
      // control: { control: 'multi-select', options: ['style', 'bg', 'mask', 'svg'] },
      control: 'select',
      options: ['style', 'bg', 'mask', 'svg'],
      description: '图标模式',
    },
    color: {
      control: { type: 'color' },
      description: '图标颜色',
    },
    flip: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '图标翻转',
    },
    spin: {
      control: 'boolean',
      description: '自动旋转',
    },
    speedspin: {
      control: 'number',
      description: '旋转速度 (单位: s)',
    },
  },
};

const container = (val: string) => `
  <div style="margin:5px">
    ${val}
  </div>
`;

export const Default: Story & { args: IconProps } = {
  argTypes: {},
  args: {
    icon: 'zy:waist',  // 默认的图标名称
    color: '#000000',       // 默认图标颜色
    mode: 'svg',          // 默认图标模式
    spin: false,          // 默认自动旋转
    speedspin: 6,         // 默认旋转速度
  },
  render: (args) => ({
    components: { ZyIcon },
    setup() {
      return { args };
    },
    template: container(`
      <zy-icon v-bind='args'/>
    `),
  }),
};

export default meta;
