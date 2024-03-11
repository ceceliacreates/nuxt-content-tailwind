<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  }
})

const { path } = toRefs(props)

const prev = ref(null);
const next = ref(null);

const [prevResult, nextResult] = await queryContent()
    .only(['_path', 'title'])
    .sort({ date: -1})
    .findSurround(path.value);

  prev.value = prevResult;
  next.value = nextResult;

</script>

<template>
    <p class="">Explore more posts...</p>
    <div class="">
      <div class="">
        <p class="" v-if="prev">{{ prev.title }}</p>
        <NuxtLink v-if="prev" :href="prev._path">⬅️</NuxtLink>
      </div>
      <div class="text-right">
        <p v-if="next" class="italic mb-2">{{ next.title }}</p>
        <NuxtLink v-if="next" :href="next._path" >➡️</NuxtLink>
      </div>
    </div>
</template>