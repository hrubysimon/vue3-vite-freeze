<script setup lang="ts">
import { PopoverRoot } from 'radix-vue'
import type { PopoverRootProps } from './PopoverRoot';

const props = defineProps<PopoverRootProps>()
</script>

<template>
    <PopoverRoot>
        <slot />
    </PopoverRoot>
</template>
