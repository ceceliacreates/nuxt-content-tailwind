<template>
    <main>
      <ContentDoc v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <NuxtImg v-if="doc.image" :src="`/images/blog/${doc.image}`" sizes="100vw md:448px" />
        <ContentRenderer :value="doc" />
        <PrevNext :path="doc._path" />
      </ContentDoc>
    </main>
  </template>
  