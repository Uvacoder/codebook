<script setup lang="ts">
// import 'monaco-editor/min/vs/editor/editor.main.css'
// import type { Highlighter } from 'shiki'
// import { getHighlighter, setCDN } from 'shiki'

const editor = ref<any>(null)
const codeEditor = ref<HTMLElement>()

const handleSave = () => {
  const value = editor.value.session.getValue()
  console.log('save', value)
}

onMounted(() => {
  const win = window as any
  editor.value = win.ace.edit(codeEditor.value)

  editor.value.session.setOptions({
    mode: 'ace/mode/html',
    tabSize: 2,
  })

  editor.value.renderer.setOptions({
    theme: 'ace/theme/nord_dark',
    fontSize: '1rem',
  })

  // console.log(editor.value)
  editor.value.setValue('<template><h1>Hello</h1></template>', 1)

  editor.value.commands.addCommand({
    name: 'save',
    bindKey: { win: 'Ctrl-S', mac: 'Cmd-S' },
    exec(editor: any) {
      handleSave()
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

/* onMounted(async () => {
  console.log(process)
  if (process.client) {
    const monaco = await import('monaco-editor/esm/vs/editor/editor.api')
    console.log(monaco)
    monaco.editor.colorizeElement(codeEditor.value!, codeEditor.value!.value)

    editor.value = monaco.editor.create(codeEditor.value!, {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
      language: 'typescript',
      theme: 'vs-dark',
    })
  }
}) */

/* onBeforeUnmount(() => {
  editor.value?.dispose()
}) */

/*
const highlighter = ref<Highlighter>()

const code = ref(`<template>
  <h1>Hello</h1>
</template>`)

const codeHighlighted = ref('')

const highlightCode = () => {
  codeHighlighted.value = highlighter.value?.codeToHtml(code.value, {
    lang: 'vue',
  }) || ''
}

onMounted(async () => {
  highlighter.value = await getHighlighter({
    theme: 'nord',
  })
  highlightCode()
})

watch(code, async () => {
  highlightCode()
}, { immediate: true }) */

useProgressDone()

definePageMeta({
  layout: 'app',
})
</script>

<template>
  <div class="relative block w-full h-full">
    <div ref="codeEditor" class="absolute inset-0" />
  </div>
</template>

<style>
/** Ace overrides */
.ace_tooltip {
  display: none!important;
}
.ace_gutter-cell.ace_info {
  background-image: none!important;
}
</style>
