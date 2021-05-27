<template>
    <div class="person">
        <!-- <el-carousel
            :interval="4000"
            type="card"
            height="250px"
            :loop="true"
            style="width: 100%"
        >
            <el-carousel-item v-for="item in bannerData" :key="item.imageUrl">
                <h3 class="medium">
                    <img
                        :src="item.imageUrl"
                        alt=""
                        style="height: 250px; width: 100%"
                    />
                </h3>
            </el-carousel-item>
        </el-carousel> -->
        <happy-scroll color="rgba(0,0,0,0.5)" size="8" class="happybox">
            <el-carousel
                :interval="4000"
                type="card"
                height="250px"
                :loop="true"
                style="width: 100%"
            >
                <el-carousel-item
                    v-for="item in bannerData"
                    :key="item.imageUrl"
                >
                    <h3 class="medium">
                        <img
                            :src="item.imageUrl"
                            alt=""
                            style="height: 250px; width: 100%"
                        />
                    </h3>
                </el-carousel-item>
            </el-carousel>
            <!-- 推荐歌单 -->
            <div class="happy1">
                <el-divider content-position="left" class="wz"
                    >推荐歌单</el-divider
                >
            </div>
            <div class="musicList" style="margin-bottom: 10px">
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
                <div
                    class="personbox"
                    v-for="item in exclusiveMusic"
                    :key="item.id"
                >
                    <img :src="item.picUrl" alt="" class="person-img" />
                    <div class="person-text">{{ item.name }}</div>
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
                <div class="newBox" v-for="item in newMusic" :key="item.id">
                    <img :src="item.picUrl" alt="" class="newMusic-img" />
                    <div class="newMusic-text">
                        <p>{{ item.name }}</p>
                        <p>{{ item.song.artists[0].name }}</p>
                    </div>
                </div>
            </div>
            <!-- 推荐mv -->
            <div class="happy1">
                <el-divider content-position="left" class="wz"
                    >推荐MV</el-divider
                >
            </div>
            <div class="musicList">
                <div
                    class="personbox mvbox"
                    v-for="item in mvMusic.slice(0, 3)"
                    :key="item.id"
                    style="height: 260px"
                >
                    <img :src="item.picUrl" alt="" class="mv-img" />
                    <div class="person-text mv-text">
                        <p style="text-align: left; margin: 0; padding: 0">
                            {{ item.name }}
                        </p>
                        <p style="text-align: left; margin: 0; padding: 0">
                            {{ item.artists[0].name }}
                        </p>
                    </div>
                </div>
            </div>
        </happy-scroll>
    </div>
</template>

<script>
import apis from "../http/apis";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("personal");
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
        this.getExclusiveMusic();
        this.getNewMusic();
        this.getMv();
    },
    computed: {
        ...mapState(["exclusiveMusic", "newMusic", "mvMusic"]),
    },
    methods: {
        ...mapActions(["getExclusiveMusic", "getNewMusic", "getMv"]),
        //获取轮播图
        async getBanner() {
            const data = await apis.banner.getBanner();

            if (data.code == 200) {
                this.bannerData = data.banners;
            }
        },
        //获取推荐歌单
        async getRecommendMusic() {
            const data = await apis.banner.getRecommendMusic();

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
    // height: 1750px;

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
        height: 1700px;

        .happy1 {
            width: 1100px;
            height: 50px;
            box-sizing: border-box;
            position: relative;
            left: 20px;
            margin-top: 40px;
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
                width: 200px;
                height: 260px;

                margin-top: 20px;
                border-radius: 7px;

                .box-img {
                    width: 100%;
                    height: 190px;
                    border-radius: 7px;
                    box-shadow: 0 0px 7px 2px rgba(87, 85, 85, 0.6);
                }
                .box-text {
                    width: 100%;
                    height: 70px;
                    box-sizing: border-box;
                    padding-top: 5px;
                    font-size: 15px;
                    border-radius: 7px;
                    text-align: center;
                }
            }
            .personbox {
                width: 344px;
                height: 290px;
                // border: 1px solid;
                border-radius: 7px;

                margin-top: 20px;
                .person-img {
                    width: 100%;
                    height: 200px;
                    border-radius: 7px;
                }
                .person-text {
                    width: 100%;
                    height: 90px;
                    // border: 1px solid;
                    border-radius: 7px;
                    text-align: center;
                    box-sizing: border-box;

                    padding: 25px 10px 0px 10px;
                }
            }
            .mvbox {
                width: 344px;
                height: 280px;
                border: 1px solid red;
                margin-top: 0px;

                border-radius: 7px;
                .mv-img {
                    width: 100%;
                    height: 200px;
                    border-radius: 7px;
                }
                .mv-text {
                    width: 100%;
                    height: 70px;
                    border: 1px solid;

                    border-radius: 7px;
                    // text-align: center;
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-size: 15px;
                }
            }
        }
        .newMusic {
            width: 1100px;
            position: relative;
            left: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            .newBox {
                width: 324px;
                height: 94px;

                margin-left: 30px;

                border-radius: 7px;

                margin-top: 20px;
                display: flex;
                .newMusic-img {
                    width: 94px;
                    height: 94px;
                }
                .newMusic-text {
                    width: 200px;
                    height: 100%;

                    margin-left: 20px;
                }
            }
        }
    }
}
</style>