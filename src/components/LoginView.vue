<template>
  <div class="login">
    <div class="user">
      <div class="title">Login</div>
      <div class="userinfo">
        <p>账号：<input type="text" v-model="user.account" /></p>
        <p>密码：<input type="password" v-model="user.password" /></p>
      </div>
      <div class="sub">
        <router-link to="/music"
          ><button @click="entry">登陆</button></router-link
        >
      </div>
    </div>
  </div>
</template>
 
<script>
//引入所使用的的相关功能项
import {  reactive } from "vue";
export default {
  setup() {
    //登陆页用户信息
    let user = reactive({
      account: "",
      password: "",
    });
    //点击事件
    let entry = () => {
      //在浏览器内存储
      sessionStorage.setItem("user", JSON.stringify(user));
      //清空输入框
      user = reactive({
        account: "",
        password: 0,
      });
    };
    return {
      //上面定义完了记得返回出去
      user,
      entry,
    };
  },
};
</script>
 
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.login {
  width: 100vw;
  height: 100vh;
  background: url("../../public/qinchen.jpeg") no-repeat 0 0 / 14440px;
  position: relative;
}
.user {
  width: 500px;
  height: 300px;
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  margin: auto;
/*public目录下的文件会在打包时单独放置，因此前面的路径可以省略*/
  background: url("../../public/qinchen.jpeg") no-repeat 0 0 /500px;
/*该属性设置透明度*/
  opacity: 0.5;
}
.title {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
/*该属性设置字符间距*/
  word-spacing: 10px;
  text-align: center;
  font-size: 40px;
  color: darkseagreen;
}
.userinfo {
  line-height: 40px;
  text-align: center;
  margin-top: 50px;
  color: rgb(50, 161, 50);
  font-size: 20px;
}
.userinfo input {
  outline: none;
  border: none;
  border-bottom: 1px solid lightgreen;
  background: none;
}
.sub {
  margin-top: 30px;
  text-align: center;
}
.sub button {
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  background: none;
  border: 1px solid lightgreen;
/*该属性设置鼠标显示*/
  cursor: pointer;
}
.sub button:hover {
  background-color: rgba(144, 238, 144, 0.267);
  color: snow;
}
</style>