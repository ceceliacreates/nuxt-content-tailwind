<script setup lang="ts">
import type { Event } from "~~/types";

const currentDate = new Date().toISOString();

const selectedTag = ref('')

const { data: events } = await useAsyncData<Event[]>('events', () => queryContent('events').where({ _empty: { $ne: true }}).sort({date: -1}).find())

const filteredEvents: Event[] = computed(() => 
    events.value?.filter(event => event.tags?.includes(selectedTag.value))
  )

const displayedEvents: Event[] = computed(()=> 
    selectedTag.value ? filteredEvents.value : events.value
  ) 

const upcomingEvents: Event[] = computed(() => 
  displayedEvents.value?.filter(event => event.date > currentDate)
)

const pastEvents: Event[] = computed(() => 
  displayedEvents.value?.filter(event => event.date < currentDate)
)

</script>

<template>
    <main>
      <h1 class="text-2xl sm:text-3xl mb-4 text-black">Events</h1>
      <div>
        <p v-if="selectedTag"> Filtered by: <span class="font-bold">{{selectedTag}}</span>  <button class="bg-blue text-white px-2 mx-2 my-2 rounded" @click="selectedTag = ''">Clear</button></p>
        <p v-else class="font-bold"> Click any tag to filter.</p>
      </div>
        <h3 class="text-3xl text-purple my-4">Upcoming</h3>
        <div v-for="event in upcomingEvents">
            <Item :item="event" section="events" @update-selected-tag="(tag) => selectedTag = tag" />
        </div>
        <p v-show="!upcomingEvents.length" class="italic font-light">No upcoming events matching filter.</p>
        <h3 class="text-3xl text-purple my-4">Past</h3>
        <div v-for="event in pastEvents">
            <Item :item="event" section="events" @update-selected-tag="(tag) => selectedTag = tag" />
        </div>
    </main>
</template>