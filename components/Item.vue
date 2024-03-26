<script setup lang="ts">
import type { Section, Event, Blog } from "~~/types";

const props = defineProps<{
  item: Event | Blog;
  section: Section;
}>();
</script>

<template>
  <div class="my-4 border-b py-2">
    <NuxtLink :to="item._path">
                <h3 class="font-bold text-xl">{{ section === 'events' ? item.event : item.title }}</h3>
                <p v-show="item.date">{{ new Date(item.date).toLocaleDateString() }}</p>
                <p v-show="section === 'events' && item.title" class="italic text-lg">"{{ item.title }}"</p></NuxtLink>
                <div v-show="item.tags"><button class="bg-blue text-white px-2 mr-2 my-2 rounded" v-for="tag in item.tags" :key="item.slug + tag" @click="$emit('updateSelectedTag', tag)"> {{tag}}</button></div>
                <NuxtLink :to="item._path">
                <NuxtImg v-if="item.image" :src="`/images/${section}/${item.image}`" sizes="100vw md:448px" />
                <p v-show="section === 'blog' && item.description">{{ item.description }}</p>
                <p class="text-blue">Read more...</p>
            </NuxtLink>
          </div>
</template>