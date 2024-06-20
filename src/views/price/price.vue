<template>
  <div class="container">
    <div class="card">
      <div class="img-card">
        <video preload="auto" class="img-card" poster="https://sb.kaleidousercontent.com/67418/840x560/d749ed76de/manuel-poster.jpg" autoplay playsinline="true" src="https://sb.kaleidousercontent.com/67418/x/9289c7b8dd/manuel_compressed.mp4"></video>
        <div style="font-size: 3.75rem;font-weight: bold;
        line-height: 4.25rem;">视频水印擦除</div>
      </div>
      <el-upload
              class="upload"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
            >
              <el-button type="primary">
                上传图片
              </el-button>
              <div style="font-size: 1.25rem;
    line-height: 1.75rem;font-weight: 600;">或者拖放一个文件</div>
            </el-upload>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style  lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
  padding-top: 40px;
  .card{
    display: flex;
    .img-card{
      max-width: 420px;
    }
    .upload{
      width: 420px;
      margin-left: 10px;
    }
  }
}
</style>
