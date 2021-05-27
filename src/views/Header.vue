<template>
    <div class="header">
        <div class="center">
            <div class="center-rt">
                <div class="img"></div>
                <span class="text">音乐</span>
                <i class="el-icon-arrow-left"></i>
                <el-row class="demo-autocomplete">
                    <el-col :span="12">
                        <el-autocomplete
                            class="inline-input"
                            v-model="state1"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入歌曲名或者歌手"
                            @select="handleSelect"
                        ></el-autocomplete>
                    </el-col>
                </el-row>
            </div>
            <div class="center-lft">
                <div class="person-img">
                    <img
                        :src="
                            usersImg
                                ? usersImg
                                : require('@/assets/img/users.png')
                        "
                        alt=""
                        style="
                            width: 50px;
                            height: 50px;
                            margin-top: -2px;
                            border-radius: 50%;
                        "
                    />
                </div>
                <div class="users">
                    <span
                        round
                        @click="dialogFormVisible = true"
                        v-if="!showname"
                        >未登录</span
                    >
                    <span v-else
                        >{{ this.usersInfo.nickname }}
                        <span style="margin-left: 30px" @click="loginOut"
                            >退出</span
                        >
                    </span>

                    <el-dialog
                        :visible.sync="dialogFormVisible"
                        class="loginBox"
                        width="36%"
                        center
                        :modal="false"
                    >
                        <!-- 插入测试 -->
                        <el-form
                            :model="loginMsg"
                            status-icon
                            :rules="rules2"
                            ref="loginMsg"
                            label-width="100px"
                            class="demo-ruleForm"
                        >
                            <img
                                src="../assets/img/phone.svg"
                                alt=""
                                style="
                                    margin: auto;

                                    margin-left: 130px;
                                "
                            />
                            <el-form-item prop="phone">
                                <el-input
                                    v-model.number="loginMsg.phone"
                                    style="width: 280px"
                                    prefix-icon="el-icon-user-solid"
                                ></el-input>
                            </el-form-item>

                            <el-form-item prop="password">
                                <el-input
                                    type="password"
                                    v-model="loginMsg.password"
                                    auto-complete="off"
                                    style="width: 280px"
                                    prefix-icon="el-icon-key"
                                ></el-input>
                            </el-form-item>
                        </el-form>
                        <!-- 插入测试 -->

                        <div slot="footer" class="dialog-footer">
                            <el-button
                                @click="
                                    dialogFormVisible = false;
                                    resetForm('loginMsg');
                                "
                                >取 消</el-button
                            >
                            <el-button
                                type="primary"
                                @click="submitForm('loginMsg')"
                                >登 录</el-button
                            >
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import apis from "../http/apis";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("users");
export default {
    data() {
        var checkNum = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("账号不能为空"));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error("请输入数字值"));
                } else {
                    var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
                    if (!myreg.test(value)) {
                        callback(new Error("请输入正确的手机号码"));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };

        return {
            //搜索框
            restaurants: [],
            state1: "",

            //登录
            loginPower: false,
            /*插入form方法*/
            /*设定规则指向*/
            //账号密码模态框
            loginMsg: {
                password: "",
                phone: "",
                delivery: false,
            },
            //昵称显示隐藏
            showname: false,
            //个人信息
            usersInfo: {},
            //动态头像
            usersImg: "",
            rules2: {
                password: [{ validator: validatePass, trigger: "blur" }],

                username: [{ validator: checkNum, trigger: "blur" }],
            },

            /*插入form方法*/

            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: "",
                type: [],
                resource: "",
                desc: "",
            },
            formLabelWidth: "120px",
        };
    },
    mounted() {
        // this.loginOut();  //退出登录
        this.getSearch();
        this.restaurants = this.loadAll();
    },
    beforeUpdate() {},
    computed: {
        ...mapState(["searchData"]),
    },
    methods: {
        ...mapActions(["getSearch"]),
        //搜索框

        async submitForm() {
            const data = await apis.users.login(this.loginMsg);
            console.log(data);
            if (data.code == 200) {
                this.$message({
                    type: "success",
                    message: "登录成功",
                });
                //登录成功模态框关闭
                this.dialogFormVisible = false;
                //token 保存本地
                const token = data.token;
                localStorage.setItem("token", token);
                //登录成功显示昵称
                this.showname = true;
                //登录成功个人信息赋值
                this.usersInfo = data.profile;
                //登录成功个人信息保存本地
                // const loginInfo = data.profile;
                // localStorage.setItem("loginInfo", loginInfo);
                //头像
                this.usersImg = data.profile.avatarUrl;
                //保存登录状态

                this.console.log(this.usersInfo, "222");
            } else {
                this.$message({
                    type: "error",
                    message: "账户名或密码错误！请重新输入",
                });
            }
        },
        //登录
        // submitForm(formName) {
        //     this.$refs[formName].validate((valid) => {
        //         if (valid) {
        //             //提交成功做的动作

        //             const data = apis.users.login(this.loginMsg);

        //             console.log(this.data, "111");
        //             this.dialogFormVisible = false;
        //             /* alert('submit!') ; */
        //             this.$message({
        //                 type: "success",
        //                 message: "提交成功",
        //             });
        //             console.log(333);
        //         } else {
        //             console.log("error submit!!");
        //             return false;
        //         }
        //     });
        // },
        // resetForm(formName) {
        //     this.$refs[formName].resetFields();
        // },

        //退出登录
        // async loginOut() {
        //     const data = await apis.users.loginout();
        //     console.log(data);
        // },

        //搜索框内容
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (
                    restaurant.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        loadAll() {
            // let newData = this.searchData.map((item) => item.first);
            // console.log(newData, "901");

            return [{ value: this.newData, address: "长宁区新渔路144号" }];
        },
        handleSelect(item) {
            console.log(item);
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.header {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    background-color: #c62f2f;
    .center {
        width: 96%;
        margin: auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .center-rt {
            width: 500px;
            height: 100%;
            box-sizing: border-box;
            line-height: 70px;
            display: flex;
            .img {
                width: 50px;
                height: 50px;
                margin-top: 10px;
                background: url("../assets/img/demo.c904c2aa.svg") no-repeat
                    center center;
                background-size: contain;
            }
            .text {
                font-size: 24px;
                color: aliceblue;
                margin-left: 10px;
                width: 150px;
                height: 100%;
            }
            .el-icon-arrow-left {
                width: 25px;
                height: 25px;
                border: 1px solid;
                margin-top: 23px;
                text-align: center;
                line-height: 25px;
                border-radius: 50%;
                color: white;
            }
            .inline-input {
                margin-left: 20px;
                width: 230px;
                height: 40px;
                margin-top: 0px;
            }
        }
        .center-lft {
            width: 270px;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            .person-img {
                width: 45px;
                height: 45px;
                margin-top: 14px;
                border-radius: 50%;
            }
            .users {
                line-height: 70px;
                margin-left: 10px;
                color: white;

                .loginBox {
                    box-shadow: 0 0 2px 2px #cecccc;
                }
            }
        }
    }
}
</style>