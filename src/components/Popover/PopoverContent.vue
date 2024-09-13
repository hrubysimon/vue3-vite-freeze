<script setup lang="ts">
import { PopoverContent } from 'radix-vue'

import { type PopoverContentProps } from './PopoverContent'

const props = defineProps<PopoverContentProps>()
</script>

<template>
    <PopoverContent>
        <slot />
    </PopoverContent>
</template>
