<script setup>
defineProps({
  project: {
    type: {},
    required: true,
  }
})
</script>

<template>
    <NuxtLink :to="project._path">
                <h3>{{ project.title }}</h3>
                <NuxtImg v-if="project.image" :src="`/images/projects/${project.image}`" sizes="100vw md:448px" />
                <p v-show="project.description">{{ project.description }}</p>
                <p>Read more...</p>
            </NuxtLink>
</template>