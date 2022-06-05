<script setup lang="ts">
import draggable from 'vuedraggable'
import type { IFileTreeStore } from '~/stores/books'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="tree">
    <draggable
      class="dragArea"
      tag="ul"
      :list="items"
      :group="{ name: 'g1' }"
      item-key="slug"
    >
      <template #item="{ element, index }">
        <li>
          <div>
            <span v-if="element.type === 'file'">📄</span>
            <span v-else-if="element.type === 'folder'">📁</span>
            <span>{{ element.name }} {{ index }}</span>
          </div>
          <Tree v-if="element.children" :items="element.children" />
        </li>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.dragArea {
  min-height: 5px;
  width: 100%;
}
.dragArea ul {
  padding-left: 20px;
}
</style>
