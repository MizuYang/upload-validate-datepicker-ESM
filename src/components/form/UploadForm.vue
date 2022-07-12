<template>
  <label for="檔案">上傳圖片檔案，檔案大小不得超過 30 MB</label>
  <br>
  <Field type="file" @change="upload" id="檔案" name="檔案" multiple ref="myFile"
    :class="{ err: errors['檔案'] }" :rules="{size: 30720,
      mimes: ['image/jpeg','image/png','image/jpg','image/svg','image/gif'], required: true}" />
  <Error-message name="檔案" class="text-danger d-block"></Error-message>
  <br>
  <label ref="progressLabel" for="progress"></label>
  <progress ref="progress" value="0" max="100"> </progress>

  <br>

  <img :src="imgUrl" alt="" width="500" v-if="imgUrl">

</template>

<script>

export default {
  components: {
  },

  props: ['errors'],

  data () {
    return {
      imgUrl: ''
    }
  },

  watch: {
  },

  methods: {
    upload (e) {
      const reader = new FileReader()
      this.$parent.validate().then(res => {
        if (res.results.檔案.valid) { //* 上傳成功就賦予圖片 Url
          const file = e.target.files[0]
          this.imgUrl = URL.createObjectURL(file)
          this.$emit('getFile', file)
          reader.readAsDataURL(file)

          reader.addEventListener('progress', (event) => {
            if (event.loaded && event.total) {
              const percent = (event.loaded / event.total) * 100
              this.$refs.progress.value = percent
              this.$refs.progressLabel.innerHTML = Math.round(percent) + '%'
            }
          })
        } else {
          this.imgUrl = ''
        }
      })
    }
  },

  mounted () {
  //   const fileUploader = document.getElementById('檔案')
  //   const feedback = document.getElementById('feedback')
  //   const progress = document.getElementById('progress')

    //   const reader = new FileReader()

    //   fileUploader.addEventListener('change', (event) => {
    //     const files = event.target.files
    //     const file = files[0]
    //     reader.readAsDataURL(file)

    //     reader.addEventListener('progress', (event) => {
    //       if (event.loaded && event.total) {
    //         const percent = (event.loaded / event.total) * 100
    //         progress.value = percent
    //         document.getElementById('progress-label').innerHTML = Math.round(percent) + '%'

  //         if (percent === 100) {
  //           const msg = `<span style="color:green;">File <u><b>${file.name}</b></u> has been uploaded successfully.</span>`
  //           feedback.innerHTML = msg
  //         }
  //       }
  //     })
  //   })
  }

}
</script>

<style lang='scss' scope>
.err {
  border: 1px solid red;
  border-radius: 5px;
}
</style>
