<script setup lang="ts">
import type { ExtendedPopoverRootProps } from './ExtendedPopoverRoot';
import ExtendedPopoverRoot from './ExtendedPopoverRoot.vue';

const props = defineProps<ExtendedPopoverRootProps>()

/** this also triggers the freeze, so it's probably not related to defineProps */

// const foo: ExtendedPopoverRootProps = {
//     open: true
// }
</script>

<template>
    <ExtendedPopoverRoot>
        ExtendedPopover
    </ExtendedPopoverRoot>
</template>