<template>
  <div>
    <HeaderNav select-item="index"/>
    <div class="tophead">
      <div id="searchbox" class="topsearch mallnavtopsearch" data-background="" data-searchbartype="1"
           style="position: relative; top: 0%; width: 500px; left: 0%; display: block; z-index: 4;">
        <div class="searchshadow">
          <div id="selctsearchtype">
            <div class="selctsearch" style="height: 45px;"><strong id="selctsearchbox"
                                                                   data-pan="M20_HeadNav_SearchType_btn"
                                                                   data-searchtype="0" data-searchtypecn="全部"
                                                                   data-type="0">全部</strong><i></i><span>|</span>
            </div>
            <div id="selectshow" class="selectshow none">
              <ul>
                <li data-pan="M20_HeadNav_Search_type0" data-searchtype="0" data-searchtypecn="全部" data-type="0">全部</li>
                <li data-pan="M20_HeadNav_Search_type1" data-searchtype="1" data-searchtypecn="电影" data-type="1">电影</li>
                <li data-pan="M20_HeadNav_Search_type3" data-searchtype="2" data-searchtypecn="影人" data-type="2">影人</li>
                <li data-pan="M20_HeadNav_Search_type5" data-searchtype="4" data-searchtypecn="文章" data-type="4">文章</li>
                <li data-pan="M20_HeadNav_Search_type6" data-searchtype="6" data-searchtypecn="用户" data-type="6">用户</li>
                <li data-pan="M20_HeadNav_Search_type10" data-searchtype="10" data-searchtypecn="家族" data-type="10">家族
                </li>
              </ul>
            </div>
          </div>
          <input id="searchinput" autocomplete="off" class="text c_a5" data-default="搜索电影、影人、文章、用户、家族"
                 data-showkeyword="搜索电影、影人、文章、用户、家族"
                 type="text" value="搜索电影、影人、文章、用户、家族"><a id="searchinputbtn"
                                                         class="button" data-pan="M20_HeadNav_Search_Btn_0"
                                                         href="javascript:;"
                                                         title="搜索"><i></i></a>
        </div>
        <div id="searchlist" class="showsearch none">
          <div id="searhprelist" class="searhtiper">
            <ul id="searchhistory" class="history"></ul>
          </div>
        </div>
      </div>
    </div>
    <div id="cont-output" style="margin-top: 26px">
      <div id="home-page-cont" data-type="B">
        <div id="indexTopSlide" class="headslider slider-over" data-ride="carousel"><a class="lastpic"
                                                                                       data-pan="M18_Index_News_HeadImg_Prev"
                                                                                       data-slide="prev"
                                                                                       href="#indexTopSlide"
                                                                                       title="上一张"><i></i></a><a
            class="nextpic" data-pan="M18_Index_News_HeadImg_Next" data-slide="next" href="#indexTopSlide"
            title="下一张"><i></i></a><i class="cur" data-slide-to="0"
                                      data-target="#indexTopSlide"></i><i class=""
                                                                          data-slide-to="1"
                                                                          data-target="#indexTopSlide"></i><i
            class="" data-slide-to="2" data-target="#indexTopSlide"></i><i class=""
                                                                           data-slide-to="3"
                                                                           data-target="#indexTopSlide"></i><i class=""
                                                                                                               data-slide-to="4"
                                                                                                               data-target="#indexTopSlide"></i>
          <dl>
            <dd data-opacity="0" style="z-index: 1; opacity: 0;">
              <div class="over-a"
                   style="background:url(http://img5.mtime.cn/mg/2021/11/12/093419.49817940.jpg) no-repeat right center;">
                <a class="arealink" data-pan="M18_Index_fullScreen_0" href="http://content.mtime.com/article/228772988"
                   target="_blank" title="梅艳芳"></a></div>
            </dd>
            <dd data-opacity="1" style="z-index: 3; opacity: 1;">
              <div class="over-a"
                   style="background:url(http://img5.mtime.cn/mg/2021/11/11/102451.48370788.jpg) no-repeat right center;">
                <a class="arealink" data-pan="M18_Index_fullScreen_1" href="http://content.mtime.com/article/228772643"
                   target="_blank" title="奥斯卡最佳导演“陀螺”结婚"></a></div>
            </dd>
            <dd data-opacity="0" style="z-index: 1; opacity: 0;">
              <div class="over-a"
                   style="background:url(http://img5.mtime.cn/mg/2021/11/10/094132.68398327.jpg) no-repeat right center;">
                <a class="arealink" data-pan="M18_Index_fullScreen_2" href="http://content.mtime.com/article/228772120"
                   target="_blank" title="007吐槽大会"></a></div>
            </dd>
            <dd data-opacity="0" style="z-index: 1; opacity: 0;">
              <div class="over-a"
                   style="background:url(http://img5.mtime.cn/mg/2021/11/11/085749.64174265.jpg) no-repeat right center;">
                <a class="arealink" data-pan="M18_Index_fullScreen_3" href="http://content.mtime.com/post/228772346"
                   target="_blank" title="万影迷天猫旗舰店双11活动"></a></div>
            </dd>
            <dd data-opacity="0" style="z-index: 1; opacity: 0;">
              <div class="over-a"
                   style="background:url(http://img5.mtime.cn/mg/2021/11/09/100949.56490385.jpg) no-repeat right center;">
                <a class="arealink" data-pan="M18_Index_fullScreen_4" href="http://content.mtime.com/article/228771801"
                   target="_blank" title="小李商谈出演新片《吉姆·琼斯》"></a></div>
            </dd>
          </dl>
          <div class="sliderdot" data-slidedot="dot"><i class="" data-slide-to="0" data-target="#indexTopSlide"></i><i
              class="cur" data-slide-to="1" data-target="#indexTopSlide"></i><i class=""
                                                                                data-slide-to="2"
                                                                                data-target="#indexTopSlide"></i><i
              class="" data-slide-to="3" data-target="#indexTopSlide"></i><i class=""
                                                                             data-slide-to="4"
                                                                             data-target="#indexTopSlide"></i></div>
        </div>
        <div id="ad-todayhot" class="common-ad-wrap"></div>
        <div class="todayhot">
          <div class="hotnews" style="display:block;"><h4 class="customtitle">编辑精选</h4><span id="showTodayRecmd"
                                                                                             class="showTodayRecmd"
                                                                                             style="display:block;">12</span>
            <ul class="newslist" data-plugin="imgLoad">
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773261"
                                      data-pan="M20_Index_topNews_img_1"
                                      href="http://content.mtime.com/article/228773261" target="_blank"
                                      title="全智贤《来自星星的你》将翻拍日本版"><img
                  alt="全智贤《来自星星的你》将翻拍日本版" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/152928.64840954_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228773261"
                       data-pan="M20_Index_topNews_title_1" href="http://content.mtime.com/article/228773261"
                       target="_blank">全智贤《来自星星的你》将翻拍日本版</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773261"
                                       data-pan="M20_Index_topNews_title_1"
                                       href="http://content.mtime.com/article/228773261"
                                       target="_blank">福士苍汰&amp;山本美月主演 明年1月开播</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773129"
                                      data-pan="M20_Index_topNews_img_2"
                                      href="http://content.mtime.com/article/228773129" target="_blank"
                                      title="《超能陆战队》衍生剧《大白》曝预告"><img
                  alt="《超能陆战队》衍生剧《大白》曝预告" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/114308.52913192_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228773129"
                       data-pan="M20_Index_topNews_title_2" href="http://content.mtime.com/article/228773129"
                       target="_blank">《超能陆战队》衍生剧《大白》曝预告</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773129"
                                       data-pan="M20_Index_topNews_title_2"
                                       href="http://content.mtime.com/article/228773129"
                                       target="_blank">2022年上线迪士尼+</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773098"
                                      data-pan="M20_Index_topNews_img_3"
                                      href="http://content.mtime.com/article/228773098" target="_blank"
                                      title="《黑豹2》女星拒绝接种疫苗导致停拍"><img
                  alt="《黑豹2》女星拒绝接种疫苗导致停拍" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/110711.33035438_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228773098"
                       data-pan="M20_Index_topNews_title_3" href="http://content.mtime.com/article/228773098"
                       target="_blank">《黑豹2》女星拒绝接种疫苗导致停拍</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773098"
                                       data-pan="M20_Index_topNews_title_3"
                                       href="http://content.mtime.com/article/228773098"
                                       target="_blank"></a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773101"
                                      data-pan="M20_Index_topNews_img_4"
                                      href="http://content.mtime.com/article/228773101" target="_blank"
                                      title="本斯蒂勒翻拍经典科幻剧《神勇斗士》"><img
                  alt="本斯蒂勒翻拍经典科幻剧《神勇斗士》" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/101318.86094188_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228773101"
                       data-pan="M20_Index_topNews_title_4" href="http://content.mtime.com/article/228773101"
                       target="_blank">本斯蒂勒翻拍经典科幻剧《神勇斗士》</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773101"
                                       data-pan="M20_Index_topNews_title_4"
                                       href="http://content.mtime.com/article/228773101"
                                       target="_blank">同名英国电视剧曾引进中国内地</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772992"
                                      data-pan="M20_Index_topNews_img_5"
                                      href="http://content.mtime.com/article/228772992" target="_blank"
                                      title="《冰川时代》衍生动画电影首曝预告"><img
                  alt="《冰川时代》衍生动画电影首曝预告" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/100121.74791409_285X160X4.jpg" width="285"><i
                  class="tag">时光早报</i><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772992"
                       data-pan="M20_Index_topNews_title_5" href="http://content.mtime.com/article/228772992"
                       target="_blank">《冰川时代》衍生动画电影首曝预告</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772992"
                                       data-pan="M20_Index_topNews_title_5"
                                       href="http://content.mtime.com/article/228772992"
                                       target="_blank">《倒数时刻》《新小鬼当家》媒体口碑解禁</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772989"
                                      data-pan="M20_Index_topNews_img_6"
                                      href="http://content.mtime.com/article/228772989" target="_blank"
                                      title="保罗托马斯安德森：我喜欢《尚气》"><img
                  alt="保罗托马斯安德森：我喜欢《尚气》" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/091939.73389390_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772989"
                       data-pan="M20_Index_topNews_title_6" href="http://content.mtime.com/article/228772989"
                       target="_blank">保罗托马斯安德森：我喜欢《尚气》</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772989"
                                       data-pan="M20_Index_topNews_title_6"
                                       href="http://content.mtime.com/article/228772989"
                                       target="_blank">“我们全家都很痴迷漫威电影”</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/review/228772494"
                                      data-pan="M20_Index_topNews_img_7"
                                      href="http://content.mtime.com/review/228772494" target="_blank"
                                      title="既然这样子的话，我最喜欢奥卡菲娜"><img
                  alt="既然这样子的话，我最喜欢奥卡菲娜" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/170551.66171172_285X160X4.jpg" width="285"><i
                  class="tag">影评</i></a>
                <h3><a data-link="http://content.mtime.com/review/228772494"
                       data-pan="M20_Index_topNews_title_7" href="http://content.mtime.com/review/228772494"
                       target="_blank">既然这样子的话，我最喜欢奥卡菲娜</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/review/228772494"
                                       data-pan="M20_Index_topNews_title_7"
                                       href="http://content.mtime.com/review/228772494"
                                       target="_blank">《尚气与十环传奇》中国元素妙趣横生不违和</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772702"
                                      data-pan="M20_Index_topNews_img_8"
                                      href="http://content.mtime.com/article/228772702" target="_blank"
                                      title="奈飞将翻拍韩国电影《狩猎的时间》"><img
                  alt="奈飞将翻拍韩国电影《狩猎的时间》" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/115900.61748085_285X160X4.jpg" width="285"><i
                  class="tag">奈飞</i></a>
                <h3><a data-link="http://content.mtime.com/article/228772702"
                       data-pan="M20_Index_topNews_title_8" href="http://content.mtime.com/article/228772702"
                       target="_blank">奈飞将翻拍韩国电影《狩猎的时间》</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772702"
                                       data-pan="M20_Index_topNews_title_8"
                                       href="http://content.mtime.com/article/228772702"
                                       target="_blank">《找到了》导演亚当兰道执导</a></p></li>
            </ul>
            <p id="finalMore" class="viewmore"><a data-pan="M20_Index_findMore_more" href="http://news.mtime.com/"
                                                  target="_blank">查看更多</a></p></div>
          <div class="todayrecmd">
            <div class="todayrecmd-wrap" data-plugin="imgLoad"><a class="top-bg" data-pan="M20_Index_dailyPick_img"
                                                                  href="http://movie.mtime.com/172736/"
                                                                  target="_blank"><img
                alt="" class="bgposter" height="240" src="http://img5.mtime.cn/mg/2021/11/11/090115.40082144.jpg"
                width="290"></a><a class="mposter" data-pan="M20_Index_dailyPick_poster"
                                   href="http://movie.mtime.com/172736/"
                                   target="_blank"><img alt=""
                                                        height="126"
                                                        src="http://img5.mtime.cn/mg/2021/11/11/090101.95411140.jpg"
                                                        width="84"></a>
              <div class="mcontent"><p class="mtitle"><a data-pan="M20_Index_dailyPick_title"
                                                         href="http://movie.mtime.com/172736/" target="_blank">偷窥</a>
              </p>
                <p class="mainrecmd"><i></i>神秘的大楼里暗藏偷窥者</p>
                <p class="subrecmd"><i></i>悬疑爱情加惊悚</p>
                <p class="recmder">——&nbsp;&nbsp;时光鉴片室</p></div>
            </div>
          </div>
        </div>
        <div id="ad-theaterhot" class="common-ad-wrap"></div>
        <div id="ticketregion" class="indexstruct" data-plugin="imgLoad">
          <div class="cinemaregion">
            <div class="head-tab">
              <h4 class="customtitle"><span>院线热映</span>
                <div id="mcd-box" class="i_quickticket">
                  <div id="city-box" class="i_cityselect" data-pan="M20_Index_onShowList_myCity">
                    <div class="i_citybox" data-plugin="city-show"><span data-id="290" data-plugin="city-name">北京</span><i
                        class="icon_jtup"></i></div>
                  </div>
                </div>
              </h4>
            </div>
            <dl class="cinemamenu" data-plugin="tab-nav">
              <dd class="cur">正在售票 <i data-count="hot-mticket">45</i>部</dd>
              <dd>即将上映 <i data-count="onnext-mticket">42</i>部</dd>
            </dl>
            <a class="cmore" data-pan="M20_Index_onShowList_more" href="http://film.mtime.com/all/filmair">更多</a><a
              class="cmore" data-pan="M20_Index_futureSchdule_more" href="http://film.mtime.com/all/filmland"
              style="display:none;">更多</a>
            <div data-plugin="tab-box">
              <div class="ciname-movie">
                <div id="cinemasalenow" class="imgrolling">
                  <div class="shadowleft" style="display: none;"></div>
                  <div class="shadowright"></div>
                  <a class="last" data-pan="M20_Index_onShowList_leftSwitch" data-plugin="swiper-upbtn"
                     href="javascript:void(0);"
                     style="display: none;" title="上一屏"><i></i></a><a
                    class="next" data-pan="M20_Index_onShowList_rightSwitch" data-plugin="swiper-downbtn"
                    href="javascript:void(0);"
                    title="下一屏"><i></i></a>
                  <div class="imgrollinner">
                    <ul class="saling-list" data-swiper-page="1" style="width: 9270px; position: relative;">
                      <li>
                        <div class="movie_brief_layer" data-mvid="270288" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_1"
                                                                                                   href="http://movie.mtime.com/270288"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/02/145959.15510846_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_1"
                              href="http://movie.mtime.com/270288"
                              target="_blank">扬名立万</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 悬疑</span><span class="mduration">123分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_1">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_1"
                                                               href="http://movie.mtime.com/270288"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270288" data-videoid="81577"><a
                            class="cinameimgitem " data-logdmg="onShowList__1" data-mvid="270288"
                            data-pan="M20_Index_onShowList_poster_1" href="http://movie.mtime.com/270288/"
                            target="_blank"
                            title="扬名立万"><img
                            alt="扬名立万" height="256"
                            src="http://img5.mtime.cn/mt/2021/11/02/145959.15510846_1280X720X2.jpg" width="170"><em
                            class="iconew"></em></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_1" href="http://movie.mtime.com/270288/"
                               target="_blank">扬名立万</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270288" data-mvid="270288"
                           data-pan="M20_Index_onShowList_fastTicket_1"><span class="btnblue"
                                                                              data-pan="M20_Index_onShowList_fastTicket_1">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="255789" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_2"
                                                                                                   href="http://movie.mtime.com/255789"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/01/104848.68554016_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_2"
                              href="http://movie.mtime.com/255789"
                              target="_blank">梅艳芳</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 传记</span><span class="mduration">137分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_2">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_2"
                                                               href="http://movie.mtime.com/255789"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="255789" data-videoid="81789"><a
                            class="cinameimgitem " data-logdmg="onShowList__2" data-mvid="255789"
                            data-pan="M20_Index_onShowList_poster_2" href="http://movie.mtime.com/255789/"
                            target="_blank"
                            title="梅艳芳"><img
                            alt="梅艳芳" height="256"
                            src="http://img5.mtime.cn/mt/2021/11/01/104848.68554016_1280X720X2.jpg" width="170"><em
                            class="icohot"></em></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_2" href="http://movie.mtime.com/255789/"
                               target="_blank">梅艳芳</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="255789" data-mvid="255789"
                           data-pan="M20_Index_onShowList_fastTicket_2"><span class="btnblue"
                                                                              data-pan="M20_Index_onShowList_fastTicket_2">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="194878" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_3"
                                                                                                   href="http://movie.mtime.com/194878"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/19/095820.95549963_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_3"
                              href="http://movie.mtime.com/194878"
                              target="_blank">007：无暇赴死</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">动作 / 冒险 / 惊悚</span><span class="mduration">163分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_3">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_3"
                                                               href="http://movie.mtime.com/194878"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="194878" data-videoid="77106"><a
                            class="cinameimgitem " data-logdmg="onShowList__3" data-mvid="194878"
                            data-pan="M20_Index_onShowList_poster_3" href="http://movie.mtime.com/194878/"
                            target="_blank"
                            title="007：无暇赴死"><img
                            alt="007：无暇赴死" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/19/095820.95549963_1280X720X2.jpg" width="170"><em
                            class="icohot"></em><i class="moviegrade">7.4</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_3" href="http://movie.mtime.com/194878/"
                               target="_blank">007：无暇赴死</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="194878" data-mvid="194878"
                           data-pan="M20_Index_onShowList_fastTicket_3"><span class="btnblue"
                                                                              data-pan="M20_Index_onShowList_fastTicket_3">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="155997" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_4"
                                                                                                   href="http://movie.mtime.com/155997"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/29/173302.21072063_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_4"
                              href="http://movie.mtime.com/155997"
                              target="_blank">丛林奇航</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">冒险</span><span class="mduration">127分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_4">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_4"
                                                               href="http://movie.mtime.com/155997"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="155997" data-videoid="81705"><a
                            class="cinameimgitem " data-logdmg="onShowList__4" data-mvid="155997"
                            data-pan="M20_Index_onShowList_poster_4" href="http://movie.mtime.com/155997/"
                            target="_blank"
                            title="丛林奇航"><img
                            alt="丛林奇航" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/29/173302.21072063_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.4</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_4" href="http://movie.mtime.com/155997/"
                               target="_blank">丛林奇航</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="155997" data-mvid="155997"
                           data-pan="M20_Index_onShowList_fastTicket_4"><span class="btnblue"
                                                                              data-pan="M20_Index_onShowList_fastTicket_4">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="267290" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_5"
                                                                                                   href="http://movie.mtime.com/267290"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/01/145416.24796824_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_5"
                              href="http://movie.mtime.com/267290"
                              target="_blank">长津湖</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 战争 / 历史</span><span class="mduration">176分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_5">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_5"
                                                               href="http://movie.mtime.com/267290"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="267290" data-videoid="81519"><a
                            class="cinameimgitem " data-logdmg="onShowList__5" data-mvid="267290"
                            data-pan="M20_Index_onShowList_poster_5" href="http://movie.mtime.com/267290/"
                            target="_blank"
                            title="长津湖"><img
                            alt="长津湖" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/01/145416.24796824_1280X720X2.jpg" width="170"><i
                            class="moviegrade">7.1</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_5" href="http://movie.mtime.com/267290/"
                               target="_blank">长津湖</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="267290" data-mvid="267290"
                           data-pan="M20_Index_onShowList_fastTicket_5"><span class="btnblue"
                                                                              data-pan="M20_Index_onShowList_fastTicket_5">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="269784" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_6"
                                                                                                   href="http://movie.mtime.com/269784"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/22/090036.35743094_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_6"
                              href="http://movie.mtime.com/269784"
                              target="_blank">铁道英雄</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">动作 / 剧情 / 战争</span><span class="mduration" hidden=""></span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_6">超前预售<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_6"
                                                               href="http://movie.mtime.com/269784"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="269784" data-videoid="81799"><a
                            class="cinameimgitem " data-logdmg="onShowList__6" data-mvid="269784"
                            data-pan="M20_Index_onShowList_poster_6" href="http://movie.mtime.com/269784/"
                            target="_blank"
                            title="铁道英雄"><img
                            alt="铁道英雄" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/22/090036.35743094_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_6" href="http://movie.mtime.com/269784/"
                               target="_blank">铁道英雄</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="269784" data-mvid="269784"
                           data-pan="M20_Index_onShowList_fastTicket_6"><span class="btngreen"
                                                                              data-pan="M20_Index_onShowList_fastTicket_6">超前预售</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="83214" style="display:none;"><a class="top_poster"
                                                                                                  data-pan="M20_Index_onShowList___poster_img_7"
                                                                                                  href="http://movie.mtime.com/83214"
                                                                                                  target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/21/104244.44928062_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_7"
                              href="http://movie.mtime.com/83214"
                              target="_blank">沙丘</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">科幻 / 动作 / 剧情</span><span class="mduration">156分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_7">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_7"
                                                               href="http://movie.mtime.com/83214"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="83214" data-videoid="81618"><a
                            class="cinameimgitem " data-logdmg="onShowList__7" data-mvid="83214"
                            data-pan="M20_Index_onShowList_poster_7" href="http://movie.mtime.com/83214/"
                            target="_blank"
                            title="沙丘"><img
                            alt="沙丘" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/21/104244.44928062_1280X720X2.jpg" width="170"><i
                            class="moviegrade">7.4</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_7" href="http://movie.mtime.com/83214/"
                               target="_blank">沙丘</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="83214" data-mvid="83214"
                           data-pan="M20_Index_onShowList_fastTicket_7"><span class="btnblue"
                                                                              data-pan="M20_Index_onShowList_fastTicket_7">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="48645" style="display:none;"><a class="top_poster"
                                                                                                  data-pan="M20_Index_onShowList___poster_img_8"
                                                                                                  href="http://movie.mtime.com/48645"
                                                                                                  target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/14/095705.60293803_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_8"
                              href="http://movie.mtime.com/48645"
                              target="_blank">天书奇谭</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">动画</span><span class="mduration">100分钟 </span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_8">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_8"
                                                               href="http://movie.mtime.com/48645"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="48645" data-videoid="81654"><a
                            class="cinameimgitem " data-logdmg="onShowList__8" data-mvid="48645"
                            data-pan="M20_Index_onShowList_poster_8" href="http://movie.mtime.com/48645/"
                            target="_blank"
                            title="天书奇谭"><img
                            alt="天书奇谭" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/14/095705.60293803_1280X720X2.jpg" width="170"><i
                            class="moviegrade">8.3</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_8" href="http://movie.mtime.com/48645/"
                               target="_blank">天书奇谭</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="48645" data-mvid="48645"
                           data-pan="M20_Index_onShowList_fastTicket_8"><span class="btnblue"
                                                                              data-pan="M20_Index_onShowList_fastTicket_8">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="269336" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_9"
                                                                                                   href="http://movie.mtime.com/269336"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/29/155030.51267836_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_9"
                              href="http://movie.mtime.com/269336"
                              target="_blank">门锁</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">105分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_9">超前预售<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_9"
                                                               href="http://movie.mtime.com/269336"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="269336" data-videoid="81643"><a
                            class="cinameimgitem " data-logdmg="onShowList__9" data-mvid="269336"
                            data-pan="M20_Index_onShowList_poster_9" href="http://movie.mtime.com/269336/"
                            target="_blank"
                            title="门锁"><img
                            alt="门锁" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/29/155030.51267836_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_9" href="http://movie.mtime.com/269336/"
                               target="_blank">门锁</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="269336" data-mvid="269336"
                           data-pan="M20_Index_onShowList_fastTicket_9"><span class="btngreen"
                                                                              data-pan="M20_Index_onShowList_fastTicket_9">超前预售</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="68692" style="display:none;"><a class="top_poster"
                                                                                                  data-pan="M20_Index_onShowList___poster_img_10"
                                                                                                  href="http://movie.mtime.com/68692"
                                                                                                  target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/22/130213.60910127_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_10"
                              href="http://movie.mtime.com/68692"
                              target="_blank">入殓师</a><span>  (2008)</span>
                          </p>
                            <p><span class="types">剧情 / 音乐</span><span class="mduration">130分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_10">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_10"
                                                               href="http://movie.mtime.com/68692"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="68692" data-videoid="12324"><a
                            class="cinameimgitem " data-logdmg="onShowList__10" data-mvid="68692"
                            data-pan="M20_Index_onShowList_poster_10" href="http://movie.mtime.com/68692/"
                            target="_blank"
                            title="入殓师"><img
                            alt="入殓师" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/22/130213.60910127_1280X720X2.jpg" width="170"><i
                            class="moviegrade">8.3</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_10" href="http://movie.mtime.com/68692/"
                               target="_blank">入殓师</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="68692" data-mvid="68692"
                           data-pan="M20_Index_onShowList_fastTicket_10"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_10">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="247534" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_11"
                                                                                                   href="http://movie.mtime.com/247534"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/27/155500.77188459_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_11"
                              href="http://movie.mtime.com/247534"
                              target="_blank">不老奇事</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">136分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_11">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_11"
                                                               href="http://movie.mtime.com/247534"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="247534" data-videoid="81688"><a
                            class="cinameimgitem " data-logdmg="onShowList__11" data-mvid="247534"
                            data-pan="M20_Index_onShowList_poster_11" href="http://movie.mtime.com/247534/"
                            target="_blank"
                            title="不老奇事"><img
                            alt="不老奇事" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/27/155500.77188459_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_11" href="http://movie.mtime.com/247534/"
                               target="_blank">不老奇事</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="247534" data-mvid="247534"
                           data-pan="M20_Index_onShowList_fastTicket_11"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_11">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270732" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_12"
                                                                                                   href="http://movie.mtime.com/270732"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/29/115713.44304264_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_12"
                              href="http://movie.mtime.com/270732"
                              target="_blank">蜜熊的音乐奇旅</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">动画 / 冒险 / 音乐</span><span class="mduration">95分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_12">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_12"
                                                               href="http://movie.mtime.com/270732"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270732" data-videoid="81700"><a
                            class="cinameimgitem " data-logdmg="onShowList__12" data-mvid="270732"
                            data-pan="M20_Index_onShowList_poster_12" href="http://movie.mtime.com/270732/"
                            target="_blank"
                            title="蜜熊的音乐奇旅"><img
                            alt="蜜熊的音乐奇旅" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/29/115713.44304264_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_12" href="http://movie.mtime.com/270732/"
                               target="_blank">蜜熊的音乐奇旅</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270732" data-mvid="270732"
                           data-pan="M20_Index_onShowList_fastTicket_12"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_12">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="255975" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_13"
                                                                                                   href="http://movie.mtime.com/255975"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/25/112717.15870755_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_13"
                              href="http://movie.mtime.com/255975"
                              target="_blank">第一炉香</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">爱情 / 剧情</span><span class="mduration">144 分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_13">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_13"
                                                               href="http://movie.mtime.com/255975"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="255975" data-videoid="81594"><a
                            class="cinameimgitem " data-logdmg="onShowList__13" data-mvid="255975"
                            data-pan="M20_Index_onShowList_poster_13" href="http://movie.mtime.com/255975/"
                            target="_blank"
                            title="第一炉香"><img
                            alt="第一炉香" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/25/112717.15870755_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.8</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_13" href="http://movie.mtime.com/255975/"
                               target="_blank">第一炉香</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="255975" data-mvid="255975"
                           data-pan="M20_Index_onShowList_fastTicket_13"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_13">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="259785" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_14"
                                                                                                   href="http://movie.mtime.com/259785"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/04/094118.43475065_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_14"
                              href="http://movie.mtime.com/259785"
                              target="_blank">我的初恋十八岁</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 喜剧</span><span class="mduration">90分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_14">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_14"
                                                               href="http://movie.mtime.com/259785"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="259785" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__14" data-mvid="259785"
                            data-pan="M20_Index_onShowList_poster_14" href="http://movie.mtime.com/259785/"
                            target="_blank"
                            title="我的初恋十八岁"><img
                            alt="我的初恋十八岁" height="256"
                            src="http://img5.mtime.cn/mt/2021/11/04/094118.43475065_1280X720X2.jpg" width="170"><em
                            class="iconew"></em></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_14" href="http://movie.mtime.com/259785/"
                               target="_blank">我的初恋十八岁</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="259785" data-mvid="259785"
                           data-pan="M20_Index_onShowList_fastTicket_14"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_14">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270778" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_15"
                                                                                                   href="http://movie.mtime.com/270778"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/08/101802.91458738_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_15"
                              href="http://movie.mtime.com/270778"
                              target="_blank">我和我的父辈</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">158分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_15">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_15"
                                                               href="http://movie.mtime.com/270778"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270778" data-videoid="81492"><a
                            class="cinameimgitem " data-logdmg="onShowList__15" data-mvid="270778"
                            data-pan="M20_Index_onShowList_poster_15" href="http://movie.mtime.com/270778/"
                            target="_blank"
                            title="我和我的父辈"><img
                            alt="我和我的父辈" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/08/101802.91458738_1280X720X2.jpg" width="170"><i
                            class="moviegrade">7.0</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_15" href="http://movie.mtime.com/270778/"
                               target="_blank">我和我的父辈</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270778" data-mvid="270778"
                           data-pan="M20_Index_onShowList_fastTicket_15"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_15">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="266184" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_16"
                                                                                                   href="http://movie.mtime.com/266184"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/26/111234.42702935_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_16"
                              href="http://movie.mtime.com/266184"
                              target="_blank">乌海</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">103分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_16">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_16"
                                                               href="http://movie.mtime.com/266184"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="266184" data-videoid="81476"><a
                            class="cinameimgitem " data-logdmg="onShowList__16" data-mvid="266184"
                            data-pan="M20_Index_onShowList_poster_16" href="http://movie.mtime.com/266184/"
                            target="_blank"
                            title="乌海"><img
                            alt="乌海" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/26/111234.42702935_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_16" href="http://movie.mtime.com/266184/"
                               target="_blank">乌海</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="266184" data-mvid="266184"
                           data-pan="M20_Index_onShowList_fastTicket_16"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_16">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270945" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_17"
                                                                                                   href="http://movie.mtime.com/270945"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/28/083933.41306636_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_17"
                              href="http://movie.mtime.com/270945"
                              target="_blank">不速来客</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 喜剧 / 悬疑</span><span class="mduration">107分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_17">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_17"
                                                               href="http://movie.mtime.com/270945"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270945" data-videoid="81615"><a
                            class="cinameimgitem " data-logdmg="onShowList__17" data-mvid="270945"
                            data-pan="M20_Index_onShowList_poster_17" href="http://movie.mtime.com/270945/"
                            target="_blank"
                            title="不速来客"><img
                            alt="不速来客" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/28/083933.41306636_1280X720X2.jpg" width="170"><i
                            class="moviegrade">7.1</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_17" href="http://movie.mtime.com/270945/"
                               target="_blank">不速来客</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270945" data-mvid="270945"
                           data-pan="M20_Index_onShowList_fastTicket_17"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_17">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="264798" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_18"
                                                                                                   href="http://movie.mtime.com/264798"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/28/113517.61271522_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_18"
                              href="http://movie.mtime.com/264798"
                              target="_blank">猪迪克之蓝海奇缘</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">动画 / 冒险</span><span class="mduration">86分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_18">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_18"
                                                               href="http://movie.mtime.com/264798"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="264798" data-videoid="81689"><a
                            class="cinameimgitem " data-logdmg="onShowList__18" data-mvid="264798"
                            data-pan="M20_Index_onShowList_poster_18" href="http://movie.mtime.com/264798/"
                            target="_blank"
                            title="猪迪克之蓝海奇缘"><img
                            alt="猪迪克之蓝海奇缘" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/28/113517.61271522_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_18" href="http://movie.mtime.com/264798/"
                               target="_blank">猪迪克之蓝海奇缘</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="264798" data-mvid="264798"
                           data-pan="M20_Index_onShowList_fastTicket_18"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_18">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="271127" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_19"
                                                                                                   href="http://movie.mtime.com/271127"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/25/163813.93428174_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_19"
                              href="http://movie.mtime.com/271127"
                              target="_blank">越界</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">惊悚 / 恐怖</span><span class="mduration">81</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_19">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_19"
                                                               href="http://movie.mtime.com/271127"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="271127" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__19" data-mvid="271127"
                            data-pan="M20_Index_onShowList_poster_19" href="http://movie.mtime.com/271127/"
                            target="_blank"
                            title="越界"><img
                            alt="越界" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/25/163813.93428174_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_19" href="http://movie.mtime.com/271127/"
                               target="_blank">越界</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="271127" data-mvid="271127"
                           data-pan="M20_Index_onShowList_fastTicket_19"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_19">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="266775" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_20"
                                                                                                   href="http://movie.mtime.com/266775"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/29/122124.42906495_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_20"
                              href="http://movie.mtime.com/266775"
                              target="_blank">特种部队：蛇眼起源</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">动作 / 冒险 / 科幻</span><span class="mduration">121分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_20">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_20"
                                                               href="http://movie.mtime.com/266775"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="266775" data-videoid="81776"><a
                            class="cinameimgitem " data-logdmg="onShowList__20" data-mvid="266775"
                            data-pan="M20_Index_onShowList_poster_20" href="http://movie.mtime.com/266775/"
                            target="_blank"
                            title="特种部队：蛇眼起源"><img
                            alt="特种部队：蛇眼起源" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/29/122124.42906495_1280X720X2.jpg" width="170"><i
                            class="moviegrade">5.1</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_20" href="http://movie.mtime.com/266775/"
                               target="_blank">特种部队：蛇眼起源</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="266775" data-mvid="266775"
                           data-pan="M20_Index_onShowList_fastTicket_20"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_20">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="271148" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_21"
                                                                                                   href="http://movie.mtime.com/271148"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/30/121623.86064771_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_21"
                              href="http://movie.mtime.com/271148"
                              target="_blank">八拍</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">90</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_21">超前预售<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_21"
                                                               href="http://movie.mtime.com/271148"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="271148" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__21" data-mvid="271148"
                            data-pan="M20_Index_onShowList_poster_21" href="http://movie.mtime.com/271148/"
                            target="_blank"
                            title="八拍"><img
                            alt="八拍" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/30/121623.86064771_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_21" href="http://movie.mtime.com/271148/"
                               target="_blank">八拍</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="271148" data-mvid="271148"
                           data-pan="M20_Index_onShowList_fastTicket_21"><span class="btngreen"
                                                                               data-pan="M20_Index_onShowList_fastTicket_21">超前预售</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="269344" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_22"
                                                                                                   href="http://movie.mtime.com/269344"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2020/12/02/145348.20012567_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_22"
                              href="http://movie.mtime.com/269344"
                              target="_blank">漫漫寻子路</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">119</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_22">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_22"
                                                               href="http://movie.mtime.com/269344"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="269344" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__22" data-mvid="269344"
                            data-pan="M20_Index_onShowList_poster_22" href="http://movie.mtime.com/269344/"
                            target="_blank"
                            title="漫漫寻子路"><img
                            alt="漫漫寻子路" height="256"
                            src="http://img5.mtime.cn/mt/2020/12/02/145348.20012567_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_22" href="http://movie.mtime.com/269344/"
                               target="_blank">漫漫寻子路</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="269344" data-mvid="269344"
                           data-pan="M20_Index_onShowList_fastTicket_22"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_22">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="266810" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_23"
                                                                                                   href="http://movie.mtime.com/266810"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/04/114244.55144698_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_23"
                              href="http://movie.mtime.com/266810"
                              target="_blank">皮皮鲁与鲁西西之…</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">喜剧 / 科幻 / 儿童</span><span class="mduration">94分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_23">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_23"
                                                               href="http://movie.mtime.com/266810"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="266810" data-videoid="81328"><a
                            class="cinameimgitem " data-logdmg="onShowList__23" data-mvid="266810"
                            data-pan="M20_Index_onShowList_poster_23" href="http://movie.mtime.com/266810/"
                            target="_blank"
                            title="皮皮鲁与鲁西西之罐头小人"><img
                            alt="皮皮鲁与鲁西西之罐头小人" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/04/114244.55144698_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.9</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_23" href="http://movie.mtime.com/266810/"
                               target="_blank">皮皮鲁与鲁西西之…</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="266810" data-mvid="266810"
                           data-pan="M20_Index_onShowList_fastTicket_23"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_23">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="253704" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_24"
                                                                                                   href="http://movie.mtime.com/253704"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/10/110850.45945826_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_24"
                              href="http://movie.mtime.com/253704"
                              target="_blank">兰心大剧院</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 历史</span><span class="mduration">126 分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_24">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_24"
                                                               href="http://movie.mtime.com/253704"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="253704" data-videoid="81551"><a
                            class="cinameimgitem " data-logdmg="onShowList__24" data-mvid="253704"
                            data-pan="M20_Index_onShowList_poster_24" href="http://movie.mtime.com/253704/"
                            target="_blank"
                            title="兰心大剧院"><img
                            alt="兰心大剧院" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/10/110850.45945826_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.3</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_24" href="http://movie.mtime.com/253704/"
                               target="_blank">兰心大剧院</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="253704" data-mvid="253704"
                           data-pan="M20_Index_onShowList_fastTicket_24"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_24">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="271171" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_25"
                                                                                                   href="http://movie.mtime.com/271171"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/04/174701.90424738_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_25"
                              href="http://movie.mtime.com/271171"
                              target="_blank">医者仁心</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">120分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_25">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_25"
                                                               href="http://movie.mtime.com/271171"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="271171" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__25" data-mvid="271171"
                            data-pan="M20_Index_onShowList_poster_25" href="http://movie.mtime.com/271171/"
                            target="_blank"
                            title="医者仁心"><img
                            alt="医者仁心" height="256"
                            src="http://img5.mtime.cn/mt/2021/11/04/174701.90424738_1280X720X2.jpg" width="170"><em
                            class="iconew"></em></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_25" href="http://movie.mtime.com/271171/"
                               target="_blank">医者仁心</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="271171" data-mvid="271171"
                           data-pan="M20_Index_onShowList_fastTicket_25"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_25">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="271119" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_26"
                                                                                                   href="http://movie.mtime.com/271119"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/25/094831.34501958_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_26"
                              href="http://movie.mtime.com/271119"
                              target="_blank">指引</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">爱情 / 科幻</span><span class="mduration">98</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_26">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_26"
                                                               href="http://movie.mtime.com/271119"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="271119" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__26" data-mvid="271119"
                            data-pan="M20_Index_onShowList_poster_26" href="http://movie.mtime.com/271119/"
                            target="_blank"
                            title="指引"><img
                            alt="指引" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/25/094831.34501958_1280X720X2.jpg" width="170"><em
                            class="iconew"></em></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_26" href="http://movie.mtime.com/271119/"
                               target="_blank">指引</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="271119" data-mvid="271119"
                           data-pan="M20_Index_onShowList_fastTicket_26"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_26">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270427" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_27"
                                                                                                   href="http://movie.mtime.com/270427"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/27/112339.42737985_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_27"
                              href="http://movie.mtime.com/270427"
                              target="_blank">拯救甜甜圈：时空…</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">喜剧 / 动画 / 冒险</span><span class="mduration">84分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_27">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_27"
                                                               href="http://movie.mtime.com/270427"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270427" data-videoid="81379"><a
                            class="cinameimgitem " data-logdmg="onShowList__27" data-mvid="270427"
                            data-pan="M20_Index_onShowList_poster_27" href="http://movie.mtime.com/270427/"
                            target="_blank"
                            title="拯救甜甜圈：时空大营救"><img
                            alt="拯救甜甜圈：时空大营救" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/27/112339.42737985_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_27" href="http://movie.mtime.com/270427/"
                               target="_blank">拯救甜甜圈：时空…</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270427" data-mvid="270427"
                           data-pan="M20_Index_onShowList_fastTicket_27"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_27">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="271079" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_28"
                                                                                                   href="http://movie.mtime.com/271079"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/15/090834.82905776_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_28"
                              href="http://movie.mtime.com/271079"
                              target="_blank">演员</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">纪录片</span><span class="mduration">93</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_28">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_28"
                                                               href="http://movie.mtime.com/271079"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="271079" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__28" data-mvid="271079"
                            data-pan="M20_Index_onShowList_poster_28" href="http://movie.mtime.com/271079/"
                            target="_blank"
                            title="演员"><img
                            alt="演员" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/15/090834.82905776_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_28" href="http://movie.mtime.com/271079/"
                               target="_blank">演员</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="271079" data-mvid="271079"
                           data-pan="M20_Index_onShowList_fastTicket_28"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_28">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="271066" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_29"
                                                                                                   href="http://movie.mtime.com/271066"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/21/132856.97050654_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_29"
                              href="http://movie.mtime.com/271066"
                              target="_blank">信者</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">96</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_29">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_29"
                                                               href="http://movie.mtime.com/271066"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="271066" data-videoid="81734"><a
                            class="cinameimgitem " data-logdmg="onShowList__29" data-mvid="271066"
                            data-pan="M20_Index_onShowList_poster_29" href="http://movie.mtime.com/271066/"
                            target="_blank"
                            title="信者"><img
                            alt="信者" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/21/132856.97050654_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_29" href="http://movie.mtime.com/271066/"
                               target="_blank">信者</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="271066" data-mvid="271066"
                           data-pan="M20_Index_onShowList_fastTicket_29"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_29">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="269734" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_30"
                                                                                                   href="http://movie.mtime.com/269734"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/08/11/103147.71702966_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_30"
                              href="http://movie.mtime.com/269734"
                              target="_blank">峰爆</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 灾难 / 动作</span><span class="mduration">114分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_30">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_30"
                                                               href="http://movie.mtime.com/269734"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="269734" data-videoid="81405"><a
                            class="cinameimgitem " data-logdmg="onShowList__30" data-mvid="269734"
                            data-pan="M20_Index_onShowList_poster_30" href="http://movie.mtime.com/269734/"
                            target="_blank"
                            title="峰爆"><img
                            alt="峰爆" height="256"
                            src="http://img5.mtime.cn/mt/2021/08/11/103147.71702966_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.4</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_30" href="http://movie.mtime.com/269734/"
                               target="_blank">峰爆</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="269734" data-mvid="269734"
                           data-pan="M20_Index_onShowList_fastTicket_30"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_30">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="136310" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_31"
                                                                                                   href="http://movie.mtime.com/136310"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/img2x/mt/2010/09/02/135034.76135663_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_31"
                              href="http://movie.mtime.com/136310"
                              target="_blank">永不消逝的电波</a><span>  (2010)</span>
                          </p>
                            <p><span class="types">剧情 / 悬疑 / 战争</span><span class="mduration" hidden=""></span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_31">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_31"
                                                               href="http://movie.mtime.com/136310"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="136310" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__31" data-mvid="136310"
                            data-pan="M20_Index_onShowList_poster_31" href="http://movie.mtime.com/136310/"
                            target="_blank"
                            title="永不消逝的电波"><img
                            alt="永不消逝的电波" height="256"
                            src="http://img5.mtime.cn/img2x/mt/2010/09/02/135034.76135663_1280X720X2.jpg"
                            width="170"></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_31" href="http://movie.mtime.com/136310/"
                               target="_blank">永不消逝的电波</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="136310" data-mvid="136310"
                           data-pan="M20_Index_onShowList_fastTicket_31"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_31">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="42350" style="display:none;"><a class="top_poster"
                                                                                                  data-pan="M20_Index_onShowList___poster_img_32"
                                                                                                  href="http://movie.mtime.com/42350"
                                                                                                  target="_blank"><img
                            src="http://img31.mtime.cn/mt/2014/02/23/033342.32081239_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_32"
                              href="http://movie.mtime.com/42350"
                              target="_blank">柳堡的故事</a><span
                              hidden="">  ()</span></p>
                            <p><span class="types">剧情</span><span class="mduration" hidden=""></span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_32">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_32"
                                                               href="http://movie.mtime.com/42350"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="42350" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__32" data-mvid="42350"
                            data-pan="M20_Index_onShowList_poster_32" href="http://movie.mtime.com/42350/"
                            target="_blank"
                            title="柳堡的故事"><img
                            alt="柳堡的故事" height="256"
                            src="http://img31.mtime.cn/mt/2014/02/23/033342.32081239_1280X720X2.jpg" width="170"><i
                            class="moviegrade">7.4</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_32" href="http://movie.mtime.com/42350/"
                               target="_blank">柳堡的故事</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="42350" data-mvid="42350"
                           data-pan="M20_Index_onShowList_fastTicket_32"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_32">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="268340" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_33"
                                                                                                   href="http://movie.mtime.com/268340"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2020/09/24/092826.12614536_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_33"
                              href="http://movie.mtime.com/268340"
                              target="_blank">一点就到家</a><span>  (2020)</span>
                          </p>
                            <p><span class="types">励志 / 青春 / 剧情</span><span class="mduration">97 分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_33">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_33"
                                                               href="http://movie.mtime.com/268340"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="268340" data-videoid="78951"><a
                            class="cinameimgitem " data-logdmg="onShowList__33" data-mvid="268340"
                            data-pan="M20_Index_onShowList_poster_33" href="http://movie.mtime.com/268340/"
                            target="_blank"
                            title="一点就到家"><img
                            alt="一点就到家" height="256"
                            src="http://img5.mtime.cn/mt/2020/09/24/092826.12614536_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.7</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_33" href="http://movie.mtime.com/268340/"
                               target="_blank">一点就到家</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="268340" data-mvid="268340"
                           data-pan="M20_Index_onShowList_fastTicket_33"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_33">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="269246" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_34"
                                                                                                   href="http://movie.mtime.com/269246"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/24/103331.41003766_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_34"
                              href="http://movie.mtime.com/269246"
                              target="_blank">极盗行动</a><span>  (2020)</span>
                          </p>
                            <p><span class="types">动作 / 剧情 / 犯罪</span><span class="mduration">1h 54min</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_34">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_34"
                                                               href="http://movie.mtime.com/269246"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="269246" data-videoid="81583"><a
                            class="cinameimgitem " data-logdmg="onShowList__34" data-mvid="269246"
                            data-pan="M20_Index_onShowList_poster_34" href="http://movie.mtime.com/269246/"
                            target="_blank"
                            title="极盗行动"><img
                            alt="极盗行动" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/24/103331.41003766_1280X720X2.jpg" width="170"><i
                            class="moviegrade">7.2</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_34" href="http://movie.mtime.com/269246/"
                               target="_blank">极盗行动</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="269246" data-mvid="269246"
                           data-pan="M20_Index_onShowList_fastTicket_34"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_34">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="268093" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_35"
                                                                                                   href="http://movie.mtime.com/268093"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/27/143610.95771615_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_35"
                              href="http://movie.mtime.com/268093"
                              target="_blank">我是监护人</a><span>  (2020)</span>
                          </p>
                            <p><span class="types">剧情 / 家庭</span><span class="mduration">106分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_35">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_35"
                                                               href="http://movie.mtime.com/268093"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="268093" data-videoid="81660"><a
                            class="cinameimgitem " data-logdmg="onShowList__35" data-mvid="268093"
                            data-pan="M20_Index_onShowList_poster_35" href="http://movie.mtime.com/268093/"
                            target="_blank"
                            title="我是监护人"><img
                            alt="我是监护人" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/27/143610.95771615_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_35" href="http://movie.mtime.com/268093/"
                               target="_blank">我是监护人</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="268093" data-mvid="268093"
                           data-pan="M20_Index_onShowList_fastTicket_35"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_35">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270954" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_36"
                                                                                                   href="http://movie.mtime.com/270954"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/10/092936.58221345_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_36"
                              href="http://movie.mtime.com/270954"
                              target="_blank">深宅迷案</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">惊悚 / 悬疑</span><span class="mduration">90</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_36">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_36"
                                                               href="http://movie.mtime.com/270954"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270954" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__36" data-mvid="270954"
                            data-pan="M20_Index_onShowList_poster_36" href="http://movie.mtime.com/270954/"
                            target="_blank"
                            title="深宅迷案"><img
                            alt="深宅迷案" height="256"
                            src="http://img5.mtime.cn/mt/2021/10/10/092936.58221345_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_36" href="http://movie.mtime.com/270954/"
                               target="_blank">深宅迷案</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270954" data-mvid="270954"
                           data-pan="M20_Index_onShowList_fastTicket_36"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_36">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270054" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_37"
                                                                                                   href="http://movie.mtime.com/270054"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/03/10/091933.51067686_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_37"
                              href="http://movie.mtime.com/270054"
                              target="_blank">探探猫人鱼公主</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">动画 / 冒险 / 喜剧</span><span class="mduration">83分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_37">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_37"
                                                               href="http://movie.mtime.com/270054"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270054" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__37" data-mvid="270054"
                            data-pan="M20_Index_onShowList_poster_37" href="http://movie.mtime.com/270054/"
                            target="_blank"
                            title="探探猫人鱼公主"><img
                            alt="探探猫人鱼公主" height="256"
                            src="http://img5.mtime.cn/mt/2021/03/10/091933.51067686_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_37" href="http://movie.mtime.com/270054/"
                               target="_blank">探探猫人鱼公主</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270054" data-mvid="270054"
                           data-pan="M20_Index_onShowList_fastTicket_37"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_37">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="271011" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_38"
                                                                                                   href="http://movie.mtime.com/271011"
                                                                                                   target="_blank"><img></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_38"
                              href="http://movie.mtime.com/271011"
                              target="_blank">京剧搜孤救孤</a><span
                              hidden="">  ()</span></p>
                            <p><span class="types"></span><span class="mduration" hidden=""></span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_38">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_38"
                                                               href="http://movie.mtime.com/271011"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="271011" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__38" data-mvid="271011"
                            data-pan="M20_Index_onShowList_poster_38" href="http://movie.mtime.com/271011/"
                            target="_blank"
                            title="京剧搜孤救孤"><img
                            alt="京剧搜孤救孤" height="256" src="http://static1.mtime.cn/static/images/transparent.gif"
                            width="170"></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_38" href="http://movie.mtime.com/271011/"
                               target="_blank">京剧搜孤救孤</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="271011" data-mvid="271011"
                           data-pan="M20_Index_onShowList_fastTicket_38"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_38">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="36977" style="display:none;"><a class="top_poster"
                                                                                                  data-pan="M20_Index_onShowList___poster_img_39"
                                                                                                  href="http://movie.mtime.com/36977"
                                                                                                  target="_blank"><img
                            src="http://img31.mtime.cn/mt/2014/02/23/030338.98485133_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_39"
                              href="http://movie.mtime.com/36977"
                              target="_blank">焦裕禄</a><span
                              hidden="">  ()</span></p>
                            <p><span class="types">传记</span><span class="mduration">100 min</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_39">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_39"
                                                               href="http://movie.mtime.com/36977"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="36977" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__39" data-mvid="36977"
                            data-pan="M20_Index_onShowList_poster_39" href="http://movie.mtime.com/36977/"
                            target="_blank"
                            title="焦裕禄"><img
                            alt="焦裕禄" height="256"
                            src="http://img31.mtime.cn/mt/2014/02/23/030338.98485133_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.8</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_39" href="http://movie.mtime.com/36977/"
                               target="_blank">焦裕禄</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="36977" data-mvid="36977"
                           data-pan="M20_Index_onShowList_fastTicket_39"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_39">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="148464" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_40"
                                                                                                   href="http://movie.mtime.com/148464"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/img2x/mt/2012/05/21/141303.47644179_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_40"
                              href="http://movie.mtime.com/148464"
                              target="_blank">忠诚与背叛</a><span>  (2012)</span>
                          </p>
                            <p><span class="types">剧情 / 历史</span><span class="mduration">92 分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_40">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_40"
                                                               href="http://movie.mtime.com/148464"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="148464" data-videoid="38588"><a
                            class="cinameimgitem " data-logdmg="onShowList__40" data-mvid="148464"
                            data-pan="M20_Index_onShowList_poster_40" href="http://movie.mtime.com/148464/"
                            target="_blank"
                            title="忠诚与背叛"><img
                            alt="忠诚与背叛" height="256"
                            src="http://img5.mtime.cn/img2x/mt/2012/05/21/141303.47644179_1280X720X2.jpg" width="170"><i
                            class="moviegrade">4.0</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_40" href="http://movie.mtime.com/148464/"
                               target="_blank">忠诚与背叛</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="148464" data-mvid="148464"
                           data-pan="M20_Index_onShowList_fastTicket_40"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_40">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270321" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_41"
                                                                                                   href="http://movie.mtime.com/270321"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/28/142548.83664432_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_41"
                              href="http://movie.mtime.com/270321"
                              target="_blank">五个扑水的少年</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">剧情 / 喜剧</span><span class="mduration">111分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_41">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_41"
                                                               href="http://movie.mtime.com/270321"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270321" data-videoid="81050"><a
                            class="cinameimgitem " data-logdmg="onShowList__41" data-mvid="270321"
                            data-pan="M20_Index_onShowList_poster_41" href="http://movie.mtime.com/270321/"
                            target="_blank"
                            title="五个扑水的少年"><img
                            alt="五个扑水的少年" height="256"
                            src="http://img5.mtime.cn/mt/2021/09/28/142548.83664432_1280X720X2.jpg" width="170"><i
                            class="moviegrade">7.4</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_41" href="http://movie.mtime.com/270321/"
                               target="_blank">五个扑水的少年</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270321" data-mvid="270321"
                           data-pan="M20_Index_onShowList_fastTicket_41"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_41">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="45833" style="display:none;"><a class="top_poster"
                                                                                                  data-pan="M20_Index_onShowList___poster_img_42"
                                                                                                  href="http://movie.mtime.com/45833"
                                                                                                  target="_blank"><img
                            src="http://img31.mtime.cn/mt/2014/02/23/033842.18417391_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_42"
                              href="http://movie.mtime.com/45833"
                              target="_blank">张思德</a><span>  (2004)</span>
                          </p>
                            <p><span class="types">剧情</span><span class="mduration">102 分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_42">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_42"
                                                               href="http://movie.mtime.com/45833"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="45833" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__42" data-mvid="45833"
                            data-pan="M20_Index_onShowList_poster_42" href="http://movie.mtime.com/45833/"
                            target="_blank"
                            title="张思德"><img
                            alt="张思德" height="256"
                            src="http://img31.mtime.cn/mt/2014/02/23/033842.18417391_1280X720X2.jpg" width="170"><i
                            class="moviegrade">6.8</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_42" href="http://movie.mtime.com/45833/"
                               target="_blank">张思德</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="45833" data-mvid="45833"
                           data-pan="M20_Index_onShowList_fastTicket_42"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_42">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="269977" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_43"
                                                                                                   href="http://movie.mtime.com/269977"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/02/25/140735.81516247_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_43"
                              href="http://movie.mtime.com/269977"
                              target="_blank">奔跑的笨蛋</a><span
                              hidden="">  ()</span></p>
                            <p><span class="types"></span><span class="mduration" hidden=""></span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_43">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_43"
                                                               href="http://movie.mtime.com/269977"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="269977" data-videoid="79985"><a
                            class="cinameimgitem " data-logdmg="onShowList__43" data-mvid="269977"
                            data-pan="M20_Index_onShowList_poster_43" href="http://movie.mtime.com/269977/"
                            target="_blank"
                            title="奔跑的笨蛋"><img
                            alt="奔跑的笨蛋" height="256"
                            src="http://img5.mtime.cn/mt/2021/02/25/140735.81516247_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_43" href="http://movie.mtime.com/269977/"
                               target="_blank">奔跑的笨蛋</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="269977" data-mvid="269977"
                           data-pan="M20_Index_onShowList_fastTicket_43"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_43">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="58084" style="display:none;"><a class="top_poster"
                                                                                                  data-pan="M20_Index_onShowList___poster_img_44"
                                                                                                  href="http://movie.mtime.com/58084"
                                                                                                  target="_blank"><img
                            src="http://img31.mtime.cn/mt/2014/02/23/043135.53360248_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_44"
                              href="http://movie.mtime.com/58084"
                              target="_blank">霓虹灯下的哨兵</a><span
                              hidden="">  ()</span></p>
                            <p><span class="types">剧情</span><span class="mduration">28集</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_44">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_44"
                                                               href="http://movie.mtime.com/58084"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="58084" data-videoid="0"><a
                            class="cinameimgitem " data-logdmg="onShowList__44" data-mvid="58084"
                            data-pan="M20_Index_onShowList_poster_44" href="http://movie.mtime.com/58084/"
                            target="_blank"
                            title="霓虹灯下的哨兵"><img
                            alt="霓虹灯下的哨兵" height="256"
                            src="http://img31.mtime.cn/mt/2014/02/23/043135.53360248_1280X720X2.jpg" width="170"></a>
                        </div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_44" href="http://movie.mtime.com/58084/"
                               target="_blank">霓虹灯下的哨兵</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="58084" data-mvid="58084"
                           data-pan="M20_Index_onShowList_fastTicket_44"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_44">选座购票</span>
                        </p></li>
                      <li>
                        <div class="movie_brief_layer" data-mvid="270385" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_onShowList___poster_img_45"
                                                                                                   href="http://movie.mtime.com/270385"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/08/26/111945.60146140_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_onShowList_poster_movieName_45"
                              href="http://movie.mtime.com/270385"
                              target="_blank">1950他们正年轻</a><span>  (2021)</span>
                          </p>
                            <p><span class="types">纪录片</span><span class="mduration" hidden=""></span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods" hidden=""></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_onShowList_poster_ribbon_45">选座购票<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_onShowList_poster_ribbon_45"
                                                               href="http://movie.mtime.com/270385"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="cinameimgout showMovieBrief" data-mvid="270385" data-videoid="81232"><a
                            class="cinameimgitem " data-logdmg="onShowList__45" data-mvid="270385"
                            data-pan="M20_Index_onShowList_poster_45" href="http://movie.mtime.com/270385/"
                            target="_blank"
                            title="1950他们正年轻"><img
                            alt="1950他们正年轻" height="256"
                            src="http://img5.mtime.cn/mt/2021/08/26/111945.60146140_1280X720X2.jpg" width="170"><i
                            class="moviegrade">8.2</i></a></div>
                        <h3><a data-pan="M20_Index_onShowList_movieName_45" href="http://movie.mtime.com/270385/"
                               target="_blank">1950他们正年轻</a></h3>
                        <p class="btnticket goAppMovieDetail" data-hot-mid="270385" data-mvid="270385"
                           data-pan="M20_Index_onShowList_fastTicket_45"><span class="btnblue"
                                                                               data-pan="M20_Index_onShowList_fastTicket_45">选座购票</span>
                        </p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style="display:none;">
                <div id="cinameonnext" class="ciname-onnext imgrolling" style="height:276px;">
                  <div class="shadowleft" style="display: none;"></div>
                  <div class="shadowright"></div>
                  <a class="last" data-pan="M20_Index_futureSchdule_leftSwitch" data-plugin="swiper-upbtn"
                     href="javascript:void(0);"
                     style="display: none;" title="上一屏"><i></i></a><a
                    class="next" data-pan="M20_Index_futureSchdule_rightSwitch" data-plugin="swiper-downbtn"
                    href="javascript:void(0);"
                    title="下一屏"><i></i></a>
                  <div class="imgrollinner">
                    <ul id="cinameonnextdl" class="comsn-list" data-swiper-page="1"
                        style="width: 13440px; position: relative;">
                      <li><p class="showday">11月19日</p>
                        <div class="movie_brief_layer" data-mvid="269784" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_1"
                                                                                                   href="http://movie.mtime.com/269784/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/22/090036.35743094_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_1"
                              href="http://movie.mtime.com/269784/"
                              target="_blank">铁道英雄</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动作 "
                                                      target="_blank">动作 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情 "
                                target="_blank"> 剧情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 战争"
                                target="_blank"> 战争</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>杨枫</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_1">超前预售<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_futureSchdule_poster_ribbon_1"
                                                               href="http://movie.mtime.com/269784"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="269784" data-videoid="81799"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__1" data-mvid="269784"
                            data-pan="M20_Index_futureSchdule_poster_1" data-videoid="81799"
                            href="http://movie.mtime.com/269784/" target="_blank"
                            title="铁道英雄"><img
                            alt="铁道英雄" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/22/090036.35743094_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_1" href="http://movie.mtime.com/269784/"
                                 target="_blank">铁道英雄</a></h3>
                          <div class="showtype"><p><b data-person-num="269784">198</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动作 "
                              target="_blank">动作 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情 "
                              target="_blank"> 剧情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 战争"
                              target="_blank"> 战争</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_1"
                                  href="http://movie.mtime.com/269784/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a></p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="269784"><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月19日</p>
                        <div class="movie_brief_layer" data-mvid="269336" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_2"
                                                                                                   href="http://movie.mtime.com/269336/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/29/155030.51267836_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_2"
                              href="http://movie.mtime.com/269336/"
                              target="_blank">门锁</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration">105分钟</span>
                            </p>
                            <p class="actors">主演：<span>别克</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_2">超前预售<span></span></p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_futureSchdule_poster_ribbon_2"
                                                               href="http://movie.mtime.com/269336"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="269336" data-videoid="81643"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__2" data-mvid="269336"
                            data-pan="M20_Index_futureSchdule_poster_2" data-videoid="81643"
                            href="http://movie.mtime.com/269336/" target="_blank"
                            title="门锁"><img
                            alt="门锁" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/29/155030.51267836_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_2" href="http://movie.mtime.com/269336/"
                                 target="_blank">门锁</a></h3>
                          <div class="showtype"><p><b data-person-num="269336">100</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_2"
                                  href="http://movie.mtime.com/269336/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a></p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="269336"><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月19日</p>
                        <div class="movie_brief_layer" data-mvid="271160" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_3"
                                                                                                   href="http://movie.mtime.com/271160/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/03/095611.11459034_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_3"
                              href="http://movie.mtime.com/271160/"
                              target="_blank">芒咕的动物城</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                                                      target="_blank">动画 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧 "
                                target="_blank"> 喜剧 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 家庭"
                                target="_blank"> 家庭</a></span><span class="mduration">85分钟</span></p>
                            <p class="actors">主演：<span>Shafaat Ali / Afzal Khan / Javed Sheikh / Suraj Bardia</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_3" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_3"
                                                     href="http://movie.mtime.com/271160"
                                                     target="_blank">影片详细资料</a></div>
                        </div>
                        <div class="showbox" data-mvid="271160" data-videoid="81731"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__3" data-mvid="271160"
                            data-pan="M20_Index_futureSchdule_poster_3" data-videoid="81731"
                            href="http://movie.mtime.com/271160/" target="_blank"
                            title="芒咕的动物城"><img
                            alt="芒咕的动物城" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/03/095611.11459034_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_3" href="http://movie.mtime.com/271160/"
                                 target="_blank">芒咕的动物城</a></h3>
                          <div class="showtype"><p><b data-person-num="271160">14</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                              target="_blank">动画 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧 "
                              target="_blank"> 喜剧 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 家庭"
                              target="_blank"> 家庭</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_3"
                                  href="http://movie.mtime.com/271160/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a></p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271160" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月22日</p>
                        <div class="movie_brief_layer" data-mvid="271172" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_4"
                                                                                                   href="http://movie.mtime.com/271172/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/05/090238.24050156_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_4"
                              href="http://movie.mtime.com/271172/"
                              target="_blank">黄金土</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                                                      target="_blank">爱情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情 "
                                target="_blank"> 剧情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧"
                                target="_blank"> 喜剧</a></span><span class="mduration">90分钟</span></p>
                            <p class="actors">主演：<span>刘一江 / 王圻文宣</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_4" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_4"
                                                     href="http://movie.mtime.com/271172"
                                                     target="_blank">影片详细资料</a></div>
                        </div>
                        <div class="showbox" data-mvid="271172"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__4"
                                                                   data-mvid="271172"
                                                                   data-pan="M20_Index_futureSchdule_poster_4"
                                                                   href="http://movie.mtime.com/271172/"
                                                                   target="_blank"
                                                                   title="黄金土"><img
                            alt="黄金土" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/05/090238.24050156_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_4" href="http://movie.mtime.com/271172/"
                                 target="_blank">黄金土</a></h3>
                          <div class="showtype"><p><b data-person-num="271172">1</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                              target="_blank">爱情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情 "
                              target="_blank"> 剧情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧"
                              target="_blank"> 喜剧</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271172" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月23日</p>
                        <div class="movie_brief_layer" data-mvid="271113" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_5"
                                                                                                   href="http://movie.mtime.com/271113/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/22/095837.67058274_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_5"
                              href="http://movie.mtime.com/271113/"
                              target="_blank">我们是第一书记</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=纪录片"
                                                      target="_blank">纪录片</a></span><span class="mduration"
                                                                                          hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>任杰</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_5" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_5"
                                                     href="http://movie.mtime.com/271113"
                                                     target="_blank">影片详细资料</a></div>
                        </div>
                        <div class="showbox" data-mvid="271113" data-videoid="81788"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__5" data-mvid="271113"
                            data-pan="M20_Index_futureSchdule_poster_5" data-videoid="81788"
                            href="http://movie.mtime.com/271113/" target="_blank"
                            title="我们是第一书记"><img
                            alt="我们是第一书记" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/22/095837.67058274_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_5" href="http://movie.mtime.com/271113/"
                                 target="_blank">我们是第一书记</a></h3>
                          <div class="showtype"><p><b data-person-num="271113">8</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=纪录片"
                              target="_blank">纪录片</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_5"
                                  href="http://movie.mtime.com/271113/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a></p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271113" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月24日</p>
                        <div class="movie_brief_layer" data-mvid="271154" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_6"
                                                                                                   href="http://movie.mtime.com/271154/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/01/110929.95095725_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_6"
                              href="http://movie.mtime.com/271154/"
                              target="_blank">穿过雨林</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration">97分钟</span>
                            </p>
                            <p class="actors">主演：<span>胡姗姗 / 范雷 / 王坚定</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_6" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_6"
                                                     href="http://movie.mtime.com/271154"
                                                     target="_blank">影片详细资料</a></div>
                        </div>
                        <div class="showbox" data-mvid="271154"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__6"
                                                                   data-mvid="271154"
                                                                   data-pan="M20_Index_futureSchdule_poster_6"
                                                                   href="http://movie.mtime.com/271154/"
                                                                   target="_blank"
                                                                   title="穿过雨林"><img
                            alt="穿过雨林" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/01/110929.95095725_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_6" href="http://movie.mtime.com/271154/"
                                 target="_blank">穿过雨林</a></h3>
                          <div class="showtype"><p><b data-person-num="271154">2</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271154" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月25日</p>
                        <div class="movie_brief_layer" data-mvid="270968" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_7"
                                                                                                   href="http://movie.mtime.com/270968/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/23/085659.52601162_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_7"
                              href="http://movie.mtime.com/270968/"
                              target="_blank">陀螺女孩</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=家庭 "
                                                      target="_blank">家庭 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情 "
                                target="_blank"> 剧情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧"
                                target="_blank"> 喜剧</a></span><span class="mduration">130分钟</span></p>
                            <p class="actors">主演：<span>邓安东</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_7" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_7"
                                                     href="http://movie.mtime.com/270968"
                                                     target="_blank">影片详细资料</a></div>
                        </div>
                        <div class="showbox" data-mvid="270968"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__7"
                                                                   data-mvid="270968"
                                                                   data-pan="M20_Index_futureSchdule_poster_7"
                                                                   href="http://movie.mtime.com/270968/"
                                                                   target="_blank"
                                                                   title="陀螺女孩"><img
                            alt="陀螺女孩" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/23/085659.52601162_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_7" href="http://movie.mtime.com/270968/"
                                 target="_blank">陀螺女孩</a></h3>
                          <div class="showtype"><p><b data-person-num="270968">6</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=家庭 "
                              target="_blank">家庭 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情 "
                              target="_blank"> 剧情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧"
                              target="_blank"> 喜剧</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270968" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月25日</p>
                        <div class="movie_brief_layer" data-mvid="271179" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_8"
                                                                                                   href="http://movie.mtime.com/271179/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/07/095533.86206377_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_8"
                              href="http://movie.mtime.com/271179/"
                              target="_blank">加油兄弟</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                                                      target="_blank">爱情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 动作 "
                                target="_blank"> 动作 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                                target="_blank"> 犯罪</a></span><span class="mduration">90分钟</span></p>
                            <p class="actors">主演：<span>张国富</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_8" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_8"
                                                     href="http://movie.mtime.com/271179"
                                                     target="_blank">影片详细资料</a></div>
                        </div>
                        <div class="showbox" data-mvid="271179"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__8"
                                                                   data-mvid="271179"
                                                                   data-pan="M20_Index_futureSchdule_poster_8"
                                                                   href="http://movie.mtime.com/271179/"
                                                                   target="_blank"
                                                                   title="加油兄弟"><img
                            alt="加油兄弟" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/07/095533.86206377_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_8" href="http://movie.mtime.com/271179/"
                                 target="_blank">加油兄弟</a></h3>
                          <div class="showtype"><p><b data-person-num="271179">0</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                              target="_blank">爱情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 动作 "
                              target="_blank"> 动作 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                              target="_blank"> 犯罪</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271179" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月26日</p>
                        <div class="movie_brief_layer" data-mvid="265974" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_9"
                                                                                                   href="http://movie.mtime.com/265974/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/08/102017.85650927_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_9"
                              href="http://movie.mtime.com/265974/"
                              target="_blank">银行家</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration">120分钟</span>
                            </p>
                            <p class="actors">主演：<span>乔治·诺非</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_9" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_9"
                                                     href="http://movie.mtime.com/265974"
                                                     target="_blank">影片详细资料</a></div>
                        </div>
                        <div class="showbox" data-mvid="265974" data-videoid="81771"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__9" data-mvid="265974"
                            data-pan="M20_Index_futureSchdule_poster_9" data-videoid="81771"
                            href="http://movie.mtime.com/265974/" target="_blank"
                            title="银行家"><img
                            alt="银行家" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/08/102017.85650927_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_9" href="http://movie.mtime.com/265974/"
                                 target="_blank">银行家</a></h3>
                          <div class="showtype"><p><b data-person-num="265974">76</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_9"
                                  href="http://movie.mtime.com/265974/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a></p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="265974" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月26日</p>
                        <div class="movie_brief_layer" data-mvid="264980" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_10"
                                                                                                   href="http://movie.mtime.com/264980/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/20/140726.46002222_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_10"
                              href="http://movie.mtime.com/264980/"
                              target="_blank">野马分鬃</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration">134分钟</span>
                            </p>
                            <p class="actors">主演：<span>魏书钧</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_10" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_10"
                                                     href="http://movie.mtime.com/264980"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="264980" data-videoid="81617"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__10" data-mvid="264980"
                            data-pan="M20_Index_futureSchdule_poster_10" data-videoid="81617"
                            href="http://movie.mtime.com/264980/" target="_blank"
                            title="野马分鬃"><img
                            alt="野马分鬃" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/20/140726.46002222_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_10" href="http://movie.mtime.com/264980/"
                                 target="_blank">野马分鬃</a></h3>
                          <div class="showtype"><p><b data-person-num="264980">42</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_10"
                                  href="http://movie.mtime.com/264980/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="264980" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月26日</p>
                        <div class="movie_brief_layer" data-mvid="271157" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_11"
                                                                                                   href="http://movie.mtime.com/271157/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/02/103504.89928596_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_11"
                              href="http://movie.mtime.com/271157/"
                              target="_blank">圣诞男孩</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                                                      target="_blank">剧情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 家庭 "
                                target="_blank"> 家庭 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 奇幻"
                                target="_blank"> 奇幻</a></span><span class="mduration">106分钟</span></p>
                            <p class="actors">主演：<span>吉尔·克兰</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_11" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_11"
                                                     href="http://movie.mtime.com/271157"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271157" data-videoid="81722"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__11" data-mvid="271157"
                            data-pan="M20_Index_futureSchdule_poster_11" data-videoid="81722"
                            href="http://movie.mtime.com/271157/" target="_blank"
                            title="圣诞男孩"><img
                            alt="圣诞男孩" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/02/103504.89928596_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_11" href="http://movie.mtime.com/271157/"
                                 target="_blank">圣诞男孩</a></h3>
                          <div class="showtype"><p><b data-person-num="271157">26</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                              target="_blank">剧情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 家庭 "
                              target="_blank"> 家庭 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 奇幻"
                              target="_blank"> 奇幻</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_11"
                                  href="http://movie.mtime.com/271157/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271157" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月26日</p>
                        <div class="movie_brief_layer" data-mvid="271048" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_12"
                                                                                                   href="http://movie.mtime.com/271048/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/11/095737.87400971_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_12"
                              href="http://movie.mtime.com/271048/"
                              target="_blank">读心者之深海</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=惊悚 "
                                                      target="_blank">惊悚 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 恐怖"
                                target="_blank"> 恐怖</a></span><span class="mduration">93分钟</span></p>
                            <p class="actors">主演：<span>牛浩霖 / 沈丽华 / 杨雪</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_12" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_12"
                                                     href="http://movie.mtime.com/271048"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271048"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__12"
                                                                   data-mvid="271048"
                                                                   data-pan="M20_Index_futureSchdule_poster_12"
                                                                   href="http://movie.mtime.com/271048/"
                                                                   target="_blank"
                                                                   title="读心者之深海"><img
                            alt="读心者之深海" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/11/095737.87400971_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_12" href="http://movie.mtime.com/271048/"
                                 target="_blank">读心者之深海</a></h3>
                          <div class="showtype"><p><b data-person-num="271048">7</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=惊悚 "
                              target="_blank">惊悚 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 恐怖"
                              target="_blank"> 恐怖</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271048" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月26日</p>
                        <div class="movie_brief_layer" data-mvid="271174" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_13"
                                                                                                   href="http://movie.mtime.com/271174/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/05/103211.44581178_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_13"
                              href="http://movie.mtime.com/271174/"
                              target="_blank">凡人英雄</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_13" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_13"
                                                     href="http://movie.mtime.com/271174"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271174"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__13"
                                                                   data-mvid="271174"
                                                                   data-pan="M20_Index_futureSchdule_poster_13"
                                                                   href="http://movie.mtime.com/271174/"
                                                                   target="_blank"
                                                                   title="凡人英雄"><img
                            alt="凡人英雄" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/05/103211.44581178_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_13" href="http://movie.mtime.com/271174/"
                                 target="_blank">凡人英雄</a></h3>
                          <div class="showtype"><p><b data-person-num="271174">3</b>人想看<span hidden=""> - </span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271174" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月26日</p>
                        <div class="movie_brief_layer" data-mvid="271173" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_14"
                                                                                                   href="http://movie.mtime.com/271173/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/05/091618.33384151_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_14"
                              href="http://movie.mtime.com/271173/"
                              target="_blank">起初</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                                                      target="_blank">爱情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                                target="_blank"> 剧情</a></span><span class="mduration">89分钟</span></p>
                            <p class="actors">主演：<span>苏宏涛</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_14" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_14"
                                                     href="http://movie.mtime.com/271173"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271173"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__14"
                                                                   data-mvid="271173"
                                                                   data-pan="M20_Index_futureSchdule_poster_14"
                                                                   href="http://movie.mtime.com/271173/"
                                                                   target="_blank"
                                                                   title="起初"><img
                            alt="起初" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/05/091618.33384151_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_14" href="http://movie.mtime.com/271173/"
                                 target="_blank">起初</a></h3>
                          <div class="showtype"><p><b data-person-num="271173">2</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                              target="_blank">爱情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                              target="_blank"> 剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271173" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">11月27日</p>
                        <div class="movie_brief_layer" data-mvid="271195" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_15"
                                                                                                   href="http://movie.mtime.com/271195/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/10/085303.97701347_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_15"
                              href="http://movie.mtime.com/271195/"
                              target="_blank">迷你特工队之拯救…</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动画"
                                                      target="_blank">动画</a></span><span class="mduration">73分钟</span>
                            </p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_15" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_15"
                                                     href="http://movie.mtime.com/271195"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271195"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__15"
                                                                   data-mvid="271195"
                                                                   data-pan="M20_Index_futureSchdule_poster_15"
                                                                   href="http://movie.mtime.com/271195/"
                                                                   target="_blank"
                                                                   title="迷你特工队之拯救恐龙王"><img
                            alt="迷你特工队之拯救恐龙王" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/10/085303.97701347_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_15" href="http://movie.mtime.com/271195/"
                                 target="_blank">迷你特工队之拯救…</a></h3>
                          <div class="showtype"><p><b data-person-num="271195">9</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动画"
                              target="_blank">动画</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271195" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月03日</p>
                        <div class="movie_brief_layer" data-mvid="269908" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_16"
                                                                                                   href="http://movie.mtime.com/269908/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/15/084607.26252662_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_16"
                              href="http://movie.mtime.com/269908/"
                              target="_blank">最后的真相</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>李太阁</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_16" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_16"
                                                     href="http://movie.mtime.com/269908"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="269908" data-videoid="81741"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__16" data-mvid="269908"
                            data-pan="M20_Index_futureSchdule_poster_16" data-videoid="81741"
                            href="http://movie.mtime.com/269908/" target="_blank"
                            title="最后的真相"><img
                            alt="最后的真相" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/15/084607.26252662_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_16" href="http://movie.mtime.com/269908/"
                                 target="_blank">最后的真相</a></h3>
                          <div class="showtype"><p><b data-person-num="269908">32</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_16"
                                  href="http://movie.mtime.com/269908/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="269908" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月03日</p>
                        <div class="movie_brief_layer" data-mvid="263838" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_17"
                                                                                                   href="http://movie.mtime.com/263838/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/21/164028.44881855_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_17"
                              href="http://movie.mtime.com/263838/"
                              target="_blank">你的世界如果没有…</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                                                      target="_blank">爱情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                                target="_blank"> 剧情</a></span><span class="mduration">95分钟</span></p>
                            <p class="actors">主演：<span>刘伟恒</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_17" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_17"
                                                     href="http://movie.mtime.com/263838"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="263838" data-videoid="81635"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__17" data-mvid="263838"
                            data-pan="M20_Index_futureSchdule_poster_17" data-videoid="81635"
                            href="http://movie.mtime.com/263838/" target="_blank"
                            title="你的世界如果没有我"><img
                            alt="你的世界如果没有我" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/21/164028.44881855_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_17" href="http://movie.mtime.com/263838/"
                                 target="_blank">你的世界如果没有…</a></h3>
                          <div class="showtype"><p><b data-person-num="263838">21</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                              target="_blank">爱情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                              target="_blank"> 剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_17"
                                  href="http://movie.mtime.com/263838/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="263838" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月10日</p>
                        <div class="movie_brief_layer" data-mvid="271181" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_18"
                                                                                                   href="http://movie.mtime.com/271181/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/08/090340.27710398_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_18"
                              href="http://movie.mtime.com/271181/"
                              target="_blank">密案1922</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=恐怖"
                                                      target="_blank">恐怖</a></span><span class="mduration">98分钟</span>
                            </p>
                            <p class="actors">主演：<span>梁煜良</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_18" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_18"
                                                     href="http://movie.mtime.com/271181"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271181"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__18"
                                                                   data-mvid="271181"
                                                                   data-pan="M20_Index_futureSchdule_poster_18"
                                                                   href="http://movie.mtime.com/271181/"
                                                                   target="_blank"
                                                                   title="密案1922"><img
                            alt="密案1922" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/08/090340.27710398_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_18" href="http://movie.mtime.com/271181/"
                                 target="_blank">密案1922</a></h3>
                          <div class="showtype"><p><b data-person-num="271181">5</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=恐怖"
                              target="_blank">恐怖</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271181" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月10日</p>
                        <div class="movie_brief_layer" data-mvid="264391" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_19"
                                                                                                   href="http://movie.mtime.com/264391/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/10/143148.36582751_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_19"
                              href="http://movie.mtime.com/264391/"
                              target="_blank">第四面墙</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>张翀</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_19" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_19"
                                                     href="http://movie.mtime.com/264391"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="264391"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__19"
                                                                   data-mvid="264391"
                                                                   data-pan="M20_Index_futureSchdule_poster_19"
                                                                   href="http://movie.mtime.com/264391/"
                                                                   target="_blank"
                                                                   title="第四面墙"><img
                            alt="第四面墙" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/10/143148.36582751_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_19" href="http://movie.mtime.com/264391/"
                                 target="_blank">第四面墙</a></h3>
                          <div class="showtype"><p><b data-person-num="264391">3</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="264391" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月11日</p>
                        <div class="movie_brief_layer" data-mvid="270409" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_20"
                                                                                                   href="http://movie.mtime.com/270409/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/21/102348.81476000_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_20"
                              href="http://movie.mtime.com/270409/"
                              target="_blank">摇滚藏獒：蓝色光…</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                                                      target="_blank">动画 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 音乐 "
                                target="_blank"> 音乐 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧"
                                target="_blank"> 喜剧</a></span><span class="mduration">90分钟</span></p>
                            <p class="actors">主演：<span>马克·巴尔多</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_20" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_20"
                                                     href="http://movie.mtime.com/270409"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270409"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__20"
                                                                   data-mvid="270409"
                                                                   data-pan="M20_Index_futureSchdule_poster_20"
                                                                   href="http://movie.mtime.com/270409/"
                                                                   target="_blank"
                                                                   title="摇滚藏獒：蓝色光芒"><img
                            alt="摇滚藏獒：蓝色光芒" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/21/102348.81476000_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_20" href="http://movie.mtime.com/270409/"
                                 target="_blank">摇滚藏獒：蓝色光…</a></h3>
                          <div class="showtype"><p><b data-person-num="270409">43</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                              target="_blank">动画 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 音乐 "
                              target="_blank"> 音乐 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧"
                              target="_blank"> 喜剧</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270409" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月11日</p>
                        <div class="movie_brief_layer" data-mvid="271148" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_21"
                                                                                                   href="http://movie.mtime.com/271148/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/30/121623.86064771_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_21"
                              href="http://movie.mtime.com/271148/"
                              target="_blank">八拍</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration">90分钟</span>
                            </p>
                            <p class="actors">主演：<span>钟康</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_21">超前预售<span></span>
                          </p>
                          <div class="detail_bar" hidden=""><a data-pan="M20_Index_futureSchdule_poster_ribbon_21"
                                                               href="http://movie.mtime.com/271148"
                                                               target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271148"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__21"
                                                                   data-mvid="271148"
                                                                   data-pan="M20_Index_futureSchdule_poster_21"
                                                                   href="http://movie.mtime.com/271148/"
                                                                   target="_blank"
                                                                   title="八拍"><img
                            alt="八拍" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/30/121623.86064771_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_21" href="http://movie.mtime.com/271148/"
                                 target="_blank">八拍</a></h3>
                          <div class="showtype"><p><b data-person-num="271148">2</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271148"><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月17日</p>
                        <div class="movie_brief_layer" data-mvid="270067" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_22"
                                                                                                   href="http://movie.mtime.com/270067/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/22/095621.66964102_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_22"
                              href="http://movie.mtime.com/270067/"
                              target="_blank">雄狮少年</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动画"
                                                      target="_blank">动画</a></span><span class="mduration">90分钟</span>
                            </p>
                            <p class="actors">主演：<span>孙海鹏</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_22" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_22"
                                                     href="http://movie.mtime.com/270067"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270067" data-videoid="80691"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__22" data-mvid="270067"
                            data-pan="M20_Index_futureSchdule_poster_22" data-videoid="80691"
                            href="http://movie.mtime.com/270067/" target="_blank"
                            title="雄狮少年"><img
                            alt="雄狮少年" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/22/095621.66964102_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_22" href="http://movie.mtime.com/270067/"
                                 target="_blank">雄狮少年</a></h3>
                          <div class="showtype"><p><b data-person-num="270067">47</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动画"
                              target="_blank">动画</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_22"
                                  href="http://movie.mtime.com/270067/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270067" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月24日</p>
                        <div class="movie_brief_layer" data-mvid="267774" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_23"
                                                                                                   href="http://movie.mtime.com/267774/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/22/134528.46539680_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_23"
                              href="http://movie.mtime.com/267774/"
                              target="_blank">平原上的火焰</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                                                      target="_blank">爱情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                                target="_blank"> 犯罪</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>张骥</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_23" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_23"
                                                     href="http://movie.mtime.com/267774"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="267774" data-videoid="81684"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__23" data-mvid="267774"
                            data-pan="M20_Index_futureSchdule_poster_23" data-videoid="81684"
                            href="http://movie.mtime.com/267774/" target="_blank"
                            title="平原上的火焰"><img
                            alt="平原上的火焰" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/22/134528.46539680_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_23" href="http://movie.mtime.com/267774/"
                                 target="_blank">平原上的火焰</a></h3>
                          <div class="showtype"><p><b data-person-num="267774">126</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                              target="_blank">爱情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                              target="_blank"> 犯罪</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_23"
                                  href="http://movie.mtime.com/267774/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="267774" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月24日</p>
                        <div class="movie_brief_layer" data-mvid="270970" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_24"
                                                                                                   href="http://movie.mtime.com/270970/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/23/101447.74734305_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_24"
                              href="http://movie.mtime.com/270970/"
                              target="_blank">穿过寒冬拥抱你</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                                                      target="_blank">剧情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 爱情"
                                target="_blank"> 爱情</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>薛晓路</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_24" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_24"
                                                     href="http://movie.mtime.com/270970"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270970" data-videoid="81779"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__24" data-mvid="270970"
                            data-pan="M20_Index_futureSchdule_poster_24" data-videoid="81779"
                            href="http://movie.mtime.com/270970/" target="_blank"
                            title="穿过寒冬拥抱你"><img
                            alt="穿过寒冬拥抱你" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/23/101447.74734305_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_24" href="http://movie.mtime.com/270970/"
                                 target="_blank">穿过寒冬拥抱你</a></h3>
                          <div class="showtype"><p><b data-person-num="270970">92</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                              target="_blank">剧情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 爱情"
                              target="_blank"> 爱情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_24"
                                  href="http://movie.mtime.com/270970/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270970" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月24日</p>
                        <div class="movie_brief_layer" data-mvid="270120" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_25"
                                                                                                   href="http://movie.mtime.com/270120/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/23/094218.61365395_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_25"
                              href="http://movie.mtime.com/270120/"
                              target="_blank">爱情神话</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                                                      target="_blank">爱情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                                target="_blank"> 剧情</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>邵艺辉</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_25" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_25"
                                                     href="http://movie.mtime.com/270120"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270120" data-videoid="81736"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__25" data-mvid="270120"
                            data-pan="M20_Index_futureSchdule_poster_25" data-videoid="81736"
                            href="http://movie.mtime.com/270120/" target="_blank"
                            title="爱情神话"><img
                            alt="爱情神话" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/23/094218.61365395_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_25" href="http://movie.mtime.com/270120/"
                                 target="_blank">爱情神话</a></h3>
                          <div class="showtype"><p><b data-person-num="270120">71</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情 "
                              target="_blank">爱情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                              target="_blank"> 剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_25"
                                  href="http://movie.mtime.com/270120/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270120" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月24日</p>
                        <div class="movie_brief_layer" data-mvid="269388" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_26"
                                                                                                   href="http://movie.mtime.com/269388/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/06/21/085908.16598296_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_26"
                              href="http://movie.mtime.com/269388/"
                              target="_blank">热汤</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                                                      target="_blank">剧情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 爱情 "
                                target="_blank"> 爱情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 悬疑"
                                target="_blank"> 悬疑</a></span><span class="mduration">100分钟</span></p>
                            <p class="actors">主演：<span>陈都灵 / 李梦 / 白梓轩 / 赵燕国彰</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_26" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_26"
                                                     href="http://movie.mtime.com/269388"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="269388"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__26"
                                                                   data-mvid="269388"
                                                                   data-pan="M20_Index_futureSchdule_poster_26"
                                                                   href="http://movie.mtime.com/269388/"
                                                                   target="_blank"
                                                                   title="热汤"><img
                            alt="热汤" height="190"
                            src="http://img5.mtime.cn/mt/2021/06/21/085908.16598296_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_26" href="http://movie.mtime.com/269388/"
                                 target="_blank">热汤</a></h3>
                          <div class="showtype"><p><b data-person-num="269388">23</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                              target="_blank">剧情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 爱情 "
                              target="_blank"> 爱情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 悬疑"
                              target="_blank"> 悬疑</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="269388" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月24日</p>
                        <div class="movie_brief_layer" data-mvid="270995" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_27"
                                                                                                   href="http://movie.mtime.com/270995/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/27/094054.47661266_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_27"
                              href="http://movie.mtime.com/270995/"
                              target="_blank">王者回归</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动画"
                                                      target="_blank">动画</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_27" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_27"
                                                     href="http://movie.mtime.com/270995"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270995"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__27"
                                                                   data-mvid="270995"
                                                                   data-pan="M20_Index_futureSchdule_poster_27"
                                                                   href="http://movie.mtime.com/270995/"
                                                                   target="_blank"
                                                                   title="王者回归"><img
                            alt="王者回归" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/27/094054.47661266_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_27" href="http://movie.mtime.com/270995/"
                                 target="_blank">王者回归</a></h3>
                          <div class="showtype"><p><b data-person-num="270995">16</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动画"
                              target="_blank">动画</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270995" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月31日</p>
                        <div class="movie_brief_layer" data-mvid="267228" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_28"
                                                                                                   href="http://movie.mtime.com/267228/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/24/094718.83486372_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_28"
                              href="http://movie.mtime.com/267228/"
                              target="_blank">反贪风暴5：最终…</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动作 "
                                                      target="_blank">动作 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                                target="_blank"> 犯罪</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>林德禄</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_28" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_28"
                                                     href="http://movie.mtime.com/267228"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="267228" data-videoid="81454"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__28" data-mvid="267228"
                            data-pan="M20_Index_futureSchdule_poster_28" data-videoid="81454"
                            href="http://movie.mtime.com/267228/" target="_blank"
                            title="反贪风暴5：最终章"><img
                            alt="反贪风暴5：最终章" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/24/094718.83486372_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_28" href="http://movie.mtime.com/267228/"
                                 target="_blank">反贪风暴5：最终…</a></h3>
                          <div class="showtype"><p><b data-person-num="267228">397</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动作 "
                              target="_blank">动作 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                              target="_blank"> 犯罪</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_28"
                                  href="http://movie.mtime.com/267228/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="267228" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月31日</p>
                        <div class="movie_brief_layer" data-mvid="270882" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_29"
                                                                                                   href="http://movie.mtime.com/270882/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/06/111020.50991843_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_29"
                              href="http://movie.mtime.com/270882/"
                              target="_blank">李茂换太子</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧 "
                                                      target="_blank">喜剧 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 古装"
                                target="_blank"> 古装</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>高可</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_29" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_29"
                                                     href="http://movie.mtime.com/270882"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270882" data-videoid="81801"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__29" data-mvid="270882"
                            data-pan="M20_Index_futureSchdule_poster_29" data-videoid="81801"
                            href="http://movie.mtime.com/270882/" target="_blank"
                            title="李茂换太子"><img
                            alt="李茂换太子" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/06/111020.50991843_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_29" href="http://movie.mtime.com/270882/"
                                 target="_blank">李茂换太子</a></h3>
                          <div class="showtype"><p><b data-person-num="270882">101</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧 "
                              target="_blank">喜剧 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 古装"
                              target="_blank"> 古装</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_29"
                                  href="http://movie.mtime.com/270882/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270882" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月31日</p>
                        <div class="movie_brief_layer" data-mvid="270108" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_30"
                                                                                                   href="http://movie.mtime.com/270108/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/03/18/161758.92161143_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_30"
                              href="http://movie.mtime.com/270108/"
                              target="_blank">忠犬八公</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>徐昂</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_30" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_30"
                                                     href="http://movie.mtime.com/270108"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270108"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__30"
                                                                   data-mvid="270108"
                                                                   data-pan="M20_Index_futureSchdule_poster_30"
                                                                   href="http://movie.mtime.com/270108/"
                                                                   target="_blank"
                                                                   title="忠犬八公"><img
                            alt="忠犬八公" height="190"
                            src="http://img5.mtime.cn/mt/2021/03/18/161758.92161143_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_30" href="http://movie.mtime.com/270108/"
                                 target="_blank">忠犬八公</a></h3>
                          <div class="showtype"><p><b data-person-num="270108">64</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270108" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月31日</p>
                        <div class="movie_brief_layer" data-mvid="270267" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_31"
                                                                                                   href="http://movie.mtime.com/270267/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/04/152339.53753249_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_31"
                              href="http://movie.mtime.com/270267/"
                              target="_blank">以年为单位的恋爱</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情"
                                                      target="_blank">爱情</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>黎志</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_31" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_31"
                                                     href="http://movie.mtime.com/270267"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270267" data-videoid="81803"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__31" data-mvid="270267"
                            data-pan="M20_Index_futureSchdule_poster_31" data-videoid="81803"
                            href="http://movie.mtime.com/270267/" target="_blank"
                            title="以年为单位的恋爱"><img
                            alt="以年为单位的恋爱" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/04/152339.53753249_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_31" href="http://movie.mtime.com/270267/"
                                 target="_blank">以年为单位的恋爱</a></h3>
                          <div class="showtype"><p><b data-person-num="270267">43</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=爱情"
                              target="_blank">爱情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_31"
                                  href="http://movie.mtime.com/270267/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270267" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">12月31日</p>
                        <div class="movie_brief_layer" data-mvid="270511" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_32"
                                                                                                   href="http://movie.mtime.com/270511/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/06/17/194233.67869160_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_32"
                              href="http://movie.mtime.com/270511/"
                              target="_blank">荒原：绝地保镖</a><span>  (2021)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动作 "
                                                      target="_blank">动作 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 西部 "
                                target="_blank"> 西部 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                                target="_blank"> 犯罪</a></span><span class="mduration">90分钟</span></p>
                            <p class="actors">主演：<span>王星哲</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_32" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_32"
                                                     href="http://movie.mtime.com/270511"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270511"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__32"
                                                                   data-mvid="270511"
                                                                   data-pan="M20_Index_futureSchdule_poster_32"
                                                                   href="http://movie.mtime.com/270511/"
                                                                   target="_blank"
                                                                   title="荒原：绝地保镖"><img
                            alt="荒原：绝地保镖" height="190"
                            src="http://img5.mtime.cn/mt/2021/06/17/194233.67869160_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_32" href="http://movie.mtime.com/270511/"
                                 target="_blank">荒原：绝地保镖</a></h3>
                          <div class="showtype"><p><b data-person-num="270511">18</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动作 "
                              target="_blank">动作 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 西部 "
                              target="_blank"> 西部 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 犯罪"
                              target="_blank"> 犯罪</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270511" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="270241" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_33"
                                                                                                   href="http://movie.mtime.com/270241/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/04/22/145833.70555162_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_33"
                              href="http://movie.mtime.com/270241/"
                              target="_blank">四海</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>韩寒</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_33" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_33"
                                                     href="http://movie.mtime.com/270241"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270241" data-videoid="81735"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__33" data-mvid="270241"
                            data-pan="M20_Index_futureSchdule_poster_33" data-videoid="81735"
                            href="http://movie.mtime.com/270241/" target="_blank"
                            title="四海"><img
                            alt="四海" height="190"
                            src="http://img5.mtime.cn/mt/2021/04/22/145833.70555162_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_33" href="http://movie.mtime.com/270241/"
                                 target="_blank">四海</a></h3>
                          <div class="showtype"><p><b data-person-num="270241">106</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_33"
                                  href="http://movie.mtime.com/270241/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270241" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="268962" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_34"
                                                                                                   href="http://movie.mtime.com/268962/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/18/114011.71563567_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_34"
                              href="http://movie.mtime.com/268962/"
                              target="_blank">超能一家人</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧 "
                                                      target="_blank">喜剧 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 奇幻 "
                                target="_blank"> 奇幻 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 动作"
                                target="_blank"> 动作</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>宋阳</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_34" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_34"
                                                     href="http://movie.mtime.com/268962"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="268962" data-videoid="81609"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__34" data-mvid="268962"
                            data-pan="M20_Index_futureSchdule_poster_34" data-videoid="81609"
                            href="http://movie.mtime.com/268962/" target="_blank"
                            title="超能一家人"><img
                            alt="超能一家人" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/18/114011.71563567_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_34" href="http://movie.mtime.com/268962/"
                                 target="_blank">超能一家人</a></h3>
                          <div class="showtype"><p><b data-person-num="268962">84</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧 "
                              target="_blank">喜剧 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 奇幻 "
                              target="_blank"> 奇幻 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 动作"
                              target="_blank"> 动作</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_34"
                                  href="http://movie.mtime.com/268962/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="268962" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="270475" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_35"
                                                                                                   href="http://movie.mtime.com/270475/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/22/102839.52427624_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_35"
                              href="http://movie.mtime.com/270475/"
                              target="_blank">奇迹</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>文牧野</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_35" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_35"
                                                     href="http://movie.mtime.com/270475"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270475"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__35"
                                                                   data-mvid="270475"
                                                                   data-pan="M20_Index_futureSchdule_poster_35"
                                                                   href="http://movie.mtime.com/270475/"
                                                                   target="_blank"
                                                                   title="奇迹"><img
                            alt="奇迹" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/22/102839.52427624_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_35" href="http://movie.mtime.com/270475/"
                                 target="_blank">奇迹</a></h3>
                          <div class="showtype"><p><b data-person-num="270475">32</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270475" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="270539" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_36"
                                                                                                   href="http://movie.mtime.com/270539/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/06/23/141915.48978397_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_36"
                              href="http://movie.mtime.com/270539/"
                              target="_blank">这个杀手不太冷静</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧"
                                                      target="_blank">喜剧</a></span><span class="mduration"
                                                                                         hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>邢文雄</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_36" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_36"
                                                     href="http://movie.mtime.com/270539"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270539"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__36"
                                                                   data-mvid="270539"
                                                                   data-pan="M20_Index_futureSchdule_poster_36"
                                                                   href="http://movie.mtime.com/270539/"
                                                                   target="_blank"
                                                                   title="这个杀手不太冷静"><img
                            alt="这个杀手不太冷静" height="190"
                            src="http://img5.mtime.cn/mt/2021/06/23/141915.48978397_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_36" href="http://movie.mtime.com/270539/"
                                 target="_blank">这个杀手不太冷静</a></h3>
                          <div class="showtype"><p><b data-person-num="270539">12</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧"
                              target="_blank">喜剧</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270539" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="270261" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_37"
                                                                                                   href="http://movie.mtime.com/270261/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/06/23/145821.44570457_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_37"
                              href="http://movie.mtime.com/270261/"
                              target="_blank">我是霸王龙</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=奇幻 "
                                                      target="_blank">奇幻 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 冒险"
                                target="_blank"> 冒险</a></span><span class="mduration">80分钟</span></p>
                            <p class="actors" hidden="">主演：<span></span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_37" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_37"
                                                     href="http://movie.mtime.com/270261"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270261"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__37"
                                                                   data-mvid="270261"
                                                                   data-pan="M20_Index_futureSchdule_poster_37"
                                                                   href="http://movie.mtime.com/270261/"
                                                                   target="_blank"
                                                                   title="我是霸王龙"><img
                            alt="我是霸王龙" height="190"
                            src="http://img5.mtime.cn/mt/2021/06/23/145821.44570457_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_37" href="http://movie.mtime.com/270261/"
                                 target="_blank">我是霸王龙</a></h3>
                          <div class="showtype"><p><b data-person-num="270261">11</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=奇幻 "
                              target="_blank">奇幻 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 冒险"
                              target="_blank"> 冒险</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270261" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="269703" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_38"
                                                                                                   href="http://movie.mtime.com/269703/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/02/04/101649.67613935_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_38"
                              href="http://movie.mtime.com/269703/"
                              target="_blank">我心飞扬</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                                                      target="_blank">剧情</a></span><span class="mduration">122分钟</span>
                            </p>
                            <p class="actors">主演：<span>王放放</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_38" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_38"
                                                     href="http://movie.mtime.com/269703"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="269703"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__38"
                                                                   data-mvid="269703"
                                                                   data-pan="M20_Index_futureSchdule_poster_38"
                                                                   href="http://movie.mtime.com/269703/"
                                                                   target="_blank"
                                                                   title="我心飞扬"><img
                            alt="我心飞扬" height="190"
                            src="http://img5.mtime.cn/mt/2021/02/04/101649.67613935_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_38" href="http://movie.mtime.com/269703/"
                                 target="_blank">我心飞扬</a></h3>
                          <div class="showtype"><p><b data-person-num="269703">6</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情"
                              target="_blank">剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="269703" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="270992" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_39"
                                                                                                   href="http://movie.mtime.com/270992/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/27/085054.74446336_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_39"
                              href="http://movie.mtime.com/270992/"
                              target="_blank">喜羊羊与灰太狼之…</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧 "
                                                      target="_blank">喜剧 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 运动 "
                                target="_blank"> 运动 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 冒险"
                                target="_blank"> 冒险</a></span><span class="mduration" hidden="">0分钟</span></p>
                            <p class="actors">主演：<span>黄伟明</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_39" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_39"
                                                     href="http://movie.mtime.com/270992"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270992" data-videoid="81489"><a
                            class="imgbox showMovieBrief" data-logdmg="futureSchdule__39" data-mvid="270992"
                            data-pan="M20_Index_futureSchdule_poster_39" data-videoid="81489"
                            href="http://movie.mtime.com/270992/" target="_blank"
                            title="喜羊羊与灰太狼之筐出未来"><img
                            alt="喜羊羊与灰太狼之筐出未来" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/27/085054.74446336_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_39" href="http://movie.mtime.com/270992/"
                                 target="_blank">喜羊羊与灰太狼之…</a></h3>
                          <div class="showtype"><p><b data-person-num="270992">5</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=喜剧 "
                              target="_blank">喜剧 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 运动 "
                              target="_blank"> 运动 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 冒险"
                              target="_blank"> 冒险</a></span></p>
                            <p hidden="">导演： </p>
                            <p><a data-pan="M20_Index_futureSchdule_movieTrailer_39"
                                  href="http://movie.mtime.com/270992/trailer"
                                  target="_blank">预告片：<i class="icovideo"></i></a>
                            </p>
                          </div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270992" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="270919" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_40"
                                                                                                   href="http://movie.mtime.com/270919/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/09/14/170423.73893107_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_40"
                              href="http://movie.mtime.com/270919/"
                              target="_blank">戏如人生</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                                                      target="_blank">剧情 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧 "
                                target="_blank"> 喜剧 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 爱情"
                                target="_blank"> 爱情</a></span><span class="mduration">122分钟</span></p>
                            <p class="actors">主演：<span>德柏</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_40" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_40"
                                                     href="http://movie.mtime.com/270919"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="270919"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__40"
                                                                   data-mvid="270919"
                                                                   data-pan="M20_Index_futureSchdule_poster_40"
                                                                   href="http://movie.mtime.com/270919/"
                                                                   target="_blank"
                                                                   title="戏如人生"><img
                            alt="戏如人生" height="190"
                            src="http://img5.mtime.cn/mt/2021/09/14/170423.73893107_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_40" href="http://movie.mtime.com/270919/"
                                 target="_blank">戏如人生</a></h3>
                          <div class="showtype"><p><b data-person-num="270919">4</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=剧情 "
                              target="_blank">剧情 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 喜剧 "
                              target="_blank"> 喜剧 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 爱情"
                              target="_blank"> 爱情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="270919" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="271146" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_41"
                                                                                                   href="http://movie.mtime.com/271146/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/10/30/111328.38961126_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_41"
                              href="http://movie.mtime.com/271146/"
                              target="_blank">侏罗纪大乐园</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                                                      target="_blank">动画 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                                target="_blank"> 剧情</a></span><span class="mduration">95分钟</span></p>
                            <p class="actors">主演：<span>舒畅</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_41" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_41"
                                                     href="http://movie.mtime.com/271146"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271146"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__41"
                                                                   data-mvid="271146"
                                                                   data-pan="M20_Index_futureSchdule_poster_41"
                                                                   href="http://movie.mtime.com/271146/"
                                                                   target="_blank"
                                                                   title="侏罗纪大乐园"><img
                            alt="侏罗纪大乐园" height="190"
                            src="http://img5.mtime.cn/mt/2021/10/30/111328.38961126_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_41" href="http://movie.mtime.com/271146/"
                                 target="_blank">侏罗纪大乐园</a></h3>
                          <div class="showtype"><p><b data-person-num="271146">2</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                              target="_blank">动画 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 剧情"
                              target="_blank"> 剧情</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271146" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                      <li><p class="showday">2022年02月01日</p>
                        <div class="movie_brief_layer" data-mvid="271196" style="display:none;"><a class="top_poster"
                                                                                                   data-pan="M20_Index_futureSchdule_poster_img_42"
                                                                                                   href="http://movie.mtime.com/271196/"
                                                                                                   target="_blank"><img
                            src="http://img5.mtime.cn/mt/2021/11/10/090412.88825513_1280X720X2.jpg"></a>
                          <div class="brief_info"><p class="brief_title"><a
                              data-pan="M20_Index_futureSchdule_poster_movieName_42"
                              href="http://movie.mtime.com/271196/"
                              target="_blank">镖师虎墩</a><span>  (2022)</span>
                          </p>
                            <p><span class="types"><a href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                                                      target="_blank">动画 /</a><a
                                href="http://film.mtime.com/search?type=genreTypes&amp;word= 冒险"
                                target="_blank"> 冒险</a></span><span class="mduration">89分钟</span></p>
                            <p class="actors">主演：<span>邹燚</span></p>
                            <p class="brief_smry ods"></p></div>
                          <p class="ticket_bar" data-pan="M20_Index_futureSchdule_poster_ribbon_42" hidden="">
                            选座购票<span></span></p>
                          <div class="detail_bar"><a data-pan="M20_Index_futureSchdule_poster_ribbon_42"
                                                     href="http://movie.mtime.com/271196"
                                                     target="_blank">影片详细资料</a>
                          </div>
                        </div>
                        <div class="showbox" data-mvid="271196"><a class="imgbox showMovieBrief"
                                                                   data-logdmg="futureSchdule__42"
                                                                   data-mvid="271196"
                                                                   data-pan="M20_Index_futureSchdule_poster_42"
                                                                   href="http://movie.mtime.com/271196/"
                                                                   target="_blank"
                                                                   title="镖师虎墩"><img
                            alt="镖师虎墩" height="190"
                            src="http://img5.mtime.cn/mt/2021/11/10/090412.88825513_1280X720X2.jpg" width="125"></a>
                          <h3><a data-pan="M20_Index_futureSchdule_movieName_42" href="http://movie.mtime.com/271196/"
                                 target="_blank">镖师虎墩</a></h3>
                          <div class="showtype"><p><b data-person-num="271196">1</b>人想看<span> - <a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word=动画 "
                              target="_blank">动画 /</a><a
                              href="http://film.mtime.com/search?type=genreTypes&amp;word= 冒险"
                              target="_blank"> 冒险</a></span></p>
                            <p hidden="">导演： </p>
                            <p style="width:100px;height:23px;"></p></div>
                          <div class="showticket goAppMovieDetail" data-nonext-mid="271196" hidden=""><b></b>
                            <p id="futureSchduleBtn" class="btngreen" data-pan="M18_Index_futureSchdule_fastTicket_3"
                               target="_blank">超前预售</p></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ad-newrecmd" class="common-ad-wrap"></div>
        <div class="selectionregion" data-plugin="imgLoad">
          <div class="mselection">
            <div class="seltrailer">
              <div><h4>新片预告</h4><a class="cmore" data-pan="M20_Index_movieTrailer_more"
                                   href="http://video.mtime.com/search/?t=0"
                                   target="_blank">更多</a></div>
              <dl class="fix">
                <dt><a class="mainvideo" data-pan="M20_Index_movieTrailer_img_1"
                       href="http://video.mtime.com/81811/?mid=270704"
                       target="_blank" title="威尼斯评审团大奖《上帝之手》正式预告"><img
                    alt="威尼斯评审团大奖《上帝之手》正式预告" src="http://img5.mtime.cn/mg/2021/11/12/101803.77078355.jpg"
                    width="864"><i></i></a>
                  <h3><a data-pan="M20_Index_movieTrailer_img_1" href="http://video.mtime.com/81811/?mid=270704"
                         target="_blank">威尼斯评审团大奖《上帝之手》正式预告</a></h3>
                  <p>2021.12.15 美国 上映</p></dt>
                <dd><a class="videobox" data-pan="M20_Index_movieTrailer_img_2"
                       href="http://video.mtime.com/81792/?mid=270234"
                       target="_blank" title="《唐顿庄园2》发先导预告"><img
                    alt="《唐顿庄园2》发先导预告" height="140" src="http://img5.mtime.cn/mg/2021/11/11/102156.33264496.jpg"
                    width="230"><span><i></i><strong>《唐顿庄园2》发先导预告</strong><b>2021.3.18 美国 上映</b></span></a></dd>
                <dd><a class="videobox" data-pan="M20_Index_movieTrailer_img_3"
                       href="http://video.mtime.com/81789/?mid=255789"
                       target="_blank"
                       title="《梅艳芳》发终极预告"><img
                    alt="《梅艳芳》发终极预告" height="140" src="http://img5.mtime.cn/mg/2021/11/10/155924.57463884.jpg"
                    width="230"><span><i></i><strong>《梅艳芳》发终极预告</strong><b>2021.11.12 中国 上映</b></span></a></dd>
                <dd><a class="videobox" data-pan="M20_Index_movieTrailer_img_4"
                       href="http://video.mtime.com/81783/?mid=250596"
                       target="_blank" title="黑白犯罪片《智齿》新预告"><img
                    alt="黑白犯罪片《智齿》新预告" height="140" src="http://img5.mtime.cn/mg/2021/11/09/163423.66089099.jpg"
                    width="230"><span><i></i><strong>黑白犯罪片《智齿》新预告</strong><b>2021.11.18 中国香港 上映</b></span></a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div id="ad-movierevw" class="common-ad-wrap"></div>
        <div class="indexstruct communitystruct" data-plugin="imgLoad">
          <div class="hotcomments">
            <div style="position:relative;"><h4 class="indextitle">热门影评</h4><a class="cmore"
                                                                               data-pan="M20_Index_reviews_more"
                                                                               href="http://community.mtime.com/"
                                                                               target="_blank">更多</a>
            </div>
            <div class="fix commbox">
              <div id="commentsTop" class="headslider maincom" data-ride="carousel"><a class="lastpic"
                                                                                       data-pan="M20_Index_review_long_leftSwitch"
                                                                                       data-slide="prev"
                                                                                       href="#commentsTop"
                                                                                       style="display:block;"
                                                                                       title="上一张"><i></i></a><a
                  class="nextpic" data-pan="M20_Index_review_long_rightSwitch" data-slide="next" href="#commentsTop"
                  style="display:block;"
                  title="下一张"><i></i></a>
                <dl>
                  <dd data-opacity="0" data-pan="M20_Index_Commu_Com_First" style="opacity: 0; z-index: 1;"><a
                      class="hotcomimg" data-pan="M20_Index_review_long_poster_1"
                      href="http://content.mtime.com/review/228772494"
                      target="_blank" title="既然这样子的话，我最喜欢奥卡菲娜"><img
                      alt="既然这样子的话，我最喜欢奥卡菲娜" height="260" src="http://img5.mtime.cn/mg/2021/11/11/002213.48385348.jpg"
                      width="450"></a>
                    <div class="commentsbox">
                      <div class="commentsuser"><a class="hotcomimg" data-pan="M20_Index_review_long_userDp_1"
                                                   href="http://my.mtime.com/171041514"
                                                   target="_blank" title="谋杀紫楠枫"><img
                          alt="谋杀紫楠枫" height="63" src="http://img5.mtime.cn/up/2021/03/30/235413.34566468_128X128.jpg"
                          width="63"></a>
                        <p><a data-pan="M20_Index_review_Long_userName_1" href="http://my.mtime.com/171041514"
                              target="_blank">谋杀紫楠枫</a><span>评</span><span><a
                            href="http://movie.mtime.com/262628/" target="_blank">《尚气与十环》</a></span></p></div>
                      <h3><a data-pan="M20_Index_review_long_title_1" href="http://content.mtime.com/review/228772494"
                             target="_blank">既然这样子的话，我最喜欢奥卡菲娜</a></h3>
                      <p class="describe"><i></i>尚气与十环传奇 时光评分 6.4 132分钟 - 动作 / 奇幻 / 科幻 2021年9月3日澳大利亚上映 网络狂欢，又……</p>
                    </div>
                  </dd>
                  <dd data-opacity="0" data-pan="M20_Index_Commu_Com_First" style="z-index: 1; opacity: 0;"><a
                      class="hotcomimg" data-pan="M20_Index_review_long_poster_2"
                      href="http://content.mtime.com/review/228772973"
                      target="_blank" title="强行扯出完结季——《十三个原因第4季》"><img
                      alt="强行扯出完结季——《十三个原因第4季》" height="260"
                      src="http://img5.mtime.cn/mg/2021/11/11/190410.22983583.jpg"
                      width="450"></a>
                    <div class="commentsbox">
                      <div class="commentsuser"><a class="hotcomimg" data-pan="M20_Index_review_long_userDp_2"
                                                   href="http://my.mtime.com/841339"
                                                   target="_blank" title="妙介子"><img
                          alt="妙介子"
                          height="63"
                          src="https://img2.mtime.cn/u/1339/841339/5264bcff-4e44-4ad0-9f4b-139db2dc93f0/128X128.jpg"
                          width="63"></a>
                        <p><a data-pan="M20_Index_review_Long_userName_2" href="http://my.mtime.com/841339"
                              target="_blank">妙介子</a><span>评</span><span><a
                            href="http://movie.mtime.com/240385/" target="_blank">《十三个原因》</a></span></p></div>
                      <h3><a data-pan="M20_Index_review_long_title_2" href="http://content.mtime.com/review/228772973"
                             target="_blank">强行扯出完结季——《十三个原因第4…</a></h3>
                      <p class="describe"><i></i>今天聊聊美剧《十三个原因第4季》。 片名Reasons Why Season 4 (2020)，别名汉娜的遗言(台) /……</p>
                    </div>
                  </dd>
                  <dd data-opacity="1" data-pan="M20_Index_Commu_Com_First" style="z-index: 3; opacity: 1;"><a
                      class="hotcomimg" data-pan="M20_Index_review_long_poster_3"
                      href="http://content.mtime.com/review/228772957"
                      target="_blank" title="让这匹黑马《扬名立万》"><img
                      alt="让这匹黑马《扬名立万》" height="260"
                      src="http://img5.mtime.cn/mt/2021/11/02/145959.15510846_1280X720X2.jpg"
                      width="450"></a>
                    <div class="commentsbox">
                      <div class="commentsuser"><a class="hotcomimg" data-pan="M20_Index_review_long_userDp_3"
                                                   href="http://my.mtime.com/75705445"
                                                   target="_blank" title="杜小月半"><img
                          alt="杜小月半" height="63" src="http://img5.mtime.cn/up/2021/04/29/091418.29538458_128X128.jpg"
                          width="63"></a>
                        <p><a data-pan="M20_Index_review_Long_userName_3" href="http://my.mtime.com/75705445"
                              target="_blank">杜小月半</a><span>评</span><span><a
                            href="http://movie.mtime.com/270288/" target="_blank">《扬名立万》</a></span></p></div>
                      <h3><a data-pan="M20_Index_review_long_title_3" href="http://content.mtime.com/review/228772957"
                             target="_blank">让这匹黑马《扬名立万》</a></h3>
                      <p class="describe"><i></i>很久没有这么喜欢的电影了。 好多年前十二公民也是这个类型，一个屋子里推断一件离奇的案子，事实却并非表面看起来那样简单。 ……</p>
                    </div>
                  </dd>
                </dl>
                <div class="sliderdot" data-slidedot="dot"><i class=""
                                                              data-pan="M20_Index_review_long_switch" data-slide-to="0"
                                                              data-target="#commentsTop"></i><i class=""
                                                                                                data-pan="M20_Index_review_long_switch"
                                                                                                data-slide-to="1"
                                                                                                data-target="#commentsTop"></i><i
                    class="cur" data-pan="M20_Index_review_long_switch" data-slide-to="2"
                    data-target="#commentsTop"></i>
                </div>
              </div>
              <div class="sidercom">
                <ul>
                  <li class="commentsmod"><a data-pan="M20_Index_review_short_poster_1"
                                             href="http://movie.mtime.com/265300" target="_blank"
                                             title="美国犯罪故事 第三季"><img
                      alt="美国犯罪故事 第三季" height="120"
                      src="http://img5.mtime.cn/mt/2021/08/13/105809.16974339_1280X720X2.jpg"
                      width="80"></a><a class="describe" data-pan="M20_Index_review_short_AB_1"
                                        href="http://content.mtime.com/review/228773027" target="_blank"><i></i>　　美国犯罪故事的三季的故事，都属于我知道，但是不熟悉。区别在于——
                    　　第一季的辛普森案，已经成为美国司法……</a>
                    <p class="describemovie"><a data-pan="M20_Index_review_short_userName_1"
                                                href="http://my.mtime.com/631628"
                                                target="_blank">银石qq</a> 评 《<a
                        data-pan="M20_Index_review_short_movieName_1" href="http://movie.mtime.com/265300"
                        target="_blank">美国犯罪故…</a>》</p></li>
                  <li class="commentsmod"><a data-pan="M20_Index_review_short_poster_2"
                                             href="http://movie.mtime.com/270041" target="_blank"
                                             title="我是你的人类"><img
                      alt="我是你的人类" height="120" src="http://img5.mtime.cn/mt/2021/08/25/090743.38522193_1280X720X2.jpg"
                      width="80"></a><a class="describe" data-pan="M20_Index_review_short_AB_2"
                                        href="http://content.mtime.com/review/228772936" target="_blank"><i></i>我是你的人类
                    时光评分 0.0
                    105分钟 - 喜剧 / 爱情 / 科幻 2021年9月17日德国上映 我是……</a>
                    <p class="describemovie"><a data-pan="M20_Index_review_short_userName_2"
                                                href="http://my.mtime.com/171041514"
                                                target="_blank">谋杀紫楠枫</a> 评 《<a
                        data-pan="M20_Index_review_short_movieName_2" href="http://movie.mtime.com/270041"
                        target="_blank">我是你的人…</a>》</p></li>
                  <li class="commentsmod"><a data-pan="M20_Index_review_short_poster_3"
                                             href="http://movie.mtime.com/201074" target="_blank"
                                             title="莫比乌斯"><img
                      alt="莫比乌斯" height="120" src="http://img31.mtime.cn/mt/2013/08/28/151125.45233107_1280X720X2.jpg"
                      width="80"></a><a class="describe" data-pan="M20_Index_review_short_AB_3"
                                        href="http://content.mtime.com/review/228771859" target="_blank"><i></i>说到莫比乌斯这部电影，大家多少会有些抵触，甚至存在着恐惧。不仅仅是因为其中的剧情设置，还有它那夸张的表现形式……</a>
                    <p class="describemovie"><a data-pan="M20_Index_review_short_userName_3"
                                                href="http://my.mtime.com/180028143"
                                                target="_blank">鲸吸百川</a> 评 《<a
                        data-pan="M20_Index_review_short_movieName_3" href="http://movie.mtime.com/201074"
                        target="_blank">莫比乌斯</a>》<i class="moviegrade">6.7</i></p></li>
                  <li class="commentsmod"><a data-pan="M20_Index_review_short_poster_4"
                                             href="http://movie.mtime.com/161119" target="_blank"
                                             title="顺从"><img
                      alt="顺从" height="120" src="http://img31.mtime.cn/mt/2012/06/30/225016.22249418_1280X720X2.jpg"
                      width="80"></a><a class="describe" data-pan="M20_Index_review_short_AB_4"
                                        href="http://content.mtime.com/review/228772547" target="_blank"><i></i>今天聊聊电影《服从》。
                    片名Compliance (2012)，别名快餐店阴质事件(港)。 《服从》是一部惊……</a>
                    <p class="describemovie"><a data-pan="M20_Index_review_short_userName_4"
                                                href="http://my.mtime.com/841339"
                                                target="_blank">妙介子</a> 评 《<a
                        data-pan="M20_Index_review_short_movieName_4" href="http://movie.mtime.com/161119"
                        target="_blank">顺从</a>》<i class="moviegrade">6.5</i></p></li>
                  <li class="commentsmod"><a data-pan="M20_Index_review_short_poster_5"
                                             href="http://movie.mtime.com/262628" target="_blank"
                                             title="尚气与十环传奇"><img
                      alt="尚气与十环传奇" height="120" src="http://img5.mtime.cn/mt/2021/07/30/230038.51083038_1280X720X2.jpg"
                      width="80"></a><a class="describe" data-pan="M20_Index_review_short_AB_5"
                                        href="http://content.mtime.com/review/228772508" target="_blank"><i></i>总的来说，作为美国制作的中国文化的片子来说，还是很优秀的。类似于黑豹那样的超级英雄的起源故事。
                    首先我想说，……</a>
                    <p class="describemovie"><a data-pan="M20_Index_review_short_userName_5"
                                                href="http://my.mtime.com/10203274"
                                                target="_blank">Mingl…</a> 评 《<a
                        data-pan="M20_Index_review_short_movieName_5" href="http://movie.mtime.com/262628"
                        target="_blank">尚气与十环…</a>》<i class="moviegrade">6.7</i></p></li>
                  <li class="commentsmod"><a data-pan="M20_Index_review_short_poster_6"
                                             href="http://movie.mtime.com/263803" target="_blank"
                                             title="热带雨"><img
                      alt="热带雨" height="120" src="http://img5.mtime.cn/mt/2019/10/09/174706.40084613_1280X720X2.jpg"
                      width="80"></a><a class="describe" data-pan="M20_Index_review_short_AB_6"
                                        href="http://content.mtime.com/review/228771450" target="_blank"><i></i>一场不伦恋
                    看出了眼泪，
                    看到了共鸣， 看见了现实， 也看到了希望。 当人生步入中年， 当婚姻进入平淡， 当……</a>
                    <p class="describemovie"><a data-pan="M20_Index_review_short_userName_6"
                                                href="http://my.mtime.com/5710639"
                                                target="_blank">玛奇朵82…</a> 评 《<a
                        data-pan="M20_Index_review_short_movieName_6" href="http://movie.mtime.com/263803"
                        target="_blank">热带雨</a>》<i class="moviegrade">7.2</i></p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="ad-group" class="common-ad-wrap"></div>
        <div class="groupstruct" data-plugin="imgLoad">
          <div class="hotGroup">
            <div style="position:relative;"><h4 class="indextitle">热门家族</h4><a
                class="cmore" href="http://community.mtime.com/familyList/1" target="_blank">更多</a></div>
            <div class="groupList">
              <ul>
                <li class="group"><a data-pan="_Index_group_image_1" href="http://community.mtime.com/familyDetail/9824"
                                     target="_blank"
                                     title="卡片大富翁游戏交流"><img
                    alt="卡片大富翁游戏交流" height="100" src="http://img5.mtime.cn/mg/2021/02/09/093152.57094344.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/9824" target="_blank"><p
                      class="fix"><span class="groupName">卡片大富翁游戏交流</span> <span
                      class="groupPeopleCount">78714个成员</span>
                  </p>
                    <p class="groupDes">游戏问题与建议征集：http://content.mtime.com/post/227132168
                      加入卡片大富翁微信官…</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_2"
                                     href="http://community.mtime.com/familyDetail/11344" target="_blank"
                                     title="天堂电影小组"><img
                    alt="天堂电影小组" height="100" src="http://img5.mtime.cn/mg/2019/12/23/105338.91199728.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/11344" target="_blank"><p
                      class="fix"><span class="groupName">天堂电影小组</span> <span class="groupPeopleCount">600392个成员</span>
                  </p>
                    <p class="groupDes">电影是美好的，天堂电影官方微信号：filmov天堂的名字与LOGO来源于《天堂电影院》。天堂一直信奉黑泽明的一句话：电影…</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_3"
                                     href="http://community.mtime.com/familyDetail/11484"
                                     target="_blank" title="007时光特工分队"><img
                    alt="007时光特工分队" height="100" src="http://img5.mtime.cn/mg/2021/10/15/182059.27166624.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/11484" target="_blank"><p
                      class="fix"><span class="groupName">007时光特工分队</span> <span class="groupPeopleCount">6716个成员</span>
                  </p>
                    <p class="groupDes">007时光特工分队集结，新的特工任务即将到场！</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_4"
                                     href="http://community.mtime.com/familyDetail/30023"
                                     target="_blank"
                                     title="影视周边种草拔草"><img
                    alt="影视周边种草拔草" height="100" src="http://img5.mtime.cn/mg/2021/07/30/135103.76961119.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/30023" target="_blank"><p
                      class="fix"><span class="groupName">影视周边种草拔草</span> <span class="groupPeopleCount">431个成员</span>
                  </p>
                    <p class="groupDes">电影周边，潮玩手办，开箱评测，种草拔草，购买清单</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_5"
                                     href="http://community.mtime.com/familyDetail/30201" target="_blank"
                                     title="最新电影🎬"><img
                    alt="最新电影🎬" height="100" src="http://img5.mtime.cn/mg/2021/03/19/162634.55910772.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/30201" target="_blank"><p
                      class="fix"><span class="groupName">最新电影🎬</span> <span class="groupPeopleCount">242个成员</span></p>
                    <p class="groupDes">分享最新的电影资讯～</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_6" href="http://community.mtime.com/familyDetail/9308"
                                     target="_blank"
                                     title="狂热动漫族"><img
                    alt="狂热动漫族" height="100" src="http://img5.mtime.cn/mg/2019/12/23/110932.41013196.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/9308" target="_blank"><p
                      class="fix"><span class="groupName">狂热动漫族</span> <span class="groupPeopleCount">97809个成员</span>
                  </p>
                    <p class="groupDes">这里是动漫迷的聚集地；这里囊括全世界的动漫资讯；凡是有关动漫的话题，不论国界大家一起讨论吧！【公告】本群分版说明&amp;amp…</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_7"
                                     href="http://community.mtime.com/familyDetail/11490" target="_blank"
                                     title="时光观影团"><img
                    alt="时光观影团" height="100" src="http://img5.mtime.cn/mg/2021/04/23/120557.41423958.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/11490" target="_blank"><p
                      class="fix"><span class="groupName">时光观影团</span> <span class="groupPeopleCount">552645个成员</span>
                  </p>
                    <p class="groupDes">时光观影团覆盖的城市：北京，上海，广州，西安，哈尔滨，天津，深圳，重庆，郑州，成都，武汉，长沙，杭州，南京，沈阳，丹东，…</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_8"
                                     href="http://community.mtime.com/familyDetail/12341"
                                     target="_blank"
                                     title="时光·G 大调"><img
                    alt="时光·G 大调" height="100" src="http://img5.mtime.cn/mg/2019/12/23/113603.72687450.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/12341" target="_blank"><p
                      class="fix"><span class="groupName">时光·G 大调</span> <span class="groupPeopleCount">9613个成员</span>
                  </p>
                    <p class="groupDes">G—goodA—amazingY—youngG—A—Y我们的宗旨就是要快乐!因为、“gay”的原意就是这样！O(∩_∩)…</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_9"
                                     href="http://community.mtime.com/familyDetail/14371" target="_blank"
                                     title="迷影者联盟"><img
                    alt="迷影者联盟" height="100" src="http://img5.mtime.cn/mg/2021/11/08/184839.82849431.jpg"
                    width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/14371" target="_blank"><p
                      class="fix"><span class="groupName">迷影者联盟</span> <span class="groupPeopleCount">1361个成员</span></p>
                    <p class="groupDes">感受电影的万种风情
                      记录电影的影像魅力
                      分享电影的绝美瞬间</p></a></div>
                </li>
                <li class="group"><a data-pan="_Index_group_image_10"
                                     href="http://community.mtime.com/familyDetail/30106" target="_blank"
                                     title="爱之家"><img
                    alt="爱之家" height="100" src="http://img5.mtime.cn/mg/2021/01/13/194651.69854709.jpg" width="100"></a>
                  <div class=" groupDetail"><a href="http://community.mtime.com/familyDetail/30106" target="_blank"><p
                      class="fix"><span class="groupName">爱之家</span> <span class="groupPeopleCount">2个成员</span></p>
                    <p class="groupDes">团结互助友爱的一个家族</p></a></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="ad-findmr" class="common-ad-wrap"></div>
        <div class="indexstruct" data-plugin="imgLoad">
          <div class="findmoreregion"><h4 class="customtitle">发现更多</h4><a class="cmore"
                                                                          data-pan="M20_Index_findMore_more"
                                                                          href="http://news.mtime.com/"
                                                                          target="_blank">更多</a>
            <ul class="newslist" data-plugin="imgLoad">
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773261" data-pan="M20_Index__img_1"
                                      href="http://content.mtime.com/article/228773261" target="_blank"
                                      title="全智贤&amp;金秀贤《来自星星的你》将翻拍日本版"><img
                  alt="全智贤&amp;金秀贤《来自星星的你》将翻拍日本版" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/151727.11478195_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228773261"
                       data-pan="M20_Index__title_1" href="http://content.mtime.com/article/228773261"
                       target="_blank">全智贤&amp;金秀贤《来自星星的你》将翻拍日本版</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773261"
                                       data-pan="M20_Index__title_1" href="http://content.mtime.com/article/228773261"
                                       target="_blank">时光网讯　据外媒报道， 全智贤、 金秀贤主演的韩剧 《来自星星的你》将翻拍成日剧，由
                  福士苍汰(《要听神明的话》)、 山本美月(《青色火焰》)主演，预计将于2022年1月开播。 　　原版韩剧《来自星星</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773176" data-pan="M20_Index__img_2"
                                      href="http://content.mtime.com/article/228773176" target="_blank"
                                      title="《梅艳芳》曝《夕阳之歌》大合唱MV"><img
                  alt="《梅艳芳》曝《夕阳之歌》大合唱MV" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/151513.13010108_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228773176"
                       data-pan="M20_Index__title_2" href="http://content.mtime.com/article/228773176"
                       target="_blank">《梅艳芳》曝《夕阳之歌》大合唱MV</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773176"
                                       data-pan="M20_Index__title_2" href="http://content.mtime.com/article/228773176"
                                       target="_blank">时光网讯
                  由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影《梅艳芳》今日上映。今日影片发布了“久别重逢”《夕阳之歌》大合唱MV以及一组海报。 梅艳芳 时光评分 0.0 </a>
                </p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773168" data-pan="M20_Index__img_3"
                                      href="http://content.mtime.com/article/228773168" target="_blank"
                                      title="动画《蜜熊的音乐奇旅》发布“让爱高飞”片段 欢乐传递爱的能量"><img
                  alt="动画《蜜熊的音乐奇旅》发布“让爱高飞”片段 欢乐传递爱的能量"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/12/140909.32540893_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228773168"
                       data-pan="M20_Index__title_3" href="http://content.mtime.com/article/228773168"
                       target="_blank">动画《蜜熊的音乐奇旅》发布“让爱高飞”片段 欢乐传递爱的能量</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773168"
                                       data-pan="M20_Index__title_3" href="http://content.mtime.com/article/228773168"
                                       target="_blank">时光网讯　2021最受欢迎的合家欢动画《蜜熊的音乐奇旅》国内上映一周，收获大量好评。近日，影片发布最新“让爱高飞”片段，蜜熊维沃在雨林遇险被琵鹭救下，天空中两只琵鹭穿梭在心形云朵中大唱情歌，动听的歌声</a>
                </p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773129" data-pan="M20_Index__img_4"
                                      href="http://content.mtime.com/article/228773129" target="_blank"
                                      title="《超能陆战队》衍生剧《大白》首曝预告"><img
                  alt="《超能陆战队》衍生剧《大白》首曝预告" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/113414.74233395_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228773129"
                       data-pan="M20_Index__title_4" href="http://content.mtime.com/article/228773129"
                       target="_blank">《超能陆战队》衍生剧《大白》首曝预告</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773129"
                                       data-pan="M20_Index__title_4" href="http://content.mtime.com/article/228773129"
                                       target="_blank">时光网讯　迪士尼动画 《超能陆战队》衍生剧
                  《大白》首曝预告，暖萌机器人大白开启新的冒险，将于2022年上线Disney+。 　　该剧由 唐·霍尔(《超能陆战队》《海洋奇缘》)打造，讲述大白在旧金山的</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773200" data-pan="M20_Index__img_5"
                                      href="http://content.mtime.com/article/228773200" target="_blank"
                                      title="青春励志电影《艺芝两百磅》正式杀青"><img
                  alt="青春励志电影《艺芝两百磅》正式杀青" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/114501.87845859_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228773200"
                       data-pan="M20_Index__title_5" href="http://content.mtime.com/article/228773200"
                       target="_blank">青春励志电影《艺芝两百磅》正式杀青</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773200"
                                       data-pan="M20_Index__title_5" href="http://content.mtime.com/article/228773200"
                                       target="_blank">时光网讯
                  近日，由融创影视出品，梁靖康、夏甄、萧李臻瑱、张熙唯、黄小蕾、张亮、桑平、王振宇等演员主演的青春励志电影《艺芝两百磅》正式杀青。影片由导演杨宇飞执导，将于2022年上映。 艺芝两百磅 时光评</a>
                </p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773098" data-pan="M20_Index__img_6"
                                      href="http://content.mtime.com/article/228773098" target="_blank"
                                      title="《黑豹2》女主角拒绝接种疫苗导致停拍？"><img
                  alt="《黑豹2》女主角拒绝接种疫苗导致停拍？" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/105440.33033241_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228773098"
                       data-pan="M20_Index__title_6" href="http://content.mtime.com/article/228773098"
                       target="_blank">《黑豹2》女主角拒绝接种疫苗导致停拍？</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773098"
                                       data-pan="M20_Index__title_6" href="http://content.mtime.com/article/228773098"
                                       target="_blank">时光网讯 上周有外媒报道，由于黑豹妹妹苏睿公主（
                  莱蒂希娅·赖特饰）伤势恢复缓慢，《黑豹2》(Black
                  Panther: Wakanda Forever)宣布停拍。近日“好莱坞报道者”称莱蒂希娅·赖</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228773101" data-pan="M20_Index__img_7"
                                      href="http://content.mtime.com/article/228773101" target="_blank"
                                      title="本斯蒂勒翻拍经典科幻剧《神勇斗士》"><img
                  alt="本斯蒂勒翻拍经典科幻剧《神勇斗士》" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/100908.37103401_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228773101"
                       data-pan="M20_Index__title_7" href="http://content.mtime.com/article/228773101"
                       target="_blank">本斯蒂勒翻拍经典科幻剧《神勇斗士》</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228773101"
                                       data-pan="M20_Index__title_7" href="http://content.mtime.com/article/228773101"
                                       target="_blank">本斯蒂勒和凯特布兰切特 时光网讯 据外媒报道， 本·斯蒂勒、
                  凯特·布兰切特将主演电影版《神勇斗士》（The Champions），本·斯蒂勒兼任该片导演。影片翻拍自1968年同名英剧 《神勇斗士》，</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772992" data-pan="M20_Index__img_8"
                                      href="http://content.mtime.com/article/228772992" target="_blank"
                                      title="时光早报：《冰川时代》衍生动画首曝预告，《倒数时刻》《新小鬼当家》媒体口碑解禁"><img
                  alt="时光早报：《冰川时代》衍生动画首曝预告，《倒数时刻》《新小鬼当家》媒体口碑解禁"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/12/095510.69624419_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772992"
                       data-pan="M20_Index__title_8" href="http://content.mtime.com/article/228772992"
                       target="_blank">时光早报：《冰川时代》衍生动画首曝预告，《倒数时刻》《新小鬼当家》媒体口碑解禁</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772992"
                                       data-pan="M20_Index__title_8" href="http://content.mtime.com/article/228772992"
                                       target="_blank">过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.《冰川时代》衍生动画首曝预告
                  　　《冰川时代》衍生动画电影 《冰川时代：巴克·怀尔德的冒险之旅》首曝预告，2022年登陆Disne</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772989" data-pan="M20_Index__img_9"
                                      href="http://content.mtime.com/article/228772989" target="_blank"
                                      title="保罗托马斯安德森：我喜欢《尚气》和《毒液2》"><img
                  alt="保罗托马斯安德森：我喜欢《尚气》和《毒液2》" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/091211.15327942_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772989"
                       data-pan="M20_Index__title_9" href="http://content.mtime.com/article/228772989"
                       target="_blank">保罗托马斯安德森：我喜欢《尚气》和《毒液2》</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772989"
                                       data-pan="M20_Index__title_9" href="http://content.mtime.com/article/228772989"
                                       target="_blank">时光网讯 《大师》《血色将至》导演 保罗·托马斯·安德森（PTA)为宣传新作
                  《甘草披萨》接受《综艺》杂志专访，谈及最近看了什么电影，他觉得《尚气》很欢乐，也很喜欢《毒液2》，全家都对漫威电影比较痴迷</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772988"
                                      data-pan="M20_Index__img_10"
                                      href="http://content.mtime.com/article/228772988" target="_blank"
                                      title="一代天后梅艳芳，哪首歌是她的《波西米亚狂想曲》？"><img
                  alt="一代天后梅艳芳，哪首歌是她的《波西米亚狂想曲》？" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/12/093512.30427362_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772988"
                       data-pan="M20_Index__title_10" href="http://content.mtime.com/article/228772988"
                       target="_blank">一代天后梅艳芳，哪首歌是她的《波西米亚狂想曲》？</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772988"
                                       data-pan="M20_Index__title_10" href="http://content.mtime.com/article/228772988"
                                       target="_blank">时光网讯 传记电影《梅艳芳》今日上映，让人们又追忆起这位香港乐坛、影坛的天后。
                  梅艳芳一生出演过多部电影，《胭脂扣》《男人四十》《东方三侠》《川岛芳子》《审死官》等片都为影迷们所津津乐道，香港金像奖、</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772809"
                                      data-pan="M20_Index__img_11"
                                      href="http://content.mtime.com/article/228772809" target="_blank"
                                      title="《以年为单位的恋爱》发“难逃一痒”版预告 毛晓彤&amp;杨玏再现情侣吵架扎心场面"><img
                  alt="《以年为单位的恋爱》发“难逃一痒”版预告 毛晓彤&amp;杨玏再现情侣吵架扎心场面"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/11/154129.42888922_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772809"
                       data-pan="M20_Index__title_11" href="http://content.mtime.com/article/228772809"
                       target="_blank">《以年为单位的恋爱》发“难逃一痒”版预告 毛晓彤&amp;杨玏再现情侣吵架扎心场面</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772809"
                                       data-pan="M20_Index__title_11" href="http://content.mtime.com/article/228772809"
                                       target="_blank">时光网讯　由毛晓彤、杨玏主演，黎志执导的电影
                  《以年为单位的恋爱》(曾用名《一年之痒》)发布“难逃一痒”版预告及海报。毛晓彤、杨玏在热恋一年后开始面对情侣之间冷酷的现实难题，床头再现 “情侣能不能看对</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772722"
                                      data-pan="M20_Index__img_12"
                                      href="http://content.mtime.com/article/228772722" target="_blank"
                                      title="《最后的真相》发“暗斗”特辑 黄晓明&amp;阚清子庭审交锋"><img
                  alt="《最后的真相》发“暗斗”特辑 黄晓明&amp;阚清子庭审交锋"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/11/151330.83423650_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772722"
                       data-pan="M20_Index__title_12" href="http://content.mtime.com/article/228772722"
                       target="_blank">《最后的真相》发“暗斗”特辑 黄晓明&amp;阚清子庭审交锋</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772722"
                                       data-pan="M20_Index__title_12" href="http://content.mtime.com/article/228772722"
                                       target="_blank">时光网讯　由黄晓明监制，李太阁执导，黄晓明、闫妮、涂们、阚清子领衔主演，张嘉鑫、王影璐主演的电影
                  《最后的真相》发布演员“暗斗”特辑，华语影坛多年来难得一见的庭审戏份也初见端倪，影片已定档12月3日全</a></p></li>
            </ul>
            <ul class="newslist" data-plugin="imgLoad" style="margin-top:20px;display:none;">
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772699"
                                      data-pan="M20_Index_findMore_poster_1"
                                      href="http://content.mtime.com/article/228772699" target="_blank"
                                      title="《李茂换太子》曝“某宝”角色预告 宋小宝坑穷常远“生财有套”"><img
                  alt="《李茂换太子》曝“某宝”角色预告 宋小宝坑穷常远“生财有套”"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/11/142208.97860888_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772699"
                       data-pan="M20_Index_findMore_title_1" href="http://content.mtime.com/article/228772699"
                       target="_blank">《李茂换太子》曝“某宝”角色预告 宋小宝坑穷常远“生财有套”</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772699"
                                       data-pan="M20_Index_findMore_title_1"
                                       href="http://content.mtime.com/article/228772699"
                                       target="_blank">时光网讯　由高可执导并编剧，马丽、常远、艾伦主演的跨年爆笑喜剧
                  《李茂换太子》今日发布”某宝“版角色预告，官宣宋小宝的惊喜加盟。他饰演的工头与常远饰演的李茂上演了一出“提价就提速”的连番好戏。 　　电</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772702"
                                      data-pan="M20_Index_findMore_poster_2"
                                      href="http://content.mtime.com/article/228772702" target="_blank"
                                      title="Netflix将翻拍韩国电影《狩猎的时间》"><img
                  alt="Netflix将翻拍韩国电影《狩猎的时间》" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/114501.90063733_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772702"
                       data-pan="M20_Index_findMore_title_2" href="http://content.mtime.com/article/228772702"
                       target="_blank">Netflix将翻拍韩国电影《狩猎的时间》</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772702"
                                       data-pan="M20_Index_findMore_title_2"
                                       href="http://content.mtime.com/article/228772702"
                                       target="_blank">时光网讯　据外媒Deadline消息，Netflix将翻拍韩国电影
                  《狩猎的时间》，确认制作成一部英语片，由恐怖片 《暗夜獠牙》 《找到了》导演 亚当·兰道执导。这也是Netflix第一部英语翻拍的原</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772683"
                                      data-pan="M20_Index_findMore_poster_3"
                                      href="http://content.mtime.com/article/228772683" target="_blank"
                                      title="《铁道英雄》曝终极预告，抗日英雄死战贼寇"><img
                  alt="《铁道英雄》曝终极预告，抗日英雄死战贼寇" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/114315.89050283_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772683"
                       data-pan="M20_Index_findMore_title_3" href="http://content.mtime.com/article/228772683"
                       target="_blank">《铁道英雄》曝终极预告，抗日英雄死战贼寇</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772683"
                                       data-pan="M20_Index_findMore_title_3"
                                       href="http://content.mtime.com/article/228772683"
                                       target="_blank">时光网讯
                  电影《铁道英雄》今日发布终极预告，张涵予、范伟、魏晨、周也、俞灏明组成的抗日小队，各负使命坚定奔赴，面对敌人的明枪暗战，铁道队战士绝不妥协，义无反顾地投身这场阻击侵略者、捍卫民族荣誉的战斗中</a>
                </p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772678"
                                      data-pan="M20_Index_findMore_poster_4"
                                      href="http://content.mtime.com/article/228772678" target="_blank"
                                      title="《不老奇事》值不值得看？“时光观影团”评价出炉"><img
                  alt="《不老奇事》值不值得看？“时光观影团”评价出炉" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/113317.40407004_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772678"
                       data-pan="M20_Index_findMore_title_4" href="http://content.mtime.com/article/228772678"
                       target="_blank">《不老奇事》值不值得看？“时光观影团”评价出炉</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772678"
                                       data-pan="M20_Index_findMore_title_4"
                                       href="http://content.mtime.com/article/228772678"
                                       target="_blank">时光网讯 由徐超导演、王朔编剧，王传君、王珞丹领衔主演的爱情电影
                  《不老奇事》正在上映中。日前，“时光观影团”的影迷观看了这部电影，并给出了自己的评价。这部电影值不值得一看？来听听“时光观影团”影迷的</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772589"
                                      data-pan="M20_Index_findMore_poster_5"
                                      href="http://content.mtime.com/article/228772589" target="_blank"
                                      title="《蜘蛛侠：英雄无归》掀起讨论狂潮 奇异博士开启多元宇宙引猜想"><img
                  alt="《蜘蛛侠：英雄无归》掀起讨论狂潮 奇异博士开启多元宇宙引猜想"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/11/104603.57141073_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772589"
                       data-pan="M20_Index_findMore_title_5" href="http://content.mtime.com/article/228772589"
                       target="_blank">《蜘蛛侠：英雄无归》掀起讨论狂潮 奇异博士开启多元宇宙引猜想</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772589"
                                       data-pan="M20_Index_findMore_title_5"
                                       href="http://content.mtime.com/article/228772589"
                                       target="_blank">时光网讯　由索尼影业、漫威影业联合出品的漫威超级英雄巨制《蜘蛛侠：英雄无归》将于12月17日登陆北美大银幕。作为荷兰弟版蜘蛛侠第三部电影，影片发布的首支预告和海报早已吊足众多观众胃口，其中首支预告播放</a>
                </p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772579"
                                      data-pan="M20_Index_findMore_poster_6"
                                      href="http://content.mtime.com/article/228772579" target="_blank"
                                      title="韩寒监制悬疑喜剧《扬名立万》曝公映海报"><img
                  alt="韩寒监制悬疑喜剧《扬名立万》曝公映海报" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/102358.97004620_285X160X4.jpg" width="285"><em
                  class="picture">图集</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772579"
                       data-pan="M20_Index_findMore_title_6" href="http://content.mtime.com/article/228772579"
                       target="_blank">韩寒监制悬疑喜剧《扬名立万》曝公映海报</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772579"
                                       data-pan="M20_Index_findMore_title_6"
                                       href="http://content.mtime.com/article/228772579"
                                       target="_blank">时光网讯
                  悬疑喜剧电影《扬名立万》于今日晚上18点正式登陆全国院线，该片由韩寒监制，刘循子墨执导，里八神、张本煜、柯达、刘循子墨编剧，尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达领衔主演，陈明昊、秦霄贤</a>
                </p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772658"
                                      data-pan="M20_Index_findMore_poster_7"
                                      href="http://content.mtime.com/article/228772658" target="_blank"
                                      title="《天书奇谭4K纪念版》发“聚宝盆”视频 荒诞片段成经典名场面"><img
                  alt="《天书奇谭4K纪念版》发“聚宝盆”视频 荒诞片段成经典名场面"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/11/101753.29232862_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772658"
                       data-pan="M20_Index_findMore_title_7" href="http://content.mtime.com/article/228772658"
                       target="_blank">《天书奇谭4K纪念版》发“聚宝盆”视频 荒诞片段成经典名场面</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772658"
                                       data-pan="M20_Index_findMore_title_7"
                                       href="http://content.mtime.com/article/228772658"
                                       target="_blank">时光网讯　由上海美术电影制片厂出品，王树忱、钱运达联合执导的中国经典动画《天书奇谭4K纪念版》现正全国火热公映中。在电影中，知县抢得聚宝盆后喜出望外，却不料聚宝盆为其“变”出了一模一样的八个爸爸，荒诞</a>
                </p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772574"
                                      data-pan="M20_Index_findMore_poster_8"
                                      href="http://content.mtime.com/article/228772574" target="_blank"
                                      title="《蜜熊的音乐奇旅》发布口碑特辑 亲子相处之道引家长共鸣"><img
                  alt="《蜜熊的音乐奇旅》发布口碑特辑 亲子相处之道引家长共鸣"
                  height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/100902.49263432_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772574"
                       data-pan="M20_Index_findMore_title_8" href="http://content.mtime.com/article/228772574"
                       target="_blank">《蜜熊的音乐奇旅》发布口碑特辑 亲子相处之道引家长共鸣</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772574"
                                       data-pan="M20_Index_findMore_title_8"
                                       href="http://content.mtime.com/article/228772574"
                                       target="_blank">时光网讯　2021最受欢迎好莱坞合家欢动画《蜜熊的音乐奇旅》发布最新口碑特辑，特辑中不少观众在观影之后谈了自己的观后感，其中不乏亲子观众对电影赞不绝口，还有小朋友现场模仿蜜熊，场面非常有爱。影片讲述了</a>
                </p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772651"
                                      data-pan="M20_Index_findMore_poster_9"
                                      href="http://content.mtime.com/article/228772651" target="_blank"
                                      title="“超人”亨利·卡维尔曝写真，“有机会还想再演超人”"><img
                  alt="“超人”亨利·卡维尔曝写真，“有机会还想再演超人”" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/100253.21514686_285X160X4.jpg" width="285"><em
                  class="picture">图集</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772651"
                       data-pan="M20_Index_findMore_title_9" href="http://content.mtime.com/article/228772651"
                       target="_blank">“超人”亨利·卡维尔曝写真，“有机会还想再演超人”</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772651"
                                       data-pan="M20_Index_findMore_title_9"
                                       href="http://content.mtime.com/article/228772651"
                                       target="_blank">时光网讯
                  日前，演员“超人”亨利·卡维尔曝光一组写真。他在近期接受采访时表示，有机会的话很想再演超人。对于出演“英国队长”的传言，亨利·卡维尔表示如果真能演“英国队长”，可能也是一件很有趣的事。亨利·</a>
                </p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772643"
                                      data-pan="M20_Index_findMore_poster_10"
                                      href="http://content.mtime.com/article/228772643" target="_blank"
                                      title="时光早报：奥斯卡最佳导演“陀螺”结婚，《变形金刚7》《新星际迷航》延档"><img
                  alt="时光早报：奥斯卡最佳导演“陀螺”结婚，《变形金刚7》《新星际迷航》延档"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/11/093347.40505245_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772643"
                       data-pan="M20_Index_findMore_title_10" href="http://content.mtime.com/article/228772643"
                       target="_blank">时光早报：奥斯卡最佳导演“陀螺”结婚，《变形金刚7》《新星际迷航》延档</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772643"
                                       data-pan="M20_Index_findMore_title_10"
                                       href="http://content.mtime.com/article/228772643"
                                       target="_blank">过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。
                  01.《唐顿庄园2》发先导预告 　　 《唐顿庄园：新纪元》曝先导预告和剧照，将于明年3月18日北美上映。影片由西蒙·柯蒂斯（《我与梦露的</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772561"
                                      data-pan="M20_Index_findMore_poster_11"
                                      href="http://content.mtime.com/article/228772561" target="_blank"
                                      title="皮克斯《青春变形记》曝日版预告和海报 "><img
                  alt="皮克斯《青春变形记》曝日版预告和海报 " height="160"
                  src="http://img5.mtime.cn/mg/2021/07/14/090018.79165230_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772561"
                       data-pan="M20_Index_findMore_title_11" href="http://content.mtime.com/article/228772561"
                       target="_blank">皮克斯《青春变形记》曝日版预告和海报 </a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772561"
                                       data-pan="M20_Index_findMore_title_11"
                                       href="http://content.mtime.com/article/228772561"
                                       target="_blank">时光网讯 奥斯卡最佳动画短片《包宝宝》导演 石之予执导动画长片
                  《青春变形记》曝日语配音版预告和海报，影片讲述处于青春期的小美，一激动就会变成巨型红色小熊猫这一奇妙“能力”，将为成长中的她带来多少烦恼</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772502"
                                      data-pan="M20_Index_findMore_poster_12"
                                      href="http://content.mtime.com/article/228772502" target="_blank"
                                      title="《变形金刚7》推迟到2023年6月上映"><img
                  alt="《变形金刚7》推迟到2023年6月上映" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/11/084331.75016856_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772502"
                       data-pan="M20_Index_findMore_title_12" href="http://content.mtime.com/article/228772502"
                       target="_blank">《变形金刚7》推迟到2023年6月上映</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772502"
                                       data-pan="M20_Index_findMore_title_12"
                                       href="http://content.mtime.com/article/228772502"
                                       target="_blank">导演和擎天柱 时光网讯 派拉蒙今日宣布，原定明年6月24日上映的“变形金刚7”
                  《变形金刚：超能勇士崛起》推迟到2023年6月9日上映，原定该档期的 《星际迷航4》推迟到2023年12月22日上映。 </a></p></li>
            </ul>
            <ul class="newslist" data-plugin="imgLoad" style="margin-top:20px;display:none;">
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772417"
                                      data-pan="M20_Index_findMore_poster_1"
                                      href="http://content.mtime.com/article/228772417" target="_blank"
                                      title="荷兰弟：相信我，真的没有三代同框"><img
                  alt="荷兰弟：相信我，真的没有三代同框" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/173058.44823095_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772417"
                       data-pan="M20_Index_findMore_title_1" href="http://content.mtime.com/article/228772417"
                       target="_blank">荷兰弟：相信我，真的没有三代同框</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772417"
                                       data-pan="M20_Index_findMore_title_1"
                                       href="http://content.mtime.com/article/228772417"
                                       target="_blank">粉丝制图 时光网讯
                  《蜘蛛侠：英雄无归》12月17日将在北美上映，由于涉及“三代同框”传闻，索尼和漫威在海报、预告片物料的发布上想尽办法防剧透。演员们被问到时也是各种打哈哈，近日汤姆·赫兰德被问到这个</a></p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772404"
                                      data-pan="M20_Index_findMore_poster_2"
                                      href="http://content.mtime.com/article/228772404" target="_blank"
                                      title="是枝裕和将为Netflix开发电影和剧集"><img
                  alt="是枝裕和将为Netflix开发电影和剧集" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/154228.96139253_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772404"
                       data-pan="M20_Index_findMore_title_2" href="http://content.mtime.com/article/228772404"
                       target="_blank">是枝裕和将为Netflix开发电影和剧集</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772404"
                                       data-pan="M20_Index_findMore_title_2"
                                       href="http://content.mtime.com/article/228772404"
                                       target="_blank">时光网讯 正在日本举行的“Netflix日本2021电影节”传出消息，曾凭
                  《小偷家族》提名奥斯卡最佳外语片、斩获戛纳金棕榈的 是枝裕和导演将为这家流媒体制作电影和剧集。 是枝裕和表示，和Netfli</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772306"
                                      data-pan="M20_Index_findMore_poster_3"
                                      href="http://content.mtime.com/article/228772306" target="_blank"
                                      title="张艺谋《悬崖之上》代表中国内地角逐奥斯卡"><img
                  alt="张艺谋《悬崖之上》代表中国内地角逐奥斯卡" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/145610.58199659_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772306"
                       data-pan="M20_Index_findMore_title_3" href="http://content.mtime.com/article/228772306"
                       target="_blank">张艺谋《悬崖之上》代表中国内地角逐奥斯卡</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772306"
                                       data-pan="M20_Index_findMore_title_3"
                                       href="http://content.mtime.com/article/228772306"
                                       target="_blank">时光网讯　中国内地确定选送 《悬崖之上》竞逐第94届奥斯卡最佳国际影片奖。该片由
                  张艺谋执导，张译、于和伟、秦海璐、朱亚文、刘浩存、倪大红等主演，于今年4月30日在国内公映。 　　此前，中国香港确定选</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772302"
                                      data-pan="M20_Index_findMore_poster_4"
                                      href="http://content.mtime.com/article/228772302" target="_blank"
                                      title="“蚁人”保罗路德成2021年最性感男士"><img
                  alt="“蚁人”保罗路德成2021年最性感男士" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/144728.60888031_285X160X4.jpg" width="285"><em
                  class="picture">图集</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772302"
                       data-pan="M20_Index_findMore_title_4" href="http://content.mtime.com/article/228772302"
                       target="_blank">“蚁人”保罗路德成2021年最性感男士</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772302"
                                       data-pan="M20_Index_findMore_title_4"
                                       href="http://content.mtime.com/article/228772302"
                                       target="_blank">时光网讯 《人物》杂志2021年度“最性感男士”评选颁给了今年52岁的“蚁人”
                  保罗·路德，虽然不是什么天皇巨星，但出道30多年的他身材和外貌一直保持得很好，被誉为“不老的传说”。 30年前后外貌对比</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772198"
                                      data-pan="M20_Index_findMore_poster_5"
                                      href="http://content.mtime.com/article/228772198" target="_blank"
                                      title="《扬名立万》北京首映，叫兽易小星：比我处女作强多了"><img
                  alt="《扬名立万》北京首映，叫兽易小星：比我处女作强多了" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/144625.68051888_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772198"
                       data-pan="M20_Index_findMore_title_5" href="http://content.mtime.com/article/228772198"
                       target="_blank">《扬名立万》北京首映，叫兽易小星：比我处女作强多了</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772198"
                                       data-pan="M20_Index_findMore_title_5"
                                       href="http://content.mtime.com/article/228772198"
                                       target="_blank">时光网讯
                  日前，电影《扬名立万》在京举办首映活动，影片监制韩寒，导演刘循子墨，领衔主演尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达，特别出演陈明昊、秦霄贤、邓恩熙等主创全员集结亮相。 扬名立万 时光评分</a>
                </p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772276"
                                      data-pan="M20_Index_findMore_poster_6"
                                      href="http://content.mtime.com/article/228772276" target="_blank"
                                      title="国产文艺片《第四面墙》定档12月10日"><img
                  alt="国产文艺片《第四面墙》定档12月10日" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/143523.47537851_285X160X4.jpg" width="285"><em
                  class="picture">图集</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772276"
                       data-pan="M20_Index_findMore_title_6" href="http://content.mtime.com/article/228772276"
                       target="_blank">国产文艺片《第四面墙》定档12月10日</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772276"
                                       data-pan="M20_Index_findMore_title_6"
                                       href="http://content.mtime.com/article/228772276"
                                       target="_blank">时光网讯
                  今日，由张翀、张波执导，刘陆、王紫逸主演的电影《第四面墙》发布定档海报，宣布将于12月10日全国上映。 第四面墙 时光评分 0.0 剧情 2021年12月10日中国上映 该片曾入围第22届上</a>
                </p>
              </li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772196"
                                      data-pan="M20_Index_findMore_poster_7"
                                      href="http://content.mtime.com/article/228772196" target="_blank"
                                      title="《梅艳芳》发终极预告 大银幕再见天后绝代芳华"><img
                  alt="《梅艳芳》发终极预告 大银幕再见天后绝代芳华" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/143326.39629229_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772196"
                       data-pan="M20_Index_findMore_title_7" href="http://content.mtime.com/article/228772196"
                       target="_blank">《梅艳芳》发终极预告 大银幕再见天后绝代芳华</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772196"
                                       data-pan="M20_Index_findMore_title_7"
                                       href="http://content.mtime.com/article/228772196"
                                       target="_blank">时光网讯　由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影
                  《梅艳芳》将于11月12日全国上映，影片正在预售中。今日，影片曝光终极预告，浓缩呈现了梅艳芳从驻唱小歌女开始</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772181"
                                      data-pan="M20_Index_findMore_poster_8"
                                      href="http://content.mtime.com/article/228772181" target="_blank"
                                      title="《我们是第一书记》发布“为你战斗”版海报特辑 用热血演绎决不放弃"><img
                  alt="《我们是第一书记》发布“为你战斗”版海报特辑 用热血演绎决不放弃"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/10/125040.77595034_285X160X4.jpg" width="285"><em
                  class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772181"
                       data-pan="M20_Index_findMore_title_8" href="http://content.mtime.com/article/228772181"
                       target="_blank">《我们是第一书记》发布“为你战斗”版海报特辑 用热血演绎决不放弃</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772181"
                                       data-pan="M20_Index_findMore_title_8"
                                       href="http://content.mtime.com/article/228772181"
                                       target="_blank">时光网讯　由新华社荣誉出品，新华网、北京精彩、北京人杰、华录百纳联合出品，任杰导演的电影《我们是第一书记》今日发布黑龙江篇“为你战斗”版故事海报和特辑。
                  　　该片是国内新闻领域首次尝试以新闻素材依托电</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772252"
                                      data-pan="M20_Index_findMore_poster_9"
                                      href="http://content.mtime.com/article/228772252" target="_blank"
                                      title="游戏引擎公司Unity将以16.25亿美元收购彼得·杰克逊的维塔公司"><img
                  alt="游戏引擎公司Unity将以16.25亿美元收购彼得·杰克逊的维塔公司"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/10/111059.39760103_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772252"
                       data-pan="M20_Index_findMore_title_9" href="http://content.mtime.com/article/228772252"
                       target="_blank">游戏引擎公司Unity将以16.25亿美元收购彼得·杰克逊的维塔公司</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772252"
                                       data-pan="M20_Index_findMore_title_9"
                                       href="http://content.mtime.com/article/228772252"
                                       target="_blank">时光网讯　彼得·杰克逊的维塔公司正在出售中，上市公司Unity（一家游戏引擎公司）将以现金和股票组合的形式，出资16.25亿美元收购，双方将签署最终协议。
                  　　新西兰特效公司维塔曾制作过彼得的《指环王</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772251"
                                      data-pan="M20_Index_findMore_poster_10"
                                      href="http://content.mtime.com/article/228772251" target="_blank"
                                      title="电影《龙马精神》杀青 成龙依依不舍告别“赤兔马”"><img
                  alt="电影《龙马精神》杀青 成龙依依不舍告别“赤兔马”" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/110822.93331136_285X160X4.jpg" width="285"><em class="video">视频</em></a>
                <h3><a data-link="http://content.mtime.com/article/228772251"
                       data-pan="M20_Index_findMore_title_10" href="http://content.mtime.com/article/228772251"
                       target="_blank">电影《龙马精神》杀青 成龙依依不舍告别“赤兔马”</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772251"
                                       data-pan="M20_Index_findMore_title_10"
                                       href="http://content.mtime.com/article/228772251"
                                       target="_blank">时光网讯　由杨子编剧、执导，成龙、刘浩存、郭麒麟领衔主演的电影
                  《龙马精神》今日杀青。在发布的杀青图中，成龙轻抚着戏中搭档赤兔的脸依依不舍，一人一马的深情对视，十分动人。 成龙杀青最舍不得的伙伴 特殊</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772249"
                                      data-pan="M20_Index_findMore_poster_11"
                                      href="http://content.mtime.com/article/228772249" target="_blank"
                                      title="“机动战士高达”真人电影首曝概念图 《金刚骷髅岛》导演执导"><img
                  alt="“机动战士高达”真人电影首曝概念图 《金刚骷髅岛》导演执导"
                  height="160" src="http://img5.mtime.cn/mg/2021/11/10/104833.51883503_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772249"
                       data-pan="M20_Index_findMore_title_11" href="http://content.mtime.com/article/228772249"
                       target="_blank">“机动战士高达”真人电影首曝概念图 《金刚骷髅岛》导演执导</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772249"
                                       data-pan="M20_Index_findMore_title_11"
                                       href="http://content.mtime.com/article/228772249"
                                       target="_blank">时光网讯 Netflix与传奇影业联合打造的 《机动战士高达
                  真人版》电影首曝概念图，影片由《金刚：骷髅岛》导演 乔丹·沃格-罗伯茨执导，布莱恩·K·沃恩(《迷失》《穹顶之下》)撰写剧本并担任执行制片</a></p></li>
              <li class="newsitem"><a class="imgbox"
                                      data-link="http://content.mtime.com/article/228772159"
                                      data-pan="M20_Index_findMore_poster_12"
                                      href="http://content.mtime.com/article/228772159" target="_blank"
                                      title="国家电影局发布《“十四五”中国电影发展规划》"><img
                  alt="国家电影局发布《“十四五”中国电影发展规划》" height="160"
                  src="http://img5.mtime.cn/mg/2021/11/10/095323.37093000_285X160X4.jpg" width="285"></a>
                <h3><a data-link="http://content.mtime.com/article/228772159"
                       data-pan="M20_Index_findMore_title_12" href="http://content.mtime.com/article/228772159"
                       target="_blank">国家电影局发布《“十四五”中国电影发展规划》</a></h3>
                <p class="describe"><a data-link="http://content.mtime.com/article/228772159"
                                       data-pan="M20_Index_findMore_title_12"
                                       href="http://content.mtime.com/article/228772159"
                                       target="_blank">时光网讯
                  据《中国电影报》报道，近日，《“十四五”中国电影发展规划》正式发布（以下简称《规划》）。《规划》以总书记新时代中国特色社会主义思想为指导，贯彻落实总书记关于电影工作的重要指示批示精神和中央有</a>
                </p>
              </li>
            </ul>
            <p id="finalMore" class="viewmore"><a data-pan="M20_Index_findMore_more" href="http://news.mtime.com/"
                                                  target="_blank">查看更多</a></p></div>
        </div>
        <div id="ad-undrfoot" class="common-ad-wrap"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

export default {
  name: "index",
  components: {HeaderNav}
}
</script>

<style>
/*! CSS Used from: http://s0.mtime.cn/public/nodewww/2021080215416/css/common/public.css */
a {
  color: #333;
}

.db_foot .beian_container, a, a:hover {
  text-decoration: none;
}

dd, div, dl, dt, em, h1, h3, h4, input, li, p, ul {
  margin: 0;
  padding: 0;
}

a {
  vertical-align: baseline;
  cursor: pointer;
}

a:hover {
  color: #1f7dd7;
}

input {
  font-family: "Microsoft Yahei", "microsoft yahei";
  font-size: 12px;
  padding: 2px;
  vertical-align: middle;
  outline: 0;
}

b, em, i {
  font-weight: 400;
  font-style: normal;
}

h1, h3, h4 {
  font-size: 100%;
}

ul {
  list-style: none;
}

:focus {
  outline: 0;
}

img {
  border: 0;
}

img {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/autoimg.png) center no-repeat #f2f2f2;
  background-size: 50% auto;
  vertical-align: middle;
}

.none {
  display: none;
}

.fix {
  display: block;
}

.fr {
  float: right;
}

.selctsearch {
  font-size: 14px;
}

.user-tip {
  font-size: 20px;
}

.fix:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}

.c_a5 {
  color: #a5a5a5;
}

.btnblue, .btngreen, .btngrey {
  background: #1e7dd7;
  width: 130px;
  line-height: 32px;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 15px;
}

.btnblue:hover, .btngreen:hover, .btngrey:hover {
  background: #1870c9;
  color: #fff;
}

.btngreen {
  background: #74ab34;
}

.btngreen:hover {
  background: #5b9122;
}

.btngrey {
  background: #f4f4f4;
  color: #333;
  border: 1px solid #d9d9d9;
}

.btngrey:hover {
  background: #1e7dd7;
  border-color: #1e7dd7;
}

.moviegrade {
  background: #74ab34;
  width: 32px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  font-size: 13px;
}

.viewmore {
  text-align: center;
  padding-top: 0;
  margin-top: 30px;
}

.viewmore a {
  width: 158px;
  line-height: 35px;
  border: 1px solid #666;
  color: #666;
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
}

.viewmore a:hover {
  background: #1e7dd7;
  border: 1px solid #1e7dd7;
  color: #fff;
}

.cmore {
  position: absolute;
  right: -2px;
  top: 3px;
  color: #000;
  padding-right: 18px;
}

.cmore::after {
  position: absolute;
  right: 5px;
  top: 5px;
  content: " ";
  height: 8px;
  width: 8px;
  border: 1px solid #333;
  border-top: none;
  border-left: none;
  transform: rotate(-45deg);
}

.cmore:active, .cmore:hover {
  color: #1e7dd7;
}

.cmore:active::after, .cmore:hover::after {
  border-color: #1e7dd7;
}

.mtimebar {
  bottom: 5px;
  position: fixed;
  right: 0;
  width: 50px;
  z-index: 100;
}

.mtimebar .searchbar, .mtimebar .topbar {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/plugins.png) no-repeat;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  height: 50px;
  line-height: 50px;
  margin: 1px 0 0;
  opacity: .9;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 50px;
}

.mtimebar .searchbar {
  background-position: -54px 0;
}

.mtimebar .searchbar:hover {
  background-position: 0 0;
}

.mtimebar .searchbar .baron, .mtimebar .topbar .baron {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 5px;
  height: 48px;
  width: 48px;
}

.mtimebar .topbar {
  background-position: -54px -255px;
}

.mtimebar .topbar:hover {
  background-position: 0 -255px;
}

.mtimebar .baron {
  display: none;
  font-size: 13px;
  opacity: 1;
}

.mtimebar .searchbar:hover, .mtimebar .topbar:hover {
  opacity: 1;
}

.footinner .fotlogo, .footinner .fotmap {
  float: left;
  display: inline;
  min-height: 157px;
}

.footout {
  background: #f7f7f7;
  position: relative;
  zoom: 1;
}

.footout .topline {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/foot.png) center 0 no-repeat #337fab;
  height: 4px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

.footinner {
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  font-size: 13px;
}

.footinner a {
  color: #4E5E73;
}

.footinner .ml30 {
  margin-left: 30px;
}

.footinner .fotlogo {
  width: 200px;
  position: relative;
}

.footinner .fotmap {
  width: 501px;
  position: relative;
}

.footinner .fothr {
  width: 205px;
  float: right;
  display: inline-block;
  min-height: 157px;
  text-align: center;
}

.fotlogo dl {
  padding: 0 20px;
}

.fotlogo dt {
  padding-bottom: 10px;
}

.fotlogo dt a {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) no-repeat;
  width: 136px;
  height: 44px;
  display: block;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
}

.fotlogo dd {
  line-height: 1.8em;
}

.fotmap dl {
  float: left;
  display: inline;
  margin-left: 55px;
  line-height: 2em;
}

.fotmap dd {
  font-size: 16px;
  line-height: 2em;
}

.fotmap .sina, .fotmap .toutiao, .fotmap .weiXinMiniprogram, .fotmap .weixin {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/foot.png) -256px -9px no-repeat;
  width: 36px;
  height: 36px;
  display: block;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  margin: 8px auto;
}

.fotmap .weixin {
  background-position: -293px -46px;
}

.fotmap .weiXinMiniprogram {
  background-position: -256px -85px;
  display: none;
}

.fotmap .toutiao {
  background-position: -201px -45px;
}

.fothr i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/foot.png) -795px -9px no-repeat;
  width: 99px;
  height: 99px;
  margin: 0 auto;
  display: block;
}

.credible a, .db_foot .beian, .db_foot .beian_container {
  display: inline-block;
}

.fothr dt {
  color: #7d7d7d;
}

.fothr dt strong {
  font-size: 18px;
  font-weight: 400;
  color: #333;
  line-height: 1em;
}

.db_foot, .db_foot a {
  color: #7e7e7f;
}

.fothr dd {
  margin-top: 12px;
}

.db_foot {
  background: #f7f7f7;
  text-align: center;
  font-family: Verdana;
  padding: 30px 0 20px;
  line-height: 2em;
  font-size: 12px;
}

.db_foot a, .db_foot span {
  margin: 0 6px;
}

.db_foot .beian {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/foot.png) -233px -12px no-repeat;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 0 !important;
}

.credible {
  text-align: center;
  padding-top: 12px;
}

.credible a {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/foot.png) no-repeat;
  *display: inline;
  width: 68px;
  height: 25px;
  position: relative;
  zoom: 1;
  vertical-align: middle;
  margin-right: 15px;
  overflow: hidden;
}

.credible a.credibler {
  background-position: 0 -60px;
}

.credible a.bottombrand {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/new_brand_bottom_small.jpg) no-repeat;
  background-size: 100% auto;
}

.credible .goodfaith {
  width: 68px;
  height: 25px;
}

.credible .bottomdips {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/tips_icon.png) no-repeat;
  background-size: 100% auto;
  width: 148px;
}

.credible .aqLogo {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/aqLogo.png) no-repeat;
  background-size: 100% auto;
}

.footout .my_layer {
  background: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: 0 0 3px rgba(0, 0, 0, .2);
  position: absolute;
  left: 466px;
  top: -22px;
  z-index: 17;
}

.footout .my_layer .l_arrow {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/foot.png) -140px -60px no-repeat;
  width: 21px;
  height: 40px;
  position: absolute;
  left: -20px;
  top: 50%;
  margin-top: -20px;
}

.footout .my_layer .inner {
  padding: 15px;
  width: 195px;
}

.footout .my_layer i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/foot.png) -640px -9px no-repeat;
  width: 151px;
  height: 151px;
  display: block;
  margin: 15px auto;
}

.topsearch {
  width: 500px;
  height: 38px;
  margin: auto;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  z-index: 2;
  position: relative;
  zoom: 1;
}

.searchshadow {
  height: 39px;
  border-radius: 20px;
  position: relative;
  zoom: 1;
  padding-left: 100px;
  z-index: 11;
}

.selctsearch, .selectshow, .showsearch, a.button, a.button i {
  position: absolute;
}

.selctsearch {
  height: 38px;
  line-height: 38px;
  width: 100px;
  text-align: center;
  left: 0;
  top: 0;
  color: #999;
}

.selctsearch i, .selctsearch span, .selctsearch strong {
  cursor: pointer;
}

.selctsearch i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -155px 0 no-repeat;
  width: 11px;
  height: 7px;
}

.selctsearch strong {
  width: 45px;
  font-weight: 400;
}

.selctsearch span {
  background: #dbdbdb;
  width: 1px;
  height: 14px;
  margin: 0 0 0 10px;
  font-size: 0;
  line-height: 0;
}

.selectshow {
  background: #fff;
  width: 95px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, .3);
  left: 0;
  top: 41px;
  overflow: hidden;
}

.selectshow li {
  text-align: center;
  line-height: 2.4;
  border-top: 1px solid #eee;
  cursor: pointer;
}

.selectshow li:hover {
  background: #e5f2fc;
  color: #267dd7;
}

input.text {
  background: 0 0;
  width: 80%;
  line-height: 24px;
  padding: 7px 0;
  border: none;
  font-size: 13px;
}

a.button {
  width: 54px;
  height: 32px;
  right: 3px;
  top: 3px;
  border-radius: 20px;
}

a.button i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -118px -45px no-repeat;
  width: 19px;
  height: 19px;
  left: 50%;
  top: 50%;
  margin: -10px 0 0 -10px;
}

a.button:hover {
  background: #1e7dd7;
}

a.button:hover i {
  background-position: -137px -45px;
}

.showsearch {
  background: #fff;
  width: 418px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, .3);
  right: 0;
  top: 41px;
  z-index: 10;
  font-size: 12px;
  line-height: 21px;
}

.tophead {
  background: center no-repeat;
  height: 65px;
  padding-top: 25px;
  position: relative;
  z-index: 4;
}

.headbar:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}

.headbar {
  display: block;
}

.tophead {
  width: 1200px;
  margin: 0 auto;
}

.btnblue, .btngreen, .btngrey, .headbarnav dd a, .headlogin a, .headmessage .ico-message, .headqr, .headqr .ico-app, .headunlogin a, .headzoom em, .moviegrade, .selctsearch i, .selctsearch span, .selctsearch strong {
  display: inline-block;
  *display: inline;
  position: relative;
  zoom: 1;
  vertical-align: middle;
}

.headbarnav dd a i, .headlogin a i, .headmessage i, .headqr i, .headunlogin a i {
  width: 0;
  height: 0;
  overflow: hidden;
  border-bottom: 5px solid #fff;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -7px;
  display: none;
}

.headbar {
  min-width: 1092px;
  height: 60px;
  padding: 0 100px 0 20px;
  position: relative;
  z-index: 5;
}

.headbar h1 {
  margin: 0 44px 0 105px;
  float: left;
}

.headbar h1 a {
  margin: 12px auto;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) 0 -315px no-repeat;
  width: 117px;
  height: 36px;
  display: block;
  font-size: 0;
  line-height: 0;
}

.headbarout, .headbg {
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

#headbar .headtip .fr {
  color: #949494;
}

#headbar .my-app .fr {
  color: #4E5E73;
}

.headtip {
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .25);
  position: absolute;
  top: 60px;
  display: none;
  border: 1px solid #f5f5f5;
  border-top: none;
  border-radius: 8px;
  box-sizing: content-box;
}

.headbarnav dd.cur a i, .headtool:hover .headlogin a i, .headtool:hover .headqr i, .headtool:hover .qrcode-tip, .headtool:hover .user-tip {
  display: block;
}

.headbarnav {
  float: left;
  font-size: 14px;
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

.headunlogin {
  position: relative;
  padding: 0 17px;
}

.headunlogin a {
  color: #c9c9c9;
  line-height: 60px;
}

.headunlogin a:hover {
  color: #fff;
}

.login-tip {
  min-width: 386px;
  right: 0;
  display: none;
  min-height: 400px;
}

.headqr:hover i, .qrcode-tip .qrcode {
  display: block;
}

.headqr, .headqr:hover {
  color: #fff;
}

.headqr {
  line-height: 60px;
  padding-right: 15px;
}

.headqr .ico-app {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -57px -43px no-repeat;
  width: 13px;
  height: 20px;
  margin-right: 5px;
}

.headqr b {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -143px 0 no-repeat;
  width: 7px;
  height: 4px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2px;
}

.qrcode-tip, .qrcode-tip .qrcode img {
  background: 0 0;
}

.headqr:hover .ico-app, .headqr:hover b {
  opacity: 1;
}

.qrcode-tip {
  right: -20px;
  box-shadow: none;
  border: none;
}

.headlogin a, .headmessage {
  line-height: 60px;
}

.headmessage .ico-message {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -32px -45px no-repeat;
  width: 20px;
  height: 15px;
}

.headmessage:hover .ico-message {
  opacity: 1;
}

.message-tip {
  width: 200px;
  font-size: 12px;
  padding: 15px 15px 12px;
  color: #666;
  right: -90px;
}

.headlogin {
  position: relative;
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

.headlogin a b {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -143px 0 no-repeat;
  width: 7px;
  height: 4px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2px;
  opacity: .7;
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

.headlogin a:hover i {
  display: block;
}

.user-tip {
  width: 398px;
  padding: 20px 0 0;
  right: 0;
  z-index: 7;
  background: #FFF;
  border-radius: 8px;
  box-shadow: 0 1px 28px 0 rgba(220, 226, 230, .5);
}

.user-tip .my-name {
  position: relative;
  padding-left: 105px;
  min-height: 96px;
  margin: 0 20px;
}

.user-tip .my-name .my-pic {
  position: absolute;
  left: 0;
  top: 0;
}

.user-tip .my-name .my-pic img {
  border-radius: 70px;
  width: 80px;
  height: 80px;
}

.user-tip .my-name .attestation-icon {
  border: none;
  outline: 0;
  width: 30px;
  height: 30px;
  display: inline-block;
  position: absolute;
  bottom: 10px;
  left: 60px;
}

.user-tip .my-name dl {
  padding: 20px 0 0;
}

.user-tip .my-name dt a {
  font-family: PingFangSC-Semibold;
  font-size: 1em;
  color: #1D2736;
  letter-spacing: 0;
}

.user-tip .my-name dd {
  font-size: .8em;
  padding: 8px 0;
  color: #f1f1f1;
}

.user-tip .my-name dd .levelBtn {
  width: 110px;
  height: 30px;
  border-radius: 30px;
  padding-left: 34px;
  line-height: 30px;
  font-size: .9em;
  box-sizing: border-box;
  margin: 2px 0;
  position: relative;
  color: #fff;
}

.user-tip .my-name dd .levelBtn .icon {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: -1px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/userLevel.png) no-repeat;
}

.user-tip .my-business {
  padding: 10px 0;
  margin: 0 20px;
}

.user-tip .my-business dd {
  float: left;
  font-size: .9em;
  color: #4E5E73;
  letter-spacing: 0;
  text-align: center;
  padding: 0 22px;
}

.user-tip .my-business dd a {
  color: #4E5E73;
  font-weight: 700;
}

.user-tip .my-app {
  margin: 0 20px;
}

.user-tip .my-app li {
  border-top: 1px solid #F2F3F6;
  line-height: 32px;
  color: #4E5E73;
  padding: 25px 0 15px 22px;
  font-size: .9em;
}

.user-tip .my-app li p {
  padding-bottom: 10px;
}

.user-tip .my-app li p a {
  color: #4E5E73;
  width: 40%;
  display: inline-block;
}

.user-tip .my-app li.fix {
  padding: 12px 0 12px 30px;
}

.user-tip .my-app .btngrey {
  float: right;
  width: 94px;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  background: #20A0DA;
  border-radius: 15px;
  font-family: PingFangSC-Regular;
  font-size: .78em;
  color: #FFF;
  text-align: center;
}

.user-tip .my-app .set {
  font-family: PingFangSC-Semibold;
  font-weight: 700;
  color: #20A0DA;
  text-align: center;
}

.user-tip .publish {
  padding: 24px 0;
  font-size: 1.1em;
  color: #20A0DA;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #EFF9FC;
  font-weight: 700;
}

.user-tip .publish a {
  color: #20A0DA;
}

.user-tip .publish .btn {
  margin: 0 auto;
  width: 125px;
}

.user-tip .publish .btn .publish-icon {
  width: 31px;
  height: 31px;
  display: inline-block;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -80px -118px;
  vertical-align: middle;
  margin-right: 5px;
}

.user-tip .publish .btn span {
  vertical-align: middle;
}

.headzoom {
  line-height: 60px;
}

.headzoom em {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -78px -45px no-repeat;
  width: 16px;
  height: 16px;
  opacity: .7;
}

.headzoom:hover em {
  opacity: 1;
}

/*! CSS Used from: http://s0.mtime.cn/public/nodewww/2021080215416/css/index/index.css */
.headslider {
  position: relative;
  height: 360px;
  z-index: 2;
  margin-bottom: 20px;
}

.headslider .lastpic, .headslider .nextpic {
  background: url(http://static1.mtime.cn/static/images/bg/000000_40.png);
  width: 48px;
  height: 102px;
  position: absolute;
  top: 50%;
  margin-top: -51px;
  z-index: 5;
  opacity: .8;
  filter: alpha(opacity=80);
}

.headslider .lastpic:hover, .headslider .nextpic:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}

.headslider .lastpic {
  left: 0;
}

.headslider .nextpic {
  right: 0;
}

.headslider .lastpic i, .headslider .nextpic i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) no-repeat;
  width: 21px;
  height: 47px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -24px 0 0 -11px;
  opacity: .6;
}

.headslider .nextpic i {
  background-position: -21px 0;
}

.headslider .lastpic:hover i, .headslider .nextpic:hover i {
  opacity: 1;
}

.headslider dl {
  position: relative;
  height: 100%;
  z-index: 3;
}

.headslider dd {
  background: center no-repeat #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  filter: alpha(opacity=0);
}

.headslider dd a.arealink {
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: block;
}

.headslider .sliderdot i, .newsitem .imgbox:hover .picture, .newsitem .imgbox:hover .video, .seltrailer .mainvideo:hover i, .seltrailer .videobox:hover i {
  opacity: .7;
  filter: alpha(opacity=70);
}

.headslider .sliderdot {
  position: absolute;
  right: 30px;
  bottom: 12px;
  z-index: 4;
}

.slider-over .over-a, .slider-over div {
  position: relative;
}

.headslider .sliderdot i {
  background: #fff;
  width: 10px;
  height: 10px;
  border: 1px solid #000;
  border-radius: 50%;
  display: inline-block;
  text-align: right;
  margin: 0 5px;
  vertical-align: middle;
  cursor: pointer;
}

.headslider .sliderdot i.cur {
  opacity: 1;
  filter: alpha(opacity=100);
}

.headslider.slider-over .sliderdot {
  right: 0;
  bottom: -29px;
  z-index: 4;
  width: 100%;
  text-align: center;
}

.headslider.slider-over .sliderdot i {
  background: #cbcbcb;
  width: 5px;
  height: 5px;
  border: 1px solid #cbcbcb;
  border-radius: 100%;
  display: inline-block;
  text-align: right;
  margin: 0 5px;
  vertical-align: middle;
  cursor: pointer;
}

.slider-over div {
  z-index: 3;
  margin-bottom: 8px;
  float: left;
}

.headslider.slider-over .sliderdot i.cur {
  background: #267fd4;
  border: 1px solid #267fd4;
  width: 10px;
  border-radius: 10px;
}

.slider-over {
  width: 1200px;
}

.slider-over .over-a {
  width: 100%;
  height: 100%;
}

.newslist {
  margin-bottom: -20px;
}

.newslist {
  margin-right: -20px;
  overflow: hidden;
}

.newslist li {
  float: left;
  width: 285px;
  margin-right: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}

.customtitle {
  display: inline-block;
  margin-bottom: 16px;
  text-align: center;
}

.customtitle {
  font-weight: 400;
  font-size: 24px;
  line-height: 1;
  color: #6e6e6e;
  vertical-align: bottom;
  margin-right: 10px;
}

.newsitem .imgbox .picture, .newsitem .imgbox .video {
  bottom: 8px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) 0 -47px no-repeat;
  line-height: 0;
}

.newsitem .imgbox {
  position: relative;
  display: block;
}

.newsitem .imgbox img {
  width: 285px;
  height: 160px;
  display: block;
}

.newsitem .imgbox .picture, .newsitem .imgbox .video {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 8px;
  font-size: 0;
}

.newsitem .imgbox .picture {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/newspic.png) 0 -160px no-repeat;
  width: 32px;
  height: 24px;
}

.newsitem .imgbox .tag {
  background: #eb321e;
  color: #fff;
  font-size: 13px;
  line-height: 22px;
  padding: 0 11px;
  position: absolute;
  left: 4px;
  top: 4px;
}

.newsitem h3 {
  font-size: 16px;
  padding-top: 10px;
}

.newsitem h3 a {
  display: block;
}

.newsitem .describe {
  padding-top: 3px;
  min-height: 21px;
}

.newsitem .describe a {
  color: #888;
  display: block;
}

.todayrecmd-wrap {
  position: relative;
  box-shadow: 0 2px 8px 1px #ddd;
}

.top-bg {
  position: relative;
  display: block;
  width: 290px;
  height: 240px;
  overflow: hidden;
}

.top-bg .bgposter {
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.mposter {
  position: absolute;
  right: 15px;
  top: 175px;
  width: 84px;
  height: 126px;
  border: 2px solid #fff;
  z-index: 2;
}

.cinameimgitem img, .mposter img {
  display: inline-block;
  width: 100%;
}

.mposter img {
  height: 100%;
}

.mcontent {
  height: 180px;
  padding: 15px;
}

.mtitle {
  margin-bottom: 15px;
  min-height: 21px;
}

.mtitle a {
  font-size: 16px;
  font-weight: 500;
  vertical-align: middle;
}

.hotcomments .commentsmod .describe i, .mainrecmd i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -116px 0 no-repeat;
}

.mainrecmd, .subrecmd {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.mainrecmd {
  padding-top: 10px;
  margin-bottom: 10px;
}

.mainrecmd i {
  display: inline-block;
  width: 28px;
  height: 20px;
  vertical-align: bottom;
  margin-right: 5px;
}

.recmder {
  font-size: 14px;
  color: #888;
  text-align: right;
}

.i_quickticket {
  position: relative;
  left: 120px;
  top: -24px;
  z-index: 2;
}

.i_cityselect {
  position: relative;
  z-index: 11;
  cursor: pointer;
}

.i_cityselect .i_citybox {
  text-align: center;
  border-bottom: none;
}

.i_cityselect .i_citybox span {
  font-size: 24px;
  vertical-align: middle;
}

.i_cityselect .icon_jtup {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -58px 0 no-repeat;
  width: 14px;
  height: 8px;
  margin-left: 12px;
}

.todayhot {
  border-bottom: 1px solid #d9d9d9;
}

.imgrolling {
  position: relative;
}

.imgrolling .last, .imgrolling .next {
  background: url(http://static1.mtime.cn/static/images/bg/000000_40.png);
  width: 32px;
  height: 68px;
  position: absolute;
  top: 50%;
  margin-top: -34px;
  z-index: 4;
  opacity: .8;
  filter: alpha(opacity=80);
}

.imgrolling .next {
  left: auto;
}

.imgrolling .last:hover, .imgrolling .next:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}

.imgrolling .last i, .imgrolling .next i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -155px 0 no-repeat;
  width: 17px;
  height: 36px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -18px 0 0 -9px;
}

.imgrolling .next i {
  background-position: -138px 0;
}

.imgrolling .imgrollinner {
  position: relative;
  overflow: hidden;
}

.imgrolling .shadowleft, .imgrolling .shadowright {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -186px -245px no-repeat;
  width: 7px;
  height: 317px;
  position: absolute;
  left: 0;
  top: 10px;
  z-index: 4;
}

.imgrolling .shadowright {
  background-position: -193px -245px;
  right: 0;
  left: auto;
}

.cinemamenu {
  text-align: center;
  margin-bottom: 16px;
}

.cinemamenu dd {
  font-size: 16px;
  cursor: pointer;
  padding-bottom: 5px;
  margin: 0 30px;
  border-bottom: 3px solid #fff;
}

.cinemamenu dd i {
  font-size: 26px;
  font-weight: 400;
}

.cinemamenu dd:hover {
  color: #fc6921;
}

.cinemamenu dd.cur {
  color: #fc6921;
  border-bottom: 3px solid #fc6921;
}

.head-tab {
  position: absolute;
  top: 0;
  left: 0;
}

.head-tab .customtitle {
  font-size: 14px;
}

.head-tab .customtitle > span {
  font-size: 24px;
}

.saling-list {
  height: 330px;
  overflow: hidden;
}

.saling-list li {
  float: left;
  width: 170px;
  height: 330px;
  margin-right: 36px;
}

.saling-list li:last-child {
  margin-right: 0;
}

.saling-list li h3 {
  font-size: 18px;
  padding-top: 10px;
  font-weight: 400;
  text-align: center;
}

.saling-list li .btnticket {
  padding-top: 15px;
  text-align: center;
}

.saling-list li .btnticket .btnblue, .saling-list li .btnticket .btngreen {
  width: 120px;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}

.cinameimgitem, .cinameimgout {
  position: relative;
}

.cinameimgitem {
  display: block;
  width: 170px;
  height: 256px;
  overflow: hidden;
}

.cinameimgitem img {
  height: 100%;
}

.cinameimgitem .icohot, .cinameimgitem .iconew {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -64px -103px no-repeat;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
}

.cinameimgitem .icohot {
  background-position: -113px -103px;
}

.cinameimgitem .moviegrade {
  position: absolute;
  bottom: 0;
  right: 0;
}

.imgrolling .last {
  left: -35px;
}

.imgrolling .next {
  right: -35px;
}

.comsn-list {
  height: 233px;
  overflow: hidden;
}

.comsn-list li {
  float: left;
  width: 305px;
  margin-right: 15px;
}

.comsn-list li:last-child {
  margin-right: 0;
}

.comsn-list .showday {
  font-size: 27px;
  height: 27px;
  color: #afafaf;
  line-height: 1;
  font-weight: 100;
  padding-bottom: 15px;
}

.comsn-list .showbox {
  min-height: 190px;
  position: relative;
  padding-left: 139px;
}

.comsn-list .showbox .imgbox {
  position: absolute;
  left: 0;
  top: 0;
  width: 125px;
  height: 190px;
  overflow: hidden;
}

.comsn-list .showbox h3 {
  font-size: 16px;
  font-weight: 400;
  padding-top: 5px;
  line-height: 1.2;
}

.comsn-list .showbox h3 a {
  display: block;
}

.comsn-list .showtype {
  color: #777;
  margin-top: 9px;
}

.comsn-list .showtype b {
  color: #fc6921;
}

.comsn-list .showtype a {
  color: #777;
}

.comsn-list .showtype p {
  padding-bottom: 2px;
}

.comsn-list .showtype .icovideo {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -17px -245px no-repeat;
  width: 16px;
  height: 16px;
}

.comsn-list .showticket {
  height: 28px;
  padding-top: 57px;
  position: relative;
}

.comsn-list .showticket b {
  color: #fc6921;
  position: absolute;
  top: 25px;
  left: 30px;
}

.comsn-list .showticket .btngreen {
  width: 120px;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}

@media screen and (max-width: 1200px) {
  .imgrolling .next {
    right: 0;
  }

  .imgrolling .last {
    left: 0;
  }
}

.seltrailer h4 {
  line-height: 1;
  font-weight: 400;
}

.selectionregion {
  padding: 38px 0;
  margin: 38px 0;
  background: #282828;
}

.seltrailer {
  position: relative;
  width: 100%;
  float: left;
  color: #fff;
}

.seltrailer h4 {
  font-size: 24px;
}

.seltrailer a {
  color: #fff;
}

.seltrailer dl {
  margin-top: 16px;
}

.seltrailer dt {
  width: 864px;
  float: left;
}

.seltrailer dt h3, .seltrailer dt p {
  margin-top: 12px;
}

.seltrailer dt h3 {
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
}

.seltrailer dt p {
  font-size: 12px;
  color: #d2d2d2;
  margin-top: 7px;
}

.seltrailer dd {
  width: 310px;
  float: right;
  margin-bottom: 10px;
}

.seltrailer dd:last-child {
  margin-bottom: 0;
}

.seltrailer .cmore::after {
  border-color: #fff;
}

.seltrailer .mainvideo {
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  max-height: 520px;
}

.seltrailer .mainvideo img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.seltrailer .mainvideo i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -80px -47px no-repeat;
  width: 56px;
  height: 56px;
  position: absolute;
  left: 20px;
  bottom: 15px;
}

.seltrailer .videobox {
  display: block;
  position: relative;
  overflow: hidden;
  max-height: 188px;
}

.seltrailer .videobox img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.seltrailer .videobox span {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) 0 -153px repeat-x;
  width: 100%;
  height: 43px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding-top: 45px;
  padding-left: 50px;
}

.seltrailer .videobox span i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) 0 -103px repeat-x;
  width: 32px;
  height: 32px;
  position: absolute;
  left: 7px;
  bottom: 11px;
}

.seltrailer .videobox span strong {
  max-width: 170px;
  font-weight: 400;
  display: block;
  line-height: 1.2;
}

.seltrailer .videobox span b {
  font-size: 12px;
  color: #c8c8c8;
  display: block;
}

.cmore {
  position: absolute;
}

.headslider, .indexstruct, .mselection, .todayhot {
  width: 1200px;
  margin: 0 auto;
}

.btnblue, .btngreen, .btngrey, .cinemamenu dd, .comsn-list .showtype .icovideo, .hotcomments .commentsbox .commentsuser p a, .hotcomments .commentsbox .commentsuser span, .hotcomments .commentsbox .describe i, .hotcomments .commentsmod .describe i, .hotcomments .commentsmod .describemovie a, .i_cityselect .icon_jtup, .moviegrade {
  display: inline-block;
  *display: inline;
  position: relative;
  zoom: 1;
  vertical-align: middle;
}

.headslider dd {
  transition: .6s all;
}

.comsn-list .showbox h3 a, .hotcomments .commentsbox .commentsuser p a, .hotcomments .commentsbox h3, .hotcomments .commentsmod .describemovie a, .movie_brief_layer .actors, .movie_brief_layer .brief_smry.ods, .movie_brief_layer .brief_title, .movie_brief_layer .types, .newsitem .describe a, .newsitem h3 a, .seltrailer .videobox span strong, .seltrailer dt h3 {
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.fix:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}

.fix {
  display: block;
}

.comsn-list, .mselection, .newslist, .saling-list, .todayhot {
  *zoom: 1;
}

.comsn-list::after, .mselection::after, .newslist::after, .saling-list::after, .todayhot::after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.c_a5 {
  color: #a5a5a5;
}

.btnblue, .btngreen, .btngrey {
  background: #1e7dd7;
  width: 130px;
  line-height: 32px;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 15px;
}

.btnblue:hover, .btngreen:hover, .btngrey:hover {
  background: #1870c9;
  color: #fff;
}

.btngreen {
  background: #74ab34;
}

.btngreen:hover {
  background: #5b9122;
}

.btngrey {
  background: #f4f4f4;
  color: #333;
  border: 1px solid #d9d9d9;
}

.btngrey:hover {
  background: #1e7dd7;
  border-color: #1e7dd7;
}

.moviegrade {
  background: #74ab34;
  width: 32px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  font-size: 13px;
}

.viewmore {
  text-align: center;
  padding-top: 0;
  margin-top: 30px;
}

.viewmore a {
  width: 158px;
  line-height: 35px;
  border: 1px solid #666;
  color: #666;
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
}

.viewmore a:hover {
  background: #1e7dd7;
  border: 1px solid #1e7dd7;
  color: #fff;
}

.cmore {
  right: -2px;
  top: 3px;
  color: #000;
  padding-right: 18px;
}

.cmore::after {
  position: absolute;
  right: 5px;
  top: 5px;
  content: " ";
  height: 8px;
  width: 8px;
  border: 1px solid #333;
  border-top: none;
  border-left: none;
  transform: rotate(-45deg);
}

.cmore:active, .cmore:hover {
  color: #1e7dd7;
}

.cmore:active::after, .cmore:hover::after {
  border-color: #1e7dd7;
}

.hotcomments .maincom .hotcomimg {
  display: block;
}

.hotcomments {
  width: 100%;
}

.hotcomments .commbox {
  margin-top: 16px;
}

.hotcomments .maincom {
  width: 450px;
  height: auto;
  float: left;
}

.hotcomments .maincom dd, .hotcomments .maincom dl {
  height: 480px;
}

.hotcomments .maincom dd > .hotcomimg {
  width: 450px;
  height: 260px;
  overflow: hidden;
}

.hotcomments .maincom dd > .hotcomimg img {
  display: inline-block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.hotcomments .maincom .lastpic, .hotcomments .maincom .nextpic {
  width: 32px;
  height: 68px;
  top: 99px;
  margin-top: 0;
}

.hotcomments .maincom .lastpic i, .hotcomments .maincom .nextpic i {
  width: 14px;
  margin-left: -7px;
}

.hotcomments .maincom .nextpic i {
  background-position: -28px 0;
}

.hotcomments .maincom .sliderdot {
  bottom: auto;
  top: 230px;
  right: 10px;
}

.hotcomments .commentsbox {
  height: 253px;
  border: 1px solid #e6e6e6;
  border-top: none;
  padding: 0 25px;
}

.hotcomments .commentsbox .commentsuser {
  position: relative;
  padding: 50px 10px 0 85px;
  margin: -35px 0 0 -10px;
  color: #888;
}

.hotcomments .commentsbox .commentsuser a {
  color: #888;
}

.hotcomments .commentsbox .commentsuser p a {
  max-width: 100px;
  margin: 0 12px;
}

.hotcomments .commentsbox .commentsuser img {
  position: absolute;
  left: 0;
  top: 0;
  border: 3px solid #fff;
  border-radius: 50%;
}

.hotcomments .commentsbox h3 {
  font-weight: 400;
  text-align: center;
  font-size: 22px;
  padding: 30px 0 20px;
}

.hotcomments .commentsbox .describe {
  font-size: 16px;
  line-height: 1.7;
}

.hotcomments .commentsbox .describe i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -86px 0 no-repeat;
  width: 30px;
  height: 21px;
  margin-right: 10px;
  top: -5px;
  vertical-align: baseline;
}

.hotcomments .sidercom {
  float: right;
  width: 750px;
}

.hotcomments .commentsmod {
  min-height: 120px;
  position: relative;
  width: 230px;
  display: inline-block;
  padding-right: 100px;
  margin: 5px 0 42px 45px;
  vertical-align: top;
}

.hotcomments .commentsmod img {
  position: absolute;
  top: 0;
  right: 0;
}

.hotcomments .commentsmod .describe {
  font-size: 16px;
  line-height: 1.5;
  text-overflow: -o-ellipsis-lastline;
}

.hotcomments .commentsmod .describe i {
  width: 22px;
  height: 16px;
  margin-right: 10px;
  vertical-align: baseline;
}

.hotcomments .commentsmod .describemovie {
  color: #888;
  margin-top: 10px;
  font-size: 12px;
}

.hotcomments .commentsmod .describemovie a {
  max-width: 85px;
  color: #888;
}

.hotcomments .commentsmod .describemovie .moviegrade {
  margin-left: 3px;
}

.groupstruct {
  background: #eee;
}

.hotGroup {
  width: 1200px;
  padding: 38px 0;
  margin: 38px auto;
}

.hotGroup a:hover {
  color: #333;
}

.hotGroup .groupList {
  width: 100%;
  margin-top: 16px;
}

.hotGroup .group {
  width: 50%;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.hotGroup .group img {
  margin-right: 20px;
  display: inline-block;
  -o-object-fit: cover;
  object-fit: cover;
}

.hotGroup .group .groupDetail {
  display: inline-block;
  width: 460px;
  vertical-align: middle;
  box-sizing: border-box;
}

.hotGroup .group .groupName {
  font-weight: 700;
  font-size: 16px;
  color: #333;
  float: left;
  margin-bottom: 20px;
}

.hotGroup .group .groupPeopleCount {
  font-size: 14px;
  color: #888;
  float: right;
}

.hotGroup .group .groupDes {
  font-size: 14px;
}

.todayhot {
  padding: 38px 0;
  position: relative;
}

.todayhot .viewmore {
  margin-top: 18px;
}

.hotnews {
  position: relative;
  width: 100%;
  float: left;
}

.hotnews .showTodayRecmd {
  display: inline-block;
  width: 148px;
  height: 46px;
  box-sizing: border-box;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/todayRecmd.png) no-repeat;
  color: #23a2d8;
  position: absolute;
  right: -2px;
  top: -13px;
  font-size: 24px;
  padding: 20px 10px 0 96px;
  margin-right: 8px;
  text-align: center;
}

.todayrecmd {
  display: none;
  width: 290px;
  margin-left: 15px;
  float: right;
  position: absolute;
  right: 0;
  top: 78px;
  background-color: #fff;
  z-index: 2;
}

.cinemaregion, .findmoreregion {
  position: relative;
}

h4.indextitle {
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  color: #6e6e6e;
}

#ticketregion .cinemaregion .customtitle {
  text-align: left;
}

.movie_brief_layer {
  position: absolute;
  top: -50px;
  left: -50px;
  width: 220px;
  height: 332px;
  font-size: 12px;
  background: #fff;
  box-shadow: 0 2px 8px 1px #bbb;
  overflow: hidden;
  z-index: 4;
  animation: mb_show_ani .2s ease backwards;
}

.movie_brief_layer .brief_info {
  padding: 12px;
  color: #6e6e6e;
}

.movie_brief_layer .detail_bar a {
  font-size: 14px;
  padding: 12px;
  display: block;
  color: #2582d2;
}

.movie_brief_layer .detail_bar, .movie_brief_layer .ticket_bar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 220px;
  border-top: 1px solid #dbdbdb;
}

.movie_brief_layer .ticket_bar::after {
  position: absolute;
  right: 10px;
  top: 18px;
  content: " ";
  height: 8px;
  width: 8px;
  border: 1px solid #333;
  border-top: none;
  border-left: none;
  transform: rotate(-45deg);
  z-index: 2;
}

.movie_brief_layer .ticket_bar {
  font-size: 16px;
  padding: 12px 10px 8px;
  width: 100%;
  box-sizing: border-box;
}

.movie_brief_layer .ticket_bar > span {
  float: right;
  font-size: 12px;
  margin-right: 10px;
  color: #fc6123;
}

.movie_brief_layer .detail_bar {
  text-align: center;
}

.movie_brief_layer .actors span {
  color: #323232;
}

.movie_brief_layer .brief_title {
  font-size: 16px;
  margin-bottom: 15px;
}

.movie_brief_layer .brief_title span {
  font-size: 14px;
  color: #666;
}

.movie_brief_layer .brief_smry {
  color: #666;
  word-break: break-all;
}

.movie_brief_layer .brief_smry.ods {
  margin-top: 12px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -116px 1px no-repeat;
  padding-left: 25px;
}

.movie_brief_layer .mduration {
  float: right;
}

.movie_brief_layer .types {
  display: inline-block;
  max-width: 140px;
}

.movie_brief_layer .top_poster {
  display: block;
  width: 220px;
  height: 124px;
  position: relative;
}

.movie_brief_layer .top_poster img {
  width: 100%;
  height: 100%;
}

.movie_brief_layer .top_poster img {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/loading.gif) 50% 50% no-repeat;
  background-size: 220px 124px;
  -o-object-fit: cover;
  object-fit: cover;
}

.findmoreregion {
  overflow: hidden;
}

.common-ad-wrap {
  width: 1200px;
  max-height: 120px;
  margin: 0 auto;
  overflow: hidden;
}

#ad-todayhot {
  margin-top: 40px;
}

.indexstruct {
  padding: 38px 0;
}

#ad-undrfoot {
  margin-bottom: 38px;
}

/*! CSS Used keyframes */
@keyframes mb_show_ani {
  0% {
    opacity: 0;
    transform: translateZ(0) scale(.9322);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateZ(0) scale(1);
  }
}
</style>
