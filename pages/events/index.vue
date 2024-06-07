<script setup lang="ts">
import type { Event } from "~~/types";

const currentDate = new Date().toISOString();

const selectedTag = ref('')

const maxEvents = ref(5)

const { data: events } = await useAsyncData<Event[]>('events', () => queryContent('events').where({ _empty: { $ne: true }}).sort({date: -1}).find())

const filteredEvents = computed(() =>  
 selectedTag.value ? events.value?.filter(event => event.tags?.includes(selectedTag.value)) : events.value
) 

const upcomingEvents = computed(() => 
  filteredEvents.value?.filter(event => event.date > currentDate).sort((a, b) => {
 return new Date(a.date) - new Date(b.date)
  } )
)

const pastEvents = computed(() => 
  filteredEvents.value?.filter(event => event.date < currentDate)
)

const displayedPastEvents = computed(() => 
pastEvents.value.slice(0, maxEvents.value)
)

const atEnd = computed(() =>
pastEvents.value?.length <= maxEvents.value ? true : false
)

const filterByTag = (tag: string) => {
  selectedTag.value = tag;
  maxEvents.value = 5;
}


const loadMoreEvents = () => {

  maxEvents.value += 5;

}
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
            <Item :item="event" section="events" @update-selected-tag="filterByTag" />
        </div>
        <p v-show="!upcomingEvents.length" class="italic font-light">No upcoming events matching filter.</p>
        <h3 class="text-3xl text-purple my-4">Past</h3>
        <div v-for="event in displayedPastEvents">
            <Item :item="event" section="events" @update-selected-tag="filterByTag" />
        </div>
        <div class="text-center">
          <p class="italic font-light" v-if="atEnd">End of events</p>
          <button class="bg-blue text-white px-4 py-2" v-else @click="loadMoreEvents">Load More</button>
        </div>
    </main>
</template>