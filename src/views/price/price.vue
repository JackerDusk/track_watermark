<template>
  <div class="container">
    <div class="des">
      <h1>Get High Resolution Video</h1>
      <p class="lead">
        <span class="font-weight-bold" style="text-transform: uppercase;">1 Video = 1 Credit</span>
      </p>
    </div>
    <div>
      <div class="pricing-overview">
        <el-row justify="center" class="pricing-row">
          <el-col :span="8">
            <el-card class="upper" style="width:300px;">
              <h2>goPay as you </h2>
              <div>
                <div>
                  <div style="text-align: center; color: rgb(15, 112, 230); line-height: 1; margin-bottom: 15px;">
                    <span class="h3" style="font-size: 2rem;font-weight: 400;display: inline-block;vertical-align: middle;">US
                    $ 5</span>
                    <span style="font-size: 12px; display: inline-block; vertical-align: middle; margin-left: 5px; margin-top: 4px;">/ image</span>
                  </div>
                </div>
                <el-table :data="tableData" class="plans-tabs" style="margin: 0px auto 20px;width: 100%">
                  <el-table-column prop="count" label="Count"/>
                  <el-table-column prop="sum" label="Sum" />
                  <el-table-column prop="price" label="Price"/>
                </el-table>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="upper" style="width:300px;">
              <h2>Subscription Plan</h2>
              <div>
                <div>
                  <div style="text-align: center; color: rgb(15, 112, 230); line-height: 1; margin-bottom: 15px;">
                    <span class="h3" style="font-size: 2rem;font-weight: 400;display: inline-block;vertical-align: middle;">US
                    $ 3</span>
                    <span style="font-size: 12px; display: inline-block; vertical-align: middle; margin-left: 5px; margin-top: 4px;">/ image</span>
                  </div>
                </div>
                <el-table :data="tableData" class="plans-tabs" style="margin: 0px auto 20px;width: 100%">
                  <el-table-column prop="count" label="Count"/>
                  <el-table-column prop="sum" label="Sum" />
                  <el-table-column prop="price" label="Price"/>
                </el-table>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="upper" style="width:300px;">
              <h2>High-Volume Solutions </h2>
              <div>
                <div>
                  <div style="text-align: center; color: rgb(15, 112, 230); line-height: 1; margin-bottom: 15px;">
                    <span class="h3" style="font-size: 2rem;font-weight: 400;display: inline-block;vertical-align: middle;">100K + Video</span>
                    <span style="font-size: 12px; display: inline-block; vertical-align: middle; margin-left: 5px; margin-top: 4px;">/ year</span>
                  </div>
                </div>
                <el-tree>
                  
                </el-tree>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="text-center"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'

  const tableData = [{
    count: '1 Credit',
    sum: 'US$ 5',
    price:'US$ 5/video'
  },{
    count: '10 Credit',
    sum: 'US$ 49',
    price:'US$ 4.9/video'
  },{
    count: '100 Credit',
    sum: 'US$ 40',
    price:'US$ 4/video'
  },{
    count: '200 Credit',
    sum: 'US$ 3.5',
    price:'US$ 3.5/video'
  },{
    count: '500 Credit',
    sum: 'US$ 3',
    price:'US$ 3/video'
  }]

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
