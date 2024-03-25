<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  }
})
</script>
<template>
    <NuxtImg :src="`/images/blog/${src}`" class="my-6 max-w-full md:max-w-md rounded" sizes="100vw md:448px" />
</template>