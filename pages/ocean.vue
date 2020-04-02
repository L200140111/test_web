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
        label="Masukan angka untuk array"
        type="number"
        data-vv-name="number"
        required>
      </v-text-field>
      <v-text-field
        v-model="form.delete"
        v-validate="'required'"
        :error-messages="errors.collect('number')"
        label="Angka yang dihilangkan"
        type="number"
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
          delete: null
        },
        data: null,
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
      async save () {
        var n =  this.form.number;
        var digits = Array.from(n.toString()).map(Number);
        var index = digits.indexOf(parseInt(this.form.delete));
        if (index > -1) {
          digits.splice(index, 1);
        }
        this.data = digits
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