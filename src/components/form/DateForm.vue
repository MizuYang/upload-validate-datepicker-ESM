<template>
  <div>
    <label for="date">選擇日期</label>
    <br>
    <DatePicker v-model:value="date" id="date" value-type="format" :clearable="false"  range
      @change="change" :class="{'nullDate': errors['選擇時段']}"></DatePicker>
      <Field type="date" name="選擇時段" rules="required" v-model="date"
            :class="{ 'is-invalid': errors['選擇時段'] }" class="d-none" />
      <Error-message name="選擇時段" class="invalid-feedback"></Error-message>
      <br>
      <date v-if="date[0]">
        {{ date[0] }} ~ {{ date[1] }}
      </date>
  </div>
</template>

<script>
import DatePicker from 'vue-datepicker-next'
import 'vue-datepicker-next/index.css'

export default {
  props: ['errors'],
  components: { DatePicker },

  data () {
    return {
      date: [],
      errShow: false
    }
  },
  methods: {
    change () {
      this.$emit('getDate', this.date)
    }
  }
}
</script>
<style lang="scss" scoped>
.nullDate {
  border: 1px solid red;
  border-radius: 5px;
}
</style>
