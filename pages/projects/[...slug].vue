<template>
    <main>
      <ContentDoc v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
      </ContentDoc>
    </main>
  </template>
  