<template>
    <div class="flex justify-between max-w-sm sm:max-w-4xl px-4 py-4 mx-auto">
        <div>
            <NuxtLink to="/" exact-active-class="font-bold"> <NuxtImg src="/images/logo-512x512.png" sizes="50px" /></NuxtLink>
        </div>
        <div class="flex justify-between">
        <NuxtLink class="px-2" to="/about" active-class="font-bold" >About</NuxtLink>
        <NuxtLink class="px-2" to="/blog" active-class="font-bold">Blog</NuxtLink>
        <NuxtLink class="px-2" to="/events" active-class="font-bold">Events</NuxtLink>
    </div>
    </div>
  </template>