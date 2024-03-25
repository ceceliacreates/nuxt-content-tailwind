<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'bg-black'
  }
})
</script>

<template>
    <NuxtLink :to="href" :external="external" class="inline-flex items-center gap-1 text-white px-3 py-1 rounded no-underline" :class="color">
      <Icon v-if="icon" :name="icon" class="w-4 h-4" />
      <ContentSlot :use="$slots.default" unwrap="p" />
    </NuxtLink>
</template>