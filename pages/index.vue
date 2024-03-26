<script setup lang="ts">
import type { SocialLink } from "~~/types";
const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/ceceliacreates",
    icon: "fa6-brands:twitter",
  },
  {
    name: "GitHub",
    url: "https://github.com/ceceliacreates",
    icon: "fa6-brands:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ceceliamartinez/",
    icon: "fa6-brands:linkedin"
  },
  {
    name: "Dev.to",
    url: "https://dev.to/ceceliacreates",
    icon: "fa6-brands:dev"
  },
  {
    name: "Twitch",
    url: "https://twitch.tv/ceceliacreates/",
    icon: "fa6-brands:twitch"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@ceceliacreates",
    icon: "fa6-brands:youtube",
  },
];
</script>

<template>
    <main>
        <h1 class="text-center font-light text-4xl sm:text-6xl md:text-7xl mb-2">Cecelia Martinez</h1>
        <h3 class="italic text-center font-light text-lg sm:text-2xl text-blue">Code, Content & Community</h3>
        <NuxtImg class="mx-auto" src="/images/logo-512x512.png" sizes="80vw lg:500px" />
        <div class="flex justify-center gap-2 text-blue">
          <NuxtLink v-for="link in socialLinks" :to="link.url" external :key="link.name" target="_blank">
          <Icon :name="link.icon" size="2rem" />
          </NuxtLink>
        </div>
    </main>
  </template>