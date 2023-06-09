import MyButton from '@/components/MyButton/MyButton.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof MyButton>

type Args = {
  label: string
  variant: string
  size: string
}
// 共通化
const meta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  render: (args: Args) => ({
    components: { MyButton },
    setup() {
      return { args }
    },
    template: "<MyButton v-bind='args' />"
  }),
  args: {
    label: 'ボタン',
    variant: 'secondary',
    size: 'medium'
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['primary', 'secondary']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    }
  }
}
export const Default: Story = {}
export default meta
