export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  snippet?: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Vue.js 3",
    content: "Vue.js 3 is the latest major version of the popular JavaScript framework. It introduces the Composition API, which provides a more flexible way to organize and reuse logic in your components. In this post, we'll explore how to set up a new Vue 3 project and cover the basics of the Composition API.\n\nThe Composition API is a set of functions that allows you to write component logic in a more organized and reusable way. It's an alternative to the Options API and is particularly useful for larger components.\n\nTo get started with Vue 3, you need to have Node.js installed. Then, you can use the Vue CLI to create a new project.",
    author: "Jane Doe",
    date: "April 15, 2025",
    snippet: "Learn the basics of Vue.js 3 and the new Composition API"
  },
  {
    id: 2,
    title: "Mastering TypeScript with Vue",
    content: "TypeScript adds static typing to JavaScript, making your code more robust and easier to maintain. When combined with Vue.js, it provides excellent developer experience with better autocompletion, type checking, and error prevention.\n\nIn this post, we'll cover how to set up a Vue project with TypeScript, define interfaces for your component props, and leverage type checking in your Vue components.\n\nOne of the key benefits of using TypeScript with Vue is the improved IDE support. You'll get better autocompletion, inline documentation, and type checking as you write your code.",
    author: "John Smith",
    date: "April 20, 2025",
    snippet: "Enhance your Vue.js development experience with TypeScript"
  },
  {
    id: 3,
    title: "Creating Reusable Components",
    content: "Reusable components are a cornerstone of modern web development. They allow you to write code once and use it across your application, reducing duplication and improving maintainability.\n\nIn this post, we'll explore best practices for creating reusable Vue components. We'll cover props, slots, events, and how to design components that are flexible enough to be used in different contexts.\n\nOne important aspect of reusable components is proper documentation. Make sure to document your component's props, events, and slots so that other developers (including your future self) can easily understand how to use them.",
    author: "Alex Johnson",
    date: "April 22, 2025",
    snippet: "Learn how to create flexible and maintainable components in Vue.js"
  },
  {
    id: 4,
    title: "State Management with Pinia",
    content: "Pinia is the new official state management library for Vue.js, replacing Vuex. It provides a simpler and more intuitive API, better TypeScript support, and improved developer experience.\n\nIn this post, we'll explore how to set up Pinia in a Vue project, define stores, and use them in your components. We'll also cover advanced topics like store modules and plugins.\n\nOne of the key benefits of Pinia is its seamless integration with the Vue DevTools. You can inspect and time-travel debug your store's state directly in the browser.",
    author: "Maria Garcia",
    date: "April 25, 2025",
    snippet: "Discover how Pinia simplifies state management in Vue.js applications"
  },
  {
    id: 5,
    title: "Building Responsive Layouts with CSS Grid",
    content: "CSS Grid is a powerful layout system that allows you to create complex web layouts with ease. It's a two-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a one-dimensional system.\n\nIn this post, we'll explore how to use CSS Grid to create responsive layouts for your Vue applications. We'll cover grid templates, grid areas, and responsive grid layouts using media queries.\n\nOne of the key benefits of CSS Grid is that it allows you to create layouts that adapt to different screen sizes without having to use complex media queries or JavaScript.",
    author: "David Wilson",
    date: "April 28, 2025",
    snippet: "Learn how to use CSS Grid to create modern, responsive web layouts"
  }
];