<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('blog').sort({date: -1}).find())
</script>

<template>
    <main>
        <h1>Blog</h1>
        <div v-for="post in posts">
            <NuxtLink :to="post._path">
                <h3>{{ post.title }}</h3>
                <NuxtImg v-if="post.image" :src="`/images/blog/${post.image}`" sizes="100vw md:448px" />
                <p v-show="post.description">{{ post.description }}</p>
                <p>Read more...</p>
            </NuxtLink>
        </div>
    </main>
</template>