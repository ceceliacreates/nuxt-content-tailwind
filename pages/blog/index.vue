<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('blog').sort({date: -1}).find())
</script>

<template>
    <main>
        <h1>Blog</h1>
        <div v-for="post in posts">
            <Item :item="post" type="blog" />
        </div>
    </main>
</template>