<template>
  <div>
    <p class="f-20 f-b c-d t-c pt-5 mt-12">
        Narcissistic
      </p>
    <form class="pa-5">
      <v-text-field
        label="cari..."
        type="text"
        v-model="form.key" 
        @keyup="search_title" 
        @keydown="search_title"
        required>
      </v-text-field>
      <div v-for="(i, index) in array" :key="index">
        {{ i }}
      </div>
      <div class="text-center mt-5 mb-5">
        <v-btn 
          class="b-d white--text t-t"
          block
          rounded 
          small
          @click="save">
          Cek
        </v-btn>
      </div>
      {{ data }}
    </form>
  </div>
</template>

<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data () {
      return {
        show: false,
        text: null,
        form: {
          key: null
        },
        array: ['red', 'blue', 'yellow', 'black', 'grey'],
        dictionary: {
          custom: {
            number: {
              required: () => 'number tidak boleh kosong'
            },
            delete: {
              required: () => 'delete tidak boleh kosong'
            },
          }
        },
        process: {
          run: false
        },
        response: null
      }
    },
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    methods: {
      search_title () {
        this.array.fill(this.form.key);
      },
    }
  }
</script>

<style>
  ::-webkit-input-placeholder { /* Chrome */
    color: #16A086;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #16A086;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #16A086;
    opacity: 1;
  }
  :-moz-placeholder { /* Firefox 4 - 18 */
    color: #16A086;
    opacity: 1;
  }
  .forget {
    margin-top: 5%;
    text-align: center;
    color: #16A086;
  }
</style>