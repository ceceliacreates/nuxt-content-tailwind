<template>
    <main>
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-2xl sm:text-3xl my-4">{{ doc.event }}</h1>
        <p>{{ new Date(doc.date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) }} (<NuxtLink class="text-blue" :to="doc.url" v-show="doc.url" target="blank" external><Icon name="heroicons-outline:external-link" size="1rem" /> More Details</NuxtLink>)</p>
        <h3 class="text-lg italic my-2">"{{  doc.title }}"</h3>
        <div class="my-4">
        <iframe
          class="w-full aspect-video"
          v-show="doc.embed"
          :src="`https://www.youtube.com/embed/${doc.embed}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <NuxtLink :href="doc.video" v-show="doc.video && !doc.embed" target="blank"
        ><span>Video</span></NuxtLink>
        <NuxtLink class="text-blue" :to="doc.slides" v-show="doc.slides" target="blank" external
        ><span><Icon name="heroicons-outline:external-link" size="1rem" /> View Slides</span></NuxtLink>
      <p class="my-2">{{ doc.description }}</p>
      </ContentDoc>
    </main>
  </template>
