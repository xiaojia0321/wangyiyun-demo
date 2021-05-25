<template>
    <div class="person">
        <el-carousel
            :interval="4000"
            type="card"
            height="250px"
            :loop="true"
            style="width: 100%"
        >
            <el-carousel-item v-for="item in bannerData" :key="item.imageUrl">
                <h3 class="medium">
                    <img :src="item.imageUrl" alt="" style="height: 250px" />
                </h3>
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
                <div
                    class="box"
                    v-for="(item, index) in recommendData.slice(0, 10)"
                    :key="index"
                >
                    <img :src="item.picUrl" alt="" class="box-img" />
                    <div class="box-text">{{ item.name }}</div>
                </div>
            </div>

            <!-- 独家放送 -->
            <div class="happy1">
                <el-divider
                    content-position="left"
                    class="wz"
                    style="margin-top: 40px; margin-bottom: 20px"
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
import apis from "../http/apis";
export default {
    data() {
        return {
            //轮播图
            bannerData: [],
            //推荐歌单
            recommendData: [],
            //推荐歌单图片
        };
    },
    mounted() {
        this.getBanner();
        this.getRecommendMusic();
    },
    methods: {
        //获取轮播图
        async getBanner() {
            const data = await apis.getBanner.getBanner();

            if (data.code == 200) {
                this.bannerData = data.banners;
            }
        },
        //获取推荐歌单
        async getRecommendMusic() {
            const data = await apis.getBanner.getRecommendMusic();
            console.log(data);
            if (data.code == 200) {
                this.recommendData = data.result;
            }
        },
    },
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

            position: relative;
            left: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            .box {
                width: 210px;
                height: 260px;
                border: 1px solid;
                margin-top: 20px;
                border-radius: 7px;
                // display: flex;
                // align-items: flex-end;
                .box-img {
                    width: 100%;
                    height: 190px;
                }
                .box-text {
                    width: 100%;
                    height: 70px;

                    border-radius: 7px;
                    text-align: center;
                    line-height: 30px;
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