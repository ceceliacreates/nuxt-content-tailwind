<script setup lang="ts">
import type { Blog } from "~~/types";

const selectedTag = ref('')

const maxPosts = ref(5)

const { data: posts } = await useAsyncData<Blog[]>('posts', () => queryContent('blog').sort({ date: -1 }).find())

const filteredPosts = computed(() =>  
 selectedTag.value ? posts.value?.filter(post => post.tags?.includes(selectedTag.value)) : posts.value
) 

const displayedFilteredPosts = computed(() =>
  filteredPosts.value?.slice(0, maxPosts.value)
)

const atEnd = computed(() =>
filteredPosts.value?.length <= maxPosts.value ? true : false
)

const filterByTag = (tag: string) => {
  selectedTag.value = tag;
  maxPosts.value = 5;
}

const loadMorePosts = () => {

  maxPosts.value += 5;

}
</script>

<template>
  <main>
    <h1 class="text-2xl sm:text-3xl mb-6 text-black">Blog</h1>
    <div>
      <p v-if="selectedTag"> Filtered by: <span class="font-bold">{{ selectedTag }}</span> <button
          class="bg-blue text-white px-2 mx-2 my-2 rounded" @click="selectedTag = ''">Clear</button></p>
      <p v-else class="font-bold"> Click any tag to filter.</p>
    </div>
    <div v-for="post in displayedFilteredPosts">
      <Item :item="post" section="blog" @update-selected-tag="filterByTag" />
    </div>
    <div class="text-center">
      <p class="italic font-light" v-if="atEnd">End of posts</p>
      <button class="bg-blue text-white px-4 py-2" v-else @click="loadMorePosts">Load More</button>
    </div>
  </main>
</template>