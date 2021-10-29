<template>
  <div id="beaderbar">
    <div class="headbarout fixed">
      <div class="headbar head-mini" id="headbar">
        <h1 id="mtimelogo">
          <a href="http://www.mtime.com/">Mtime时光网</a>
        </h1>
        <dl class="headbarnav">
          <dd>
            <a href="http://www.mtime.com/">首页</a>
          </dd>
          <dd class="cur">
            <a href="http://film.mtime.com/">电影</a>
          </dd>
          <dd>
            <a href="http://news.mtime.com/">原创</a>
          </dd>
          <dd>
            <a href="http://list.mtime.com/">榜单</a>
          </dd>
          <dd>
            <a href="http://community.mtime.com/">社区</a>
          </dd>
          <dd>
            <a href="http://live.mtime.com/">视频</a>
          </dd>
        </dl>
        <div class="headtool" id="siginbox">
          <i class="line">
          </i>
          <div class="headunlogin">
            <a id="loginbox">登录</a>
          </div>
        </div>
        <div class="headtool" id="qrcodediv" style="z-index:5;">
          <i class="line">
          </i>
          <a class="headqr" id="appdownloadbtn">
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
  name: "HeaderNav"
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
</style>