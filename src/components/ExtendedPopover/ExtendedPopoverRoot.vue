<script setup lang="ts">
import type { ExtendedPopoverRootProps } from './ExtendedPopoverRoot';
import { PopoverRoot } from '@/components/Popover';

const props = defineProps<ExtendedPopoverRootProps>()

function foo() {
    console.log('foo')
}
</script>

<template>
    <PopoverRoot>
        <slot />
    </PopoverRoot>
</template>