import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3"
import { fn } from "@storybook/test"


import { ZyButton } from 'zy-element';


type Story = StoryObj<typeof ZyButton> & { argTypes: ArgTypes }


const meta: Meta<typeof ZyButton> = {
  title: 'Example/Button',
  component: ZyButton,
  tags: ['autodocs'],
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
    content: {
      control: { type: 'text' }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: (args) => ({
    components: { ZyButton },
    setup() {
      return { args }
    },

    template: container(`
      <zy-button v-bind='args'>{{ args.content }}</zy-button>
    `)

  })
}

export default meta
