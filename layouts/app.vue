<script lang="ts" setup>
import Vue3TreeVue from 'vue3-tree-vue'
import { useBooksStore, useFileTreeStore } from '~/stores/books'

const booksStore = useBooksStore()
const treeStore = useFileTreeStore()
const route = useRoute()

const currentBook = computed(() => {
  return booksStore.getBook(route.params.book as string)
})

console.log(booksStore.books)
</script>

<template>
  <main class="main relative block w-full h-screen font-sans overflow-hidden antialiased">
    <header class="header relative block w-full h-[42px] bg-gray-900 text-gray-100">
      <div class="flex w-full h-full items-center justify-between px-6 space-x-6">
        <div class="text-sm font-medium">
          codebook.io
        </div>
        <div class="text-sm font-medium rounded-lg hover:bg-gray-700 px-2 py-1 cursor-pointer transition-all">
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
        <div class="block w-[300px] h-full shadow-lg overflow-hidden">
          <Tree :items="treeStore.items" />
          <!--
          <Vue3TreeVue
            :items="treeStore.items"
            :is-checkable="false"
            :hide-guide-lines="false"
          >
          <template #item-prepend-icon="item">
            <span v-if="item.type === 'file'">📄</span>
            <span v-else-if="item.type === 'folder'">📁</span>
          </template>
          </Vue3TreeVue>
          -->
          <!-- Render file tree
          <div v-for="item in treeStore.items" :key="item.slug">
            <div>
              <span v-if="item.type === 'file'">📄</span>
              <span v-else-if="item.type === 'folder'">📁</span>
              {{ item.title }}
            </div>
            <div class="pl-6">
              <div v-for="child in item.children" :key="child.slug">
                <div>
                  <span v-if="child.type === 'file'">📄</span>
                  <span v-else-if="child.type === 'folder'">📁</span>
                  {{ child.title }}
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="grid grid-cols-12 h-full">
            <div class="col-span-6 menu-1 p-4">
              <router-link
                v-for="book in booksStore.books"
                :key="book.slug"
                class="block px-2 py-3 rounded-md bg-white text-sm font-medium transition-colors duration-300"
                :class="{ 'bg-primary-500 text-white': book.slug === route.params.book }"
                :to="`/dashboard/${book.slug}/`"
              >
                <div class="flex items-center gap-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                  </div>
                  <div>
                    {{ book.title }}
                  </div>
                </div>
              </router-link>
            </div>
            <div v-if="currentBook" class="col-span-6 menu-2 p-4">
              <TransitionGroup name="list" tag="div">
                <router-link
                  v-for="page in currentBook.pages"
                  :key="page.slug"
                  :to="`/dashboard/${currentBook?.slug}/${page.slug}`"
                  class="block px-2 py-3 rounded-md bg-white text-sm font-medium transition-colors duration-300"
                  :class="{ 'bg-primary-500 text-white': page.slug === route.params.page }"
                >
                  <div class="flex items-center gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                      </svg>
                    </div>
                    <div>
                      {{ page.title }}
                    </div>
                  </div>
                </router-link>
              </TransitionGroup>
            </div>
          </div> -->
        </div>
        <div class="flex-1">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.content {
  height: calc(100% - 42px);
}
</style>
