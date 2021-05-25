<template>
    <div class="person">
        <el-carousel
            :interval="4000"
            type="card"
            height="250px"
            :loop="true"
            style="width: 100%"
        >
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <happy-scroll color="rgba(0,0,0,0.5)" size="8" resize class="happybox">
            <!-- 推荐歌单 -->
            <div class="happy1">
                <el-divider content-position="left" class="wz"
                    >推荐歌单</el-divider
                >
            </div>
            <div class="musicList">
                <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
                  <div class="box">
                    <div class="box-text"></div>
                </div>
            </div>

            <!-- 独家放送 -->
            <div class="happy1">
                <el-divider
                    content-position="left"
                    class="wz"
                    style="margin-top: 40px;margin-bottom:20px"
                    >独家放送</el-divider
                >
            </div>
            <div class="musicList">
                <div class="personbox">
                    <div class="person-text"></div>
                </div>
                <div class="personbox">
                    <div class="person-text"></div>
                </div>
                <div class="personbox">
                    <div class="person-text"></div>
                </div>
            </div>
            <!-- 最新音乐 -->
            <div class="happy1">
                <el-divider
                    content-position="left"
                    class="wz"
                    style="margin-top: 40px"
                    >最新音乐</el-divider
                >
            </div>
            <div class="newMusic">
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
                <div class="newBox"></div>
            </div>
            <!-- 推荐mv -->
            <div class="happy1">
                <el-divider
                    content-position="left"
                    class="wz"
                    style="margin-top: 40px"
                    >推荐MV</el-divider
                >
            </div>
            <div class="musicList">
                <div class="personbox">
                    <div class="person-text"></div>
                </div>
                <div class="personbox">
                    <div class="person-text"></div>
                </div>
                <div class="personbox">
                    <div class="person-text"></div>
                </div>
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
    height: 1950px;

    

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #376ab1;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
    .happybox {
        .happy1 {
            width: 1100px;
            height: 50px;
            border: 1px solid;
            box-sizing: border-box;
            position: relative;
            left: 20px;
            margin-top: 20px;

            .el-divider__text {
                font-size: 20px;
            }
        }
        .musicList {
            width: 1100px;
            border: 1px solid;
            position: relative;
            left: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            .box {
                width: 190px;
                height: 260px;
                border: 1px solid;
                margin-top: 20px;
                border-radius: 7px;
                display: flex;
                align-items: flex-end;
                .box-text {
                    width: 100%;
                    height: 70px;
                    border: 1px solid;
                    border-radius: 7px;
                }
            }
            .personbox {
                width: 344px;
                height: 290px;
                border: 1px solid;
                border-radius: 7px;
                display: flex;
                align-items: flex-end;
                margin-top: 20px;
                .person-text {
                    width: 100%;
                    height: 90px;
                    border: 1px solid;
                    border-radius: 7px;
                }
            }
        }
        .newMusic {
            width: 1100px;
            border: 1px solid;
            position: relative;
            left: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
           
            .newBox {
                width: 364px;
                height: 94px;
                border: 1px solid;
                border-radius: 7px;
                
                margin-top: 20px;
                
            }
        }
    }
}
</style>