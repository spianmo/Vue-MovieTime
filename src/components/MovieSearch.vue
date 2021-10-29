<template>
  <div id="app">
    <div class="container">
      <div class="header_bg">
      </div>
      <div class="content">
        <div class="search_input">
          <div class="search_input_">
            <div class="search_left">
                <span>
                  <span class="word">全部</span>
                  <i class="el-select__caret el-input__icon el-icon-arrow-down">
                  </i>
                </span>
              <div class="line">
              </div>
              <input type="text" placeholder="搜索电影、影人、文章、用户、家族" class="input_val">
              <div class="search_icon">
              </div>
            </div>
          </div>
        </div>
        <div class="nav">
          <div class="nav_left">
            <div class="tab_box">
              <div class="tabs clearfix">
                <div class="tabs_item">
                  <div class="clearfix router-link-active">
                    <div class="tabs_item_n">影视</div>
                    <div class="bar_sty">
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="clearfix">
                    <div class="tabs_item_n">影人</div>
                    <div class="bar_sty">
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="clearfix">
                    <div class="tabs_item_n">内容</div>
                    <div class="bar_sty">
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="clearfix">
                    <div class="tabs_item_n">用户</div>
                    <div class="bar_sty">
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="clearfix">
                    <div class="tabs_item_n">家族</div>
                    <div class="bar_sty">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="body_c">
          <div class="nsearch_other clearfix">
            <div class="tabs">
              <div class="tab_box">
                <div class="tabs clearfix">
                  <div class="small_tabs_item">
                    <div class="clearfix router-link-active">
                      <div class="tabs_item_n">电影</div>
                    </div>
                  </div>
                  <div class="small_tabs_item_sp">
                    <span>|</span>
                  </div>
                  <div class="small_tabs_item">
                    <div class="clearfix">
                      <div class="tabs_item_n">影评</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="nav_relative">
                <div>
                  <div class="select_ed clearfix">
                    <div class="select_go">已选择：</div>
                    <div class="select_type">
                        <span class="el-tag el-tag--light">中国
                          <i class="el-tag__close el-icon-close"></i>
                        </span>
                    </div>
                  </div>
                  <div class="select_ed clearfix">
                    <div class="select_go">国家/地区：</div>
                    <div class="select_type">
                      <ul class="search_select clearfix">
                        <li class="search_item">美国</li>
                        <li class="search_item search_click">中国</li>
                        <li class="search_item">日本</li>
                        <li class="search_item">法国</li>
                        <li class="search_item">英国</li>
                        <li class="search_item">中国香港</li>
                        <li class="search_item">意大利</li>
                        <li class="search_item">德国</li>
                        <li class="search_item">韩国</li>
                        <li class="search_item">加拿大</li>
                        <li class="search_item">西班牙</li>
                        <li class="search_item">中国台湾</li>
                        <li class="search_item">印度</li>
                        <li class="search_item">西德</li>
                        <li class="search_item">澳大利亚</li>
                        <li class="search_item">苏联</li>
                        <li class="search_item">比利时</li>
                        <li class="search_item">瑞士</li>
                        <li class="search_item">瑞典</li>
                        <li class="search_item">俄罗斯</li>
                        <li class="search_item">阿根廷</li>
                        <li class="search_item">墨西哥</li>
                        <li class="search_item">波兰</li>
                        <li class="search_item">丹麦</li>
                        <li class="search_item">荷兰</li>
                        <li class="search_item">巴西</li>
                        <li class="search_item">奥地利</li>
                        <li class="search_item">泰国</li>
                      </ul>
                    </div>
                  </div>
                  <div class="select_ed clearfix">
                    <div class="select_go">类型：</div>
                    <div class="select_type">
                      <ul class="search_select clearfix">
                        <li class="search_item" v-for="typeItem in typeList" :key="typeItem.typeId" @click="typeClick(typeItem)"
                            :class="{'search_click':typeItem.typeId===currentType.typeId}">{{ typeItem.name }}</li>
                      </ul>
                    </div>
                  </div>
                  <div class="select_ed clearfix">
                    <div class="select_go" style="padding-top: 20px; padding-bottom: 20px;">年代：</div>
                    <div class="select_type" style="padding-top: 20px; padding-bottom: 20px;">
                      <el-select v-model="currentYear" @change="yearSelect" placeholder="请选择年代">
                        <el-option
                            v-for="item in yearList"
                            :key="item.movieYear"
                            :label="`${item.movieYear}年`"
                            :value="item.movieYear">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
                <div class="search_film_content clearfix">
                  <p class="gj_w">相关影视：
                    <span>2.0万</span>个</p>
                  <div class="art_content">
                    <ul class="other_list clearfix">
                      <li class="clickobj">
                        <div class="filmscore">
                          <b>总评分</b>
                          <p>8.3</p>
                        </div>
                        <h3>
                          <span>让子弹飞 Let The Bullets Fly （2010）</span>
                        </h3>
                        <div class="other_mid clearfix">
                            <span class="pic">
                              <img src="http://img5.mtime.cn/img2x/mt/2010/11/23/102316.52177023_o.jpg">
                            </span>
                          <div class="other_txt">
                            <div class="important">
                              <p>132分钟 - 类型： 喜剧 / 动作</p>
                              <p>导演：姜文</p>
                              <p>主演：姜文 葛优</p>
                            </div>
                            <div class="video_btn">
                              <a>在线播放</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="clickobj">
                        <div class="filmscore">
                          <b>总评分</b>
                          <p>7.4</p>
                        </div>
                        <h3>
                          <span>集结号 Assembly （2007）</span>
                        </h3>
                        <div class="other_mid clearfix">
                            <span class="pic">
                              <img src="http://img31.mtime.cn/mt/2014/02/23/033946.80506699_o.jpg">
                            </span>
                          <div class="other_txt">
                            <div class="important">
                              <p>118分钟 - 类型： 传记 / 历史 / 剧情</p>
                              <p>导演： 冯小刚</p>
                              <p>主演： 张涵予 王宝强</p>
                            </div>
                            <div class="video_btn">
                              <a>在线播放</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="clickobj">
                        <div class="filmscore">
                          <b>总评分</b>
                          <p>8.3</p>
                        </div>
                        <h3>
                          <span>西游记之大圣归来 Monkey King: Hero is Back （2015）</span>
                        </h3>
                        <div class="other_mid clearfix">
                            <span class="pic">
                              <img src="http://img5.mtime.cn/mt/2017/05/10/191034.23496853_o.jpg">
                            </span>
                          <div class="other_txt">
                            <div class="important">
                              <p>85分钟 - 类型： 动画</p>
                              <p>导演： 田晓鹏</p>
                              <p>主演： 张磊 林子杰</p>
                            </div>
                            <div class="video_btn">
                              <a>在线播放</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div class="page_content">
                        <div class="el-pagination is-background">
                          <button type="button" disabled="disabled" class="btn-prev"><i
                              class="el-icon el-icon-arrow-left"></i></button>
                          <ul class="el-pager">
                            <li class="number active">1</li>
                            <li class="number">2</li>
                            <li class="number">3</li>
                            <li class="el-icon more btn-quicknext el-icon-more"></li>
                            <li class="number">10</li>
                          </ul>
                          <button type="button" class="btn-next"><i
                              class="el-icon el-icon-arrow-right"></i></button>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div class="aside">
                    <div class="other_box">
                      <h2>大家都在搜：</h2>
                      <div class="other_con">
                        <ul class="clearfix">
                          <li>
                            <a class="pic">
                              <img src="http://img5.mtime.cn/mt/2021/10/21/104244.44928062_o.jpg">
                            </a>
                            <p>沙丘</p>
                            <p class="ntime">2021</p>
                          </li>
                          <li>
                            <a class="pic">
                              <img src="http://img5.mtime.cn/mt/2021/09/01/145416.24796824_o.jpg">
                            </a>
                            <p>长津湖</p>
                            <p class="ntime">2021</p>
                          </li>
                          <li>
                            <a class="pic">
                              <img src="http://img5.mtime.cn/mt/2021/09/25/112717.15870755_o.jpg">
                            </a>
                            <p>第一炉香</p>
                            <p class="ntime">2020</p>
                          </li>
                          <li>
                            <a title="不速来客" class="pic">
                              <img src="http://img5.mtime.cn/mt/2021/09/28/083933.41306636_o.jpg">
                            </a>
                            <p>不速来客</p>
                            <p class="ntime">2021</p>
                          </li>
                          <li>
                            <a class="pic">
                              <img src="http://img5.mtime.cn/mt/2021/09/19/095820.95549963_o.jpg">
                            </a>
                            <p>007：无暇赴死</p>
                            <p class="ntime">2021</p>
                          </li>
                          <li>
                            <a class="pic">
                              <img src="http://img5.mtime.cn/mt/2021/09/16/111740.36923645_o.jpg">
                            </a>
                            <p>图兰朵：魔咒缘起</p>
                            <p class="ntime">2021</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSearch',
  props: {
    msg: String
  },
  data() {
    return {
      typeList: [],
      yearList: [],
      currentType: Object,
      currentYear: ""
    }
  },
  methods: {
    async loadAllTypes() {
      let response = await this.http.get("http://118.25.42.197:9930/api/movies/categories")
      this.typeList = response.data
    },
    async loadAllYear() {
      let response = await this.http.get("http://118.25.42.197:9930/api/movies/years")
      this.yearList = response.data
    },
    typeClick(typeItem) {
      this.currentType = typeItem;
      this.loadMovies();
    },
    yearSelect(event) {
      this.loadMovies();
    },
    loadMovies(){
      console.log("调用一次")
    }
  },
  mounted() {
    this.loadAllTypes().catch(err => {
      console.log(err.message)
    })
    this.loadAllYear().catch(err => {
      console.log(err.message)
    })
  }
}
</script>
<style>

body {
  background-color: #fff !important;
  font: 14px/150% helvetica, "Microsoft Yahei", "microsoft yahei", Verdana, Lucida, arial, sans-serif, "黑体";
  position: relative;
  display: block;
  min-width: 1200px;
  zoom: 1;
}


:focus {
  outline: 0;
}

img {
  border: 0;
  background-size: 50% auto;
  vertical-align: middle;
}


a {
  text-decoration: none;
  color: #000;
}

body {
  min-width: 1200px;
  margin: 0;
  padding: 0;
  font-family: helvetica, 微软雅黑, microsoft yahei, verdana, lucida, arial, sans-serif, 黑体;
}

body div:hover {
  cursor: default;
}

a, b, body, dd, div, dl, dt, em, h1, h2, h3, html, i, img, li, p, span, strong, ul {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

body {
  line-height: 1;
}

ul {
  list-style: none;
}

*, :after, :before {
  box-sizing: border-box;
}

.clearfix:after, .fix:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}

body, html {
  font-size: 100%;
  font-family: helvetica, 微软雅黑, microsoft yahei, verdana, lucida, arial, sans-serif, 黑体;
  width: 100%;
  background: inherit;
  background-color: #fff;
}

div#app {
  min-height: 580px;
  line-height: 100%;
}


.container .content .tab_box {
  width: 100%;
}

.container .content .tab_box .tabs .tabs_item {
  float: left;
  padding: 0 15px;
  position: relative;
}

.small_tabs_item {
  float: left;
  padding-right: 15px;
  position: relative;
}

.small_tabs_item_sp {
  float: left;
  padding-right: 15px;
  color: #dadbdc;
  position: relative;
}

.tab_box .tabs .tabs_item .tabs_item_n {
  font-size: 16px;
  width: 70px;
  text-align: center;
  color: #333;
  float: left;
}

.bar_sty {
  height: 3px;
  width: 70px;
  background: #bf1200;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  display: none;
}


.router-link-active .bar_sty {
  display: block;
}


.header_bg {
  width: 100%;
  background: #127bab;
  height: 456px;
  position: relative;
  z-index: 1;
}

.container .content {
  width: 1200px;
  position: relative;
  background: #fff;
  z-index: 2;
  margin: -350px auto 0;
}

.container .content .search_input {
  width: 706px;
  height: 77px;
  background: #127bab;
  position: relative;
  left: 50%;
  top: 0;
  transform: translate(-50%, -44px);
  border-radius: 40px;
  z-index: 200;
}

.container .content .search_input .search_input_ {
  width: 674px;
  height: 47px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
}

.container .content .search_input .search_input_ .search_left {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(30px, -50%);
}

.container .content .search_input .search_input_ .search_left .word {
  color: #333;
  font-size: 14px;
  margin-right: 5px;
}

.container .content .search_input .search_input_ .search_left i {
  color: #898989;
  font-weight: 500;
}

.container .content .search_input .search_input_ .search_left .line {
  background: #dbdbdb;
  width: 1px;
  height: 15px;
  margin-left: 5px;
  display: inline-block;
  vertical-align: middle;
}

.container .content .search_input .search_input_ .search_left .selectshow li {
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.container .content .search_input .search_input_ .search_left .input_val {
  width: 500px;
  height: 40px;
  border: 0;
  font-size: 14px;
  padding: 0 10px;
  color: #898989;
}

.container .content .search_input .search_input_ .search_left .search_icon {
  border: 0;
  width: 55px;
  height: 37px;
  border-radius: 20px;
  float: right;
  background: #fff url(http://s0.mtime.cn/dist/film/1627892608139/static/images/4c4c9cc9.searchend.png) 133px -99px;
}

.container .content .nav {
  width: 100%;
  border-bottom: 1px solid #dedede;
  line-height: 46px;
  height: 46px;
  position: relative;
  left: 0;
  top: -40px;
}

.container .content .nav .nav_left {
  width: 100%;
  padding-left: 50px;
  float: left;
}

.body_c {
  position: relative;
  top: -40px;
  left: 0;
  padding-left: 50px;
  padding-top: 10px;
  padding-right: 50px;
  min-height: 600px;
  background: #fff;
}

.container .content .tab_box {
  width: 100%;
}

.container .content .tab_box .tabs .tabs_item .tabs_item_n {
  font-size: 16px;
  color: #292929;
  text-align: center;
  float: left;
}

.container .content .tab_box .tabs .tabs_item .tabs_item_n:hover {
  color: #49b2e1;
}

.container .content .tab_box .tabs .tabs_item:last-child {
  border-right: 0;
}

.container .content .tab_box .tabs .router-link-active .tabs_item_n {
  color: #49b2e1;
}


.nsearch_other .tabs {
  width: 100%;
  padding-top: 16px;
}

.nav_relative .select_ed {
  width: 100%;
  line-height: 40px;
  border-bottom: 1px dashed #eee;
  padding-bottom: 10px;
  padding-top: 10px;
}

.nav_relative .select_ed .select_go {
  float: left;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  min-width: 100px;
}

.nav_relative .select_ed .select_type {
  width: 90%;
  float: left;
}

.nav_relative .select_ed .select_type .search_select .search_item {
  text-align: left;
  font-size: 14px;
  color: #4e5e73;
  float: left;
  padding-right: 28px;
}

.nav_relative .select_ed .select_type .search_select .search_click, .nav_relative .select_ed .select_type .search_select .search_item:hover {
  color: #20a0da;
}

.search_click {
  color: #20a0da;
}

.nav_relative .search_film_content {
  width: 100%;
  padding: 45px 0 0;
  background: #fff;
}

.nav_relative .search_film_content .gj_w {
  position: relative;
  left: 0;
  top: -20px;
  width: 650px;
}

.nav_relative .search_film_content .gj_w span {
  color: #b20000;
}

.nav_relative .search_film_content .art_content {
  width: 750px;
  float: left;
}

.nav_relative .search_film_content .art_content .other_list {
  width: 750px;
}

.nav_relative .search_film_content .art_content .other_list .clickobj {
  padding-left: 90px;
  position: relative;
  zoom: 1;
  margin-bottom: 40px;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .filmscore {
  position: absolute;
  left: 20px;
  top: 10px;
  width: 55px;
  height: 55px;
  text-align: center;
  background: #679c21;
  color: #fff;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .filmscore b {
  padding: 4px 0 0;
  font-weight: 400;
  font-size: 12px;
  display: inline-block;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .filmscore p {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
}

.nav_relative .search_film_content .art_content .other_list .clickobj h3 {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  padding: 10px 0;
  background: #fff;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .other_mid .pic {
  overflow: hidden;
  display: block;
  float: left;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .other_mid .pic img {
  width: 98px;
  height: 130px;
  vertical-align: top;
  border: 1px solid #c4c4c4;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .other_mid .other_txt {
  float: left;
  width: 450px;
  margin-left: 10px;
  font-size: 13px;
  line-height: 22px;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .other_mid .other_txt .video_btn {
  height: 40px;
}

.nav_relative .search_film_content .art_content .other_list .clickobj .other_mid .other_txt .video_btn a {
  background: #679c21;
  border-radius: 18px;
  color: #fff;
  width: 124px;
  height: 28px;
  font-size: 14px;
  line-height: 28px;
  overflow: hidden;
  text-align: center;
  float: left;
  letter-spacing: 2px;
  margin-top: 5px;
}

.aside {
  width: 300px;
  margin-right: 20px;
  float: right;
}

.aside .other_box, .aside .other_box h2 {
  font-size: 14px;
  line-height: 24px;
  padding: 0 0 10px;
  font-weight: 400;
}

.aside .other_box .other_con ul {
  margin-left: -30px;
  position: relative;
  zoom: 1;
}

.aside .other_box .other_con ul li {
  float: left;
  display: inline;
  text-align: center;
  width: 80px;
  margin-left: 30px;
  min-height: 191px;
}

.aside .other_box .other_con ul li p {
  font-size: 13px;
  line-height: 15px;
  padding: 8px 0 3px;
  text-align: left;
}

.aside .other_box .other_con ul li a {
  line-height: 22px;
}

.aside .other_box .other_con ul li a img {
  width: 73px;
  height: 102px;
  -o-object-fit: cover;
  object-fit: cover;
}

.aside .other_box .other_con ul li .ntime {
  padding: 1px 0 0;
  color: #333;
  line-height: 1;
}


body div:hover {
  cursor: default;
}

div, i, li, ul {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

ul {
  list-style: none;
}

*, :after, :before {
  box-sizing: border-box;
}

</style>
