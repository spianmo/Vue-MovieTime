<template>
  <div id="beaderbar">
    <div class="headbarout fixed">
      <div id="headbar" class="headbar head-mini">
        <h1 id="mtimelogo">
          <router-link :to="{
            name: 'index'
          }">Mtime时光网</router-link>
        </h1>
        <dl class="headbarnav">
          <dd :class="selectItem==='index'?'cur':''">
            <router-link :to="{
            name: 'index'
          }">首页</router-link>
            <i v-show="selectItem==='index'" class="select_tab_item"></i>
          </dd>
          <dd :class="selectItem==='movie-search'?'cur':''">
            <router-link :to="{
            name: 'movie-search'
          }">电影</router-link>
            <i v-show="selectItem==='movie-search'" class="select_tab_item"></i>
          </dd>
          <dd :class="selectItem==='self-made'?'cur':''">
            <router-link :to="{
            name: 'self-made'
          }" >原创</router-link>
            <i v-show="selectItem==='self-made'" class="select_tab_item"></i>
          </dd>
          <dd :class="selectItem==='rank'?'cur':''">
            <router-link :to="{
            name: 'rank'
          }">榜单</router-link>
            <i v-show="selectItem==='rank'" class="select_tab_item"></i>
          </dd>
          <dd :class="selectItem==='community'?'cur':''">
            <router-link :to="{
            name: 'community'
          }">社区</router-link>
            <i v-show="selectItem==='community'" class="select_tab_item"></i>
          </dd>
          <dd :class="selectItem==='video'?'cur':''">
            <router-link :to="{
            name: 'video'
          }">视频</router-link>
            <i v-show="selectItem==='video'" class="select_tab_item"></i>
          </dd>
        </dl>
        <div id="siginbox" class="headtool">
          <i class="line">
          </i>
          <div class="headunlogin">
            <router-link id="loginbox" :to="{
            name: 'login'
          }">登录</router-link>
          </div>
        </div>
        <div id="qrcodediv" class="headtool" style="z-index:5;">
          <i class="line">
          </i>
          <a id="appdownloadbtn" class="headqr">
            <em class="ico-app">
            </em>
            <span>App下载</span>
          </a>
        </div>
      </div>
    </div>
    <div class="headbg">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  props: ['selectItem']
}
</script>

<style>
.headbarnav dd a, .headlogin a, .headqr, .headqr .ico-app, .headunlogin a, .headzoom em, .otherlogin a, .selctsearch i, .selctsearch span, .selctsearch strong {
  display: inline-block;
  *display: inline;
  position: relative;
  zoom: 1;
  vertical-align: middle;
}

.headbar h1 {
  margin: 0 44px 0 105px;
  float: left;
}

.headbar h1 a {
  margin: 12px auto;
  background: url(http://s0.mtime.cn/public/nodewww/2021062815360/images/head.png) 0 -315px no-repeat;
  width: 117px;
  height: 36px;
  display: block;
  font-size: 0;
  line-height: 0;
}

.headbg {
  height: 60px;
}

.headbarout {
  background: #192332;
  width: 100%;
  position: relative;
  z-index: 6;
  font-size: 14px;
}

.headbarout.fixed {
  background: rgba(25, 35, 50, .98);
  position: fixed;
  top: 0;
  left: 0;
}


.headbarnav dd {
  float: left;
  height: 60px;
}

.headbarnav dd a {
  color: #c8c8c8;
  line-height: 60px;
  margin-right: 30px;
  position: relative;
}

.headbarnav dd a:hover {
  color: #fff;
}

.headbarnav dd.cur a {
  color: #fff;
  font-weight: 700;
}

.headtool {
  float: right;
  position: relative;
  padding: 0 18px;
}

.headtool .line {
  height: 60px;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  border-left: 1px solid #141c28;
  border-right: 1px solid #303947;
  overflow: hidden;
}


.headunlogin a {
  color: #c9c9c9;
  line-height: 60px;
}

.headunlogin a:hover {
  color: #fff;
}

.headqr, .headqr:hover {
  color: #fff;
}

.headqr {
  line-height: 60px;
  padding-right: 15px;
}

.headqr .ico-app {
  background: url(http://s0.mtime.cn/public/nodewww/2021062815360/images/head.png) -57px -43px no-repeat;
  width: 13px;
  height: 20px;
  margin-right: 5px;
}


.headlogin a {
  color: #c9c9c9;
  padding-right: 15px;
}

.headlogin a:hover {
  color: #fff;
}

.headlogin a:hover img {
  border-color: #fff;
}

.headlogin a img {
  background: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #c9c9c9;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
}

.select_tab_item {
  width: 0;
  height: 0;
  overflow: hidden;
  border-bottom: 5px solid #fff;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  position: absolute;
  bottom: 0;
  margin-left: -52px;
}

</style>
