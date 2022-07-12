<template>
  <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <Field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email"
        rules="email|required"
        v-model="user.email"
      ></Field>
      <Error-message name="email" class="invalid-feedback"></Error-message>
    </div>

    <div class="mb-3">
      <label for="tel" class="form-label">電話</label>
      <Field
        id="tel"
        name="tel"
        type="tel"
        class="form-control"
        :class="{ 'is-invalid': errors['tel'] }"
        placeholder="請輸入 tel"
        :rules="isPhone"
        v-model.number="user.tel"
        maxlength="10"
      ></Field>
      <Error-message name="tel" class="invalid-feedback"></Error-message>
    </div>
</template>

<script>
export default {

  props: ['errors'],

  data () {
    return {
      user: {}
    }
  },

  methods: {
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入 09 開頭的正確電話號碼'
    }
  }

}
</script>

<style lang='scss' scope></style>
