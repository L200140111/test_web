<template>
  <v-layout
    column
    class="pa-5">
    <v-card-text>
      <p class="f-20 f-b c-d t-c">
        This page doesn’t exist
      </p>
      <p class="t-c">
        The link you clicked on may be broken or no longer exist,
        <nuxt-link to="/">
          back to home
        </nuxt-link>.
      </p>
    </v-card-text>
    <div class="t-c ma-10">
      <img 
        src="../../assets/error/not-found.png"
        class="ma-auto"
        width="30%"
        height="auto"/>
    </div>
  </v-layout>
</template>

<script>
  export default {
    name: 'error-404',
    props: {
      error: {
        type: Object,
        default: () => {},
      }
    }
  }
</script>