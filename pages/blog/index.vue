<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('blog').sort({date: -1}).find())
</script>

<template>
    <main>
        <h1 class="text-2xl sm:text-3xl mb-6 text-black">Blog</h1>
        <div v-for="post in posts" class="my-4 border-b py-2">
            <NuxtLink :to="post._path">
                <h3 class="font-bold text-xl">{{ post.title }}</h3>
                <BlogHeader v-if="post.image" :src="post.image" />
                <p v-show="post.description" class="text-black">{{ post.description }}</p>
                <p class="text-blue py-2">Read more...</p>
            </NuxtLink>
        </div>
    </main>
</template>