<template>
  <Layout>
    <template #doc-after>
      <Comment></Comment>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Comment from './components/Comment.vue';

const { Layout } = DefaultTheme;
</script>

<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css';
</style>
