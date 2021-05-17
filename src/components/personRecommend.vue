<template>
    <div class="person">
        <el-carousel :interval="4000" type="card" height="250px" :loop="true">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <happy-scroll color="rgba(0,0,0,0.5)" size="10" resize>
            <div class="happy1">
                  <el-divider content-position="left" class="wz">推荐歌单</el-divider>
            </div>
            <div class="musicList">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </happy-scroll>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.person {
    width: 100%;
    height: 800px;

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
    .happy1{
        width: 1200px;
        height: 50px;
        border: 1px solid;
        // margin-left: 10px;
        box-sizing: border-box;
        margin-left: 5px;
        .el-divider__text{
            font-size: 20px;
           
        }
        
    }
    .musicList{
        width: 100%;
        border: 1px solid;
        // display: flex;
        // justify-content: space-between;
      
        
        .box{
            width: 190px;
            height: 190px;
            border: 1px solid;
            
        }
    }
}
</style>