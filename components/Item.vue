<script setup>
defineProps({
  item: {
    type: {},
    required: true,
  },
  type: 'projects' | 'blog' | 'events'
})
</script>

<template>
  <div class="my-4 border-b py-2">
    <NuxtLink :to="item._path">
                <h3 class="font-bold">{{ type === 'events' ? item.event : item.title }}</h3>
                <p v-show="type === 'events' && item.title" class="italic">"{{ item.title }}"</p>
                <NuxtImg v-if="item.image" :src="`/images/${type}/${item.image}`" sizes="100vw md:448px" />
                <p v-show="item.description">{{ item.description }}</p>
                <p class="text-blue">Read more...</p>
            </NuxtLink>
          </div>
</template>