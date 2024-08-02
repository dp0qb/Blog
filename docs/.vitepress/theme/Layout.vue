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
