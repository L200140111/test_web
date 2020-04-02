<template>
  <v-layout
    column
    class="pa-5">
    <v-card-text>
      <p class="f-20 f-b c-d t-c">
        Internal server error
      </p>
      <p class="t-c">
        Troubleshooting the internal server error from server side, 
        <a href="" @click="reload">
          reload
        </a>.
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
    name: 'error-500',
    props: {
      error: {
        type: Object,
        default: () => {},
      }
    },
    methods: {   
      reload () {
        location.reload()
      }
    }
  }
</script>