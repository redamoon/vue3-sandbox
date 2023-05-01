import MyButton from '@/components/MyButton/MyButton.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof MyButton>

type Args = {
  label: string
  variant: string
}
// 共通化
const meta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args }
    },
    template: "<MyButton v-bind='args' />"
  })
}
export const Default: Story = {
  args: {
    label: 'ボタン',
    variant: 'secondary'
  }
}
export const Login: Story = {
  args: {
    label: 'ログイン'
  }
}

export const SignUp: Story = {
  args: {
    label: '会員登録'
  }
}

export default meta
