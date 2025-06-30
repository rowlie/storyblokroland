import { apiPlugin, StoryblokVue } from '@storyblok/vue';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(StoryblokVue, {
    accessToken: process.env.STORYBLOK_TOKEN,
    use: [apiPlugin],
  });
});
