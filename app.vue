<script setup lang="ts">
useSeoMeta({
  title: 'Cecelia Martinez',
  ogTitle: 'Cecelia Martinez',
  description: 'events, blog, and projects from Lead Developer Advocate Cecelia Martinez',
  ogDescription: 'events, blog, and projects from Lead Developer Advocate Cecelia Martinez',
  ogUrl: 'https://ceceliacreates.com',
  ogSiteName: 'Cecelia Martinez',
  ogType: 'website',
  ogImage: 'https://ceceliacreates.com/images/og-image.png',
  twitterSite: '@ceceliacreates',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <div class="mx-auto px-4 pb-8 sm:max-w-4xl">
      <NuxtPage/>
    </div>
  </div>
</template>
