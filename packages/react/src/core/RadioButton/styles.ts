import { w, W } from 'windstitch'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioButtonStyle = {
  Root: w(RadioGroup.Root, {
    className: 'gap-2.5',
    defaultVariants: {
      orientationView: 'vertical'
    },
    variants: {
      orientationView: {
        vertical: 'flex flex-col',
        horizontal: 'grid grid-flow-col auto-cols-fr',
        flex: 'flex flex-wrap',
        grid: 'grid grid-cols-2'
      }
    }
  }),
  Container: w.div(
    `
      border-[1px] border-solid rounded-lg border-gray-400
      flex grow justify-left items-center gap-4
      px-3 py-4
      text-sm
      overflow-hidden

      [&:has([data-state="checked"])]:text-assistant-blue-main
      [&:has([data-state="unchecked"]):text-grey-600

      [&:has([data-state="checked"])]:bg-assistant-blue-light
      [&:has([data-state="checked"])]:border-assistant-blue-main
      
      [&:hover]:border-assistant-blue-main
      [&:hover]:text-assistant-blue-main

      [&:has([disabled])]:border-grey-200
      [&:has([disabled])]:bg-transparent
      [&:has([disabled])]:text-grey-600
      [&:has([disabled])]:pointer-events-none
  `
  ),
  Item: w(RadioGroup.Item, {
    className: `
      bg-transparent
      w-3 h-3
      
      border-[1px] border-solid rounded-full

      [&:has([data-state="checked"]):not([disabled])]:border-assistant-blue-main

      disabled:border-grey-200
    `
  }),
  Indicator: w(RadioGroup.Indicator, {
    className: `
      flex items-center justify-center
      w-full
      h-full
      relative

      after:bg-assistant-blue-main
      after:content-['']
      after:block
      after:w-2
      after:h-2
      after:rounded-full
    `
  }),
  Label: w.label(
    `
      flex-1
      text-sm
      font-light
      select-none
      text-ellipsis
      overflow-hidden
      whitespace-nowrap
  `
  )
}

export type RadioButtonStyleProps = {
  container: W.Infer<typeof RadioButtonStyle['Container']>
}
