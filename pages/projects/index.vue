<script setup>
const { data: projects } = await useAsyncData('projects', () => queryContent('projects').sort({date: -1}).find())
</script>

<template>
    <main>
        <h1>Projects</h1>
        <div v-for="project in projects">
            <ProjectItem :project="project" />
        </div>
    </main>
</template>