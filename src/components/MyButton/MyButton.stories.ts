import MyButton from '@/components/MyButton/MyButton.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof MyButton>

type Args = {
  label: string
  variant: string
}

const meta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton
}

export const Default: Story = {
  render: (args: Args) => ({
    components: { MyButton },
    setup() {
      return { args }
    },
    template: "<MyButton v-bind='args' />"
  }),
  args: {
    label: 'ボタン'
  }
}

export const Login: Story = {
  render: (args: Args) => ({
    components: { MyButton },
    setup() {
      return { args }
    },
    template: "<MyButton v-bind='args' />"
  }),
  args: {
    label: 'ログイン',
    variant: 'secondary'
  }
}

export default meta
