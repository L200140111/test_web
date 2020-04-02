<template>
  <div>
    <p class="f-20 f-b c-d t-c pt-5 mt-12">
        Narcissistic
      </p>
    <form class="pa-5">
      <v-text-field
        v-model="form.number"
        v-validate="'required'"
        :error-messages="errors.collect('number')"
        label="Number"
        type="text"
        data-vv-name="number"
        required>
      </v-text-field>
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
      this.$validator.localize('en', this.dictionary)
    },
    methods: {
      async save () {
        var n =  this.form.number;
        var digits = (""+n).split("");
        console.log(digits)
          
        var x = []; var y = 0; 

        for (let i in digits){
            digits[i] = parseInt(digits[i]);
            digits[i] = Math.pow(digits[i], digits.length);
            x.push(digits[i]); 
            y += x[i]; 
          };
          console.log(y)
        this.data = y == this.form.number ? true : false
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