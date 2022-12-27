import { Button, ButtonProps } from '@bsafer-system/react'
import { Meta, StoryObj } from '@storybook/react'
import { PropsToArray } from '../helpers/propsToArray'

export default {
  title: 'Core/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FLeQZ1N2SuYH73TGd3Pcjo/Core-Components?node-id=2%3A3&t=MiQGdhHsZublWo6t-0'
    }
  },
  args: {
    children: 'Botão padrão',
    color: 'primary',
    variant: 'contained',
    size: 'md',
    disabled: false
  },
  argTypes: {
    color: {
      control: {
        options: ['default', 'primary', 'secondary'] as PropsToArray<
          ButtonProps['color']
        >,
        type: 'inline-radio'
      }
    },
    variant: {
      options: ['text', 'contained', 'outlined'] as PropsToArray<
        ButtonProps['variant']
      >,
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['sm', 'md', 'lg'] as PropsToArray<ButtonProps['size']>,
      control: { type: 'inline-radio' }
    },
    onClick: { action: 'button-clicked' }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-10 max-w-2xl my-0 mx-auto">
          {Story()}
        </div>
      )
    }
  ]
} as Meta<ButtonProps>

export const Playground: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão padrão',
    color: 'primary',
    variant: 'contained',
    size: 'md'
  }
}

export const Sizes = () => {
  return (
    <>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </>
  )
}

export const Variants = () => {
  return (
    <>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="text">Text Button</Button>
    </>
  )
}

export const Colors = () => {
  return (
    <div className="grid gap-4 grid-cols-3">
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
      <Button variant="contained" color="default">
        Default Button
      </Button>
      <Button variant="outlined" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>
      <Button variant="outlined" color="default">
        Default Button
      </Button>
      <Button variant="text" color="primary">
        Primary Button
      </Button>
      <Button variant="text" color="secondary">
        Secondary Button
      </Button>
      <Button variant="text" color="default">
        Default Button
      </Button>
    </div>
  )
}
