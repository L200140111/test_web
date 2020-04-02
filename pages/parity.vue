<template>
  <div>
    <p class="f-20 f-b c-d t-c pt-5 mt-12">
        Parity
      </p>
    <form class="pa-5">
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
          number: 0,
        },
        data: null,
        dictionary: {
          custom: {
            number: {
              required: () => 'number tidak boleh kosong'
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
      this.save()
      this.$validator.localize('en', this.dictionary)
    },
    methods: {
       async save () {
        var integers = [2, 4, 0, 100, 4, 11, 2602, 36]
        var value;
        var evens = [];
        var odds = [];
        for (var i = 0; i < integers.length; i++) {
          if (integers[i] % 2) {
            evens.push(integers[i]);
          } else {
            odds.push(integers[i]);
          }
        }
        if (evens.length == 1) {
          value = evens[0];
        } else if (odds.length == 1) {
          value = odds[0];
        } else {
          value = false;
        }
        console.log(value)
      }
    },
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