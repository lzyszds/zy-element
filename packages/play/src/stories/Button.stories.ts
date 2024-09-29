import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3"
import { fn } from "@storybook/test"


import { ZyButton } from 'zy-element';


type Story = StoryObj<typeof ZyButton> & { argtypes: ArgTypes }


const meta: Meta<typeof ZyButton> = {
  title: 'Button',
  component: ZyButton,
  argTypes: {
    type: {
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'default', 'small'],
      control: { type: 'select' },
    },
    nativeType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    tag: {
      options: ['button', 'a'],
      control: { type: 'select' },
    },
    plain: {
      control: { type: 'boolean' },
    },
    round: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    circle: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
    },
    loadingIcon: {
      control: { type: 'text' },
    },
    autofocus: {
      control: { type: 'boolean' },
    },
    useThrottle: {
      control: { type: 'boolean' },
    },
    throttleDelay: {
      control: { type: 'number' },
    },
  },
  args: { onClick: fn() }
}


const container = (val: string) => `
  <div style="margin:5px">
    ${val}
  </div>
`

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    groupType: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    groupSize: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    groupDisabled: {
      control: "boolean",
    },
    content1: {
      control: { type: "text" },
      defaultValue: "Button1",
    },
    content2: {
      control: { type: "text" },
      defaultValue: "Button2",
    },
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2",
  },
  render: (args) => ({
    components: { ErButton, ErButtonGroup },
    setup() {
      return { args };
    },
    template: container(`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    `),
  }),


}
