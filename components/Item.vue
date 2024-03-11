<script setup>
defineProps({
  item: {
    type: {},
    required: true,
  },
  type: 'projects' | 'blog'
})
</script>

<template>
    <NuxtLink :to="item._path">
                <h3>{{ item.title }}</h3>
                <NuxtImg v-if="item.image" :src="`/images/${type}/${item.image}`" sizes="100vw md:448px" />
                <p v-show="item.description">{{ item.description }}</p>
                <p>Read more...</p>
            </NuxtLink>
</template>