<template>
  <v-layout row wrap>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        class="pa-12 mt-12">
        <p class="f-20 f-b c-d t-c pt-5 mt-12">
          Masuk
        </p>
        <form class="pa-12 pt-0 pb-0 ma-12 mt-0 mb-0">
          <v-text-field
            v-model="form.member_email"
            v-validate="'required'"
            :error-messages="errors.collect('username')"
            label="Username"
            type="text"
            data-vv-name="Username"
            required>
          </v-text-field>
          <v-text-field
            v-model="form.member_password"
            v-validate="'required'"
            :counter="20"
            :error-messages="errors.collect('password')"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            label="Password"
            data-vv-name="password"
            required
            @click:append="show = !show">
          </v-text-field>
          <div class="text-center mt-5 mb-5">
            <p class="e-c"
              v-show="response !== null">
              <span class="f-14">
                OOPS!
              </span>
              <span class="f-12">
                {{ response }}
              </span>
            </p>
            <v-btn 
              class="b-d white--text t-t"
              block
              rounded 
              small
              :disabled="process.run"
              @click="save">
              Masuk
            </v-btn>
          </div>
        </form>
      </v-col>
      <v-col
        cols="12"
        sm="6">
        <v-img
          :src="require('~/assets/login.png')"
          height="650">
        </v-img>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
  import axios from 'axios'
  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data () {
      return {
        show: false,
        text: null,
        form: {
          member_username: '',
          member_password: ''
        },
        dictionary: {
          custom: {
            code: {
              required: () => 'Kode tidak boleh kosong',
              min: 'Minimal kode 11 karakter',
              max: 'Maksimal kode 11 karakter'
            },
            username: {
              required: () => 'Username tidak boleh kosong'
            },
            password: {
              required: () => 'Password tidak boleh kosong'
            }
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
        this.response = null
        const valid = await this.$validator.validateAll()
        if (valid) {
          this.process.run = true
          this.$root.$loading.start()
          await this.$store.dispatch('auth/POST_LOGIN', {
              username: this.form.member_email,
              password: this.form.member_password
          })
          .then((res) => {
            this.$root.$loading.finish()
            console.log(res)
            this.weather()
            // if (res.status === 00) {
            //   this.key = res.access_key
            // } else {
            //   this.process.run = false
            //   this.response = res.message
            // }
          })
        }
      },
      async weather () {
        this.response = null
        this.$root.$loading.start()
        await this.$store.dispatch('auth/POST_WEATHER')
        .then((res) => {
          this.$root.$loading.finish()
          console.log(res)
          // if (res.status === 00) {
          //   this.key = res.access_key
          // } else {
          //   this.process.run = false
          //   this.response = res.message
          // }
        })
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