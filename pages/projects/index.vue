<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => queryContent('projects').sort({date: -1}).find())
</script>

<template>
    <main>
        <h1>Projects</h1>
        <div v-for="project in projects">
            <Item :item="project" type="projects" />
        </div>
    </main>
</template>