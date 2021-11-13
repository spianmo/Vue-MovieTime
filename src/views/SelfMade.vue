<template>
  <div>
    <HeaderNav select-item="self-made"/>
    <div>
      <div class="topmenu" style="z-index: 4;">
        <div class="topmenuer fix">
          <dl class="menunav">
            <dd class="on"><a data-pan="M16_Channel_NewsIndex_Nav" href="http://news.mtime.com/">新闻首页</a></dd>
            <dd><a data-pan="M16_Channel_NewsIndex_Nav1" href="http://news.mtime.com/feature/">时光策划</a></dd>
            <dd><a data-pan="M16_Channel_NewsIndex_Nav2" href="http://news.mtime.com/conversation/">时光对话</a></dd>
            <dd><a data-pan="M16_Channel_NewsIndex_Nav3" href="http://news.mtime.com/fun/">全球拾趣</a></dd>
          </dl>
          <div>
            <div id="searchbox" class="topsearch mallnavtopsearch headsearch2" data-background="" data-searchbartype="4"
                 style="padding: 0px; margin-right: 0%; display: none; position: fixed; top: 10px; width: 400px; left: 50%; z-index: 999;">
              <div class="searchshadow">
                <div id="selctsearchtype">
                  <div class="selctsearch"><strong id="selctsearchbox" data-pan="M16_HeadNav_SearchType_btn" data-searchtype="4"
                                                   data-searchtypecn="文章"
                                                   data-type="4">文章</strong><i></i><span>|</span>
                  </div>
                  <div id="selectshow" class="selectshow none">
                    <ul>
                      <li data-pan="M16_HeadNav_Search_type0" data-searchtype="0" data-searchtypecn="全部" data-type="0">
                        全部
                      </li>
                      <li data-pan="M16_HeadNav_Search_type1" data-searchtype="1" data-searchtypecn="电影" data-type="1">
                        电影
                      </li>
                      <li data-pan="M16_HeadNav_Search_type3" data-searchtype="2" data-searchtypecn="影人" data-type="2">
                        影人
                      </li>
                      <li data-pan="M16_HeadNav_Search_type5" data-searchtype="4" data-searchtypecn="文章" data-type="4">
                        文章
                      </li>
                      <li data-pan="M16_HeadNav_Search_type6" data-searchtype="6" data-searchtypecn="用户" data-type="6">
                        用户
                      </li>
                      <li data-pan="M16_HeadNav_Search_type10" data-searchtype="10" data-searchtypecn="家族"
                          data-type="10">家族
                      </li>
                    </ul>
                  </div>
                </div>
                <input id="searchinput" autocomplete="off" class="text c_a5" data-default="按关键词搜索文章" data-showkeyword="按关键词搜索文章"
                       type="text" value="按关键词搜索文章"><a id="searchinputbtn" class="button"
                                                                              data-pan="M16_HeadNav_Search_Btn_0" href="javascript:;"
                                                                              title="搜索"><i></i></a>
              </div>
              <div id="searchlist" class="showsearch none">
                <div id="searhprelist" class="searhtiper">
                  <ul id="searchhistory" class="history"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-headimg">
        <dl class="fix">
          <dt><a class="g-detail" data-pan="M16_NewsIndex_Headimg_1"
                 href="http://content.mtime.com/article/228772148" target="_blank"
                 title="时光早报：《鱿鱼游戏》确认开发第二季 真人版《高达》曝概念图 真人《幽游白书》定档"></a><img
              alt="时光早报：《鱿鱼游戏》确认开发第二季 真人版《高达》曝概念图 真人《幽游白书》定档" height="450" src="http://img5.mtime.cn/mg/2021/11/10/115215.84256538.jpg"
              title="时光早报：《鱿鱼游戏》确认开发第二季 真人版《高达》曝概念图 真人《幽游白书》定档" width="800">
            <div class="news-info"><h4>时光早报：《鱿鱼游戏》确认开发第二季</h4>
              <p>真人版《高达》曝概念图 真人《幽游白书》定档</p></div>
          </dt>
          <dd><a class="g-detail" data-pan="M16_NewsIndex_Headimg_2"
                 href="http://content.mtime.com/article/228772070" target="_blank"
                 title="《海贼王》真人剧集官宣演员阵容 墨西哥男星演路飞 将上线Netflix"></a><img
              alt="《海贼王》真人剧集官宣演员阵容 墨西哥男星演路飞 将上线Netflix" height="221"
              src="http://img5.mtime.cn/mg/2021/11/10/115120.70667455.jpg" title="《海贼王》真人剧集官宣演员阵容 墨西哥男星演路飞 将上线Netflix" width="392">
            <div class="news-info"><h4>《海贼王》真人剧集官宣演员阵容</h4>
              <p>墨西哥男星演路飞 将上线Netflix</p></div>
          </dd>
          <dd><a class="g-detail" data-pan="M16_NewsIndex_Headimg_3"
                 href="http://content.mtime.com/article/228772159" target="_blank"
                 title="《“十四五”中国电影发展规划》发布 对未来五年中国电影发展进行了谋篇布局"></a><img
              alt="《“十四五”中国电影发展规划》发布 对未来五年中国电影发展进行了谋篇布局" height="221"
              src="http://img5.mtime.cn/mg/2021/11/10/171100.97535575.jpg" title="《“十四五”中国电影发展规划》发布 对未来五年中国电影发展进行了谋篇布局" width="392">
            <div class="news-info"><h4>《“十四五”中国电影发展规划》发布</h4>
              <p>对未来五年中国电影发展进行了谋篇布局</p></div>
          </dd>
        </dl>
      </div>
      <div id="ad-normal-headimage"></div>
      <div class="newscontent fix">
        <div id="leftNews" class="left-news fl">
          <dl class="newslisttab fix">
            <dd class="cur"><a data-pan="M16_NewsIndex_Leftnewsnav_1" href="http://news.mtime.com/#nav">最新</a></dd>
            <dd class=""><a data-pan="M16_NewsIndex_Leftnewsnav_2" href="http://news.mtime.com/hot/#nav">热读</a></dd>
            <dd class=""><a data-pan="M16_NewsIndex_Leftnewsnav_3" href="http://news.mtime.com/movie/all/#nav">电影</a>
            </dd>
            <dd class=""><a data-pan="M16_NewsIndex_Leftnewsnav_4" href="http://news.mtime.com/tv/all/#nav">电视</a></dd>
            <dd class=""><a data-pan="M16_NewsIndex_Leftnewsnav_5" href="http://news.mtime.com/music/all/#nav">音乐</a>
            </dd>
            <dd class=""><a data-pan="M16_NewsIndex_Leftnewsnav_6" href="http://news.mtime.com/industry/all/#nav">产业</a>
            </dd>
            <dd class=""><a data-pan="M16_NewsIndex_Leftnewsnav_7" href="http://news.mtime.com/people/all/#nav">人物</a>
            </dd>
          </dl>
          <noscript></noscript>
          <ul id="newslist" class="left-cont fix">
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_1"
                                        href="http://content.mtime.com/article/228773261" target="_blank"><img
                  alt="全智贤&amp;金秀贤《来自星星的你》将翻拍日本版 时光网讯　据外媒报道， 全智贤、 金秀贤主演的韩剧 《来自星星的你》将翻拍成日剧，由 福士苍汰(《要听神明的话》)、 山本美月(《青色火焰》)主演，预计将于2022年1月开播。 　　原版韩剧《来自星星"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/151727.11478195.jpg"
                  title="全智贤&amp;金秀贤《来自星星的你》将翻拍日本版 时光网讯　据外媒报道， 全智贤、 金秀贤主演的韩剧 《来自星星的你》将翻拍成日剧，由 福士苍汰(《要听神明的话》)、 山本美月(《青色火焰》)主演，预计将于2022年1月开播。 　　原版韩剧《来自星星" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_1" href="http://content.mtime.com/article/228773261"
                                                      target="_blank">全智贤&amp;金秀贤《来自星星的你》将翻拍日本版</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_1" href="http://content.mtime.com/article/228773261"
                      target="_blank">时光网讯　据外媒报道， 全智贤、 金秀贤主演的韩剧 《来自星星的你》将翻拍成日剧，由
                  福士苍汰(《要听神明的话》)、 山本美月(《青色火焰》)主演，预计将于2022年1月开播。 　　原版韩剧《来自星星</a></p><span class="news-time">52分钟前</span>
              </div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_2"
                                        href="http://content.mtime.com/article/228773176" target="_blank"><img
                  alt="《梅艳芳》曝《夕阳之歌》大合唱MV 时光网讯 由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影《梅艳芳》今日上映。今日影片发布了“久别重逢”《夕阳之歌》大合唱MV以及一组海报。 梅艳芳 时光评分 0.0 "
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/151513.13010108.jpg"
                  title="《梅艳芳》曝《夕阳之歌》大合唱MV 时光网讯 由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影《梅艳芳》今日上映。今日影片发布了“久别重逢”《夕阳之歌》大合唱MV以及一组海报。 梅艳芳 时光评分 0.0 " width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_2" href="http://content.mtime.com/article/228773176"
                  target="_blank">《梅艳芳》曝《夕阳之歌》大合唱MV</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_2" href="http://content.mtime.com/article/228773176"
                      target="_blank">时光网讯
                  由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影《梅艳芳》今日上映。今日影片发布了“久别重逢”《夕阳之歌》大合唱MV以及一组海报。 梅艳芳 时光评分 0.0 </a>
                </p><span class="news-time">57分钟前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_3"
                                        href="http://content.mtime.com/article/228773168" target="_blank"><img
                  alt="动画《蜜熊的音乐奇旅》发布“让爱高飞”片段 欢乐传递爱的能量 时光网讯　2021最受欢迎的合家欢动画《蜜熊的音乐奇旅》国内上映一周，收获大量好评。近日，影片发布最新“让爱高飞”片段，蜜熊维沃在雨林遇险被琵鹭救下，天空中两只琵鹭穿梭在心形云朵中大唱情歌，动听的歌声"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/140909.32540893.jpg"
                  title="动画《蜜熊的音乐奇旅》发布“让爱高飞”片段 欢乐传递爱的能量 时光网讯　2021最受欢迎的合家欢动画《蜜熊的音乐奇旅》国内上映一周，收获大量好评。近日，影片发布最新“让爱高飞”片段，蜜熊维沃在雨林遇险被琵鹭救下，天空中两只琵鹭穿梭在心形云朵中大唱情歌，动听的歌声" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_3" href="http://content.mtime.com/article/228773168"
                  target="_blank">动画《蜜熊的音乐奇旅》发布“让爱高飞”片段 欢乐传递爱的能量</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_3" href="http://content.mtime.com/article/228773168"
                      target="_blank">时光网讯　2021最受欢迎的合家欢动画《蜜熊的音乐奇旅》国内上映一周，收获大量好评。近日，影片发布最新“让爱高飞”片段，蜜熊维沃在雨林遇险被琵鹭救下，天空中两只琵鹭穿梭在心形云朵中大唱情歌，动听的歌声</a>
                </p><span class="news-time">2小时前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_4"
                                        href="http://content.mtime.com/article/228773129" target="_blank"><img
                  alt="《超能陆战队》衍生剧《大白》首曝预告 时光网讯　迪士尼动画 《超能陆战队》衍生剧 《大白》首曝预告，暖萌机器人大白开启新的冒险，将于2022年上线Disney+。 　　该剧由 唐·霍尔(《超能陆战队》《海洋奇缘》)打造，讲述大白在旧金山的"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/113414.74233395.jpg"
                  title="《超能陆战队》衍生剧《大白》首曝预告 时光网讯　迪士尼动画 《超能陆战队》衍生剧 《大白》首曝预告，暖萌机器人大白开启新的冒险，将于2022年上线Disney+。 　　该剧由 唐·霍尔(《超能陆战队》《海洋奇缘》)打造，讲述大白在旧金山的" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_4" href="http://content.mtime.com/article/228773129"
                  target="_blank">《超能陆战队》衍生剧《大白》首曝预告</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_4" href="http://content.mtime.com/article/228773129"
                      target="_blank">时光网讯　迪士尼动画 《超能陆战队》衍生剧
                  《大白》首曝预告，暖萌机器人大白开启新的冒险，将于2022年上线Disney+。 　　该剧由 唐·霍尔(《超能陆战队》《海洋奇缘》)打造，讲述大白在旧金山的</a></p><span
                    class="news-time">5小时前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_5"
                                        href="http://content.mtime.com/article/228773200" target="_blank"><img
                  alt="青春励志电影《艺芝两百磅》正式杀青 时光网讯 近日，由融创影视出品，梁靖康、夏甄、萧李臻瑱、张熙唯、黄小蕾、张亮、桑平、王振宇等演员主演的青春励志电影《艺芝两百磅》正式杀青。影片由导演杨宇飞执导，将于2022年上映。 艺芝两百磅 时光评"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/114501.87845859.jpg"
                  title="青春励志电影《艺芝两百磅》正式杀青 时光网讯 近日，由融创影视出品，梁靖康、夏甄、萧李臻瑱、张熙唯、黄小蕾、张亮、桑平、王振宇等演员主演的青春励志电影《艺芝两百磅》正式杀青。影片由导演杨宇飞执导，将于2022年上映。 艺芝两百磅 时光评" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_5" href="http://content.mtime.com/article/228773200"
                                                      target="_blank">青春励志电影《艺芝两百磅》正式杀青</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_5" href="http://content.mtime.com/article/228773200"
                      target="_blank">时光网讯
                  近日，由融创影视出品，梁靖康、夏甄、萧李臻瑱、张熙唯、黄小蕾、张亮、桑平、王振宇等演员主演的青春励志电影《艺芝两百磅》正式杀青。影片由导演杨宇飞执导，将于2022年上映。 艺芝两百磅 时光评</a>
                </p><span class="news-time">5小时前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_6"
                                        href="http://content.mtime.com/article/228773098" target="_blank"><img
                  alt="《黑豹2》女主角拒绝接种疫苗导致停拍？ 时光网讯 上周有外媒报道，由于黑豹妹妹苏睿公主（ 莱蒂希娅·赖特饰）伤势恢复缓慢，《黑豹2》(Black Panther: Wakanda Forever)宣布停拍。近日“好莱坞报道者”称莱蒂希娅·赖"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/105440.33033241.jpg"
                  title="《黑豹2》女主角拒绝接种疫苗导致停拍？ 时光网讯 上周有外媒报道，由于黑豹妹妹苏睿公主（ 莱蒂希娅·赖特饰）伤势恢复缓慢，《黑豹2》(Black Panther: Wakanda Forever)宣布停拍。近日“好莱坞报道者”称莱蒂希娅·赖" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_6" href="http://content.mtime.com/article/228773098"
                                                      target="_blank">《黑豹2》女主角拒绝接种疫苗导致停拍？</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_6" href="http://content.mtime.com/article/228773098"
                      target="_blank">时光网讯 上周有外媒报道，由于黑豹妹妹苏睿公主（
                  莱蒂希娅·赖特饰）伤势恢复缓慢，《黑豹2》(Black Panther: Wakanda Forever)宣布停拍。近日“好莱坞报道者”称莱蒂希娅·赖</a></p><span
                    class="news-time">6小时前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_7"
                                        href="http://content.mtime.com/article/228773101" target="_blank"><img
                  alt="本斯蒂勒翻拍经典科幻剧《神勇斗士》 本斯蒂勒和凯特布兰切特 时光网讯 据外媒报道， 本·斯蒂勒、 凯特·布兰切特将主演电影版《神勇斗士》（The Champions），本·斯蒂勒兼任该片导演。影片翻拍自1968年同名英剧 《神勇斗士》，"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/100908.37103401.jpg"
                  title="本斯蒂勒翻拍经典科幻剧《神勇斗士》 本斯蒂勒和凯特布兰切特 时光网讯 据外媒报道， 本·斯蒂勒、 凯特·布兰切特将主演电影版《神勇斗士》（The Champions），本·斯蒂勒兼任该片导演。影片翻拍自1968年同名英剧 《神勇斗士》，" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_7" href="http://content.mtime.com/article/228773101"
                                                      target="_blank">本斯蒂勒翻拍经典科幻剧《神勇斗士》</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_7" href="http://content.mtime.com/article/228773101"
                      target="_blank">本斯蒂勒和凯特布兰切特 时光网讯 据外媒报道， 本·斯蒂勒、
                  凯特·布兰切特将主演电影版《神勇斗士》（The Champions），本·斯蒂勒兼任该片导演。影片翻拍自1968年同名英剧 《神勇斗士》，</a></p><span class="news-time">7小时前</span>
              </div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_8"
                                        href="http://content.mtime.com/article/228772992" target="_blank"><img
                  alt="时光早报：《冰川时代》衍生动画首曝预告，《倒数时刻》《新小鬼当家》媒体口碑解禁 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.《冰川时代》衍生动画首曝预告 　　《冰川时代》衍生动画电影 《冰川时代：巴克·怀尔德的冒险之旅》首曝预告，2022年登陆Disne"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/095510.69624419.jpg"
                  title="时光早报：《冰川时代》衍生动画首曝预告，《倒数时刻》《新小鬼当家》媒体口碑解禁 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.《冰川时代》衍生动画首曝预告 　　《冰川时代》衍生动画电影 《冰川时代：巴克·怀尔德的冒险之旅》首曝预告，2022年登陆Disne" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_8" href="http://content.mtime.com/article/228772992"
                  target="_blank">时光早报：《冰川时代》衍生动画首曝预告，《倒数时刻》《新小鬼当家》媒体口碑解禁</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_8" href="http://content.mtime.com/article/228772992"
                      target="_blank">过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.《冰川时代》衍生动画首曝预告
                  　　《冰川时代》衍生动画电影 《冰川时代：巴克·怀尔德的冒险之旅》首曝预告，2022年登陆Disne</a></p><span class="news-time">7小时前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_9"
                                        href="http://content.mtime.com/article/228772989" target="_blank"><img
                  alt="保罗托马斯安德森：我喜欢《尚气》和《毒液2》 时光网讯 《大师》《血色将至》导演 保罗·托马斯·安德森（PTA)为宣传新作 《甘草披萨》接受《综艺》杂志专访，谈及最近看了什么电影，他觉得《尚气》很欢乐，也很喜欢《毒液2》，全家都对漫威电影比较痴迷"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/091211.15327942.jpg"
                  title="保罗托马斯安德森：我喜欢《尚气》和《毒液2》 时光网讯 《大师》《血色将至》导演 保罗·托马斯·安德森（PTA)为宣传新作 《甘草披萨》接受《综艺》杂志专访，谈及最近看了什么电影，他觉得《尚气》很欢乐，也很喜欢《毒液2》，全家都对漫威电影比较痴迷" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_9" href="http://content.mtime.com/article/228772989"
                                                      target="_blank">保罗托马斯安德森：我喜欢《尚气》和《毒液2》</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_9" href="http://content.mtime.com/article/228772989"
                      target="_blank">时光网讯 《大师》《血色将至》导演 保罗·托马斯·安德森（PTA)为宣传新作
                  《甘草披萨》接受《综艺》杂志专访，谈及最近看了什么电影，他觉得《尚气》很欢乐，也很喜欢《毒液2》，全家都对漫威电影比较痴迷</a></p><span
                    class="news-time">7小时前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_10"
                                        href="http://content.mtime.com/article/228772988" target="_blank"><img
                  alt="一代天后梅艳芳，哪首歌是她的《波西米亚狂想曲》？ 时光网讯 传记电影《梅艳芳》今日上映，让人们又追忆起这位香港乐坛、影坛的天后。 梅艳芳一生出演过多部电影，《胭脂扣》《男人四十》《东方三侠》《川岛芳子》《审死官》等片都为影迷们所津津乐道，香港金像奖、"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/12/093512.30427362.jpg"
                  title="一代天后梅艳芳，哪首歌是她的《波西米亚狂想曲》？ 时光网讯 传记电影《梅艳芳》今日上映，让人们又追忆起这位香港乐坛、影坛的天后。 梅艳芳一生出演过多部电影，《胭脂扣》《男人四十》《东方三侠》《川岛芳子》《审死官》等片都为影迷们所津津乐道，香港金像奖、" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_10" href="http://content.mtime.com/article/228772988"
                  target="_blank">一代天后梅艳芳，哪首歌是她的《波西米亚狂想曲》？</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_10" href="http://content.mtime.com/article/228772988"
                      target="_blank">时光网讯 传记电影《梅艳芳》今日上映，让人们又追忆起这位香港乐坛、影坛的天后。
                  梅艳芳一生出演过多部电影，《胭脂扣》《男人四十》《东方三侠》《川岛芳子》《审死官》等片都为影迷们所津津乐道，香港金像奖、</a></p><span
                    class="news-time">7小时前</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_11"
                                        href="http://content.mtime.com/article/228772809" target="_blank"><img
                  alt="《以年为单位的恋爱》发“难逃一痒”版预告 毛晓彤&amp;杨玏再现情侣吵架扎心场面 时光网讯　由毛晓彤、杨玏主演，黎志执导的电影 《以年为单位的恋爱》(曾用名《一年之痒》)发布“难逃一痒”版预告及海报。毛晓彤、杨玏在热恋一年后开始面对情侣之间冷酷的现实难题，床头再现 “情侣能不能看对"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/11/154129.42888922.jpg"
                  title="《以年为单位的恋爱》发“难逃一痒”版预告 毛晓彤&amp;杨玏再现情侣吵架扎心场面 时光网讯　由毛晓彤、杨玏主演，黎志执导的电影 《以年为单位的恋爱》(曾用名《一年之痒》)发布“难逃一痒”版预告及海报。毛晓彤、杨玏在热恋一年后开始面对情侣之间冷酷的现实难题，床头再现 “情侣能不能看对" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_11" href="http://content.mtime.com/article/228772809"
                  target="_blank">《以年为单位的恋爱》发“难逃一痒”版预告 毛晓彤&amp;杨玏再现情侣吵架扎心场面</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_11" href="http://content.mtime.com/article/228772809"
                      target="_blank">时光网讯　由毛晓彤、杨玏主演，黎志执导的电影
                  《以年为单位的恋爱》(曾用名《一年之痒》)发布“难逃一痒”版预告及海报。毛晓彤、杨玏在热恋一年后开始面对情侣之间冷酷的现实难题，床头再现 “情侣能不能看对</a></p><span
                    class="news-time">2021-11-11 15:42</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_12"
                                        href="http://content.mtime.com/article/228772722" target="_blank"><img
                  alt="《最后的真相》发“暗斗”特辑 黄晓明&amp;阚清子庭审交锋 时光网讯　由黄晓明监制，李太阁执导，黄晓明、闫妮、涂们、阚清子领衔主演，张嘉鑫、王影璐主演的电影 《最后的真相》发布演员“暗斗”特辑，华语影坛多年来难得一见的庭审戏份也初见端倪，影片已定档12月3日全"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/11/151330.83423650.jpg"
                  title="《最后的真相》发“暗斗”特辑 黄晓明&amp;阚清子庭审交锋 时光网讯　由黄晓明监制，李太阁执导，黄晓明、闫妮、涂们、阚清子领衔主演，张嘉鑫、王影璐主演的电影 《最后的真相》发布演员“暗斗”特辑，华语影坛多年来难得一见的庭审戏份也初见端倪，影片已定档12月3日全" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_12" href="http://content.mtime.com/article/228772722"
                  target="_blank">《最后的真相》发“暗斗”特辑 黄晓明&amp;阚清子庭审交锋</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_12" href="http://content.mtime.com/article/228772722"
                      target="_blank">时光网讯　由黄晓明监制，李太阁执导，黄晓明、闫妮、涂们、阚清子领衔主演，张嘉鑫、王影璐主演的电影
                  《最后的真相》发布演员“暗斗”特辑，华语影坛多年来难得一见的庭审戏份也初见端倪，影片已定档12月3日全</a></p><span
                    class="news-time">2021-11-11 15:15</span></div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_13"
                                        href="http://content.mtime.com/article/228772699" target="_blank"><img
                  alt="《李茂换太子》曝“某宝”角色预告 宋小宝坑穷常远“生财有套” 时光网讯　由高可执导并编剧，马丽、常远、艾伦主演的跨年爆笑喜剧 《李茂换太子》今日发布”某宝“版角色预告，官宣宋小宝的惊喜加盟。他饰演的工头与常远饰演的李茂上演了一出“提价就提速”的连番好戏。 　　电"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/11/142208.97860888.jpg"
                  title="《李茂换太子》曝“某宝”角色预告 宋小宝坑穷常远“生财有套” 时光网讯　由高可执导并编剧，马丽、常远、艾伦主演的跨年爆笑喜剧 《李茂换太子》今日发布”某宝“版角色预告，官宣宋小宝的惊喜加盟。他饰演的工头与常远饰演的李茂上演了一出“提价就提速”的连番好戏。 　　电" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_13" href="http://content.mtime.com/article/228772699"
                  target="_blank">《李茂换太子》曝“某宝”角色预告 宋小宝坑穷常远“生财有套”</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_13" href="http://content.mtime.com/article/228772699"
                      target="_blank">时光网讯　由高可执导并编剧，马丽、常远、艾伦主演的跨年爆笑喜剧
                  《李茂换太子》今日发布”某宝“版角色预告，官宣宋小宝的惊喜加盟。他饰演的工头与常远饰演的李茂上演了一出“提价就提速”的连番好戏。 　　电</a></p><span class="news-time">2021-11-11 14:35</span>
              </div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_14"
                                        href="http://content.mtime.com/article/228772702" target="_blank"><img
                  alt="Netflix将翻拍韩国电影《狩猎的时间》 时光网讯　据外媒Deadline消息，Netflix将翻拍韩国电影 《狩猎的时间》，确认制作成一部英语片，由恐怖片 《暗夜獠牙》 《找到了》导演 亚当·兰道执导。这也是Netflix第一部英语翻拍的原"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/11/114501.90063733.jpg"
                  title="Netflix将翻拍韩国电影《狩猎的时间》 时光网讯　据外媒Deadline消息，Netflix将翻拍韩国电影 《狩猎的时间》，确认制作成一部英语片，由恐怖片 《暗夜獠牙》 《找到了》导演 亚当·兰道执导。这也是Netflix第一部英语翻拍的原" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_14" href="http://content.mtime.com/article/228772702"
                                                      target="_blank">Netflix将翻拍韩国电影《狩猎的时间》</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_14" href="http://content.mtime.com/article/228772702"
                      target="_blank">时光网讯　据外媒Deadline消息，Netflix将翻拍韩国电影
                  《狩猎的时间》，确认制作成一部英语片，由恐怖片 《暗夜獠牙》 《找到了》导演 亚当·兰道执导。这也是Netflix第一部英语翻拍的原</a></p><span class="news-time">2021-11-11 11:52</span>
              </div>
            </li>
            <li class="" data-pageindex="1">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_15"
                                        href="http://content.mtime.com/article/228772683" target="_blank"><img
                  alt="《铁道英雄》曝终极预告，抗日英雄死战贼寇 时光网讯 电影《铁道英雄》今日发布终极预告，张涵予、范伟、魏晨、周也、俞灏明组成的抗日小队，各负使命坚定奔赴，面对敌人的明枪暗战，铁道队战士绝不妥协，义无反顾地投身这场阻击侵略者、捍卫民族荣誉的战斗中"
                  height="138"
                  src="http://img5.mtime.cn/mg/2021/11/11/114315.89050283.jpg"
                  title="《铁道英雄》曝终极预告，抗日英雄死战贼寇 时光网讯 电影《铁道英雄》今日发布终极预告，张涵予、范伟、魏晨、周也、俞灏明组成的抗日小队，各负使命坚定奔赴，面对敌人的明枪暗战，铁道队战士绝不妥协，义无反顾地投身这场阻击侵略者、捍卫民族荣誉的战斗中" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_15" href="http://content.mtime.com/article/228772683"
                  target="_blank">《铁道英雄》曝终极预告，抗日英雄死战贼寇</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_15" href="http://content.mtime.com/article/228772683"
                      target="_blank">时光网讯
                  电影《铁道英雄》今日发布终极预告，张涵予、范伟、魏晨、周也、俞灏明组成的抗日小队，各负使命坚定奔赴，面对敌人的明枪暗战，铁道队战士绝不妥协，义无反顾地投身这场阻击侵略者、捍卫民族荣誉的战斗中</a>
                </p><span class="news-time">2021-11-11 11:47</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_16"
                                        href="http://content.mtime.com/article/228772678" target="_blank"><img
                  alt="《不老奇事》值不值得看？“时光观影团”评价出炉 时光网讯 由徐超导演、王朔编剧，王传君、王珞丹领衔主演的爱情电影 《不老奇事》正在上映中。日前，“时光观影团”的影迷观看了这部电影，并给出了自己的评价。这部电影值不值得一看？来听听“时光观影团”影迷的"
                  data-src="http://img5.mtime.cn/mg/2021/11/11/113317.40407004.jpg"
                  height="138"
                  title="《不老奇事》值不值得看？“时光观影团”评价出炉 时光网讯 由徐超导演、王朔编剧，王传君、王珞丹领衔主演的爱情电影 《不老奇事》正在上映中。日前，“时光观影团”的影迷观看了这部电影，并给出了自己的评价。这部电影值不值得一看？来听听“时光观影团”影迷的" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_16" href="http://content.mtime.com/article/228772678"
                  target="_blank">《不老奇事》值不值得看？“时光观影团”评价出炉</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_16" href="http://content.mtime.com/article/228772678"
                      target="_blank">时光网讯 由徐超导演、王朔编剧，王传君、王珞丹领衔主演的爱情电影
                  《不老奇事》正在上映中。日前，“时光观影团”的影迷观看了这部电影，并给出了自己的评价。这部电影值不值得一看？来听听“时光观影团”影迷的</a></p><span class="news-time">2021-11-11 11:34</span>
              </div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_17"
                                        href="http://content.mtime.com/article/228772589" target="_blank"><img
                  alt="《蜘蛛侠：英雄无归》掀起讨论狂潮 奇异博士开启多元宇宙引猜想 时光网讯　由索尼影业、漫威影业联合出品的漫威超级英雄巨制《蜘蛛侠：英雄无归》将于12月17日登陆北美大银幕。作为荷兰弟版蜘蛛侠第三部电影，影片发布的首支预告和海报早已吊足众多观众胃口，其中首支预告播放"
                  data-src="http://img5.mtime.cn/mg/2021/11/11/104603.57141073.jpg"
                  height="138"
                  title="《蜘蛛侠：英雄无归》掀起讨论狂潮 奇异博士开启多元宇宙引猜想 时光网讯　由索尼影业、漫威影业联合出品的漫威超级英雄巨制《蜘蛛侠：英雄无归》将于12月17日登陆北美大银幕。作为荷兰弟版蜘蛛侠第三部电影，影片发布的首支预告和海报早已吊足众多观众胃口，其中首支预告播放" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_17" href="http://content.mtime.com/article/228772589"
                                                      target="_blank">《蜘蛛侠：英雄无归》掀起讨论狂潮
                奇异博士开启多元宇宙引猜想</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_17" href="http://content.mtime.com/article/228772589"
                      target="_blank">时光网讯　由索尼影业、漫威影业联合出品的漫威超级英雄巨制《蜘蛛侠：英雄无归》将于12月17日登陆北美大银幕。作为荷兰弟版蜘蛛侠第三部电影，影片发布的首支预告和海报早已吊足众多观众胃口，其中首支预告播放</a>
                </p><span class="news-time">2021-11-11 10:46</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_18"
                                        href="http://content.mtime.com/article/228772579" target="_blank"><img
                  alt="韩寒监制悬疑喜剧《扬名立万》曝公映海报 时光网讯 悬疑喜剧电影《扬名立万》于今日晚上18点正式登陆全国院线，该片由韩寒监制，刘循子墨执导，里八神、张本煜、柯达、刘循子墨编剧，尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达领衔主演，陈明昊、秦霄贤"
                  data-src="http://img5.mtime.cn/mg/2021/11/11/102358.97004620.jpg"
                  height="138"
                  title="韩寒监制悬疑喜剧《扬名立万》曝公映海报 时光网讯 悬疑喜剧电影《扬名立万》于今日晚上18点正式登陆全国院线，该片由韩寒监制，刘循子墨执导，里八神、张本煜、柯达、刘循子墨编剧，尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达领衔主演，陈明昊、秦霄贤" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_18" href="http://content.mtime.com/article/228772579"
                  target="_blank">韩寒监制悬疑喜剧《扬名立万》曝公映海报</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_18" href="http://content.mtime.com/article/228772579"
                      target="_blank">时光网讯
                  悬疑喜剧电影《扬名立万》于今日晚上18点正式登陆全国院线，该片由韩寒监制，刘循子墨执导，里八神、张本煜、柯达、刘循子墨编剧，尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达领衔主演，陈明昊、秦霄贤</a>
                </p><span class="news-time">2021-11-11 10:24</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_19"
                                        href="http://content.mtime.com/article/228772658" target="_blank"><img
                  alt="《天书奇谭4K纪念版》发“聚宝盆”视频 荒诞片段成经典名场面 时光网讯　由上海美术电影制片厂出品，王树忱、钱运达联合执导的中国经典动画《天书奇谭4K纪念版》现正全国火热公映中。在电影中，知县抢得聚宝盆后喜出望外，却不料聚宝盆为其“变”出了一模一样的八个爸爸，荒诞"
                  data-src="http://img5.mtime.cn/mg/2021/11/11/101753.29232862.jpg"
                  height="138"
                  title="《天书奇谭4K纪念版》发“聚宝盆”视频 荒诞片段成经典名场面 时光网讯　由上海美术电影制片厂出品，王树忱、钱运达联合执导的中国经典动画《天书奇谭4K纪念版》现正全国火热公映中。在电影中，知县抢得聚宝盆后喜出望外，却不料聚宝盆为其“变”出了一模一样的八个爸爸，荒诞" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_19" href="http://content.mtime.com/article/228772658"
                  target="_blank">《天书奇谭4K纪念版》发“聚宝盆”视频 荒诞片段成经典名场面</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_19" href="http://content.mtime.com/article/228772658"
                      target="_blank">时光网讯　由上海美术电影制片厂出品，王树忱、钱运达联合执导的中国经典动画《天书奇谭4K纪念版》现正全国火热公映中。在电影中，知县抢得聚宝盆后喜出望外，却不料聚宝盆为其“变”出了一模一样的八个爸爸，荒诞</a>
                </p><span class="news-time">2021-11-11 10:18</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_20"
                                        href="http://content.mtime.com/article/228772574" target="_blank"><img
                  alt="《蜜熊的音乐奇旅》发布口碑特辑 亲子相处之道引家长共鸣 时光网讯　2021最受欢迎好莱坞合家欢动画《蜜熊的音乐奇旅》发布最新口碑特辑，特辑中不少观众在观影之后谈了自己的观后感，其中不乏亲子观众对电影赞不绝口，还有小朋友现场模仿蜜熊，场面非常有爱。影片讲述了"
                  data-src="http://img5.mtime.cn/mg/2021/11/11/100902.49263432.jpg"
                  height="138"
                  title="《蜜熊的音乐奇旅》发布口碑特辑 亲子相处之道引家长共鸣 时光网讯　2021最受欢迎好莱坞合家欢动画《蜜熊的音乐奇旅》发布最新口碑特辑，特辑中不少观众在观影之后谈了自己的观后感，其中不乏亲子观众对电影赞不绝口，还有小朋友现场模仿蜜熊，场面非常有爱。影片讲述了" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_20" href="http://content.mtime.com/article/228772574"
                  target="_blank">《蜜熊的音乐奇旅》发布口碑特辑 亲子相处之道引家长共鸣</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_20" href="http://content.mtime.com/article/228772574"
                      target="_blank">时光网讯　2021最受欢迎好莱坞合家欢动画《蜜熊的音乐奇旅》发布最新口碑特辑，特辑中不少观众在观影之后谈了自己的观后感，其中不乏亲子观众对电影赞不绝口，还有小朋友现场模仿蜜熊，场面非常有爱。影片讲述了</a>
                </p><span class="news-time">2021-11-11 10:12</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_21"
                                        href="http://content.mtime.com/article/228772651" target="_blank"><img
                  alt="“超人”亨利·卡维尔曝写真，“有机会还想再演超人” 时光网讯 日前，演员“超人”亨利·卡维尔曝光一组写真。他在近期接受采访时表示，有机会的话很想再演超人。对于出演“英国队长”的传言，亨利·卡维尔表示如果真能演“英国队长”，可能也是一件很有趣的事。亨利·"
                  data-src="http://img5.mtime.cn/mg/2021/11/11/100253.21514686.jpg"
                  height="138"
                  title="“超人”亨利·卡维尔曝写真，“有机会还想再演超人” 时光网讯 日前，演员“超人”亨利·卡维尔曝光一组写真。他在近期接受采访时表示，有机会的话很想再演超人。对于出演“英国队长”的传言，亨利·卡维尔表示如果真能演“英国队长”，可能也是一件很有趣的事。亨利·" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_21" href="http://content.mtime.com/article/228772651"
                  target="_blank">“超人”亨利·卡维尔曝写真，“有机会还想再演超人”</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_21" href="http://content.mtime.com/article/228772651"
                      target="_blank">时光网讯
                  日前，演员“超人”亨利·卡维尔曝光一组写真。他在近期接受采访时表示，有机会的话很想再演超人。对于出演“英国队长”的传言，亨利·卡维尔表示如果真能演“英国队长”，可能也是一件很有趣的事。亨利·</a>
                </p><span class="news-time">2021-11-11 10:03</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_22"
                                        href="http://content.mtime.com/article/228772643" target="_blank"><img
                  alt="时光早报：奥斯卡最佳导演“陀螺”结婚，《变形金刚7》《新星际迷航》延档 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.《唐顿庄园2》发先导预告 　　 《唐顿庄园：新纪元》曝先导预告和剧照，将于明年3月18日北美上映。影片由西蒙·柯蒂斯（《我与梦露的"
                  data-src="http://img5.mtime.cn/mg/2021/11/11/093347.40505245.jpg"
                  height="138"
                  title="时光早报：奥斯卡最佳导演“陀螺”结婚，《变形金刚7》《新星际迷航》延档 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.《唐顿庄园2》发先导预告 　　 《唐顿庄园：新纪元》曝先导预告和剧照，将于明年3月18日北美上映。影片由西蒙·柯蒂斯（《我与梦露的" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_22" href="http://content.mtime.com/article/228772643"
                  target="_blank">时光早报：奥斯卡最佳导演“陀螺”结婚，《变形金刚7》《新星际迷航》延档</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_22" href="http://content.mtime.com/article/228772643"
                      target="_blank">过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.《唐顿庄园2》发先导预告
                  　　 《唐顿庄园：新纪元》曝先导预告和剧照，将于明年3月18日北美上映。影片由西蒙·柯蒂斯（《我与梦露的</a></p><span
                    class="news-time">2021-11-11 09:45</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_23"
                                        href="http://content.mtime.com/article/228772561" target="_blank"><img
                  alt="皮克斯《青春变形记》曝日版预告和海报  时光网讯 奥斯卡最佳动画短片《包宝宝》导演 石之予执导动画长片 《青春变形记》曝日语配音版预告和海报，影片讲述处于青春期的小美，一激动就会变成巨型红色小熊猫这一奇妙“能力”，将为成长中的她带来多少烦恼"
                  data-src="http://img5.mtime.cn/mg/2021/07/14/090018.79165230.jpg"
                  height="138"
                  title="皮克斯《青春变形记》曝日版预告和海报  时光网讯 奥斯卡最佳动画短片《包宝宝》导演 石之予执导动画长片 《青春变形记》曝日语配音版预告和海报，影片讲述处于青春期的小美，一激动就会变成巨型红色小熊猫这一奇妙“能力”，将为成长中的她带来多少烦恼" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_23" href="http://content.mtime.com/article/228772561"
                  target="_blank">皮克斯《青春变形记》曝日版预告和海报 </a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_23" href="http://content.mtime.com/article/228772561"
                      target="_blank">时光网讯 奥斯卡最佳动画短片《包宝宝》导演 石之予执导动画长片
                  《青春变形记》曝日语配音版预告和海报，影片讲述处于青春期的小美，一激动就会变成巨型红色小熊猫这一奇妙“能力”，将为成长中的她带来多少烦恼</a></p><span class="news-time">2021-11-11 09:44</span>
              </div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_24"
                                        href="http://content.mtime.com/article/228772502" target="_blank"><img
                  alt="《变形金刚7》推迟到2023年6月上映 导演和擎天柱 时光网讯 派拉蒙今日宣布，原定明年6月24日上映的“变形金刚7” 《变形金刚：超能勇士崛起》推迟到2023年6月9日上映，原定该档期的 《星际迷航4》推迟到2023年12月22日上映。 "
                  data-src="http://img5.mtime.cn/mg/2021/11/11/084331.75016856.jpg"
                  height="138"
                  title="《变形金刚7》推迟到2023年6月上映 导演和擎天柱 时光网讯 派拉蒙今日宣布，原定明年6月24日上映的“变形金刚7” 《变形金刚：超能勇士崛起》推迟到2023年6月9日上映，原定该档期的 《星际迷航4》推迟到2023年12月22日上映。 " width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_24" href="http://content.mtime.com/article/228772502"
                                                      target="_blank">《变形金刚7》推迟到2023年6月上映</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_24" href="http://content.mtime.com/article/228772502"
                      target="_blank">导演和擎天柱 时光网讯 派拉蒙今日宣布，原定明年6月24日上映的“变形金刚7”
                  《变形金刚：超能勇士崛起》推迟到2023年6月9日上映，原定该档期的 《星际迷航4》推迟到2023年12月22日上映。 </a></p><span class="news-time">2021-11-11 08:54</span>
              </div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_25"
                                        href="http://content.mtime.com/article/228772417" target="_blank"><img
                  alt="荷兰弟：相信我，真的没有三代同框 粉丝制图 时光网讯 《蜘蛛侠：英雄无归》12月17日将在北美上映，由于涉及“三代同框”传闻，索尼和漫威在海报、预告片物料的发布上想尽办法防剧透。演员们被问到时也是各种打哈哈，近日汤姆·赫兰德被问到这个"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/173058.44823095.jpg"
                  height="138"
                  title="荷兰弟：相信我，真的没有三代同框 粉丝制图 时光网讯 《蜘蛛侠：英雄无归》12月17日将在北美上映，由于涉及“三代同框”传闻，索尼和漫威在海报、预告片物料的发布上想尽办法防剧透。演员们被问到时也是各种打哈哈，近日汤姆·赫兰德被问到这个" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_25" href="http://content.mtime.com/article/228772417"
                                                      target="_blank">荷兰弟：相信我，真的没有三代同框</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_25" href="http://content.mtime.com/article/228772417"
                      target="_blank">粉丝制图 时光网讯
                  《蜘蛛侠：英雄无归》12月17日将在北美上映，由于涉及“三代同框”传闻，索尼和漫威在海报、预告片物料的发布上想尽办法防剧透。演员们被问到时也是各种打哈哈，近日汤姆·赫兰德被问到这个</a></p>
                <span class="news-time">2021-11-10 17:32</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_26"
                                        href="http://content.mtime.com/article/228772404" target="_blank"><img
                  alt="是枝裕和将为Netflix开发电影和剧集 时光网讯 正在日本举行的“Netflix日本2021电影节”传出消息，曾凭 《小偷家族》提名奥斯卡最佳外语片、斩获戛纳金棕榈的 是枝裕和导演将为这家流媒体制作电影和剧集。 是枝裕和表示，和Netfli"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/154228.96139253.jpg"
                  height="138"
                  title="是枝裕和将为Netflix开发电影和剧集 时光网讯 正在日本举行的“Netflix日本2021电影节”传出消息，曾凭 《小偷家族》提名奥斯卡最佳外语片、斩获戛纳金棕榈的 是枝裕和导演将为这家流媒体制作电影和剧集。 是枝裕和表示，和Netfli" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_26" href="http://content.mtime.com/article/228772404"
                                                      target="_blank">是枝裕和将为Netflix开发电影和剧集</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_26" href="http://content.mtime.com/article/228772404"
                      target="_blank">时光网讯 正在日本举行的“Netflix日本2021电影节”传出消息，曾凭
                  《小偷家族》提名奥斯卡最佳外语片、斩获戛纳金棕榈的 是枝裕和导演将为这家流媒体制作电影和剧集。 是枝裕和表示，和Netfli</a></p><span class="news-time">2021-11-10 15:45</span>
              </div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_27"
                                        href="http://content.mtime.com/article/228772306" target="_blank"><img
                  alt="张艺谋《悬崖之上》代表中国内地角逐奥斯卡 时光网讯　中国内地确定选送 《悬崖之上》竞逐第94届奥斯卡最佳国际影片奖。该片由 张艺谋执导，张译、于和伟、秦海璐、朱亚文、刘浩存、倪大红等主演，于今年4月30日在国内公映。 　　此前，中国香港确定选"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/145610.58199659.jpg"
                  height="138"
                  title="张艺谋《悬崖之上》代表中国内地角逐奥斯卡 时光网讯　中国内地确定选送 《悬崖之上》竞逐第94届奥斯卡最佳国际影片奖。该片由 张艺谋执导，张译、于和伟、秦海璐、朱亚文、刘浩存、倪大红等主演，于今年4月30日在国内公映。 　　此前，中国香港确定选" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_27" href="http://content.mtime.com/article/228772306"
                                                      target="_blank">张艺谋《悬崖之上》代表中国内地角逐奥斯卡</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_27" href="http://content.mtime.com/article/228772306"
                      target="_blank">时光网讯　中国内地确定选送 《悬崖之上》竞逐第94届奥斯卡最佳国际影片奖。该片由
                  张艺谋执导，张译、于和伟、秦海璐、朱亚文、刘浩存、倪大红等主演，于今年4月30日在国内公映。 　　此前，中国香港确定选</a></p><span class="news-time">2021-11-10 15:01</span>
              </div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_28"
                                        href="http://content.mtime.com/article/228772302" target="_blank"><img
                  alt="“蚁人”保罗路德成2021年最性感男士 时光网讯 《人物》杂志2021年度“最性感男士”评选颁给了今年52岁的“蚁人” 保罗·路德，虽然不是什么天皇巨星，但出道30多年的他身材和外貌一直保持得很好，被誉为“不老的传说”。 30年前后外貌对比"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/144728.60888031.jpg"
                  height="138"
                  title="“蚁人”保罗路德成2021年最性感男士 时光网讯 《人物》杂志2021年度“最性感男士”评选颁给了今年52岁的“蚁人” 保罗·路德，虽然不是什么天皇巨星，但出道30多年的他身材和外貌一直保持得很好，被誉为“不老的传说”。 30年前后外貌对比" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_28" href="http://content.mtime.com/article/228772302"
                  target="_blank">“蚁人”保罗路德成2021年最性感男士</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_28" href="http://content.mtime.com/article/228772302"
                      target="_blank">时光网讯 《人物》杂志2021年度“最性感男士”评选颁给了今年52岁的“蚁人”
                  保罗·路德，虽然不是什么天皇巨星，但出道30多年的他身材和外貌一直保持得很好，被誉为“不老的传说”。 30年前后外貌对比</a></p><span class="news-time">2021-11-10 14:54</span>
              </div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_29"
                                        href="http://content.mtime.com/article/228772198" target="_blank"><img
                  alt="《扬名立万》北京首映，叫兽易小星：比我处女作强多了 时光网讯 日前，电影《扬名立万》在京举办首映活动，影片监制韩寒，导演刘循子墨，领衔主演尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达，特别出演陈明昊、秦霄贤、邓恩熙等主创全员集结亮相。 扬名立万 时光评分"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/144625.68051888.jpg"
                  height="138"
                  title="《扬名立万》北京首映，叫兽易小星：比我处女作强多了 时光网讯 日前，电影《扬名立万》在京举办首映活动，影片监制韩寒，导演刘循子墨，领衔主演尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达，特别出演陈明昊、秦霄贤、邓恩熙等主创全员集结亮相。 扬名立万 时光评分" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_29" href="http://content.mtime.com/article/228772198"
                  target="_blank">《扬名立万》北京首映，叫兽易小星：比我处女作强多了</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_29" href="http://content.mtime.com/article/228772198"
                      target="_blank">时光网讯
                  日前，电影《扬名立万》在京举办首映活动，影片监制韩寒，导演刘循子墨，领衔主演尹正、邓家佳、喻恩泰、杨皓宇、张本煜、柯达，特别出演陈明昊、秦霄贤、邓恩熙等主创全员集结亮相。 扬名立万 时光评分</a>
                </p><span class="news-time">2021-11-10 14:48</span></div>
            </li>
            <li class="none" data-pageindex="2">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_30"
                                        href="http://content.mtime.com/article/228772276" target="_blank"><img
                  alt="国产文艺片《第四面墙》定档12月10日 时光网讯 今日，由张翀、张波执导，刘陆、王紫逸主演的电影《第四面墙》发布定档海报，宣布将于12月10日全国上映。 第四面墙 时光评分 0.0 剧情 2021年12月10日中国上映 该片曾入围第22届上"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/143523.47537851.jpg"
                  height="138"
                  title="国产文艺片《第四面墙》定档12月10日 时光网讯 今日，由张翀、张波执导，刘陆、王紫逸主演的电影《第四面墙》发布定档海报，宣布将于12月10日全国上映。 第四面墙 时光评分 0.0 剧情 2021年12月10日中国上映 该片曾入围第22届上" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_30" href="http://content.mtime.com/article/228772276"
                  target="_blank">国产文艺片《第四面墙》定档12月10日</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_30" href="http://content.mtime.com/article/228772276"
                      target="_blank">时光网讯
                  今日，由张翀、张波执导，刘陆、王紫逸主演的电影《第四面墙》发布定档海报，宣布将于12月10日全国上映。 第四面墙 时光评分 0.0 剧情 2021年12月10日中国上映 该片曾入围第22届上</a>
                </p><span class="news-time">2021-11-10 14:35</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_31"
                                        href="http://content.mtime.com/article/228772196" target="_blank"><img
                  alt="《梅艳芳》发终极预告 大银幕再见天后绝代芳华 时光网讯　由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影 《梅艳芳》将于11月12日全国上映，影片正在预售中。今日，影片曝光终极预告，浓缩呈现了梅艳芳从驻唱小歌女开始"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/143326.39629229.jpg"
                  height="138"
                  title="《梅艳芳》发终极预告 大银幕再见天后绝代芳华 时光网讯　由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影 《梅艳芳》将于11月12日全国上映，影片正在预售中。今日，影片曝光终极预告，浓缩呈现了梅艳芳从驻唱小歌女开始" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_31" href="http://content.mtime.com/article/228772196"
                  target="_blank">《梅艳芳》发终极预告 大银幕再见天后绝代芳华</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_31" href="http://content.mtime.com/article/228772196"
                      target="_blank">时光网讯　由安乐影业出品，江志强监制，梁乐民执导，王丹妮、古天乐、林家栋、杨千嬅主演的电影
                  《梅艳芳》将于11月12日全国上映，影片正在预售中。今日，影片曝光终极预告，浓缩呈现了梅艳芳从驻唱小歌女开始</a></p><span
                    class="news-time">2021-11-10 14:35</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_32"
                                        href="http://content.mtime.com/article/228772181" target="_blank"><img
                  alt="《我们是第一书记》发布“为你战斗”版海报特辑 用热血演绎决不放弃 时光网讯　由新华社荣誉出品，新华网、北京精彩、北京人杰、华录百纳联合出品，任杰导演的电影《我们是第一书记》今日发布黑龙江篇“为你战斗”版故事海报和特辑。 　　该片是国内新闻领域首次尝试以新闻素材依托电"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/125040.77595034.jpg"
                  height="138"
                  title="《我们是第一书记》发布“为你战斗”版海报特辑 用热血演绎决不放弃 时光网讯　由新华社荣誉出品，新华网、北京精彩、北京人杰、华录百纳联合出品，任杰导演的电影《我们是第一书记》今日发布黑龙江篇“为你战斗”版故事海报和特辑。 　　该片是国内新闻领域首次尝试以新闻素材依托电" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_32" href="http://content.mtime.com/article/228772181"
                  target="_blank">《我们是第一书记》发布“为你战斗”版海报特辑 用热血演绎决不放弃</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_32" href="http://content.mtime.com/article/228772181"
                      target="_blank">时光网讯　由新华社荣誉出品，新华网、北京精彩、北京人杰、华录百纳联合出品，任杰导演的电影《我们是第一书记》今日发布黑龙江篇“为你战斗”版故事海报和特辑。
                  　　该片是国内新闻领域首次尝试以新闻素材依托电</a></p><span class="news-time">2021-11-10 12:51</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_33"
                                        href="http://content.mtime.com/article/228772252" target="_blank"><img
                  alt="游戏引擎公司Unity将以16.25亿美元收购彼得·杰克逊的维塔公司 时光网讯　彼得·杰克逊的维塔公司正在出售中，上市公司Unity（一家游戏引擎公司）将以现金和股票组合的形式，出资16.25亿美元收购，双方将签署最终协议。 　　新西兰特效公司维塔曾制作过彼得的《指环王"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/111059.39760103.jpg"
                  height="138"
                  title="游戏引擎公司Unity将以16.25亿美元收购彼得·杰克逊的维塔公司 时光网讯　彼得·杰克逊的维塔公司正在出售中，上市公司Unity（一家游戏引擎公司）将以现金和股票组合的形式，出资16.25亿美元收购，双方将签署最终协议。 　　新西兰特效公司维塔曾制作过彼得的《指环王" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_33" href="http://content.mtime.com/article/228772252"
                                                      target="_blank">游戏引擎公司Unity将以16.25亿美元收购彼得·杰克逊的维塔公司</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_33" href="http://content.mtime.com/article/228772252"
                      target="_blank">时光网讯　彼得·杰克逊的维塔公司正在出售中，上市公司Unity（一家游戏引擎公司）将以现金和股票组合的形式，出资16.25亿美元收购，双方将签署最终协议。
                  　　新西兰特效公司维塔曾制作过彼得的《指环王</a></p><span class="news-time">2021-11-10 11:12</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_34"
                                        href="http://content.mtime.com/article/228772251" target="_blank"><img
                  alt="电影《龙马精神》杀青 成龙依依不舍告别“赤兔马” 时光网讯　由杨子编剧、执导，成龙、刘浩存、郭麒麟领衔主演的电影 《龙马精神》今日杀青。在发布的杀青图中，成龙轻抚着戏中搭档赤兔的脸依依不舍，一人一马的深情对视，十分动人。 成龙杀青最舍不得的伙伴 特殊"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/110822.93331136.jpg"
                  height="138"
                  title="电影《龙马精神》杀青 成龙依依不舍告别“赤兔马” 时光网讯　由杨子编剧、执导，成龙、刘浩存、郭麒麟领衔主演的电影 《龙马精神》今日杀青。在发布的杀青图中，成龙轻抚着戏中搭档赤兔的脸依依不舍，一人一马的深情对视，十分动人。 成龙杀青最舍不得的伙伴 特殊" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_34" href="http://content.mtime.com/article/228772251"
                  target="_blank">电影《龙马精神》杀青 成龙依依不舍告别“赤兔马”</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_34" href="http://content.mtime.com/article/228772251"
                      target="_blank">时光网讯　由杨子编剧、执导，成龙、刘浩存、郭麒麟领衔主演的电影
                  《龙马精神》今日杀青。在发布的杀青图中，成龙轻抚着戏中搭档赤兔的脸依依不舍，一人一马的深情对视，十分动人。 成龙杀青最舍不得的伙伴 特殊</a></p><span class="news-time">2021-11-10 11:08</span>
              </div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_35"
                                        href="http://content.mtime.com/article/228772249" target="_blank"><img
                  alt="“机动战士高达”真人电影首曝概念图 《金刚骷髅岛》导演执导 时光网讯 Netflix与传奇影业联合打造的 《机动战士高达 真人版》电影首曝概念图，影片由《金刚：骷髅岛》导演 乔丹·沃格-罗伯茨执导，布莱恩·K·沃恩(《迷失》《穹顶之下》)撰写剧本并担任执行制片"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/104833.51883503.jpg"
                  height="138"
                  title="“机动战士高达”真人电影首曝概念图 《金刚骷髅岛》导演执导 时光网讯 Netflix与传奇影业联合打造的 《机动战士高达 真人版》电影首曝概念图，影片由《金刚：骷髅岛》导演 乔丹·沃格-罗伯茨执导，布莱恩·K·沃恩(《迷失》《穹顶之下》)撰写剧本并担任执行制片" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_35" href="http://content.mtime.com/article/228772249"
                                                      target="_blank">“机动战士高达”真人电影首曝概念图
                《金刚骷髅岛》导演执导</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_35" href="http://content.mtime.com/article/228772249"
                      target="_blank">时光网讯 Netflix与传奇影业联合打造的 《机动战士高达
                  真人版》电影首曝概念图，影片由《金刚：骷髅岛》导演 乔丹·沃格-罗伯茨执导，布莱恩·K·沃恩(《迷失》《穹顶之下》)撰写剧本并担任执行制片</a></p><span class="news-time">2021-11-10 10:51</span>
              </div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_36"
                                        href="http://content.mtime.com/article/228772159" target="_blank"><img
                  alt="国家电影局发布《“十四五”中国电影发展规划》 时光网讯 据《中国电影报》报道，近日，《“十四五”中国电影发展规划》正式发布（以下简称《规划》）。《规划》以总书记新时代中国特色社会主义思想为指导，贯彻落实总书记关于电影工作的重要指示批示精神和中央有"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/095323.37093000.jpg"
                  height="138"
                  title="国家电影局发布《“十四五”中国电影发展规划》 时光网讯 据《中国电影报》报道，近日，《“十四五”中国电影发展规划》正式发布（以下简称《规划》）。《规划》以总书记新时代中国特色社会主义思想为指导，贯彻落实总书记关于电影工作的重要指示批示精神和中央有" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_36" href="http://content.mtime.com/article/228772159"
                                                      target="_blank">国家电影局发布《“十四五”中国电影发展规划》</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_36" href="http://content.mtime.com/article/228772159"
                      target="_blank">时光网讯
                  据《中国电影报》报道，近日，《“十四五”中国电影发展规划》正式发布（以下简称《规划》）。《规划》以总书记新时代中国特色社会主义思想为指导，贯彻落实总书记关于电影工作的重要指示批示精神和中央有</a>
                </p><span class="news-time">2021-11-10 09:56</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_37"
                                        href="http://content.mtime.com/article/228772235" target="_blank"><img
                  alt="《芒咕的动物城》曝主题曲MV与角色海报，11月19日爆笑集结全员嗨翻 时光网讯　将于11月19日全国上映的爆笑合家欢动画电影《芒咕的动物城》今日发布影片主题曲MV及“动物大联欢”全员角色海报，小驴芒咕变身大国王，与动物城全员欢闹热舞，曲风活泼逗趣，歌词洗脑上口，动物全员"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/094802.49112281.jpg"
                  height="138"
                  title="《芒咕的动物城》曝主题曲MV与角色海报，11月19日爆笑集结全员嗨翻 时光网讯　将于11月19日全国上映的爆笑合家欢动画电影《芒咕的动物城》今日发布影片主题曲MV及“动物大联欢”全员角色海报，小驴芒咕变身大国王，与动物城全员欢闹热舞，曲风活泼逗趣，歌词洗脑上口，动物全员" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_37" href="http://content.mtime.com/article/228772235"
                  target="_blank">《芒咕的动物城》曝主题曲MV与角色海报，11月19日爆笑集结全员嗨翻</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_37" href="http://content.mtime.com/article/228772235"
                      target="_blank">时光网讯　将于11月19日全国上映的爆笑合家欢动画电影《芒咕的动物城》今日发布影片主题曲MV及“动物大联欢”全员角色海报，小驴芒咕变身大国王，与动物城全员欢闹热舞，曲风活泼逗趣，歌词洗脑上口，动物全员</a>
                </p><span class="news-time">2021-11-10 09:48</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_38"
                                        href="http://content.mtime.com/article/228772148" target="_blank"><img
                  alt="时光早报：《鱿鱼游戏》确认开发第二季，真人剧版《海贼王》官宣主演阵容 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.真人剧版《海贼王》官宣主演阵容 好莱坞真人剧版 《海贼王》官宣主演阵容： 路飞：伊纳基·戈多伊(《谁杀了莎拉？》) 索隆：新田真剑"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/093236.59929069.jpg"
                  height="138"
                  title="时光早报：《鱿鱼游戏》确认开发第二季，真人剧版《海贼王》官宣主演阵容 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.真人剧版《海贼王》官宣主演阵容 好莱坞真人剧版 《海贼王》官宣主演阵容： 路飞：伊纳基·戈多伊(《谁杀了莎拉？》) 索隆：新田真剑" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_38" href="http://content.mtime.com/article/228772148"
                                                      target="_blank">时光早报：《鱿鱼游戏》确认开发第二季，真人剧版《海贼王》官宣主演阵容</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_38" href="http://content.mtime.com/article/228772148"
                      target="_blank">过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。
                  01.真人剧版《海贼王》官宣主演阵容 好莱坞真人剧版 《海贼王》官宣主演阵容： 路飞：伊纳基·戈多伊(《谁杀了莎拉？》) 索隆：新田真剑</a></p><span class="news-time">2021-11-10 09:34</span>
              </div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_39"
                                        href="http://content.mtime.com/article/228772120" target="_blank"><img
                  alt="当007不再风流，他还能否坐稳特工界头把交椅？ 时光网讯 丹尼尔·克雷格主演的最后一部007电影《007：无暇赴死》正在国内热映，上映13天，累计票房3.3亿，时光网观众评分7.4分。 007：无暇赴死 时光评分 7.4 163分钟 - 动作 / "
                  data-src="http://img5.mtime.cn/mg/2021/11/10/090442.18735748.jpg"
                  height="138"
                  title="当007不再风流，他还能否坐稳特工界头把交椅？ 时光网讯 丹尼尔·克雷格主演的最后一部007电影《007：无暇赴死》正在国内热映，上映13天，累计票房3.3亿，时光网观众评分7.4分。 007：无暇赴死 时光评分 7.4 163分钟 - 动作 / " width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_39" href="http://content.mtime.com/article/228772120"
                  target="_blank">当007不再风流，他还能否坐稳特工界头把交椅？</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_39" href="http://content.mtime.com/article/228772120"
                      target="_blank">时光网讯
                  丹尼尔·克雷格主演的最后一部007电影《007：无暇赴死》正在国内热映，上映13天，累计票房3.3亿，时光网观众评分7.4分。 007：无暇赴死 时光评分 7.4 163分钟 - 动作 / </a>
                </p><span class="news-time">2021-11-10 09:23</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_40"
                                        href="http://content.mtime.com/article/228772070" target="_blank"><img
                  alt="Netflix《海贼王》真人剧集官宣演员阵容 原来他演路飞 这个路飞你们满意么？ 时光网讯 Netflix制作的真人剧集 《海贼王》官宣了演员阵容，墨西哥男星 伊纳基·戈多伊扮演男主角路飞，此外刚演了真人版 《圣斗士星矢：十二宫骑士》的 新田真剑佑也加盟扮演罗"
                  data-src="http://img5.mtime.cn/mg/2021/11/10/085109.66587360.jpg"
                  height="138"
                  title="Netflix《海贼王》真人剧集官宣演员阵容 原来他演路飞 这个路飞你们满意么？ 时光网讯 Netflix制作的真人剧集 《海贼王》官宣了演员阵容，墨西哥男星 伊纳基·戈多伊扮演男主角路飞，此外刚演了真人版 《圣斗士星矢：十二宫骑士》的 新田真剑佑也加盟扮演罗" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_40" href="http://content.mtime.com/article/228772070"
                                                      target="_blank">Netflix《海贼王》真人剧集官宣演员阵容
                原来他演路飞</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_40" href="http://content.mtime.com/article/228772070"
                      target="_blank">这个路飞你们满意么？ 时光网讯 Netflix制作的真人剧集
                  《海贼王》官宣了演员阵容，墨西哥男星 伊纳基·戈多伊扮演男主角路飞，此外刚演了真人版 《圣斗士星矢：十二宫骑士》的 新田真剑佑也加盟扮演罗</a></p><span class="news-time">2021-11-10 08:56</span>
              </div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_41"
                                        href="http://content.mtime.com/article/228771982" target="_blank"><img
                  alt="Netflix真人剧集《幽游白书》定档2023 时光网讯Netflix改编拍摄的真人版系列剧集 《幽游白书》宣布定档2023年12月上线，富坚义博原著的这本漫画连载于《少年Jump》1990年51号到1994年32号，曾改编成电视动画、电影、完全版"
                  data-src="http://img5.mtime.cn/mg/2020/12/16/092400.86708835.jpg"
                  height="138"
                  title="Netflix真人剧集《幽游白书》定档2023 时光网讯Netflix改编拍摄的真人版系列剧集 《幽游白书》宣布定档2023年12月上线，富坚义博原著的这本漫画连载于《少年Jump》1990年51号到1994年32号，曾改编成电视动画、电影、完全版" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_41" href="http://content.mtime.com/article/228771982"
                                                      target="_blank">Netflix真人剧集《幽游白书》定档2023</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_41" href="http://content.mtime.com/article/228771982"
                      target="_blank">时光网讯Netflix改编拍摄的真人版系列剧集
                  《幽游白书》宣布定档2023年12月上线，富坚义博原著的这本漫画连载于《少年Jump》1990年51号到1994年32号，曾改编成电视动画、电影、完全版</a></p><span
                    class="news-time">2021-11-10 08:43</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_42"
                                        href="http://content.mtime.com/article/228771893" target="_blank"><img
                  alt="《饥饿游戏》导演将改编菲利普·迪克科幻小说《火神之锤》 时光网讯 据外媒，导演弗朗西斯·劳伦斯将联手制片公司New Republic Pictures和Electric Shepherd Productions，把菲利普·迪克的反乌托邦科幻小说《火神之锤》"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/160459.26861936.jpg"
                  height="138"
                  title="《饥饿游戏》导演将改编菲利普·迪克科幻小说《火神之锤》 时光网讯 据外媒，导演弗朗西斯·劳伦斯将联手制片公司New Republic Pictures和Electric Shepherd Productions，把菲利普·迪克的反乌托邦科幻小说《火神之锤》" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_42" href="http://content.mtime.com/article/228771893"
                                                      target="_blank">《饥饿游戏》导演将改编菲利普·迪克科幻小说《火神之锤》</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_42" href="http://content.mtime.com/article/228771893"
                      target="_blank">时光网讯 据外媒，导演弗朗西斯·劳伦斯将联手制片公司New Republic
                  Pictures和Electric Shepherd Productions，把菲利普·迪克的反乌托邦科幻小说《火神之锤》</a></p><span class="news-time">2021-11-09 16:21</span>
              </div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_43"
                                        href="http://content.mtime.com/article/228771902" target="_blank"><img
                  alt="郑保瑞黑白犯罪片《智齿》发布新预告 时光网讯　由 郑保瑞执导， 林家栋、 刘雅瑟主演的犯罪悬疑片《智齿》发布新预告，将于11月18日在中国香港上映。 　　本片由叶伟信、黄柏高监制，李淳、池内博之、廖子妤、沈震轩、灰熊等共同出演，曾入围第"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/152012.34984503.jpg"
                  height="138"
                  title="郑保瑞黑白犯罪片《智齿》发布新预告 时光网讯　由 郑保瑞执导， 林家栋、 刘雅瑟主演的犯罪悬疑片《智齿》发布新预告，将于11月18日在中国香港上映。 　　本片由叶伟信、黄柏高监制，李淳、池内博之、廖子妤、沈震轩、灰熊等共同出演，曾入围第" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_43" href="http://content.mtime.com/article/228771902"
                  target="_blank">郑保瑞黑白犯罪片《智齿》发布新预告</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_43" href="http://content.mtime.com/article/228771902"
                      target="_blank">时光网讯　由 郑保瑞执导， 林家栋、
                  刘雅瑟主演的犯罪悬疑片《智齿》发布新预告，将于11月18日在中国香港上映。 　　本片由叶伟信、黄柏高监制，李淳、池内博之、廖子妤、沈震轩、灰熊等共同出演，曾入围第</a></p><span
                    class="news-time">2021-11-09 15:21</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_44"
                                        href="http://content.mtime.com/article/228771793" target="_blank"><img
                  alt="《风骚律师》最终季13集 将在明年分两部分播出 时光网讯 据外媒报道，美剧《风骚律师》第六季也是最后一季将会分为两部分播出，共有13集（前五季均为10集）。第一部分预计将于2022年第一季度播出。 《风骚律师》是《绝命毒师》的衍生剧，讲述索尔·古德"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/145102.11100363.jpg"
                  height="138"
                  title="《风骚律师》最终季13集 将在明年分两部分播出 时光网讯 据外媒报道，美剧《风骚律师》第六季也是最后一季将会分为两部分播出，共有13集（前五季均为10集）。第一部分预计将于2022年第一季度播出。 《风骚律师》是《绝命毒师》的衍生剧，讲述索尔·古德" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_44" href="http://content.mtime.com/article/228771793"
                                                      target="_blank">《风骚律师》最终季13集
                将在明年分两部分播出</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_44" href="http://content.mtime.com/article/228771793"
                      target="_blank">时光网讯
                  据外媒报道，美剧《风骚律师》第六季也是最后一季将会分为两部分播出，共有13集（前五季均为10集）。第一部分预计将于2022年第一季度播出。 《风骚律师》是《绝命毒师》的衍生剧，讲述索尔·古德</a>
                </p><span class="news-time">2021-11-09 14:55</span></div>
            </li>
            <li class="none" data-pageindex="3">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_45"
                                        href="http://content.mtime.com/article/228771789" target="_blank"><img
                  alt="《长津湖》海外定档 11月19日美国加拿大上映 时光网讯　吴京、易烊千玺主演的战争片 《长津湖》宣布将于11月19日在美国、加拿大上映，12月2日澳大利亚上映。 　　目前，影片已获得超56亿元人民币票房，暂居今年全球票房冠军，中国内地影史票房第二，"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/142533.29194449.jpg"
                  height="138"
                  title="《长津湖》海外定档 11月19日美国加拿大上映 时光网讯　吴京、易烊千玺主演的战争片 《长津湖》宣布将于11月19日在美国、加拿大上映，12月2日澳大利亚上映。 　　目前，影片已获得超56亿元人民币票房，暂居今年全球票房冠军，中国内地影史票房第二，" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_45" href="http://content.mtime.com/article/228771789"
                                                      target="_blank">《长津湖》海外定档
                11月19日美国加拿大上映</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_45" href="http://content.mtime.com/article/228771789"
                      target="_blank">时光网讯　吴京、易烊千玺主演的战争片
                  《长津湖》宣布将于11月19日在美国、加拿大上映，12月2日澳大利亚上映。 　　目前，影片已获得超56亿元人民币票房，暂居今年全球票房冠军，中国内地影史票房第二，</a></p><span
                    class="news-time">2021-11-09 14:27</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_46"
                                        href="http://content.mtime.com/article/228771861" target="_blank"><img
                  alt="《铁道英雄》发布“英雄莫问出处”特辑 时光网讯 即将于11月19日全国上映的电影《铁道英雄》今日发布“英雄莫问出处”特辑，导演杨枫，主演张涵予、范伟、魏晨、周也、俞灏明整齐亮相，分别讲述创作心得和对角色的见解。 铁道英雄 时光评分 0.0"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/131201.86411056.jpg"
                  height="138"
                  title="《铁道英雄》发布“英雄莫问出处”特辑 时光网讯 即将于11月19日全国上映的电影《铁道英雄》今日发布“英雄莫问出处”特辑，导演杨枫，主演张涵予、范伟、魏晨、周也、俞灏明整齐亮相，分别讲述创作心得和对角色的见解。 铁道英雄 时光评分 0.0" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_46" href="http://content.mtime.com/article/228771861"
                  target="_blank">《铁道英雄》发布“英雄莫问出处”特辑</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_46" href="http://content.mtime.com/article/228771861"
                      target="_blank">时光网讯
                  即将于11月19日全国上映的电影《铁道英雄》今日发布“英雄莫问出处”特辑，导演杨枫，主演张涵予、范伟、魏晨、周也、俞灏明整齐亮相，分别讲述创作心得和对角色的见解。 铁道英雄 时光评分 0.0</a>
                </p><span class="news-time">2021-11-09 13:22</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_47"
                                        href="http://content.mtime.com/article/228771769" target="_blank"><img
                  alt="亚力克·鲍德温敦促好莱坞用枪片场雇佣警察 时光网讯 演员亚历克·鲍德温在社交媒体上呼吁好莱坞在使用无论真枪或假枪的场景中配置一名警员。 “每一部使用枪支的电影/电视剧，不管是用假枪还是什么，都应该有一名由剧组雇佣的警察在片场专门监管武器安全。"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/121919.48264060.jpg"
                  height="138"
                  title="亚力克·鲍德温敦促好莱坞用枪片场雇佣警察 时光网讯 演员亚历克·鲍德温在社交媒体上呼吁好莱坞在使用无论真枪或假枪的场景中配置一名警员。 “每一部使用枪支的电影/电视剧，不管是用假枪还是什么，都应该有一名由剧组雇佣的警察在片场专门监管武器安全。" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_47" href="http://content.mtime.com/article/228771769"
                                                      target="_blank">亚力克·鲍德温敦促好莱坞用枪片场雇佣警察</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_47" href="http://content.mtime.com/article/228771769"
                      target="_blank">时光网讯 演员亚历克·鲍德温在社交媒体上呼吁好莱坞在使用无论真枪或假枪的场景中配置一名警员。
                  “每一部使用枪支的电影/电视剧，不管是用假枪还是什么，都应该有一名由剧组雇佣的警察在片场专门监管武器安全。</a></p><span
                    class="news-time">2021-11-09 12:24</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_48"
                                        href="http://content.mtime.com/article/228771763" target="_blank"><img
                  alt="“反贪”导演新片《隐秘世界》杀青 韩庚王千源双雄对决 时光网讯　由《反贪风暴》系列导演林德禄执导的缉毒题材动作大片《隐秘世界》日前正式杀青。全新曝光的杀青海报中，两名身穿相同编号囚服的男子眼神犀利，他们的身份及背后故事令人好奇。影片由韩庚、王千源、张馨予"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/115447.50884675.jpg"
                  height="138"
                  title="“反贪”导演新片《隐秘世界》杀青 韩庚王千源双雄对决 时光网讯　由《反贪风暴》系列导演林德禄执导的缉毒题材动作大片《隐秘世界》日前正式杀青。全新曝光的杀青海报中，两名身穿相同编号囚服的男子眼神犀利，他们的身份及背后故事令人好奇。影片由韩庚、王千源、张馨予" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_48" href="http://content.mtime.com/article/228771763"
                  target="_blank">“反贪”导演新片《隐秘世界》杀青 韩庚王千源双雄对决</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_48" href="http://content.mtime.com/article/228771763"
                      target="_blank">时光网讯　由《反贪风暴》系列导演林德禄执导的缉毒题材动作大片《隐秘世界》日前正式杀青。全新曝光的杀青海报中，两名身穿相同编号囚服的男子眼神犀利，他们的身份及背后故事令人好奇。影片由韩庚、王千源、张馨予</a>
                </p><span class="news-time">2021-11-09 11:55</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_49"
                                        href="http://content.mtime.com/article/228771756" target="_blank"><img
                  alt="“捉鬼敢死队”续集《超能敢死队》发终极预告 时光网讯　“捉鬼敢死队”系列新片 《超能敢死队》发布终极预告，最后暗示了前作主演 比尔·默瑞的回归，影片将于11月19日北美上映。 　　这一部由 贾森·雷特曼(《朱诺》《在云端》)执导，故事承接198"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/110520.22477078.jpg"
                  height="138"
                  title="“捉鬼敢死队”续集《超能敢死队》发终极预告 时光网讯　“捉鬼敢死队”系列新片 《超能敢死队》发布终极预告，最后暗示了前作主演 比尔·默瑞的回归，影片将于11月19日北美上映。 　　这一部由 贾森·雷特曼(《朱诺》《在云端》)执导，故事承接198" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_49" href="http://content.mtime.com/article/228771756"
                  target="_blank">“捉鬼敢死队”续集《超能敢死队》发终极预告</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_49" href="http://content.mtime.com/article/228771756"
                      target="_blank">时光网讯　“捉鬼敢死队”系列新片 《超能敢死队》发布终极预告，最后暗示了前作主演
                  比尔·默瑞的回归，影片将于11月19日北美上映。 　　这一部由 贾森·雷特曼(《朱诺》《在云端》)执导，故事承接198</a></p><span class="news-time">2021-11-09 11:10</span>
              </div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_50"
                                        href="http://content.mtime.com/article/228771751" target="_blank"><img
                  alt="王小帅新片《沃土》官宣演员阵容，咏梅合作祖峰，演绎中国人与土地的关系 时光网讯 日前，由导演王小帅执导的电影《沃土》正式官宣演员阵容，柏林影后咏梅、演员祖峰、王子川、李军加盟，片中小沃土的扮演者欧阳文鑫也首度曝光。 沃土 时光评分 0.0 中国上映 电影《沃土》是导演王"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/104553.27583355.jpg"
                  height="138"
                  title="王小帅新片《沃土》官宣演员阵容，咏梅合作祖峰，演绎中国人与土地的关系 时光网讯 日前，由导演王小帅执导的电影《沃土》正式官宣演员阵容，柏林影后咏梅、演员祖峰、王子川、李军加盟，片中小沃土的扮演者欧阳文鑫也首度曝光。 沃土 时光评分 0.0 中国上映 电影《沃土》是导演王" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_50" href="http://content.mtime.com/article/228771751"
                  target="_blank">王小帅新片《沃土》官宣演员阵容，咏梅合作祖峰，演绎中国人与土地的关系</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_50" href="http://content.mtime.com/article/228771751"
                      target="_blank">时光网讯
                  日前，由导演王小帅执导的电影《沃土》正式官宣演员阵容，柏林影后咏梅、演员祖峰、王子川、李军加盟，片中小沃土的扮演者欧阳文鑫也首度曝光。 沃土 时光评分 0.0 中国上映 电影《沃土》是导演王</a>
                </p><span class="news-time">2021-11-09 10:46</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_51"
                                        href="http://content.mtime.com/article/228771826" target="_blank"><img
                  alt="电影《梅艳芳》发布群星口碑特辑 张艺谋关锦鹏动情追忆 时光网讯 由安乐影业出品、江志强监制、梁乐民执导的电影 《梅艳芳》，今日发布群星口碑特辑。特辑中梅艳芳生前的好友、后辈轮番出镜，表达对她的深切怀念，同时一致肯定了电影呈现的梅姐传奇一生。本片由王丹妮、"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/103152.66674857.jpg"
                  height="138"
                  title="电影《梅艳芳》发布群星口碑特辑 张艺谋关锦鹏动情追忆 时光网讯 由安乐影业出品、江志强监制、梁乐民执导的电影 《梅艳芳》，今日发布群星口碑特辑。特辑中梅艳芳生前的好友、后辈轮番出镜，表达对她的深切怀念，同时一致肯定了电影呈现的梅姐传奇一生。本片由王丹妮、" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_51" href="http://content.mtime.com/article/228771826"
                  target="_blank">电影《梅艳芳》发布群星口碑特辑 张艺谋关锦鹏动情追忆</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_51" href="http://content.mtime.com/article/228771826"
                      target="_blank">时光网讯 由安乐影业出品、江志强监制、梁乐民执导的电影
                  《梅艳芳》，今日发布群星口碑特辑。特辑中梅艳芳生前的好友、后辈轮番出镜，表达对她的深切怀念，同时一致肯定了电影呈现的梅姐传奇一生。本片由王丹妮、</a></p><span
                    class="news-time">2021-11-09 10:33</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_52"
                                        href="http://content.mtime.com/article/228771742" target="_blank"><img
                  alt="抗疫题材《穿过寒冬拥抱你》曝“温暖跨年”版预告 时光网讯 由薛晓路执导，黄渤、贾玲领衔主演，朱一龙、徐帆、高亚麟、吴彦姝、许绍雄主演，周冬雨特别友情出演，刘昊然、乔欣、王一楠友情出演的《穿过寒冬拥抱你》今日发布“温暖跨年”版预告，预告以片名为引导，"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/101437.67302005.jpg"
                  height="138"
                  title="抗疫题材《穿过寒冬拥抱你》曝“温暖跨年”版预告 时光网讯 由薛晓路执导，黄渤、贾玲领衔主演，朱一龙、徐帆、高亚麟、吴彦姝、许绍雄主演，周冬雨特别友情出演，刘昊然、乔欣、王一楠友情出演的《穿过寒冬拥抱你》今日发布“温暖跨年”版预告，预告以片名为引导，" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_52" href="http://content.mtime.com/article/228771742"
                  target="_blank">抗疫题材《穿过寒冬拥抱你》曝“温暖跨年”版预告</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_52" href="http://content.mtime.com/article/228771742"
                      target="_blank">时光网讯
                  由薛晓路执导，黄渤、贾玲领衔主演，朱一龙、徐帆、高亚麟、吴彦姝、许绍雄主演，周冬雨特别友情出演，刘昊然、乔欣、王一楠友情出演的《穿过寒冬拥抱你》今日发布“温暖跨年”版预告，预告以片名为引导，</a>
                </p><span class="news-time">2021-11-09 10:14</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_53"
                                        href="http://content.mtime.com/article/228771736" target="_blank"><img
                  alt="《星球大战：侠盗中队》推迟制作 导演派蒂·杰金斯无空档 时光网讯 据《好莱坞报道》，自2019年的 《星球大战：天行者崛起》以来，下一步“星战”电影本应在明年投入制作，然而导演派蒂·杰金斯却没时间。 派蒂·杰金斯目前手上的项目有华纳兄弟的《神奇女侠3》和派"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/094240.17258353.jpg"
                  height="138"
                  title="《星球大战：侠盗中队》推迟制作 导演派蒂·杰金斯无空档 时光网讯 据《好莱坞报道》，自2019年的 《星球大战：天行者崛起》以来，下一步“星战”电影本应在明年投入制作，然而导演派蒂·杰金斯却没时间。 派蒂·杰金斯目前手上的项目有华纳兄弟的《神奇女侠3》和派" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_53" href="http://content.mtime.com/article/228771736"
                                                      target="_blank">《星球大战：侠盗中队》推迟制作
                导演派蒂·杰金斯无空档</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_53" href="http://content.mtime.com/article/228771736"
                      target="_blank">时光网讯 据《好莱坞报道》，自2019年的
                  《星球大战：天行者崛起》以来，下一步“星战”电影本应在明年投入制作，然而导演派蒂·杰金斯却没时间。 派蒂·杰金斯目前手上的项目有华纳兄弟的《神奇女侠3》和派</a></p><span
                    class="news-time">2021-11-09 09:44</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_54"
                                        href="http://content.mtime.com/article/228771801" target="_blank"><img
                  alt="时光早报：小李商谈出演新片《吉姆·琼斯》，《银河护卫队3》开拍 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.莱昂纳多商谈出演新片《吉姆·琼斯》 　　据外媒Deadline报道，“小李子” 莱昂纳多·迪卡普里奥有望加盟米高梅新片《吉姆·琼斯"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/092329.20438576.jpg"
                  height="138"
                  title="时光早报：小李商谈出演新片《吉姆·琼斯》，《银河护卫队3》开拍 过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。 01.莱昂纳多商谈出演新片《吉姆·琼斯》 　　据外媒Deadline报道，“小李子” 莱昂纳多·迪卡普里奥有望加盟米高梅新片《吉姆·琼斯" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_54" href="http://content.mtime.com/article/228771801"
                                                      target="_blank">时光早报：小李商谈出演新片《吉姆·琼斯》，《银河护卫队3》开拍</a>
              </h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_54" href="http://content.mtime.com/article/228771801"
                      target="_blank">过去12小时内，全球影视新闻哪些值得关注？时光网为你专业甄选。
                  01.莱昂纳多商谈出演新片《吉姆·琼斯》 　　据外媒Deadline报道，“小李子” 莱昂纳多·迪卡普里奥有望加盟米高梅新片《吉姆·琼斯</a></p><span class="news-time">2021-11-09 09:29</span>
              </div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_55"
                                        href="http://content.mtime.com/article/228771697" target="_blank"><img
                  alt="《敢死队4》曝片场照 斯坦森VS亚洲两大打星 时光网讯 动作大片 《敢死队4》正在热拍中，男主角 杰森·斯坦森在社交媒体陆陆续续曝光片场照，呈现他和制片人史泰龙，以及和亚洲两大打星托尼·贾以及伊科·乌艾斯合作时的画面。 影片由斯科特·沃(《极品飞"
                  data-src="http://img5.mtime.cn/mg/2021/11/09/085502.29698318.jpg"
                  height="138"
                  title="《敢死队4》曝片场照 斯坦森VS亚洲两大打星 时光网讯 动作大片 《敢死队4》正在热拍中，男主角 杰森·斯坦森在社交媒体陆陆续续曝光片场照，呈现他和制片人史泰龙，以及和亚洲两大打星托尼·贾以及伊科·乌艾斯合作时的画面。 影片由斯科特·沃(《极品飞" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_55" href="http://content.mtime.com/article/228771697"
                  target="_blank">《敢死队4》曝片场照 斯坦森VS亚洲两大打星</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_55" href="http://content.mtime.com/article/228771697"
                      target="_blank">时光网讯 动作大片 《敢死队4》正在热拍中，男主角
                  杰森·斯坦森在社交媒体陆陆续续曝光片场照，呈现他和制片人史泰龙，以及和亚洲两大打星托尼·贾以及伊科·乌艾斯合作时的画面。 影片由斯科特·沃(《极品飞</a></p><span
                    class="news-time">2021-11-09 09:07</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_56"
                                        href="http://content.mtime.com/article/228771455" target="_blank"><img
                  alt="《极盗车神2》剧本已写好 索尼想要续集 导演还没想好 时光网讯 近日，埃德加·赖特在接受杂志采访时说他已经写好了《极盗车神2》的剧本，但在决定拍摄前，得想办法让过程更有趣。 《极盗车神》是2017年最让人惊喜的电影之一，票房和口碑双丰收——仅3400万美"
                  data-src="http://img5.mtime.cn/mg/2021/11/08/173027.52798290.jpg"
                  height="138"
                  title="《极盗车神2》剧本已写好 索尼想要续集 导演还没想好 时光网讯 近日，埃德加·赖特在接受杂志采访时说他已经写好了《极盗车神2》的剧本，但在决定拍摄前，得想办法让过程更有趣。 《极盗车神》是2017年最让人惊喜的电影之一，票房和口碑双丰收——仅3400万美" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_56" href="http://content.mtime.com/article/228771455"
                                                      target="_blank">《极盗车神2》剧本已写好
                索尼想要续集 导演还没想好</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_56" href="http://content.mtime.com/article/228771455"
                      target="_blank">时光网讯
                  近日，埃德加·赖特在接受杂志采访时说他已经写好了《极盗车神2》的剧本，但在决定拍摄前，得想办法让过程更有趣。 《极盗车神》是2017年最让人惊喜的电影之一，票房和口碑双丰收——仅3400万美</a>
                </p><span class="news-time">2021-11-08 17:30</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_57"
                                        href="http://content.mtime.com/article/228771436" target="_blank"><img
                  alt="梅尔·吉布森又有新片约！将出演奇幻冒险电影《Boys of Summer》 时光网讯 继加盟《疾速追杀》前传剧集《洲际酒店》后，梅尔·吉布森又签约大卫·亨瑞（《少年魔法师》）执导的奇幻冒险电影《Boys of Summer》，将饰演一名追捕超自然生物的侦探。 影片讲述了马撒葡"
                  data-src="http://img5.mtime.cn/mg/2021/11/08/154455.32921812.jpg"
                  height="138"
                  title="梅尔·吉布森又有新片约！将出演奇幻冒险电影《Boys of Summer》 时光网讯 继加盟《疾速追杀》前传剧集《洲际酒店》后，梅尔·吉布森又签约大卫·亨瑞（《少年魔法师》）执导的奇幻冒险电影《Boys of Summer》，将饰演一名追捕超自然生物的侦探。 影片讲述了马撒葡" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_57" href="http://content.mtime.com/article/228771436"
                                                      target="_blank">梅尔·吉布森又有新片约！将出演奇幻冒险电影《Boys
                of Summer》</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_57" href="http://content.mtime.com/article/228771436"
                      target="_blank">时光网讯
                  继加盟《疾速追杀》前传剧集《洲际酒店》后，梅尔·吉布森又签约大卫·亨瑞（《少年魔法师》）执导的奇幻冒险电影《Boys of Summer》，将饰演一名追捕超自然生物的侦探。 影片讲述了马撒葡</a>
                </p><span class="news-time">2021-11-08 15:46</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_58"
                                        href="http://content.mtime.com/article/228771343" target="_blank"><img
                  alt="《哆啦A梦》大雄配音演员太田淑子去世 享年89岁 时光网讯　据日媒报道，日本著名声优 太田淑子因心力衰竭去世，享年89岁。她曾参与过多部经典动画的配音工作，是 《哆啦A梦》野比大雄的初代声优，1936年4月25日出生于日本兵库县，1951年初中毕业后"
                  data-src="http://img5.mtime.cn/mg/2021/11/08/150706.98722657.jpg"
                  height="138"
                  title="《哆啦A梦》大雄配音演员太田淑子去世 享年89岁 时光网讯　据日媒报道，日本著名声优 太田淑子因心力衰竭去世，享年89岁。她曾参与过多部经典动画的配音工作，是 《哆啦A梦》野比大雄的初代声优，1936年4月25日出生于日本兵库县，1951年初中毕业后" width="280"></a><h4><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_58" href="http://content.mtime.com/article/228771343"
                                                      target="_blank">《哆啦A梦》大雄配音演员太田淑子去世
                享年89岁</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_58" href="http://content.mtime.com/article/228771343"
                      target="_blank">时光网讯　据日媒报道，日本著名声优
                  太田淑子因心力衰竭去世，享年89岁。她曾参与过多部经典动画的配音工作，是 《哆啦A梦》野比大雄的初代声优，1936年4月25日出生于日本兵库县，1951年初中毕业后</a></p><span
                    class="news-time">2021-11-08 15:14</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_59"
                                        href="http://content.mtime.com/article/228771293" target="_blank"><img
                  alt="《蜘蛛侠：英雄无归》全球首张海报曝光 反派章鱼博士绿魔重磅回归 时光网讯　由索尼影业、漫威影业联合出品的漫威超级英雄巨制 《蜘蛛侠：英雄无归》发布全球首张海报，汤姆·赫兰德饰演的蜘蛛侠身着钢铁蜘蛛战服全副武装亮相，全力迎战反派章鱼博士的机械触手。伴随着漫天黄沙与炫"
                  data-src="http://img5.mtime.cn/mg/2021/11/08/135332.97085996.jpg"
                  height="138"
                  title="《蜘蛛侠：英雄无归》全球首张海报曝光 反派章鱼博士绿魔重磅回归 时光网讯　由索尼影业、漫威影业联合出品的漫威超级英雄巨制 《蜘蛛侠：英雄无归》发布全球首张海报，汤姆·赫兰德饰演的蜘蛛侠身着钢铁蜘蛛战服全副武装亮相，全力迎战反派章鱼博士的机械触手。伴随着漫天黄沙与炫" width="280"><em class="pic-video"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_59" href="http://content.mtime.com/article/228771293"
                  target="_blank">《蜘蛛侠：英雄无归》全球首张海报曝光 反派章鱼博士绿魔重磅回归</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_59" href="http://content.mtime.com/article/228771293"
                      target="_blank">时光网讯　由索尼影业、漫威影业联合出品的漫威超级英雄巨制
                  《蜘蛛侠：英雄无归》发布全球首张海报，汤姆·赫兰德饰演的蜘蛛侠身着钢铁蜘蛛战服全副武装亮相，全力迎战反派章鱼博士的机械触手。伴随着漫天黄沙与炫</a></p><span
                    class="news-time">2021-11-08 12:22</span></div>
            </li>
            <li class="none" data-pageindex="4">
              <div class="news-cont"><a class="picwrap" data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_60"
                                        href="http://content.mtime.com/article/228771310" target="_blank"><img
                  alt="《特种部队：蛇眼起源》发布新预告 顶尖动作场面燃爆大银幕 时光网讯　由美国派拉蒙影片公司出品的动作冒险大片《特种部队：蛇眼起源》正在热映中！影片发布“命运对决”版预告，邪恶组织眼镜蛇携惊天阴谋而来意欲摧毁一切，超级战士蛇眼初入江湖就遭遇血雨腥风，贴身肉搏、运"
                  data-src="http://img5.mtime.cn/mg/2021/11/08/120514.94557412.jpg"
                  height="138"
                  title="《特种部队：蛇眼起源》发布新预告 顶尖动作场面燃爆大银幕 时光网讯　由美国派拉蒙影片公司出品的动作冒险大片《特种部队：蛇眼起源》正在热映中！影片发布“命运对决”版预告，邪恶组织眼镜蛇携惊天阴谋而来意欲摧毁一切，超级战士蛇眼初入江湖就遭遇血雨腥风，贴身肉搏、运" width="280"><em class="icon-pic"></em></a><h4><a
                  data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_60" href="http://content.mtime.com/article/228771310"
                  target="_blank">《特种部队：蛇眼起源》发布新预告 顶尖动作场面燃爆大银幕</a></h4>
                <p><a data-pan="M16_NewsIndex_Leftnewslist_LATEST_1_60" href="http://content.mtime.com/article/228771310"
                      target="_blank">时光网讯　由美国派拉蒙影片公司出品的动作冒险大片《特种部队：蛇眼起源》正在热映中！影片发布“命运对决”版预告，邪恶组织眼镜蛇携惊天阴谋而来意欲摧毁一切，超级战士蛇眼初入江湖就遭遇血雨腥风，贴身肉搏、运</a>
                </p><span class="news-time">2021-11-08 12:06</span></div>
            </li>
          </ul>
          <a id="viewmore" class="news-more" data-curindex="1" data-maxpages="4" data-pan="M16_NewsIndex_Leftnewslist_More"
             href="javascript:void(0);"><em class="add"></em>加载更多</a>
          <div id="pages" class="pagesize none"><a class="cur" href="http://news.mtime.com/">1</a><a
              href="http://news.mtime.com/index-2.html">2</a><a href="http://news.mtime.com/index-3.html">3</a><a
              href="http://news.mtime.com/index-4.html">4</a><a href="http://news.mtime.com/index-5.html">5</a><a
              href="http://news.mtime.com/index-6.html">6</a><a href="http://news.mtime.com/index-7.html">7</a><a
              href="http://news.mtime.com/index-8.html">8</a><a href="http://news.mtime.com/index-9.html">9</a><a
              href="http://news.mtime.com/index-10.html">10</a></div>
        </div>
        <div class="right-news fr"><h4 class="right-title"><a href="http://news.mtime.com/fun/">全球拾趣</a></h4>
          <div id="globalNews" class="short-news" style="height: 1394px;">
            <div id="globalScroll" class="scroll"><i id="globalScrollBar" class="bar"
                                                     style="position: absolute; display: none; top: 0px;"></i></div>
            <ul id="globalUl">
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_1"
                                        href="http://content.mtime.com/article/228772302" target="_blank"><img
                    alt="“蚁人”保罗路德成2021年最性感男士" height="116"
                    src="http://img5.mtime.cn/mg/2021/11/10/144728.60888031.jpg" title="“蚁人”保罗路德成2021年最性感男士" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_1" href="http://content.mtime.com/article/228772302"
                    target="_blank">“蚁人”保罗路德成2021年最性感男士</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_2"
                                        href="http://content.mtime.com/article/228765627" target="_blank"><img
                    alt="国外饭圈实录：粉丝气《沙丘》赞达亚戏份少" height="116"
                    src="http://img5.mtime.cn/mg/2021/11/01/173134.70207507.jpg" title="国外饭圈实录：粉丝气《沙丘》赞达亚戏份少" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_2" href="http://content.mtime.com/article/228765627"
                    target="_blank">国外饭圈实录：粉丝气《沙丘》赞达亚戏份少</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_3"
                                        href="http://content.mtime.com/article/228761489" target="_blank"><img
                    alt="基努里维斯送《疾速追杀》替身劳力士手表 每只价值12万" height="116"
                    src="http://img5.mtime.cn/mg/2021/10/26/164834.26591771.jpg" title="基努里维斯送《疾速追杀》替身劳力士手表 每只价值12万" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_3" href="http://content.mtime.com/article/228761489"
                    target="_blank">基努里维斯送《疾速追杀》替身劳力士手表 每只价值12万</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_4"
                                        href="http://content.mtime.com/article/228759286" target="_blank"><img
                    alt="保罗·沃克女儿出嫁，范·迪塞尔婚礼上担起父亲角色" height="116"
                    src="http://img5.mtime.cn/mg/2021/10/23/113502.80402392.jpg" title="保罗·沃克女儿出嫁，范·迪塞尔婚礼上担起父亲角色" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_4" href="http://content.mtime.com/article/228759286"
                    target="_blank">保罗·沃克女儿出嫁，范·迪塞尔婚礼上担起父亲角色</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_5"
                                        href="http://content.mtime.com/article/228756705" target="_blank"><img
                    alt="拉米马雷克倾情演绎《鱿鱼游戏》美国“主题曲”" height="116"
                    src="http://img5.mtime.cn/mg/2021/10/18/105308.92954548.jpg" title="拉米马雷克倾情演绎《鱿鱼游戏》美国“主题曲”" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_5" href="http://content.mtime.com/article/228756705"
                    target="_blank">拉米马雷克倾情演绎《鱿鱼游戏》美国“主题曲”</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_6"
                                        href="http://content.mtime.com/article/228753636" target="_blank"><img
                    alt="阿汤哥你“肿么了”？看棒球赛被拍惹网友热议" height="116"
                    src="http://img5.mtime.cn/mg/2021/10/12/160613.81075335.jpg" title="阿汤哥你“肿么了”？看棒球赛被拍惹网友热议" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_6" href="http://content.mtime.com/article/228753636"
                    target="_blank">阿汤哥你“肿么了”？看棒球赛被拍惹网友热议</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_7"
                                        href="http://content.mtime.com/article/228753540" target="_blank"><img
                    alt="007丹尼尔克雷格十分钟模仿24部电影" height="116"
                    src="http://img5.mtime.cn/mg/2021/10/12/145538.47930602.jpg" title="007丹尼尔克雷格十分钟模仿24部电影" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_7" href="http://content.mtime.com/article/228753540"
                    target="_blank">007丹尼尔克雷格十分钟模仿24部电影</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_8"
                                        href="http://content.mtime.com/article/228744611" target="_blank"><img
                    alt="既然休杰克曼不再演金刚狼 不如换他来试试？" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/29/102455.56394292.jpg" title="既然休杰克曼不再演金刚狼 不如换他来试试？" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_8" href="http://content.mtime.com/article/228744611"
                    target="_blank">既然休杰克曼不再演金刚狼 不如换他来试试？</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_9"
                                        href="http://content.mtime.com/article/228740179" target="_blank"><img
                    alt="第11届北京国际电影节开幕，巩俐、吴京、佟丽娅等电影人亮相红毯" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/20/221802.98067351.jpg" title="第11届北京国际电影节开幕，巩俐、吴京、佟丽娅等电影人亮相红毯" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_9" href="http://content.mtime.com/article/228740179"
                    target="_blank">第11届北京国际电影节开幕，巩俐、吴京、佟丽娅等电影人亮相红毯</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_10"
                                        href="http://content.mtime.com/article/228737049" target="_blank"><img
                    alt="“尚气”刘思慕最爱的零食是大白兔奶糖" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/14/104420.80276544.jpg" title="“尚气”刘思慕最爱的零食是大白兔奶糖" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_10" href="http://content.mtime.com/article/228737049"
                    target="_blank">“尚气”刘思慕最爱的零食是大白兔奶糖</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_11"
                                        href="http://content.mtime.com/article/228736972" target="_blank"><img
                    alt="“时尚奥斯卡”Met Gala红毯 甜茶&amp;碧梨&amp;刘思慕等盛装亮相"
                    height="116" src="http://img5.mtime.cn/mg/2021/09/14/103820.17949229.jpg"
                    title="“时尚奥斯卡”Met Gala红毯 甜茶&amp;碧梨&amp;刘思慕等盛装亮相" width="236"></a><h4><a data-pan="M16_NewsIndex_Globalnewslist_11"
                                                        href="http://content.mtime.com/article/228736972" target="_blank">“时尚奥斯卡”Met
                  Gala红毯 甜茶&amp;碧梨&amp;刘思慕等盛装亮相</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_12"
                                        href="http://content.mtime.com/article/228735652" target="_blank"><img
                    alt=" 《最后的决斗》剧组亮相威尼斯电影节，烂番茄新鲜度暂时为67%" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/11/101807.50158030.jpg" title=" 《最后的决斗》剧组亮相威尼斯电影节，烂番茄新鲜度暂时为67%" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_12" href="http://content.mtime.com/article/228735652"
                    target="_blank"> 《最后的决斗》剧组亮相威尼斯电影节，烂番茄新鲜度暂时为67%</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_13"
                                        href="http://content.mtime.com/article/228735289" target="_blank"><img
                    alt="狼爪重现！《漫威金刚狼》游戏曝概念预告" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/10/115433.66645812.jpg" title="狼爪重现！《漫威金刚狼》游戏曝概念预告" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_13" href="http://content.mtime.com/article/228735289"
                    target="_blank">狼爪重现！《漫威金刚狼》游戏曝概念预告</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_14"
                                        href="http://content.mtime.com/article/228735425" target="_blank"><img
                    alt="《战神：诸神黄昏》游戏预告曝光 不一样的北欧神话" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/10/160137.34331658.jpg" title="《战神：诸神黄昏》游戏预告曝光 不一样的北欧神话" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_14" href="http://content.mtime.com/article/228735425"
                    target="_blank">《战神：诸神黄昏》游戏预告曝光 不一样的北欧神话</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_15"
                                        href="http://content.mtime.com/article/228735162" target="_blank"><img
                    alt="蜘蛛侠和毒液相遇 《漫威蜘蛛侠2》游戏曝预告" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/10/093432.91138706.jpg" title="蜘蛛侠和毒液相遇 《漫威蜘蛛侠2》游戏曝预告" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_15" href="http://content.mtime.com/article/228735162"
                    target="_blank">蜘蛛侠和毒液相遇 《漫威蜘蛛侠2》游戏曝预告</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_16"
                                        href="http://content.mtime.com/article/228735246" target="_blank"><img
                    alt="“小美人鱼”哈雷·贝利曝时尚新照，电影《小美人鱼》已杀青" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/10/094235.33472405.jpg" title="“小美人鱼”哈雷·贝利曝时尚新照，电影《小美人鱼》已杀青" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_16" href="http://content.mtime.com/article/228735246"
                    target="_blank">“小美人鱼”哈雷·贝利曝时尚新照，电影《小美人鱼》已杀青</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_17"
                                        href="http://content.mtime.com/article/228732471" target="_blank"><img
                    alt="《斯宾塞》《暗处的女儿》首映 小K&amp;达妹闪耀红毯" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/04/151033.97644543.jpg" title="《斯宾塞》《暗处的女儿》首映 小K&amp;达妹闪耀红毯" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_17" href="http://content.mtime.com/article/228732471"
                    target="_blank">《斯宾塞》《暗处的女儿》首映 小K&amp;达妹闪耀红毯</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_18"
                                        href="http://content.mtime.com/article/228732992" target="_blank"><img
                    alt="安雅·泰勒-乔伊、劳模姐等亮相威尼斯电影节红毯" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/05/113208.52925545.jpg" title="安雅·泰勒-乔伊、劳模姐等亮相威尼斯电影节红毯" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_18" href="http://content.mtime.com/article/228732992"
                    target="_blank">安雅·泰勒-乔伊、劳模姐等亮相威尼斯电影节红毯</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_19"
                                        href="http://content.mtime.com/article/228734823" target="_blank"><img
                    alt="范·迪塞尔意大利度假照曝光，身材疑似发福" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/09/090550.80646234.jpg" title="范·迪塞尔意大利度假照曝光，身材疑似发福" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_19" href="http://content.mtime.com/article/228734823"
                    target="_blank">范·迪塞尔意大利度假照曝光，身材疑似发福</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_20"
                                        href="http://content.mtime.com/article/228731231" target="_blank"><img
                    alt="威尼斯评审团主席奉俊昊：新冠病毒不会毁灭电影" height="116"
                    src="http://img5.mtime.cn/mg/2021/09/01/204151.27481169.jpg" title="威尼斯评审团主席奉俊昊：新冠病毒不会毁灭电影" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_20" href="http://content.mtime.com/article/228731231"
                    target="_blank">威尼斯评审团主席奉俊昊：新冠病毒不会毁灭电影</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_21"
                                        href="http://content.mtime.com/article/228731442" target="_blank"><img
                    alt="阿莫多瓦《平行母亲》拉开威尼斯序幕 赵婷&amp;于佩尔&amp;海伦米伦&amp;克鲁兹等人红毯亮相"
                    height="116"
                    src="http://img5.mtime.cn/mg/2021/09/02/110046.77743246.jpg" title="阿莫多瓦《平行母亲》拉开威尼斯序幕 赵婷&amp;于佩尔&amp;海伦米伦&amp;克鲁兹等人红毯亮相" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_21" href="http://content.mtime.com/article/228731442"
                    target="_blank">阿莫多瓦《平行母亲》拉开威尼斯序幕 赵婷&amp;于佩尔&amp;海伦米伦&amp;克鲁兹等人红毯亮相</a>
                </h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_22"
                                        href="http://content.mtime.com/article/228730672" target="_blank"><img
                    alt="梁咏琪宣布暂别乐坛 未来将尝试拍剧" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/31/144415.76329064.jpg" title="梁咏琪宣布暂别乐坛 未来将尝试拍剧" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_22" href="http://content.mtime.com/article/228730672"
                    target="_blank">梁咏琪宣布暂别乐坛 未来将尝试拍剧</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_23"
                                        href="http://content.mtime.com/article/228730817" target="_blank"><img
                    alt="新版《灰姑娘》美国加州首映 卡妹公主造型亮相" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/31/170103.86011365.jpg" title="新版《灰姑娘》美国加州首映 卡妹公主造型亮相" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_23" href="http://content.mtime.com/article/228730817"
                    target="_blank">新版《灰姑娘》美国加州首映 卡妹公主造型亮相</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_24"
                                        href="http://content.mtime.com/article/228727252" target="_blank"><img
                    alt="小K戴安娜王妃传记片曝海报 构图设计大表姐亦有贡献？" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/26/092655.18289995.jpg" title="小K戴安娜王妃传记片曝海报 构图设计大表姐亦有贡献？" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_24" href="http://content.mtime.com/article/228727252"
                    target="_blank">小K戴安娜王妃传记片曝海报 构图设计大表姐亦有贡献？</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_25"
                                        href="http://content.mtime.com/article/228723271" target="_blank"><img
                    alt="斯嘉丽约翰逊和丈夫科林乔斯特有了第一个孩子" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/19/084402.36697529.jpg" title="斯嘉丽约翰逊和丈夫科林乔斯特有了第一个孩子" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_25" href="http://content.mtime.com/article/228723271"
                    target="_blank">斯嘉丽约翰逊和丈夫科林乔斯特有了第一个孩子</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_26"
                                        href="http://content.mtime.com/article/228722493" target="_blank"><img
                    alt="《尚气》加州首映梁朝伟+杨紫琼缺席，陈法拉粉色抹胸礼服全场最佳！" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/17/111711.74292470.jpg" title="《尚气》加州首映梁朝伟+杨紫琼缺席，陈法拉粉色抹胸礼服全场最佳！" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_26" href="http://content.mtime.com/article/228722493"
                    target="_blank">《尚气》加州首映梁朝伟+杨紫琼缺席，陈法拉粉色抹胸礼服全场最佳！</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_27"
                                        href="http://content.mtime.com/article/228720245" target="_blank"><img
                    alt="陈婷晒张艺谋与三子女合影 相当幸福了" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/13/192738.77436257.jpg" title="陈婷晒张艺谋与三子女合影 相当幸福了" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_27" href="http://content.mtime.com/article/228720245"
                    target="_blank">陈婷晒张艺谋与三子女合影 相当幸福了</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_28"
                                        href="http://content.mtime.com/article/228720151" target="_blank"><img
                    alt="当电影照进现实 凯文科斯特纳电影《梦幻成真》成真了！" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/13/171148.47547277.jpg" title="当电影照进现实 凯文科斯特纳电影《梦幻成真》成真了！" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_28" href="http://content.mtime.com/article/228720151"
                    target="_blank">当电影照进现实 凯文科斯特纳电影《梦幻成真》成真了！</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_29"
                                        href="http://content.mtime.com/article/228719552" target="_blank"><img
                    alt="科幻片《追忆迷局》伦敦首映礼 &quot;狼叔&quot;休杰克曼西装造型跪地"
                    height="116" src="http://img5.mtime.cn/mg/2021/08/12/152332.83688086.jpg"
                    title="科幻片《追忆迷局》伦敦首映礼 &quot;狼叔&quot;休杰克曼西装造型跪地" width="236"></a><h4><a data-pan="M16_NewsIndex_Globalnewslist_29"
                                                        href="http://content.mtime.com/article/228719552" target="_blank">科幻片《追忆迷局》伦敦首映礼
                  "狼叔"休杰克曼西装造型跪地</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_30"
                                        href="http://content.mtime.com/article/228715034" target="_blank"><img
                    alt="《失控玩家》首映红毯“小贱贱”和妻子甜蜜撒狗粮" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/04/152307.27080617.jpg" title="《失控玩家》首映红毯“小贱贱”和妻子甜蜜撒狗粮" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_30" href="http://content.mtime.com/article/228715034"
                    target="_blank">《失控玩家》首映红毯“小贱贱”和妻子甜蜜撒狗粮</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_31"
                                        href="http://content.mtime.com/article/228714365" target="_blank"><img
                    alt="《X特遣队：全员集结》美国首映红毯 赵喜娜穿着戏服就来了" height="116"
                    src="http://img5.mtime.cn/mg/2021/08/03/110431.22161227.jpg" title="《X特遣队：全员集结》美国首映红毯 赵喜娜穿着戏服就来了" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_31" href="http://content.mtime.com/article/228714365"
                    target="_blank">《X特遣队：全员集结》美国首映红毯 赵喜娜穿着戏服就来了</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_32"
                                        href="http://content.mtime.com/article/228711720" target="_blank"><img
                    alt="“擎天柱”配音彼特·库伦80岁生日快乐！" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/29/164244.79447830.jpg" title="“擎天柱”配音彼特·库伦80岁生日快乐！" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_32" href="http://content.mtime.com/article/228711720"
                    target="_blank">“擎天柱”配音彼特·库伦80岁生日快乐！</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_33"
                                        href="http://content.mtime.com/article/228711273" target="_blank"><img
                    alt="马特·达蒙：曾预感《长城》会是一场灾难" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/28/151659.64533062.jpg" title="马特·达蒙：曾预感《长城》会是一场灾难" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_33" href="http://content.mtime.com/article/228711273"
                    target="_blank">马特·达蒙：曾预感《长城》会是一场灾难</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_34"
                                        href="http://content.mtime.com/article/228711121" target="_blank"><img
                    alt="欧阳娜娜&amp;张子枫合体拍摄夏日写真" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/28/095407.34772923.jpg" title="欧阳娜娜&amp;张子枫合体拍摄夏日写真" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_34" href="http://content.mtime.com/article/228711121"
                    target="_blank">欧阳娜娜&amp;张子枫合体拍摄夏日写真</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_35"
                                        href="http://content.mtime.com/article/228710200" target="_blank"><img
                    alt="强森、艾米丽布朗特新片《丛林奇航》全球首映" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/26/085331.83172274.jpg" title="强森、艾米丽布朗特新片《丛林奇航》全球首映" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_35" href="http://content.mtime.com/article/228710200"
                    target="_blank">强森、艾米丽布朗特新片《丛林奇航》全球首映</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_36"
                                        href="http://content.mtime.com/article/228709166" target="_blank"><img
                    alt="安娜法瑞斯与摄影师男友秘密完婚 6月14日签署结婚证书" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/24/153437.65618824.jpg" title="安娜法瑞斯与摄影师男友秘密完婚 6月14日签署结婚证书" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_36" href="http://content.mtime.com/article/228709166"
                    target="_blank">安娜法瑞斯与摄影师男友秘密完婚 6月14日签署结婚证书</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_37"
                                        href="http://content.mtime.com/article/228707932" target="_blank"><img
                    alt="强森回应范迪塞尔“严厉的爱”：我笑惨了" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/22/084551.37922982.jpg" title="强森回应范迪塞尔“严厉的爱”：我笑惨了" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_37" href="http://content.mtime.com/article/228707932"
                    target="_blank">强森回应范迪塞尔“严厉的爱”：我笑惨了</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_38"
                                        href="http://content.mtime.com/article/228707714" target="_blank"><img
                    alt="拿生命在搞笑！《蠢蛋搞怪秀4》首曝预告" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/21/115133.66373280.jpg" title="拿生命在搞笑！《蠢蛋搞怪秀4》首曝预告" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_38" href="http://content.mtime.com/article/228707714"
                    target="_blank">拿生命在搞笑！《蠢蛋搞怪秀4》首曝预告</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_39"
                                        href="http://content.mtime.com/article/228705271" target="_blank"><img
                    alt="《记忆》戛纳全球首映 阿彼察邦与蒂尔达·斯文顿口碑获赞" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/16/123935.57710847.jpg" title="《记忆》戛纳全球首映 阿彼察邦与蒂尔达·斯文顿口碑获赞" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_39" href="http://content.mtime.com/article/228705271"
                    target="_blank">《记忆》戛纳全球首映 阿彼察邦与蒂尔达·斯文顿口碑获赞</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_40"
                                        href="http://content.mtime.com/article/228701661" target="_blank"><img
                    alt="马特·达蒙新片《止水》曝戛纳首映红毯图" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/09/125625.56584218.jpg" title="马特·达蒙新片《止水》曝戛纳首映红毯图" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_40" href="http://content.mtime.com/article/228701661"
                    target="_blank">马特·达蒙新片《止水》曝戛纳首映红毯图</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_41"
                                        href="http://content.mtime.com/article/228701820" target="_blank"><img
                    alt="《纪念品2》戛纳首映 “古一法师”蒂尔达·斯文顿携女儿亮相" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/09/165037.19942775.jpg" title="《纪念品2》戛纳首映 “古一法师”蒂尔达·斯文顿携女儿亮相" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_41" href="http://content.mtime.com/article/228701820"
                    target="_blank">《纪念品2》戛纳首映 “古一法师”蒂尔达·斯文顿携女儿亮相</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_42"
                                        href="http://content.mtime.com/article/228703455" target="_blank"><img
                    alt="西恩·潘、玛丽昂·歌迪亚、蒂姆·罗斯等亮相戛纳首映红毯" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/12/155633.52180544.jpg" title="西恩·潘、玛丽昂·歌迪亚、蒂姆·罗斯等亮相戛纳首映红毯" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_42" href="http://content.mtime.com/article/228703455"
                    target="_blank">西恩·潘、玛丽昂·歌迪亚、蒂姆·罗斯等亮相戛纳首映红毯</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_43"
                                        href="http://content.mtime.com/article/228703755" target="_blank"><img
                    alt="《法兰西特派》戛纳首映 甜茶&amp;布洛迪开心合影" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/13/095640.17280280.jpg" title="《法兰西特派》戛纳首映 甜茶&amp;布洛迪开心合影" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_43" href="http://content.mtime.com/article/228703755"
                    target="_blank">《法兰西特派》戛纳首映 甜茶&amp;布洛迪开心合影</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_44"
                                        href="http://content.mtime.com/article/228704027" target="_blank"><img
                    alt="赞达亚和詹姆斯等NBA巨星亮相《空中大灌篮2》首映" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/13/173707.87742165.jpg" title="赞达亚和詹姆斯等NBA巨星亮相《空中大灌篮2》首映" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_44" href="http://content.mtime.com/article/228704027"
                    target="_blank">赞达亚和詹姆斯等NBA巨星亮相《空中大灌篮2》首映</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_45"
                                        href="http://content.mtime.com/article/228704872" target="_blank"><img
                    alt="57岁尼古拉斯凯奇与26岁娇妻现身《救猪行动》首映礼" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/15/153645.62099596.jpg" title="57岁尼古拉斯凯奇与26岁娇妻现身《救猪行动》首映礼" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_45" href="http://content.mtime.com/article/228704872"
                    target="_blank">57岁尼古拉斯凯奇与26岁娇妻现身《救猪行动》首映礼</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_46"
                                        href="http://content.mtime.com/article/228704309" target="_blank"><img
                    alt="“天才少女”麦肯纳·格蕾丝长大了！" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/14/142915.30467736.jpg" title="“天才少女”麦肯纳·格蕾丝长大了！" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_46" href="http://content.mtime.com/article/228704309"
                    target="_blank">“天才少女”麦肯纳·格蕾丝长大了！</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_47"
                                        href="http://content.mtime.com/article/228704402" target="_blank"><img
                    alt="如何才能加入MCU？死侍联手寇格点评《失控玩家》预告片" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/14/135639.19376101.jpg" title="如何才能加入MCU？死侍联手寇格点评《失控玩家》预告片" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_47" href="http://content.mtime.com/article/228704402"
                    target="_blank">如何才能加入MCU？死侍联手寇格点评《失控玩家》预告片</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_48"
                                        href="http://content.mtime.com/article/228700897" target="_blank"><img
                    alt="昆汀又买了一家电影院 专门放自己收藏的拷贝" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/07/154402.22483433.jpg" title="昆汀又买了一家电影院 专门放自己收藏的拷贝" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_48" href="http://content.mtime.com/article/228700897"
                    target="_blank">昆汀又买了一家电影院 专门放自己收藏的拷贝</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_49"
                                        href="http://content.mtime.com/article/228686064" target="_blank"><img
                    alt="“蜘蛛侠”荷兰弟和赞达亚戏里戏外都接吻" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/03/092726.54914450.jpg" title="“蜘蛛侠”荷兰弟和赞达亚戏里戏外都接吻" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_49" href="http://content.mtime.com/article/228686064"
                    target="_blank">“蜘蛛侠”荷兰弟和赞达亚戏里戏外都接吻</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_50"
                                        href="http://content.mtime.com/article/228685694" target="_blank"><img
                    alt="昆汀·塔伦蒂诺再谈《好莱坞往事》李小龙争议" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/02/142821.66114548.jpg" title="昆汀·塔伦蒂诺再谈《好莱坞往事》李小龙争议" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_50" href="http://content.mtime.com/article/228685694"
                    target="_blank">昆汀·塔伦蒂诺再谈《好莱坞往事》李小龙争议</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_51"
                                        href="http://content.mtime.com/article/228685574" target="_blank"><img
                    alt="“海后”艾梅伯·希尔德通过代孕有孩子了 希望女性“不孕也可要小孩”" height="116"
                    src="http://img5.mtime.cn/mg/2021/07/02/112556.63427129.jpg" title="“海后”艾梅伯·希尔德通过代孕有孩子了 希望女性“不孕也可要小孩”" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_51" href="http://content.mtime.com/article/228685574"
                    target="_blank">“海后”艾梅伯·希尔德通过代孕有孩子了 希望女性“不孕也可要小孩”</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_52"
                                        href="http://content.mtime.com/article/228684722" target="_blank"><img
                    alt="佛罗伦斯·珀出席《黑寡妇》伦敦首映式红毯 寡姐本人没来 " height="116"
                    src="http://img5.mtime.cn/mg/2021/06/30/114443.11232376.jpg" title="佛罗伦斯·珀出席《黑寡妇》伦敦首映式红毯 寡姐本人没来 " width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_52" href="http://content.mtime.com/article/228684722"
                    target="_blank">佛罗伦斯·珀出席《黑寡妇》伦敦首映式红毯 寡姐本人没来 </a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_53"
                                        href="http://content.mtime.com/article/228684039" target="_blank"><img
                    alt="伊万·麦克格雷格和女友玛丽迎来第一个孩子" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/28/104251.48725579.jpg" title="伊万·麦克格雷格和女友玛丽迎来第一个孩子" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_53" href="http://content.mtime.com/article/228684039"
                    target="_blank">伊万·麦克格雷格和女友玛丽迎来第一个孩子</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_54"
                                        href="http://content.mtime.com/article/228683324" target="_blank"><img
                    alt="来看猛男湿身照！范·迪塞尔曝光最新船照写真" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/26/232730.12051352.jpg" title="来看猛男湿身照！范·迪塞尔曝光最新船照写真" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_54" href="http://content.mtime.com/article/228683324"
                    target="_blank">来看猛男湿身照！范·迪塞尔曝光最新船照写真</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_55"
                                        href="http://content.mtime.com/article/228681489" target="_blank"><img
                    alt="《毒液2》艺术海报赏析 你最喜欢哪一张？" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/22/144252.19680156.jpg" title="《毒液2》艺术海报赏析 你最喜欢哪一张？" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_55" href="http://content.mtime.com/article/228681489"
                    target="_blank">《毒液2》艺术海报赏析 你最喜欢哪一张？</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_56"
                                        href="http://content.mtime.com/article/228680710" target="_blank"><img
                    alt="迪士尼父亲节混剪 哪部作品中的爸爸最打动你" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/21/110107.12175456.jpg" title="迪士尼父亲节混剪 哪部作品中的爸爸最打动你" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_56" href="http://content.mtime.com/article/228680710"
                    target="_blank">迪士尼父亲节混剪 哪部作品中的爸爸最打动你</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_57"
                                        href="http://content.mtime.com/article/228678975" target="_blank"><img
                    alt="大本前女友安娜·德·阿玛斯也有了新欢" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/18/134043.57482436.jpg" title="大本前女友安娜·德·阿玛斯也有了新欢" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_57" href="http://content.mtime.com/article/228678975"
                    target="_blank">大本前女友安娜·德·阿玛斯也有了新欢</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_58"
                                        href="http://content.mtime.com/article/228678397" target="_blank"><img
                    alt="《比得兔》男星拍歌舞短片庆祝纽约&quot;解封&quot;！" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/17/132908.62742751.jpg" title="《比得兔》男星拍歌舞短片庆祝纽约&quot;解封&quot;！" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_58" href="http://content.mtime.com/article/228678397"
                    target="_blank">《比得兔》男星拍歌舞短片庆祝纽约"解封"！</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_59"
                                        href="http://content.mtime.com/article/228677070" target="_blank"><img
                    alt="游戏《阿凡达：潘多拉边境》曝首款预告" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/14/105854.38828045.jpg" title="游戏《阿凡达：潘多拉边境》曝首款预告" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_59" href="http://content.mtime.com/article/228677070"
                    target="_blank">游戏《阿凡达：潘多拉边境》曝首款预告</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_60"
                                        href="http://content.mtime.com/article/228672074" target="_blank"><img
                    alt="实锤来了！本·阿弗莱克和詹妮弗·洛佩兹复合" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/04/111246.63620852.jpg" title="实锤来了！本·阿弗莱克和詹妮弗·洛佩兹复合" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_60" href="http://content.mtime.com/article/228672074"
                    target="_blank">实锤来了！本·阿弗莱克和詹妮弗·洛佩兹复合</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_61"
                                        href="http://content.mtime.com/article/228672565" target="_blank"><img
                    alt="台媒：大S徐熙媛正在和汪小菲办离婚" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/05/135727.92446358.jpg" title="台媒：大S徐熙媛正在和汪小菲办离婚" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_61" href="http://content.mtime.com/article/228672565"
                    target="_blank">台媒：大S徐熙媛正在和汪小菲办离婚</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_62"
                                        href="http://content.mtime.com/article/228670961" target="_blank"><img
                    alt="“爱死机”第二季曝特辑 CG乔丹做得太真了" height="116"
                    src="http://img5.mtime.cn/mg/2021/06/02/095243.36647478.jpg" title="“爱死机”第二季曝特辑 CG乔丹做得太真了" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_62" href="http://content.mtime.com/article/228670961"
                    target="_blank">“爱死机”第二季曝特辑 CG乔丹做得太真了</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_63"
                                        href="http://content.mtime.com/article/228669694" target="_blank"><img
                    alt="保罗沃克的女儿和范迪塞尔也是&quot;伐木累&quot;" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/31/101714.56520003.jpg" title="保罗沃克的女儿和范迪塞尔也是&quot;伐木累&quot;" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_63" href="http://content.mtime.com/article/228669694"
                    target="_blank">保罗沃克的女儿和范迪塞尔也是"伐木累"</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_64"
                                        href="http://content.mtime.com/article/228667561" target="_blank"><img
                    alt="重温！&quot;速激&quot;风格的《小鹿斑比》真人短片" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/27/160209.80664105.jpg" title="重温！&quot;速激&quot;风格的《小鹿斑比》真人短片" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_64" href="http://content.mtime.com/article/228667561"
                    target="_blank">重温！"速激"风格的《小鹿斑比》真人短片</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_65"
                                        href="http://content.mtime.com/article/228663468" target="_blank"><img
                    alt="过足瘾！《速激》系列飙车名场面集锦" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/21/160339.49125921.jpg" title="过足瘾！《速激》系列飙车名场面集锦" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_65" href="http://content.mtime.com/article/228663468"
                    target="_blank">过足瘾！《速激》系列飙车名场面集锦</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_66"
                                        href="http://content.mtime.com/article/228665671" target="_blank"><img
                    alt="高仿版范迪塞尔邀观众回影院 被安雅“劝退”" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/24/103722.89515769.jpg" title="高仿版范迪塞尔邀观众回影院 被安雅“劝退”" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_66" href="http://content.mtime.com/article/228665671"
                    target="_blank">高仿版范迪塞尔邀观众回影院 被安雅“劝退”</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_67"
                                        href="http://content.mtime.com/article/228663537" target="_blank"><img
                    alt="《速度与激情9》接管了全球最高建筑迪拜塔" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/21/142553.21881138.jpg" title="《速度与激情9》接管了全球最高建筑迪拜塔" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_67" href="http://content.mtime.com/article/228663537"
                    target="_blank">《速度与激情9》接管了全球最高建筑迪拜塔</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_68"
                                        href="http://content.mtime.com/article/228662434" target="_blank"><img
                    alt="新垣结衣&amp;星野源官宣结婚！ 二人曾合作出演过电视剧" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/19/161810.73183942.jpg" title="新垣结衣&amp;星野源官宣结婚！ 二人曾合作出演过电视剧" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_68" href="http://content.mtime.com/article/228662434"
                    target="_blank">新垣结衣&amp;星野源官宣结婚！ 二人曾合作出演过电视剧</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_69"
                                        href="http://content.mtime.com/article/228662602" target="_blank"><img
                    alt="陈思诚、佟丽娅通过微博宣布离婚" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/20/084446.40880630.jpg" title="陈思诚、佟丽娅通过微博宣布离婚" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_69" href="http://content.mtime.com/article/228662602"
                    target="_blank">陈思诚、佟丽娅通过微博宣布离婚</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_70"
                                        href="http://content.mtime.com/article/228658825" target="_blank"><img
                    alt="盖尔加朵为&quot;巴以冲突&quot;发声被网友骂到关评论" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/13/125348.80811579.jpg" title="盖尔加朵为&quot;巴以冲突&quot;发声被网友骂到关评论" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_70" href="http://content.mtime.com/article/228658825"
                    target="_blank">盖尔加朵为"巴以冲突"发声被网友骂到关评论</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_71"
                                        href="http://content.mtime.com/article/228657815" target="_blank"><img
                    alt="本·阿弗莱克和詹妮弗·洛佩兹复合了？" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/11/085921.81857069.jpg" title="本·阿弗莱克和詹妮弗·洛佩兹复合了？" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_71" href="http://content.mtime.com/article/228657815"
                    target="_blank">本·阿弗莱克和詹妮弗·洛佩兹复合了？</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_72"
                                        href="http://content.mtime.com/article/228651141" target="_blank"><img
                    alt="来看看剧版《绯闻女孩》的时尚杂志写真！今年7月上线HBO Max" height="116"
                    src="http://img5.mtime.cn/mg/2021/05/01/122718.63268590.jpg" title="来看看剧版《绯闻女孩》的时尚杂志写真！今年7月上线HBO Max" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_72" href="http://content.mtime.com/article/228651141"
                    target="_blank">来看看剧版《绯闻女孩》的时尚杂志写真！今年7月上线HBO Max</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_73"
                                        href="http://content.mtime.com/article/228649768" target="_blank"><img
                    alt="什么情况？《帕丁顿熊2》烂番茄指数超越《公民凯恩》" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/29/102028.88946304.jpg" title="什么情况？《帕丁顿熊2》烂番茄指数超越《公民凯恩》" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_73" href="http://content.mtime.com/article/228649768"
                    target="_blank">什么情况？《帕丁顿熊2》烂番茄指数超越《公民凯恩》</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_74"
                                        href="http://content.mtime.com/article/228647881" target="_blank"><img
                    alt="马修·麦康纳喊美国人回电影院看电影" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/26/150731.87236858.jpg" title="马修·麦康纳喊美国人回电影院看电影" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_74" href="http://content.mtime.com/article/228647881"
                    target="_blank">马修·麦康纳喊美国人回电影院看电影</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_75"
                                        href="http://content.mtime.com/article/228646425" target="_blank"><img
                    alt="赵丽颖冯绍峰官宣离婚 二人曾合作《女儿国》《知否知否》" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/23/104056.80267827.jpg" title="赵丽颖冯绍峰官宣离婚 二人曾合作《女儿国》《知否知否》" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_75" href="http://content.mtime.com/article/228646425"
                    target="_blank">赵丽颖冯绍峰官宣离婚 二人曾合作《女儿国》《知否知否》</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_76"
                                        href="http://content.mtime.com/article/228641595" target="_blank"><img
                    alt="片单存了！快来重温这20部刺激飙车电影" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/15/113004.84431779.jpg" title="片单存了！快来重温这20部刺激飙车电影" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_76" href="http://content.mtime.com/article/228641595"
                    target="_blank">片单存了！快来重温这20部刺激飙车电影</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_77"
                                        href="http://content.mtime.com/article/228641211" target="_blank"><img
                    alt="行走的洋娃娃！安雅·泰勒·乔伊纽约拍广告 黑色连体裤超模身材瞩目" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/14/112111.45554091.jpg" title="行走的洋娃娃！安雅·泰勒·乔伊纽约拍广告 黑色连体裤超模身材瞩目" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_77" href="http://content.mtime.com/article/228641211"
                    target="_blank">行走的洋娃娃！安雅·泰勒·乔伊纽约拍广告 黑色连体裤超模身材瞩目</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_78"
                                        href="http://content.mtime.com/article/228609721" target="_blank"><img
                    alt="沈腾：江湖总有我的传说" height="116" src="http://img5.mtime.cn/mg/2021/04/13/121503.60703850.jpg"
                    title="沈腾：江湖总有我的传说" width="236"></a><h4><a data-pan="M16_NewsIndex_Globalnewslist_78"
                                                        href="http://content.mtime.com/article/228609721" target="_blank">沈腾：江湖总有我的传说</a>
                </h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_79"
                                        href="http://content.mtime.com/article/228609331" target="_blank"><img
                    alt="你的「日剧老婆」，个个都不简单" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/12/140057.37101385.jpg" title="你的「日剧老婆」，个个都不简单" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_79" href="http://content.mtime.com/article/228609331"
                    target="_blank">你的「日剧老婆」，个个都不简单</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_80"
                                        href="http://content.mtime.com/article/228609219" target="_blank"><img
                    alt="46%的美国人支持巨石竞选总统 本人也回应了" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/12/112340.99544924.jpg" title="46%的美国人支持巨石竞选总统 本人也回应了" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_80" href="http://content.mtime.com/article/228609219"
                    target="_blank">46%的美国人支持巨石竞选总统 本人也回应了</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_81"
                                        href="http://content.mtime.com/article/228609247" target="_blank"><img
                    alt="亨利卡维尔官宣恋情 看起来像《后翼弃兵》剧照" height="116"
                    src="http://img5.mtime.cn/mg/2021/04/12/131225.84311719.jpg" title="亨利卡维尔官宣恋情 看起来像《后翼弃兵》剧照" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_81" href="http://content.mtime.com/article/228609247"
                    target="_blank">亨利卡维尔官宣恋情 看起来像《后翼弃兵》剧照</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_82"
                                        href="http://content.mtime.com/article/227202716" target="_blank"><img
                    alt="《后翼弃兵》女星安雅&quot;名利场&quot;杂志写真" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/24/100822.22016589.jpg" title="《后翼弃兵》女星安雅&quot;名利场&quot;杂志写真" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_82" href="http://content.mtime.com/article/227202716"
                    target="_blank">《后翼弃兵》女星安雅"名利场"杂志写真</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_83"
                                        href="http://content.mtime.com/article/227199937" target="_blank"><img
                    alt="庆祝《猎鹰与冬兵》开播，世界各地地标亮起美队盾牌" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/20/070413.15339846.jpg" title="庆祝《猎鹰与冬兵》开播，世界各地地标亮起美队盾牌" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_83" href="http://content.mtime.com/article/227199937"
                    target="_blank">庆祝《猎鹰与冬兵》开播，世界各地地标亮起美队盾牌</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_84"
                                        href="http://content.mtime.com/article/227199497" target="_blank"><img
                    alt="《曼达洛人》第二季CG特效解析" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/19/155516.53318888.jpg" title="《曼达洛人》第二季CG特效解析" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_84" href="http://content.mtime.com/article/227199497"
                    target="_blank">《曼达洛人》第二季CG特效解析</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_85"
                                        href="http://content.mtime.com/article/227198825" target="_blank"><img
                    alt="洛杉矶影院重开 诺兰夫妇又跑去支持了" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/18/110131.60215868.jpg" title="洛杉矶影院重开 诺兰夫妇又跑去支持了" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_85" href="http://content.mtime.com/article/227198825"
                    target="_blank">洛杉矶影院重开 诺兰夫妇又跑去支持了</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_86"
                                        href="http://content.mtime.com/article/227198819" target="_blank"><img
                    alt="山崩地裂！《金刚大战哥斯拉》片段曝光" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/18/103825.11187056.jpg" title="山崩地裂！《金刚大战哥斯拉》片段曝光" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_86" href="http://content.mtime.com/article/227198819"
                    target="_blank">山崩地裂！《金刚大战哥斯拉》片段曝光</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_87"
                                        href="http://content.mtime.com/article/227197404" target="_blank"><img
                    alt="&quot;法国奥斯卡&quot;颁奖现场女演员全裸抗议" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/15/152414.26716728.jpg" title="&quot;法国奥斯卡&quot;颁奖现场女演员全裸抗议" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_87" href="http://content.mtime.com/article/227197404"
                    target="_blank">"法国奥斯卡"颁奖现场女演员全裸抗议</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_88"
                                        href="http://content.mtime.com/article/227197297" target="_blank"><img
                    alt="瑞恩高斯林和《阿凡达》不得不说的故事" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/15/145613.53007248.jpg" title="瑞恩高斯林和《阿凡达》不得不说的故事" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_88" href="http://content.mtime.com/article/227197297"
                    target="_blank">瑞恩高斯林和《阿凡达》不得不说的故事</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_89"
                                        href="http://content.mtime.com/article/227195128" target="_blank"><img
                    alt="有童年内味儿！《忍者神龟》游戏预告" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/11/092404.42900071.jpg" title="有童年内味儿！《忍者神龟》游戏预告" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_89" href="http://content.mtime.com/article/227195128"
                    target="_blank">有童年内味儿！《忍者神龟》游戏预告</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_90"
                                        href="http://content.mtime.com/article/227192105" target="_blank"><img
                    alt="好莱坞男星尼古拉斯·凯奇第五次结婚" height="116"
                    src="http://img5.mtime.cn/mg/2021/03/06/170725.61304369.jpg" title="好莱坞男星尼古拉斯·凯奇第五次结婚" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_90" href="http://content.mtime.com/article/227192105"
                    target="_blank">好莱坞男星尼古拉斯·凯奇第五次结婚</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_91"
                                        href="http://content.mtime.com/article/227186820" target="_blank"><img
                    alt="“好莱坞报道者”推颁奖季男女演员写真" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/26/093444.84032733.jpg" title="“好莱坞报道者”推颁奖季男女演员写真" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_91" href="http://content.mtime.com/article/227186820"
                    target="_blank">“好莱坞报道者”推颁奖季男女演员写真</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_92"
                                        href="http://content.mtime.com/article/227179977" target="_blank"><img
                    alt="查理兹塞隆等群星亮相《名利场》好莱坞特刊" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/24/093725.28666478.jpg" title="查理兹塞隆等群星亮相《名利场》好莱坞特刊" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_92" href="http://content.mtime.com/article/227179977"
                    target="_blank">查理兹塞隆等群星亮相《名利场》好莱坞特刊</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_93"
                                        href="http://content.mtime.com/article/227178647" target="_blank"><img
                    alt="吉娜：我不是唯一被“迪士尼”欺负的人" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/22/092609.41127917.jpg" title="吉娜：我不是唯一被“迪士尼”欺负的人" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_93" href="http://content.mtime.com/article/227178647"
                    target="_blank">吉娜：我不是唯一被“迪士尼”欺负的人</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_94"
                                        href="http://content.mtime.com/article/227176936" target="_blank"><img
                    alt="金·卡戴珊申请和坎耶·韦斯特离婚" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/20/090541.70256354.jpg" title="金·卡戴珊申请和坎耶·韦斯特离婚" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_94" href="http://content.mtime.com/article/227176936"
                    target="_blank">金·卡戴珊申请和坎耶·韦斯特离婚</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_95"
                                        href="http://content.mtime.com/article/227178170" target="_blank"><img
                    alt="裴淳华教老外说普通话“脱裤子放屁”" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/21/222305.74923413.jpg" title="裴淳华教老外说普通话“脱裤子放屁”" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_95" href="http://content.mtime.com/article/227178170"
                    target="_blank">裴淳华教老外说普通话“脱裤子放屁”</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_96"
                                        href="http://content.mtime.com/article/227174372" target="_blank"><img
                    alt="Netflix《布里奇顿》女星菲比·黛内芙写真" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/17/174843.52171502.jpg" title="Netflix《布里奇顿》女星菲比·黛内芙写真" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_96" href="http://content.mtime.com/article/227174372"
                    target="_blank">Netflix《布里奇顿》女星菲比·黛内芙写真</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_97"
                                        href="http://content.mtime.com/article/227168444" target="_blank"><img
                    alt="贾老板向布兰妮斯皮尔斯、珍妮·杰克逊道歉" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/13/131101.76793076.jpg" title="贾老板向布兰妮斯皮尔斯、珍妮·杰克逊道歉" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_97" href="http://content.mtime.com/article/227168444"
                    target="_blank">贾老板向布兰妮斯皮尔斯、珍妮·杰克逊道歉</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_98"
                                        href="http://content.mtime.com/article/227168395" target="_blank"><img
                    alt="葫芦娃、圣斗士和樱桃小丸子相遇在《唐探3》" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/13/141820.61852713.jpg" title="葫芦娃、圣斗士和樱桃小丸子相遇在《唐探3》" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_98" href="http://content.mtime.com/article/227168395"
                    target="_blank">葫芦娃、圣斗士和樱桃小丸子相遇在《唐探3》</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_99"
                                        href="http://content.mtime.com/article/227165808" target="_blank"><img
                    alt="王宝强《时尚先生》写真宣传春节档新片" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/10/112141.65521316.jpg" title="王宝强《时尚先生》写真宣传春节档新片" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_99" href="http://content.mtime.com/article/227165808"
                    target="_blank">王宝强《时尚先生》写真宣传春节档新片</a></h4></div>
              </li>
              <li>
                <div class="sx-type"><a class="picwrap" data-pan="M16_NewsIndex_Globalnewslist_100"
                                        href="http://content.mtime.com/article/227164884" target="_blank"><img
                    alt="歌手威肯超级碗中场秀表演创纪录" height="116"
                    src="http://img5.mtime.cn/mg/2021/02/08/143102.35679474.jpg" title="歌手威肯超级碗中场秀表演创纪录" width="236"></a><h4><a
                    data-pan="M16_NewsIndex_Globalnewslist_100" href="http://content.mtime.com/article/227164884"
                    target="_blank">歌手威肯超级碗中场秀表演创纪录</a></h4></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="ad-normal-plot"></div>
      <div class="m-planwrap">
        <div id="plot-rolling-box" class="plan-contwrap imgrolling"><h4 class="news-title"><b>时光策划</b><em></em></h4><a
            class="last" data-pan="M16_News_Plot_Up" data-plugin="swiper-upbtn" href="javascript:void(0);"
            style="display: none;"><i></i></a><a class="next" data-pan="M16_News_Plot_Down" data-plugin="swiper-downbtn"
                                                 href="javascript:void(0);"><i></i></a>
          <div class="plan-cont imgrollinner">
            <ul class="fix" data-plugin="swiper-box" data-swiper-page="1" style="width: 2460px; position: relative;">
              <li data-plugin="swiper-itbox"><a class="picwrap" data-pan="M16_NewsIndex_Featurelist_1"
                                                href="http://general.mtime.com/review/2020/index.html" target="_blank"><img
                  alt="2021年时光大赏 拥抱2021电影的世界里我们无所不能" height="225"
                  src="http://img5.mtime.cn/mg/2021/01/08/102632.35644975.jpg" title="2021年时光大赏 拥抱2021电影的世界里我们无所不能" width="380"></a>
                <div class="plan-info"><h4><a data-pan="M16_NewsIndex_Featurelist_1" href="http://general.mtime.com/review/2020/index.html"
                                              target="_blank">2021年时光大赏</a></h4>
                  <p><a data-pan="M16_NewsIndex_Featurelist_1" href="http://general.mtime.com/review/2020/index.html"
                        target="_blank">拥抱2021电影的世界里我们无所不能</a></p></div>
              </li>
              <li data-plugin="swiper-itbox"><a class="picwrap" data-pan="M16_NewsIndex_Featurelist_2"
                                                href="http://content.mtime.com/article/228731648" target="_blank"><img
                  alt="《失控玩家》中这些彩蛋你看出来了吗？ 狼叔美队来客串，光剑绿巨人都亮相" height="225"
                  src="http://img5.mtime.cn/mg/2021/09/09/161054.10273916.jpg" title="《失控玩家》中这些彩蛋你看出来了吗？ 狼叔美队来客串，光剑绿巨人都亮相" width="380"></a>
                <div class="plan-info"><h4><a data-pan="M16_NewsIndex_Featurelist_2" href="http://content.mtime.com/article/228731648"
                                              target="_blank">《失控玩家》中这些彩蛋你看出来了吗？</a></h4>
                  <p><a data-pan="M16_NewsIndex_Featurelist_2" href="http://content.mtime.com/article/228731648"
                        target="_blank">狼叔美队来客串，光剑绿巨人都亮相</a></p></div>
              </li>
              <li data-plugin="swiper-itbox"><a class="picwrap" data-pan="M16_NewsIndex_Featurelist_3"
                                                href="http://content.mtime.com/article/228734390" target="_blank"><img
                  alt="2021大女主动作片“泛滥成灾”了吗？ 杀手、特工、保镖、特种兵飒爽复仇"
                  height="225" src="http://img5.mtime.cn/mg/2021/09/09/160929.43541038.jpg" title="2021大女主动作片“泛滥成灾”了吗？ 杀手、特工、保镖、特种兵飒爽复仇"
                  width="380"></a>
                <div class="plan-info"><h4><a data-pan="M16_NewsIndex_Featurelist_3" href="http://content.mtime.com/article/228734390"
                                              target="_blank">2021大女主动作片“泛滥成灾”了吗？</a></h4>
                  <p><a data-pan="M16_NewsIndex_Featurelist_3" href="http://content.mtime.com/article/228734390"
                        target="_blank">杀手、特工、保镖、特种兵飒爽复仇</a></p></div>
              </li>
              <li data-plugin="swiper-itbox"><a class="picwrap" data-pan="M16_NewsIndex_Featurelist_4"
                                                href="http://content.mtime.com/article/10258645" target="_blank"><img
                  alt="《荒岛余生》20年了,你还记得威尔逊吗？ 汤姆汉克斯四年孤岛求生 硬核野外生存指南"
                  height="225" src="http://img5.mtime.cn/mg/2021/01/04/160333.93781817.jpg"
                  title="《荒岛余生》20年了,你还记得威尔逊吗？ 汤姆汉克斯四年孤岛求生 硬核野外生存指南" width="380"></a>
                <div class="plan-info"><h4><a data-pan="M16_NewsIndex_Featurelist_4" href="http://content.mtime.com/article/10258645"
                                              target="_blank">《荒岛余生》20年了,你还记得威尔逊吗？</a></h4>
                  <p><a data-pan="M16_NewsIndex_Featurelist_4" href="http://content.mtime.com/article/10258645"
                        target="_blank">汤姆汉克斯四年孤岛求生 硬核野外生存指南</a></p></div>
              </li>
              <li data-plugin="swiper-itbox"><a class="picwrap"
                                                data-pan="M16_NewsIndex_Featurelist_5" href="http://feature.mtime.com/2019/19review/#/index.html"
                                                target="_blank"><img
                  alt="再见2019，用电影来一场盛大告别 2019年时光大赏回顾" height="225"
                  src="http://img5.mtime.cn/mg/2021/01/05/114342.80667842.jpg" title="再见2019，用电影来一场盛大告别 2019年时光大赏回顾" width="380"></a>
                <div class="plan-info"><h4><a data-pan="M16_NewsIndex_Featurelist_5" href="http://feature.mtime.com/2019/19review/#/index.html"
                                              target="_blank">再见2019，用电影来一场盛大告别</a></h4>
                  <p><a data-pan="M16_NewsIndex_Featurelist_5" href="http://feature.mtime.com/2019/19review/#/index.html"
                        target="_blank">2019年时光大赏回顾</a></p></div>
              </li>
              <li data-plugin="swiper-itbox"><a class="g_more" data-pan="M16_NewsIndex_Featurelist_More"
                                                href="http://news.mtime.com/feature/"><em class="add"></em>查看更多</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="m-talkwrap">
        <div class="talkwrap"><h4 class="news-title"><b>时光对话</b><em></em></h4>
          <dl class="fix">
            <dt><a class="picwrap" data-pan="M16_NewsIndex_Talk_Img" href="http://content.mtime.com/article/228665766"
                   target="_blank"><img alt="这个肌肉男背后有不少故事 专访《速9》男主角范·迪塞尔"
                                                          height="445"
                                                          src="http://img5.mtime.cn/mg/2021/07/14/170648.71274806.jpg" title="这个肌肉男背后有不少故事 专访《速9》男主角范·迪塞尔"
                                                          width="790"><em class="pic-video"></em></a></dt>
            <dd>
              <div class="talk-cont"><h4><i></i><a data-pan="M16_NewsIndex_Talk_Title" href="http://content.mtime.com/article/228665766"
                                                   target="_blank">这个肌肉男背后有不少故事</a></h4><h5><a
                  data-pan="M16_NewsIndex_Talk_Title" href="http://content.mtime.com/article/228665766" target="_blank">专访《速9》男主角范·迪塞尔</a>
              </h5>
                <p>范迪塞尔有个双胞胎哥哥叫保罗，后悔错过《速激2》<a data-pan="M16_NewsIndex_Talk_More" href="http://content.mtime.com/article/228665766"
                                              target="_blank">&nbsp;&nbsp;查看全文 &gt;</a></p></div>
              <div id="talk-review-rolling-box" class="talk-review imgrolling"><strong>往期回顾 ：</strong>
                <div class="plan-cont imgrollinner">
                  <ul class="fix" data-plugin="swiper-box" data-swiper-page="1"
                      style="width: 390px; position: relative;">
                    <li data-plugin="swiper-itbox"><a class="picwrap" data-pan="M16_NewsIndex_Talkhistory_2"
                                                      href="http://content.mtime.com/article/10252252" target="_blank"><img
                        alt="诺兰谈《信条》:放了很多007元素在其中 盗梦空间的惊人续集 or疯狂版星际穿越？"
                        height="70"
                        src="http://img5.mtime.cn/mg/2021/01/05/082353.21345451.jpg" title="诺兰谈《信条》:放了很多007元素在其中 盗梦空间的惊人续集 or疯狂版星际穿越？" width="124"></a></li>
                    <li data-plugin="swiper-itbox"><a class="picwrap" data-pan="M16_NewsIndex_Talkhistory_3"
                                                      href="http://content.mtime.com/article/10259349" target="_blank"><img
                        alt="专访《唐探3》主演 陈思诚不懂我，能把唐仁写得这么好吗？ 专访《唐人街探案3》三大主演"
                        height="70"
                        src="http://img5.mtime.cn/mg/2021/07/14/170945.53092584.jpg" title="专访《唐探3》主演 陈思诚不懂我，能把唐仁写得这么好吗？ 专访《唐人街探案3》三大主演" width="124"></a></li>
                    <li data-plugin="swiper-itbox"><a class="g_more" data-pan="M16_NewsIndex_Talkhistory_More"
                                                      href="http://news.mtime.com/conversation/"><em class="add"></em>查看更多</a>
                    </li>
                  </ul>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div id="ad-normal-footer"></div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";

export default {
  name: "SelfMade",
  components: {HeaderNav}
}
</script>

<style scoped>
/*! CSS Used from: http://s0.mtime.cn/public/nodewww/2021080215416/css/common/public.css */
a {
  color: #333;
}

a, a:hover {
  text-decoration: none;
}

dd, div, dl, dt, em, h4, h5, input, li, p, ul {
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

h4, h5 {
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

.fl {
  float: left;
}

.fr {
  float: right;
}

.selctsearch {
  font-size: 14px;
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

.pagesize {
  padding: 50px 0;
  text-align: center;
}

.pagesize a {
  width: 78px;
  line-height: 35px;
  border-radius: 20px;
  margin: 0 5px;
}

.pagesize a:hover {
  color: #0096ff;
}

.pagesize a.cur {
  background: #0096ff;
  color: #fff;
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

.topmenu {
  height: 89px;
  position: relative;
  z-index: 4;
}

.topmenu .topmenuer {
  padding-top: 22px;
}

.topmenu .menunav {
  margin: 3px 0 0 18px;
  float: left;
}

.topmenu .menunav dd {
  float: left;
  font-size: 16px;
  margin-right: 50px;
  position: relative;
}

.topmenu .menunav dd a {
  display: inline-block;
  border-bottom: 3px solid #fff;
  padding: 8px 0 5px;
  font-weight: 700;
}

.topmenu .menunav dd.on a {
  color: #333;
  border-bottom-color: #333;
}

.topmenu .topsearch {
  float: right;
  margin-right: 20px;
}

.topmenu .topmenuer {
  width: 1200px;
  margin: 0 auto;
}

.pagesize a, .selctsearch i, .selctsearch span, .selctsearch strong {
  display: inline-block;
  *display: inline;
  position: relative;
  zoom: 1;
  vertical-align: middle;
}

.headsearch2 .showsearch {
  width: 100%;
}

/*! CSS Used from: http://s0.mtime.cn/public/nodewww/2021080215416/css/news/news.css */
.searchshadow, .topsearch {
  position: relative;
  zoom: 1;
}

.topsearch {
  width: 500px;
  height: 38px;
  margin: auto;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  z-index: 2;
}

.searchshadow {
  height: 39px;
  border-radius: 20px;
  padding-left: 100px;
  z-index: 11;
}

.selctsearch {
  height: 38px;
  line-height: 38px;
  width: 100px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  color: #999;
  font-size: 14px;
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
  position: absolute;
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
  position: absolute;
  right: 3px;
  top: 3px;
  border-radius: 20px;
}

a.button i {
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/head.png) -118px -45px no-repeat;
  width: 19px;
  height: 19px;
  position: absolute;
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
  position: absolute;
  right: 0;
  top: 41px;
  z-index: 10;
  font-size: 12px;
  line-height: 21px;
}

.topmenu {
  height: 89px;
  position: relative;
  z-index: 4;
}

.topmenu .topmenuer {
  padding-top: 22px;
}

.topmenu .menunav {
  margin: 3px 0 0 18px;
  float: left;
}

.topmenu .menunav dd {
  float: left;
  font-size: 16px;
  margin-right: 50px;
  position: relative;
}

.topmenu .menunav dd a {
  display: inline-block;
  border-bottom: 3px solid #fff;
  padding: 8px 0 5px;
  font-weight: 700;
}

.topmenu .menunav dd.on a {
  color: #333;
  border-bottom-color: #333;
}

.topmenu .topsearch {
  float: right;
  margin-right: 20px;
}

.news-headimg {
  padding-bottom: 22px;
}

.news-headimg a {
  color: #fff;
}

.news-headimg dt {
  width: 800px;
  height: 450px;
  float: left;
  position: relative;
  overflow: hidden;
}

.news-headimg dt img {
  width: 800px;
  height: 450px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.news-headimg dt .news-info {
  width: 782px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/newsbg.png) repeat-x;
  padding: 10px 0 15px 18px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}

.news-headimg dt .news-info h4 {
  font-size: 30px;
  color: #fff;
  line-height: 30px;
  padding: 8px 10px 10px 0;
}

.news-headimg dt .news-info p {
  font-size: 18px;
  color: #e7e7e7;
}

.news-headimg dd {
  width: 392px;
  height: 221px;
  float: right;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
}

.news-headimg dd img {
  width: 392px;
  height: 221px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.news-headimg dd .news-info {
  width: 380px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/newsbg.png) 0 4px repeat-x;
  padding: 10px 0 8px 12px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
}

.news-headimg dd .news-info h4 {
  font-size: 16px;
  color: #fff;
  line-height: 16px;
  padding: 6px 10px 4px 0;
}

.news-headimg dd .news-info p {
  font-size: 14px;
  color: #e7e7e7;
}

.news-headimg .g-detail {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  filter: alpha(opacity=0);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}

.icon-pic, .pic-video {
  opacity: 1;
}

.picwrap:hover .icon-pic, .picwrap:hover .pic-video {
  opacity: .7;
}

.newscontent {
  overflow: hidden;
  padding-top: 22px;
}

.newscontent .left-news {
  width: 880px;
  margin-right: 30px;
  overflow: hidden;
}

.newscontent .left-news .newslisttab {
  height: 36px;
  border-bottom: 2px solid #e6e6e6;
}

.newscontent .left-news .newslisttab dd {
  font-size: 16px;
  float: left;
  display: inline;
  width: 124px;
  text-align: left;
  position: relative;
}

.newscontent .left-news .newslisttab dd a {
  cursor: pointer;
  padding-bottom: 17px;
  position: relative;
}

.newscontent .left-news .newslisttab dd a:hover {
  color: #1f7dd7;
}

.newscontent .left-news .newslisttab dd.cur a {
  color: #1f7dd7;
  border-bottom: 2px solid #1f7dd7;
}

.newscontent .left-cont {
  padding-top: 24px;
  position: relative;
  width: 900px;
}

.newscontent .left-cont li {
  float: left;
  margin-right: 20px;
  height: 256px;
  overflow: hidden;
}

.news-cont {
  width: 280px;
}

.news-cont .picwrap {
  height: 138px;
  margin-bottom: 14px;
  display: block;
  position: relative;
  overflow: hidden;
}

.news-cont .picwrap img {
  width: 280px;
  height: 138px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.news-cont .picwrap .pic-video {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 16px;
  bottom: 8px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) 0 -47px no-repeat;
}

.news-cont .picwrap .icon-pic {
  width: 32px;
  height: 24px;
  position: absolute;
  left: 12px;
  bottom: 6px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/newspic.png) 0 -160px no-repeat;
}

.news-cont h4 {
  font-size: 16px;
  padding-bottom: 4px;
}

.news-cont h4 a {
  display: block;
}

.news-cont .news-time, .news-cont p a {
  font-size: 14px;
  color: #888;
  padding-bottom: 6px;
  display: block;
}

.news-more {
  width: 160px;
  height: 36px;
  font-size: 16px;
  color: #fff;
  line-height: 36px;
  text-align: center;
  border-radius: 20px;
  background: #1e7dd7;
  display: block;
  margin: 0 auto 66px;
}

.news-more em.add {
  width: 18px;
  height: 18px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -58px -26px no-repeat;
}

.news-more:hover {
  background: #0379c8;
  color: #fff;
}

.right-news {
  width: 288px;
  border: 1px solid #e6e6e6;
  border-top: 0;
  overflow: hidden;
}

.right-news .right-title {
  width: 290px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #333;
  background: #e6e6e6;
}

.right-news .short-news {
  padding: 0 20px 0 28px;
  position: relative;
  margin-top: 10px;
  overflow: hidden;
}

.right-news .short-news .scroll {
  position: absolute;
  right: 4px;
  top: 0;
  width: 8px;
  height: 218px;
}

.right-news .short-news .scroll .bar {
  width: 8px;
  height: 218px;
  background: #e6e6e6;
  border-radius: 20px;
  overflow: hidden;
  display: block;
  cursor: pointer;
}

.right-news .short-news ul {
  position: relative;
  left: 0;
  top: 0;
}

.right-news .short-news ul li {
  padding: 16px 0;
  border-bottom: 1px solid #e6e6e6;
}

.right-news .short-news ul li .sx-type img {
  width: 236px;
  height: 116px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.right-news .short-news ul li .sx-type a.picwrap {
  width: 236px;
  height: 116px;
  overflow: hidden;
  display: block;
  margin-bottom: 10px;
}

.m-planwrap .plan-contwrap, .m-talkwrap .talkwrap, .news-headimg, .newscontent, .topmenu .topmenuer {
  width: 1200px;
  margin: 0 auto;
}

.news-more em.add, .selctsearch i, .selctsearch span, .selctsearch strong {
  display: inline-block;
  *display: inline;
  position: relative;
  zoom: 1;
  vertical-align: middle;
}

.m-talkwrap .talkwrap dl dd h5 a, .news-cont .news-time, .news-cont h4 a, .news-cont p a, .news-headimg dd .news-info h4, .news-headimg dd .news-info p, .news-headimg dt .news-info h4, .news-headimg dt .news-info p, .plan-cont ul li .plan-info h4 a, .plan-cont ul li .plan-info p a {
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.imgrolling {
  position: relative;
}

.imgrolling .last, .imgrolling .next {
  background: url(http://static1.mtime.cn/static/images/bg/000000_40.png);
  width: 32px;
  height: 68px;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -34px;
  z-index: 4;
  opacity: .8;
  filter: alpha(opacity=80);
}

.imgrolling .next {
  right: 0;
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

.m-planwrap a.last {
  left: -36px;
}

.m-planwrap a.next {
  right: -36px;
}

.m-planwrap {
  background: #f5f5f5;
  margin-top: -4px;
  position: relative;
}

.m-planwrap .plan-contwrap {
  padding: 45px 0;
  position: relative;
}

.m-planwrap .g_more {
  width: 380px;
  height: 225px;
  line-height: 225px;
  font-size: 18px;
}

.plan-cont {
  width: 1200px;
  height: 282px;
  margin-top: 30px;
}

.plan-cont ul {
  position: absolute;
  left: 0;
  top: 0;
}

.plan-cont ul li .plan-info, h4.news-title {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.plan-cont ul li {
  float: left;
  display: inline;
  width: 380px;
  margin-right: 30px;
}

.plan-cont ul li .picwrap {
  width: 380px;
  overflow: hidden;
}

.plan-cont ul li .picwrap img {
  width: 380px;
  height: 225px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.plan-cont ul li .plan-info {
  width: 350px;
  height: 44px;
  padding: 16px 0;
  margin: -20px auto 0;
  background: #f5f5f5;
}

.plan-cont ul li .plan-info h4 a, .plan-cont ul li .plan-info p a {
  display: block;
  padding: 0 10px;
}

.plan-cont ul li .plan-info h4 {
  font-size: 18px;
  padding-bottom: 6px;
}

.plan-cont ul li .plan-info p {
  font-size: 16px;
  color: #666;
}

h4.news-title em {
  content: '';
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  top: 50%;
  background: #e6e6e6;
  z-index: 0;
}

.m-talkwrap, h4.news-title b {
  background: #f5f5f5;
}

h4.news-title b {
  font-size: 28px;
  line-height: 30px;
  color: #333;
  padding: 0 30px;
  position: relative;
  z-index: 1;
}

.m-talkwrap .talkwrap {
  padding-bottom: 40px;
}

.m-talkwrap .talkwrap dl {
  padding-top: 30px;
}

.m-talkwrap .talkwrap dl dt {
  float: left;
  display: inline;
  width: 790px;
  height: 445px;
  margin-right: 30px;
}

.m-talkwrap .talkwrap dl dt .picwrap {
  height: 445px;
  overflow: hidden;
  position: relative;
  display: block;
}

.m-talkwrap .talkwrap dl dt .picwrap img {
  width: 790px;
  height: 445px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.m-talkwrap .talkwrap dl dt .picwrap .pic-video {
  width: 92px;
  height: 92px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/newspic.png) -37px -64px no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -46px;
  margin-top: -46px;
  z-index: 1;
}

.m-talkwrap .talkwrap dl dd {
  float: left;
  display: inline;
  width: 380px;
  height: 445px;
  position: relative;
}

.m-talkwrap .talkwrap dl dd h4 {
  font-size: 24px;
  line-height: 34px;
  position: relative;
}

.m-talkwrap .talkwrap dl dd h4 i {
  content: '';
  display: inline-block;
  margin-right: 4px;
  width: 30px;
  height: 21px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -86px 0 no-repeat;
}

.m-talkwrap .talkwrap dl dd h5 {
  font-size: 22px;
  font-weight: 400;
  padding: 32px 0;
  line-height: 24px;
}

.m-talkwrap .talkwrap dl dd h5 a {
  display: block;
}

.m-talkwrap .talkwrap dl dd p {
  font-size: 16px;
  color: #666;
  line-height: 26px;
  overflow: hidden;
}

.m-talkwrap .talkwrap dl dd p a {
  color: #666;
  display: inline-block;
  padding-left: 5px;
}

.m-talkwrap .talkwrap dl dd .talk-review {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 404px;
}

.m-talkwrap .talkwrap dl dd .talk-review strong {
  font-size: 16px;
  color: #333;
}

.m-talkwrap .talkwrap dl dd .talk-review .plan-cont {
  width: 384px;
  height: 70px;
  margin-top: 14px;
}

.m-talkwrap .talkwrap dl dd .talk-review .plan-cont ul li {
  width: 124px;
  margin-right: 6px;
}

.m-talkwrap .talkwrap dl dd .talk-review .plan-cont ul li img {
  width: 124px;
  height: 70px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.g_more {
  width: 124px;
  height: 70px;
  line-height: 70px;
  background: #e0e0e0;
  text-align: center;
  display: block;
}

.g_more .add {
  margin-right: 4px;
  position: relative;
  top: 2px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(http://s0.mtime.cn/public/nodewww/2021080215416/images/index24.png) -42px -21px no-repeat;
}

@media screen and (max-width: 1280px) {
  .m-planwrap a.last {
    left: 0;
  }

  .m-planwrap a.next {
    right: 0;
  }
}
</style>
