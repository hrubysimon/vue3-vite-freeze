import type { PopoverRootProps as RadixPopoverRootProps } from 'radix-vue'

type PopoverRootProps = RadixPopoverRootProps & {
    mode?: 'hover' | 'click'
}

export type { PopoverRootProps }
