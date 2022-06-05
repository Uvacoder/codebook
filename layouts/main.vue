<script lang="ts" setup>
import { useBooksStore } from '~~/stores/books'

const booksStore = useBooksStore()
const route = useRoute()

const currentBook = computed(() => {
  return booksStore.getBook(route.params.book as string)
})
</script>

<template>
  <main class="main relative block w-full h-screen bg-black p-12 overflow-hidden antialiased">
    <div class="ellipsis absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full bg-primary-500/40" />
    <div class="ellipsis absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-primary-500/40" />
    <div class="ellipsis absolute top-[20%] right-[40%] w-[500px] h-[500px] rounded-full bg-primary-500/40" />
    <div class="ellipsis absolute top-[10%] right-[60$] w-[500px] h-[500px] rounded-full bg-primary-500/40" />
    <div class="window relative block w-full h-full overflow-hidden">
      <header class="header relative block w-full h-[42px] bg-gray-900">
        <div class="flex w-full h-full items-center justify-between px-6 space-x-6">
          <div class="text-sm font-medium text-gray-300">
            codebook.io
          </div>
          <div class="text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700 px-2 py-1 cursor-pointer transition-all">
            <div class="flex items-center">
              <img src="~/assets/me.jpg" class="w-5 h-5 object-center object-cover rounded-full inline mr-2">
              <div>
                Matt
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="content relative block w-full">
        <div class="flex h-full">
          <div class="menus w-[480px]">
            <div class="grid grid-cols-12 h-full">
              <div class="col-span-6 menu-1">
                <router-link
                  v-for="book in booksStore.books"
                  :key="book.slug"
                  class="menu-1-item"
                  :to="`/dashboard/${book.slug}/`"
                >
                  {{ book.title }}
                </router-link>
              </div>
              <div v-if="currentBook" class="col-span-6 menu-2">
                <router-link
                  v-for="page in currentBook.pages"
                  :key="page.slug"
                  :to="`/dashboard/${currentBook?.slug}/${page.slug}`"
                  class="menu-2-item"
                >
                  {{ page.title }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background: linear-gradient(145.9deg, #4338CA 3.83%, #C7D2FE 94.24%);
}

.window {
  background: linear-gradient(141.25deg, rgba(255, 255, 255, 0.5) 9.58%, rgba(255, 255, 255, 0.4) 98.76%);
  box-shadow: 0px 4px 40px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;
}

.content {
  height: calc(100% - 42px);
}

.menus {
  background: linear-gradient(141.25deg, rgba(255, 255, 255, 0.4) 9.58%, rgba(255, 255, 255, 0) 100%);
  @apply shadow-lg;
}

.menu-1 {
  border-radius: 0px 0px 0px 20px;
  @apply text-gray-700 tracking-wide border-r border-r-white/20 p-4;
}

.menu-2 {
  @apply text-gray-700 tracking-wide p-4;
}

.menu-1-item {
  @apply relative block w-full font-medium rounded-lg px-4 py-2 bg-transparent text-sm transition-colors duration-100 cursor-pointer;
  @apply hover:bg-primary-500 hover:text-white;
}

.menu-1-item.active {
  @apply bg-primary-500 text-white;
}

.menu-2-item {
  @apply relative block w-full px-4 py-2 rounded-lg bg-transparent text-sm transition-all duration-100 ease-in-out cursor-pointer;
  @apply hover:bg-primary-500 hover:text-white;

}

.menu-2-item.active {
  @apply bg-primary-500 text-white;
}
</style>
