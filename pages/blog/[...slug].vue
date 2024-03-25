<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-2xl sm:text-3xl my-6">{{ doc.title }}</h1>
      <ContentRenderer :value="doc" class="prose mt-2 max-w-3xl text-pretty prose-a:text-purple prose-a:no-underline prose-pre:max-h-64 prose-li:marker:text-black" />
    <PrevNext :path="doc._path" />
    </ContentDoc>
  </main>
</template>