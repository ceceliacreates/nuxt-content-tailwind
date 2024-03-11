<script setup>
const { data: projects } = await useAsyncData('projects', () => queryContent('projects').sort({date: -1}).find())
</script>

<template>
    <main>
        <h1>Projects</h1>
        <div v-for="project in projects">
            <NuxtLink :to="project._path">
                <h3>{{ project.title }}</h3>
                <NuxtImg v-if="doc.image" :src="`/images/projects/${doc.image}`" sizes="100vw md:448px" />
                <p v-show="project.description">{{ project.description }}</p>
                <p>Read more...</p>
            </NuxtLink>
        </div>
    </main>
</template>