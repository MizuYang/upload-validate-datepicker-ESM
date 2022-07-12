<template>
  <div class="about">
    <Form v-slot="{ errors,  validate }" @submit="onSubmit">
      <UserForm :errors="errors"></UserForm>

      <DateForm @getDate="getDate" :errors="errors" v-model:value="user.date"></DateForm>

      <br>
      <Upload @getFile="getFile" :errors="errors" v-model="user.file"></Upload>
      <br>

      <button
        class="btn me-2 btn-outline-primary"
        type="button"
        @click="validate"
      >
        驗證
      </button>
      <button class="btn btn-primary" type="submit">送出</button>
    </Form>
  </div>
</template>

<script>
import UserForm from '@/components/form/UserForm.vue'
import DateForm from '@/components/form/DateForm.vue'
import Upload from '@/components/form/UploadForm.vue'
export default {
  components: {
    UserForm,
    DateForm,
    Upload
  },
  data () {
    return {
      check: {},
      user: {}
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    },
    getDate (date) {
      this.user.date = date
    },
    getFile (file) {
      this.user.file = file
    }
  }
}
</script>
