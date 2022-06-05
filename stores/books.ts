import { defineStore } from 'pinia'

export interface Page {
  slug: string
  title: string
}

export interface Book {
  slug: string
  title: string
  pages: Page[]
}

export interface IFileTreeStore {
  items: Array<{
    name: string
    type: 'file' | 'folder'
    slug: string
    id: number
    children?: IFileTreeStore['items']
  }>
}

export const useFileTreeStore = defineStore('fileTree', {
  state: (): IFileTreeStore => ({
    items: [
      {
        id: 1,
        name: 'Vue Components',
        type: 'folder',
        slug: 'vue-components',
        children: [
          { id: 2, name: 'Button', type: 'file', slug: 'button' },
          { id: 3, name: 'Input', type: 'file', slug: 'input' },
          { id: 4, name: 'Select', type: 'file', slug: 'select' },
        ],
      },
      {
        id: 5,
        name: 'React Components',
        type: 'folder',
        slug: 'react-components',
        children: [
          { id: 6, name: 'Rating', type: 'file', slug: 'rating' },
          { id: 7, name: 'Tabs', type: 'file', slug: 'tabs' },
          {
            id: 8,
            name: 'Other',
            type: 'folder',
            slug: 'other',
            children: [
              { id: 9, name: 'List', type: 'file', slug: 'list' },
            ],
          },
        ],
      },
    ],
  }),
})

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: [
      {
        slug: 'vue-components',
        title: 'Vue Components',
        pages: [
          { title: 'Button', slug: 'button' },
          { title: 'Checkbox', slug: 'checkbox' },
        ],
      },
      {
        slug: 'react-components',
        title: 'React Components',
        pages: [
          { title: 'Switch', slug: 'switch' },
          { title: 'Router Transition', slug: 'router-transition' },
          { title: 'Store Example', slug: 'store-example' },
        ],
      },
    ],
  }) as { books: Book[] },
  getters: {
    getBook: state => (slug: string) => {
      return state.books.find(book => book.slug === slug)
    },
  },
})
