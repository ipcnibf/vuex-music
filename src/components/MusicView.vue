
<template>
  <div class="music">
    <div class="navheader">
      <div class="welcome">
        <i>欢迎你，亲爱的{{ username }}用户</i>
      </div>
      <div class="text">
        由于未知错误，播放器不能正常播放（有解决方法的可以留下评论哦，谢谢）
      </div>
    </div>
    <div class="musicbody">
      <ul class="musicul">
        <li v-for="(item, index) in musiclist" :key="index">
          <div class="musicno">{{ index }}</div>
          <div class="musicname">{{ item.name }}</div>
          <div class="musicsinger">{{ item.singer }}</div>
          <div class="musiccd">{{ item.cd }}</div>
          <div class="audio1">
            <audio controls><source :src="item.audio" /></audio>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
//导入所需功能项
// import { ref, reactive } from "vue";
//导入数据代理功能函数
import { useStore } from "vuex";
export default {
  setup() {
//重命名该函数
    let $store = useStore();
//从浏览器缓存中读取用户登陆信息
    let username = JSON.parse(sessionStorage.getItem("user")).account;
    let musiclist = $store.state.musiclist;
    return {
      username,
      musiclist,
    };
  },
};
</script>
 
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.music {
  width: 100vw;
  height: 100vh;
}
.navheader {
  width: 100vw;
  height: 170px;
  background: url("https://img1.baidu.com/it/u=41916664,3398580545&fm=253&fmt=auto&app=138&f=PNG?w=800&h=500")
    no-repeat 0 -700px /100vw;
  position: relative;
}
.welcome {
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-indent: 1em;
  position: absolute;
  left: 200px;
  top: 60px;
  transform: rotate(1deg);
/*filter为滤镜的意思，blur是模糊，括号里填像素单位，值越大越模糊*/
  filter: blur(0.5px);
/*线性渐变，第一个值是方向*/
  background-image: linear-gradient(
    to right,
    rgba(135, 206, 250, 0.219),
    rgba(255, 255, 255, 0.212)
  );
}
.welcome i {
  font-size: 16px;
}
.musicbody {
  width: 100vw;
  height: 150vh;
  padding: 100px;
  background: url("https://img1.baidu.com/it/u=41916664,3398580545&fm=253&fmt=auto&app=138&f=PNG?w=800&h=500")
    no-repeat 0 0 /14400px;
  opacity: 0.9;
}
.musicul li {
  height: 70px;
  line-height: 70px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.musicul li:hover {
  height: 80px;
  line-height: 80px;
  margin: 10px 0;
  color: lightskyblue;
  transition: all 1s;
}
.musicul li div {
  height: 50px;
  line-height: 50px;
  border-left: 2px solid lightskyblue;
}
.musicname {
  width: 400px;
  text-align: center;
}
.musicsinger {
  width: 200px;
  text-align: center;
}
.musiccd {
  flex: 1;
  text-align: center;
}
.musicul li .musicno {
  width: 50px;
  text-align: center;
  font-size: 20px;
  border-left: none;
}
.audio1 {
  width: 400px;
}
.text {
  text-align: center;
}
</style>