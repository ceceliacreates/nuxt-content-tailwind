<script setup>

const currentDate = new Date().toISOString();

const { data: events } = await useAsyncData('events', () => queryContent('events').where({ _empty: { $ne: true }}).sort({date: -1}).find())

const upcomingEvents = computed(() => 
  events.value?.filter(event => event.date > currentDate)
)

const pastEvents = computed(() => 
  events.value?.filter(event => event.date < currentDate)
)

</script>

<template>
    <main>
      <h1 class="text-2xl sm:text-3xl mb-6 text-black">Events</h1>
        <h3 class="text-xl text-purple mb-4">Upcoming</h3>
        <div v-for="event in upcomingEvents">
            <Item :item="event" type="events" />
        </div>
        <h3 class="text-xl text-purple mb-4">Past</h3>
        <div v-for="event in pastEvents">
            <Item :item="event" type="events" />
        </div>
    </main>
</template>