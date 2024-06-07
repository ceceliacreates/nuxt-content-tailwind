<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    required: true,
  }
})

const { path } = toRefs(props)

const prev = ref(null);
const next = ref(null);

const [prevResult, nextResult] = await queryContent('blog')
    .only(['_path', 'title'])
    .sort({ date: -1})
    .findSurround(path.value);

  prev.value = prevResult;
  next.value = nextResult;
</script>

<template>
    <p class="text-center font-bold my-4 border-t py-2">Explore more posts...</p>
    <div class="flex justify-between">
      <div class="text-left max-w-sm">
        <p class="italic mb-2" v-if="prev">{{ prev.title }}</p>
        <ButtonLink v-if="prev"  icon="fa6-solid:arrow-left" color="bg-purple" :href="prev._path" />
      </div>
      <div class="text-right max-w-sm">
        <p v-if="next" class="italic mb-2">{{ next.title }}</p>
        <ButtonLink v-if="next" icon="fa6-solid:arrow-right" color="bg-purple" :href="next._path" />
      </div>
    </div>
</template>