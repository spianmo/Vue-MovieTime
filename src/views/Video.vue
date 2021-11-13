<template>
  <div>
    <header-nav select-item="video"/>
    <div id="app">
      <div class="home-container" data-v-5954443c="">
        <div id="slider" data-v-2912a979="" data-v-5954443c="">
          <div class="window" data-v-2912a979="">
            <ul class="slider-container" data-v-2912a979="" style="transform: translate3d(-3420px, 0px, 0px);">
              <li data-v-2912a979=""><a data-v-2912a979="" href="http://live.mtime.com/live/1080" target="_blank"><img
                  data-v-2912a979="" src="http://img5.mtime.cn/mg/2021/05/20/174008.71480579.jpg" style="width: 1200px;"
                  title="当速度遇上激情沙龙直播"></a></li>
              <li data-v-2912a979=""><a data-v-2912a979="" href="http://live.mtime.com/live/1099" target="_blank"><img
                  data-v-2912a979="" src="http://img5.mtime.cn/mg/2021/10/15/101327.84164905.jpg" style="width: 1200px;"
                  title="成龙动作电影周直播"></a></li>
              <li data-v-2912a979=""><a data-v-2912a979="" href="http://live.mtime.com/live/1098" target="_blank"><img
                  data-v-2912a979="" src="http://img5.mtime.cn/mg/2021/09/29/093955.57788183.jpg" style="width: 1200px;"
                  title="长津湖特别放映直播"></a></li>
              <li data-v-2912a979=""><a data-v-2912a979="" href="http://live.mtime.com/live/1080" target="_blank"><img
                  data-v-2912a979="" src="http://img5.mtime.cn/mg/2021/05/20/174008.71480579.jpg" style="width: 1200px;"
                  title="当速度遇上激情沙龙直播"></a></li>
              <li data-v-2912a979=""><img alt=""
                                          data-v-2912a979="" src="http://img5.mtime.cn/mg/2021/10/15/101327.84164905.jpg"
                                          style="width: 1200px;"></li>
            </ul>
            <ul class="direction" data-v-2912a979="">
              <li class="left" data-v-2912a979=""><img alt=""
                                                       data-v-2912a979=""
                                                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEPklEQVR4XuWbXWgUVxTHz5kk5CGQV+mjD4GEQDYz+xHIm6++70iLolJRbGlRLJZWFFpaqTRYFBVFUVEUP1o/qq02NdU2QdHszIpiSNEoiqIolkhEWdnMlSP/QriP7p2ZO2Se9mnY3+/e/znn7swyzfKLs8QfBMF2Ipqfz+fnmvremREQhuExpVRZwJVSfqFQOG5CQiYEzIRn5uOe5/km4OUe1guYCU9Ev3ieV2ZmNSsEaPAnJiYmfN/3p03BW70DNPhTWPm6SXhrBWiZP93a2up3d3e/MQ1vpQBt5c+0t7eXOzo6anHAWydAgz9bq9X8/v7+13HBWyVA6/O/E1G5UCi8ihPeGgFa5s8h8y/jhrdCgLbt/2hrayt3dnZOJQGfugANfhAj7ouk4FMVoMFfcByn7LruZJLwqQnQ4IdQ7f9LGj4VAVq1vyiZ7+rqep4GfOICtGp/iYh8z/OepQWfqABt2//T3NxczuVyT9OET0yABj88PT3tl0qlJ2nDJyJAgx9Bq3tsA3zsAjT4y01NTX5vb+8jW+BjFaAVvCsCn8vlHtoEH5sAbeWvYts/sA0+FgHayl9Dq7tvI7xxAdrKV+r1ut/X13fPVnijAjT4oKWlxe/p6blrM7wxAdp4W2VmP5/P37Ed3ogALfPXBd513dtZgG9YgLbtb0RR5BeLxX+zAt+QAA3+JlrdeJbg31tAGIYDSqk1cgOl1C3HceRUN5Y1+PcWEATBciLaBeAxjLi3Zo0AAQ3DcINS6htAjyMCN7MmoaGnw5VKZT0zfwtoKX7S/m5kSUJDAgQ0CIJ1RPQdoG/jrH89KxIaFgAJXxPR94C+g5pQzYIEIwIEtFKpfMXMG9EZ7mIaDGyXYEwACuOXSqkf3rUXZjkESXus2CzBqADEYS0RbQL0fUyHciy28jIuAHH4gpl/BPEDtMirNhqIRQAkrGHmAdSEh5gWr9gmITYBiMNqItoM6EciwXXdyzZJiFUAJKwiop8A/RhxGLFFQuwC0B0+V0ptAbQ8EJGJcdgGCYkIgITPlFJbAf0UE+PfaUtITADi8CkRbQP0M9QEeUia2pWoAHSHT5hZ3vqW3xKeY2L8Ky0DiQuAhJXMvEM+M7O8GCET41AaElIRgDisIKKdgJ7ExPhn0hJSEwAJM39ZeoFT5GCSElIVIKDVanVZFEW7UROmUBPOJyUhdQECOjo6+rHjOHsA/VIkeJ53LgkJVghAHJYS0V5Av8LE+FvcEqwRAAlLiGgfoOUlaZkYz8YpwSoBaJGLmXk/oGuIw69xSbBOgICGYbhIKXUA0G8wMZ6OQ4KVAhCHhUR0EN2hju5w0rQEawWgRX4URdEhQMufpaQmnDApwWoBaJEfOo5zGNAKNeFnUxKsF4A4LCCiI/9DR1E0r1gsGjlFZkIAJMi/RY/K51kpAC3ygyiK5pRKJWOP3jKzA0xlXr/PW9pXOF8h3pQuAAAAAElFTkSuQmCC"></li>
              <li class="right" data-v-2912a979=""><img alt=""
                                                        data-v-2912a979=""
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAERUlEQVR4XuWb289dQxTA19onhBBCCCGEkIpLyJk1QgipEHEXQilVSilfKaW0adPG/RqicSeEuNeLB7x6P3su5/t/vm+WTLM6+dKnXmbPnonzdE5yzj7z++21ZtaevTbC//yFufidc/8i4gfT6fSfXMcscZwsAiI8M6+OA2bmNVrrP0oMPsd/ZBHgvb8thPD3gQG1JCGLgAhurV0DAL+3JiGbgAjunHuQmX9tSUJWASJhLTP/0oqE7AIkHR4GgJ9akDCIAJGwDgB+rF3CYAIieN/367uu+6FmCYMKiODe+0dDCN/XKmFwAZIOGwDguxolFBEgq8PjzPxtbRKKCYjgxpiNiPhNTRKKCpB0eBIAvq5FQnEBsjps6rruyxokjCJA5oSnmfmLsSWMJkDmhAVE/GxMCaMKkDlhMwB8OpaE0QWIhGcB4JMxJFQhQNJhCyLuLS2hGgFSNj8fQvi4pISqBEg6bAWAj0pJqE6ALJEvMvOHJSRUKUDmhG1xm31oCdUKkHR4GQDeH1JC1QIkHbYz87tDSahegEjYwczvDCGhCQGSDjsB4K3cEpoRIBJ2AcCbOSU0JUBWh92I+HouCc0JkDlhDzO/dkACAGgisis+H/LbJgXMZrNLJ5PJPgC4REjvJKK/Dpl6xRebE7C4uHjZ0tJShL9YOF4lopXRcFgemhJgrb0cACL8RZESEfcopd44LOKDvtyMAOfcFRGemVcJ/G6lVFoRjlRCEwL6vp92XRfP/IUCuouI3j5S6JW/q16AMUYhYoS/IA6cmXdqrVNVeLQSqhbgnNMhhH2IeL6E/Q6l1HtHC91EBHjvr2TmmPPnyYC3E1G6MswlocoIMMZcJWF/roC+QkRpbyAX/P6oynmwHMey1l4tS905EvbblFJpdyjHf1SbAt77a2LOA8DZMuG9pLVO+4O54auKAO/9tQJ/loBuJaK0QzwEfDUCrLXXSdifKWf+Ba11ukcwFHwVApxz10uFd4bk/BalVLpLNCT86AL6vl8tFd7pAvocEaX7hEPDjypgPp/fsLy8HCe80+JAuq7bPJ1OPy8BPfoq4Jy7USq8UyXnF7TWqVegpITidYBz7ibJ+VME/hmtdeoWKQlfPAWMMTdLhXeygG4iotQvVBq+qIDZbHbLZDKJ7fQnCehTRJQ6xsaALybAOXdrvLABgBNlqduolEo9g2PBFxFgjLkdEeOZP0Hgn1BKpa7RMeEHF2CtvUMqvOMFdAMRpb7hseEHFdD3/V1d18Uzf5zM9o9prVPneA3wgwnw3t8tFzbHStivV0qlZwdqgR9EgLX2Hnl46hgBfYSI0tMjNcFnF2CtvTfO9og4EdB1RPRzbdCDlMJ9398nOd9J2D+klEpPkNUqIUspbIy5Xyq8/ZyIuFYp9Vut0NkjwFob+30X5MAPEFEsepp4ZYmA+Xy+KoTwVQhhr9b6zybIZZBZBLQEfPBY/wO8MfNQf31PZAAAAABJRU5ErkJggg=="></li>
            </ul>
            <ul class="dots" data-v-2912a979="">
              <li class="" data-v-2912a979=""></li>
              <li class="" data-v-2912a979=""></li>
              <li class="dotted" data-v-2912a979=""></li>
            </ul>
          </div>
        </div>
        <div class="mtime-live" data-v-43dc7a6e="" data-v-5954443c="">
          <div class="mtime-live-title" data-v-43dc7a6e=""><h3 data-v-43dc7a6e="">时光直播</h3> <span data-v-43dc7a6e="">更多&gt;</span>
          </div>
          <div class="mtime-live-content" data-v-43dc7a6e=""><!---->
            <div class="other-live1" data-v-43dc7a6e="">
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/10/14/083438.76121206.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title"
                                                                    data-v-43dc7a6e="">第六届成龙国际动作电影周入城仪式</span> <span
                      class="person" data-v-43dc7a6e="">190956人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/10/16/110342.23040321.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title"
                                                                    data-v-43dc7a6e="">第六届成龙国际动作电影周闭幕式</span> <span
                      class="person" data-v-43dc7a6e="">267028人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/10/15/083924.34971410.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title" data-v-43dc7a6e="">第六届成龙国际动作电影周“我们携手共晋”公益直播</span>
                    <span class="person" data-v-43dc7a6e="">295560人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/10/14/102515.80553446.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title" data-v-43dc7a6e="">第六届成龙国际动作电影周“剧本游戏·大挑战”活动高峰论坛</span>
                    <span class="person" data-v-43dc7a6e="">166612人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/09/27/160802.53173589.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title"
                                                                    data-v-43dc7a6e="">《寻访英雄》之走进长津湖战役</span> <span
                      class="person" data-v-43dc7a6e="">346571人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/09/27/155731.33017537.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title"
                                                                    data-v-43dc7a6e="">“带着父辈看父辈”特别观影活动</span> <span
                      class="person" data-v-43dc7a6e="">262213人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/07/14/164702.71115542.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title"
                                                                    data-v-43dc7a6e="">第六届成龙国际动作电影周发布会直播</span> <span
                      class="person" data-v-43dc7a6e="">313728人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/06/16/090200.14408279.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title" data-v-43dc7a6e="">2021“直击上影节”直播Day10-上影节闭幕式</span>
                    <span class="person" data-v-43dc7a6e="">317027人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/06/16/084828.78916003.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title" data-v-43dc7a6e="">2021“直击上影节”直播Day8-漫步上影节</span>
                    <span class="person" data-v-43dc7a6e="">290274人已观看</span></div> <!----></div>
              </div>
              <div class="other-live1-item" data-v-43dc7a6e="">
                <div class="item-img" data-v-43dc7a6e=""><img alt=""
                                                              data-v-43dc7a6e=""
                                                              src="http://img5.mtime.cn/mg/2021/06/16/084306.17457284.jpg"></div>
                <div class="item-text" data-v-43dc7a6e="">
                  <div class="text-detail" data-v-43dc7a6e=""><span class="title" data-v-43dc7a6e="">2021“直击上影节”直播Day7-上影节杂谈</span>
                    <span class="person" data-v-43dc7a6e="">294613人已观看</span></div> <!----></div>
              </div>
            </div>
          </div>
        </div>
        <div class="announce-block" data-v-5954443c="" data-v-752023ec="">
          <div class="announce-block-title" data-v-752023ec=""><h3 data-v-752023ec="">最新预告</h3> <span
              data-v-752023ec="">更多&gt;</span></div>
          <div class="announce-block-content" data-v-752023ec="">
            <div class="announce-block-content-left" data-v-752023ec="">
              <div class="content-left-pic" data-v-752023ec=""><img alt=""
                                                                    data-v-752023ec=""
                                                                    src="http://img5.mtime.cn/mg/2021/11/12/143843.54979608.jpg"></div>
              <div class="content-left-text" data-v-752023ec=""><span data-v-752023ec="">看见 预告片</span></div>
            </div>
            <div class="announce-block-content-right" data-v-752023ec="">
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/12/113230.44289567.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">大白 预告</span></div>
              </div>
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/12/094517.89518852.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">冰川时代：巴克·怀尔德的冒险之旅 预告</span></div>
              </div>
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/12/090542.15662115.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">与我结婚 先导预告2</span></div>
              </div>
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/12/085656.81815140.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">上帝之手 正式预告</span></div>
              </div>
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/11/162214.11557093.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">再说一次我愿意 先导预告</span></div>
              </div>
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/11/152908.19612511.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">以年为单位的恋爱 难逃一痒版预告</span></div>
              </div>
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/11/143418.91052360.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">李茂换太子 双十一特别视频</span></div>
              </div>
              <div class="content-right-item" data-v-752023ec="">
                <div class="item-pic" data-v-752023ec=""><img alt=""
                                                              data-v-752023ec=""
                                                              src="http://img5.mtime.cn/mg/2021/11/11/140742.74997504.jpg"></div>
                <div class="item-text" data-v-752023ec=""><span data-v-752023ec="">李茂换太子 某宝角色预告</span></div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-5954443c="">
          <div data-v-2a4522ae="" data-v-5954443c="">
            <div class="live-container" data-v-2a4522ae="">
              <div class="live-block-title" data-v-2a4522ae="">
                <div class="left-title" data-v-2a4522ae=""><h3 data-v-2a4522ae="">幕后制作</h3>
                  <div class="el-tabs el-tabs--top" data-v-2a4522ae="">
                    <div class="el-tabs__header is-top">
                      <div class="el-tabs__nav-wrap is-top">
                        <div class="el-tabs__nav-scroll">
                          <div class="el-tabs__nav is-top" role="tablist" style="transform: translateX(0px);">
                            <div class="el-tabs__active-bar is-top"
                                 style="width: 36px; transform: translateX(0px);"></div>
                            <div id="tab-4" aria-controls="pane-4" aria-selected="true" class="el-tabs__item is-top is-active" role="tab"
                                 tabindex="0">华语
                            </div>
                            <div id="tab-5" aria-controls="pane-5" class="el-tabs__item is-top" role="tab"
                                 tabindex="-1">欧美
                            </div>
                            <div id="tab-6" aria-controls="pane-6" class="el-tabs__item is-top" role="tab"
                                 tabindex="-1">日韩
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="el-tabs__content">
                      <div id="pane-4" aria-labelledby="tab-4" class="el-tab-pane" data-v-2a4522ae="" role="tabpanel">
                        华语
                      </div>
                      <div id="pane-5" aria-hidden="true" aria-labelledby="tab-5" class="el-tab-pane" data-v-2a4522ae=""
                           role="tabpanel" style="display: none;">
                        欧美
                      </div>
                      <div id="pane-6" aria-hidden="true" aria-labelledby="tab-6" class="el-tab-pane" data-v-2a4522ae=""
                           role="tabpanel" style="display: none;">
                        日韩
                      </div>
                    </div>
                  </div>
                </div>
                <span data-v-2a4522ae="">更多&gt;</span></div>
              <div data-v-2a4522ae="">
                <div class="live-content" data-v-2a4522ae="">
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        奇幻
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/09/16/153154.19222549.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">封神三部曲 剧组幕后揭秘之物理特效组</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        奇幻
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/09/16/154307.57891770.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">封神三部曲 剧组幕后揭秘之置景组</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        主旋律
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/09/26/105151.73256668.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">我和我的祖国 幕后特辑</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        文艺片
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/11/01/103907.86573424.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">南方车站的聚会 幕后全纪录之胡歌桂纶镁</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        文艺片
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/12/09/113418.59351236.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">南方车站的聚会 幕后特辑之聚会诞生记</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        战争
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2020/11/18/100502.29906317.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">金刚川 以心筑桥幕后特辑</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        动画
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2020/10/02/163226.66651672.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">姜子牙 幕后主创特辑</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        文艺片
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2020/11/06/161311.27085615.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">气球 幕后制作特辑</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        战争
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2020/11/11/153401.43136036.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">金刚川 幕后爆破视频</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        喜剧
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2020/11/27/115231.88382329.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">沐浴之王 幕后欢乐特辑</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        科幻
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2020/12/10/154648.16700387.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">缉魂 幕后特辑</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        文艺片
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2021/03/10/143649.15736171.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">又见奈良 幕后班底特辑</div> <!----></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-5954443c="">
          <div data-v-2a4522ae="" data-v-5954443c="">
            <div class="live-container" data-v-2a4522ae="">
              <div class="live-block-title" data-v-2a4522ae="">
                <div class="left-title" data-v-2a4522ae=""><h3 data-v-2a4522ae="">电影花边</h3>
                  <div class="el-tabs el-tabs--top" data-v-2a4522ae="">
                    <div class="el-tabs__header is-top">
                      <div class="el-tabs__nav-wrap is-top">
                        <div class="el-tabs__nav-scroll">
                          <div class="el-tabs__nav is-top" role="tablist" style="transform: translateX(0px);">
                            <div class="el-tabs__active-bar is-top"
                                 style="width: 36px; transform: translateX(0px);"></div>
                            <div id="tab-7" aria-controls="pane-7" aria-selected="true" class="el-tabs__item is-top is-active" role="tab"
                                 tabindex="0">华语
                            </div>
                            <div id="tab-8" aria-controls="pane-8" class="el-tabs__item is-top" role="tab"
                                 tabindex="-1">欧美
                            </div>
                            <div id="tab-9" aria-controls="pane-9" class="el-tabs__item is-top" role="tab"
                                 tabindex="-1">日韩
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="el-tabs__content">
                      <div id="pane-7" aria-labelledby="tab-7" class="el-tab-pane" data-v-2a4522ae="" role="tabpanel">
                        华语
                      </div>
                      <div id="pane-8" aria-hidden="true" aria-labelledby="tab-8" class="el-tab-pane" data-v-2a4522ae=""
                           role="tabpanel" style="display: none;">
                        欧美
                      </div>
                      <div id="pane-9" aria-hidden="true" aria-labelledby="tab-9" class="el-tab-pane" data-v-2a4522ae=""
                           role="tabpanel" style="display: none;">
                        日韩
                      </div>
                    </div>
                  </div>
                </div>
                <span data-v-2a4522ae="">更多&gt;</span></div>
              <div data-v-2a4522ae="">
                <div class="live-content" data-v-2a4522ae="">
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        混剪
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/01/02/174236.96079289.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">2018时光大赏混剪 新版</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        混剪
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/12/30/185705.12551600.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">2019时光大赏混剪</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        电影历史
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2019/12/23/191947.49242262.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">香港喜剧电影混剪</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        全球拾趣
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2020/06/28/103819.69389480.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">梁朝伟玩滑板</div> <!----></div>
                  <div class="liv-content-item" data-v-2a4522ae="">
                    <div class="item-pic" data-v-2a4522ae="">
                      <div class="item-remark" data-v-2a4522ae="">
                        混剪
                      </div>
                      <img alt="" data-v-2a4522ae="" src="http://img5.mtime.cn/mg/2021/01/07/172351.63461830.jpg"></div>
                    <div class="item-title" data-v-2a4522ae="">2020年时光大赏混剪全片</div> <!----></div>
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
import HeaderNav from "@/components/HeaderNav";

export default {
  name: "Video",
  components: {HeaderNav}
}
</script>

<style scoped>
/*! CSS Used from: http://s0.mtime.cn/public/nodewww/2021062815360/css/common/public.css */
a {
  color: #333;
}

a, a:hover {
  text-decoration: none;
}

div, h3, li, ul {
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

h3 {
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
  background: url(http://s0.mtime.cn/public/nodewww/2021062815360/images/autoimg.png) center no-repeat #f2f2f2;
  background-size: 50% auto;
  vertical-align: middle;
}

/*! CSS Used from: http://s0.mtime.cn/dist/film/1627891245200/bundle.32fccb2952712e479736.css */
#app {
  background: #fff;
}

a {
  text-decoration: none;
  color: #000;
}

body div:hover {
  cursor: default;
}

#app {
  background-color: #000;
}

a, div, h3, img, li, span, ul {
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

div#app {
  min-height: 580px;
  line-height: 100%;
}

.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 0 15px;
}

.el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #409eff;
  z-index: 1;
  transition: transform .3s cubic-bezier(.645, .045, .355, 1);
  list-style: none;
}

.el-tabs__nav {
  -webkit-transition: -webkit-transform .3s;
}

.el-tabs__nav-wrap {
  overflow: hidden;
  margin-bottom: -1px;
  position: relative;
}

.el-tabs__nav-wrap:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e7ed;
  z-index: 1;
}

.el-tabs__nav-scroll {
  overflow: hidden;
}

.el-tabs__nav {
  white-space: nowrap;
  position: relative;
  transition: transform .3s;
  float: left;
  z-index: 2;
}

.el-tabs__item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
}

.el-tabs__item:focus, .el-tabs__item:focus:active {
  outline: 0;
}

.el-tabs__item.is-active {
  color: #409eff;
}

.el-tabs__item:hover {
  color: #409eff;
  cursor: pointer;
}

.el-tabs__content {
  overflow: hidden;
  position: relative;
}

.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 0;
}

.el-tabs--top .el-tabs__item.is-top:last-child {
  padding-right: 0;
}

/*! CSS Used from: http://s0.mtime.cn/dist/film/1627891245200/css/3.32fccb2952712e479736.css */
a[data-v-2912a979] {
  text-decoration: none;
  color: #000;
}

body div[data-v-2912a979]:hover {
  cursor: default;
}

#slider[data-v-2912a979] {
  text-align: center;
  padding-top: 30px;
  box-sizing: border-box;
}

.window[data-v-2912a979] {
  position: relative;
  width: 100%;
  height: 360px;
  margin: 0 auto 36px;
  overflow: hidden;
}

.slider-container[data-v-2912a979] {
  display: flex;
  position: absolute;
  height: 360px;
}

.left[data-v-2912a979], .right[data-v-2912a979] {
  position: absolute;
  top: 160px;
  width: 50px;
  height: 100px;
  background-color: rgba(0, 0, 0, .3);
  cursor: pointer;
  text-align: center;
}

.left[data-v-2912a979] {
  left: 0;
}

.left img[data-v-2912a979] {
  width: 40px;
  height: 40px;
  display: block;
  margin: 30px auto;
}

.right[data-v-2912a979] {
  right: 0;
}

.right img[data-v-2912a979] {
  width: 40px;
  height: 40px;
  display: block;
  margin: 30px auto;
}

img[data-v-2912a979] {
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.dots[data-v-2912a979] {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.dots li[data-v-2912a979] {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 3px;
  border: 1px solid #d8d8d8;
  border-radius: 50%;
  background-color: #d8d8d8;
  cursor: pointer;
}

.dots .dotted[data-v-2912a979] {
  background-color: #fff;
}

.direction img[data-v-2912a979] {
  background: transparent !important;
}

body div[data-v-43dc7a6e]:hover {
  cursor: default;
}

.mtime-live[data-v-43dc7a6e] {
  padding-top: 30px;
  box-sizing: border-box;
}

.mtime-live-title[data-v-43dc7a6e] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.mtime-live-title h3[data-v-43dc7a6e] {
  font-size: 24px;
  color: #fff;
}

.mtime-live-title span[data-v-43dc7a6e] {
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.mtime-live-content[data-v-43dc7a6e] {
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.mtime-live-content .other-live1[data-v-43dc7a6e] {
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.mtime-live-content .other-live1-item[data-v-43dc7a6e] {
  width: 224px;
  height: 130px;
  margin-right: 20px;
  margin-bottom: 64px;
}

.mtime-live-content .other-live1-item[data-v-43dc7a6e]:nth-child(5n-5) {
  margin-right: 0;
}

.mtime-live-content .other-live1-item .item-img[data-v-43dc7a6e] {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.mtime-live-content .other-live1-item .item-img img[data-v-43dc7a6e] {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: all .6s;
}

.mtime-live-content .other-live1-item .item-img img[data-v-43dc7a6e]:hover {
  transform: scale(1.2);
}

.mtime-live-content .other-live1-item .item-text[data-v-43dc7a6e] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
}

.mtime-live-content .other-live1-item .item-text .text-detail[data-v-43dc7a6e] {
  display: flex;
  flex-direction: column;
  line-height: 19px;
}

.mtime-live-content .other-live1-item .item-text .text-detail .title[data-v-43dc7a6e] {
  font-size: 16px;
  color: #f2f3f6;
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.mtime-live-content .other-live1-item .item-text .text-detail .person[data-v-43dc7a6e] {
  font-size: 12px;
  color: #8798af;
}

body div[data-v-752023ec]:hover {
  cursor: default;
}

.announce-block-title[data-v-752023ec] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 60px;
  box-sizing: border-box;
}

.announce-block-title h3[data-v-752023ec] {
  font-size: 24px;
  color: #fff;
}

.announce-block-title span[data-v-752023ec] {
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.announce-block-content[data-v-752023ec] {
  margin-top: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.announce-block-content-left[data-v-752023ec] {
  width: 350px;
  margin-right: 15px;
}

.announce-block-content-left .content-left-pic[data-v-752023ec] {
  overflow: hidden;
}

.announce-block-content-left .content-left-pic img[data-v-752023ec] {
  width: 350px;
  height: 253px;
  transition: all .6s;
  cursor: pointer;
}

.announce-block-content-left .content-left-pic img[data-v-752023ec]:hover {
  transform: scale(1.2);
}

.announce-block-content-left .content-left-text[data-v-752023ec] {
  display: flex;
  flex-direction: column;
}

.announce-block-content-left .content-left-text > span[data-v-752023ec]:first-child {
  font-size: 20px;
  color: #f2f3f6;
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.announce-block-content-right[data-v-752023ec] {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.announce-block-content-right .content-right-item[data-v-752023ec] {
  width: 197.5px;
  height: auto;
  margin-right: 15px;
  margin-bottom: 12px;
}

.announce-block-content-right .content-right-item[data-v-752023ec]:nth-child(4n-4) {
  margin-right: 0;
}

.announce-block-content-right .content-right-item .item-pic[data-v-752023ec] {
  overflow: hidden;
}

.announce-block-content-right .content-right-item .item-pic img[data-v-752023ec] {
  width: 197.5px;
  height: 110px;
  cursor: pointer;
  transition: all .6s;
}

.announce-block-content-right .content-right-item .item-pic img[data-v-752023ec]:hover {
  transform: scale(1.2);
}

.announce-block-content-right .content-right-item .item-text[data-v-752023ec] {
  margin-top: 3px;
}

.announce-block-content-right .content-right-item .item-text span[data-v-752023ec] {
  font-size: 16px;
  color: #f2f3f6;
  line-height: 19px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

body div[data-v-2a4522ae]:hover {
  cursor: default;
}

[data-v-2a4522ae] .el-tabs__item {
  color: #8798af;
  font-size: 18px;
  height: auto;
  line-height: 22px;
  padding: 0 20px 7px;
}

[data-v-2a4522ae] .el-tabs__header {
  margin: -3px 0 0 !important;
}

[data-v-2a4522ae] .el-tabs__item.is-active {
  color: #fff;
}

[data-v-2a4522ae] .el-tabs__active-bar {
  padding-top: 3px;
  box-sizing: border-box;
  background-color: #f2f3f6;
}

[data-v-2a4522ae] .el-tabs__nav-wrap:after {
  height: 0;
}

[data-v-2a4522ae] .el-tabs__content {
  display: none;
}

.live-container .live-block-title[data-v-2a4522ae] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 66px;
}

.live-container .live-block-title .left-title[data-v-2a4522ae] {
  width: 750px;
  display: flex;
  flex-direction: row;
}

.live-container .live-block-title h3[data-v-2a4522ae] {
  font-size: 24px;
  color: #fff;
  margin-right: 51px;
}

.live-container .live-block-title span[data-v-2a4522ae] {
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.live-container .live-content[data-v-2a4522ae] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 17px;
}

.live-container .live-content .liv-content-item[data-v-2a4522ae] {
  width: 187.5px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

.live-container .live-content .liv-content-item[data-v-2a4522ae]:nth-child(6n-6) {
  margin-right: 0;
}

.live-container .live-content .liv-content-item .item-pic[data-v-2a4522ae] {
  margin-bottom: 5px;
  overflow: hidden;
  position: relative;
}

.live-container .live-content .liv-content-item .item-pic .item-remark[data-v-2a4522ae] {
  position: absolute;
  top: 0;
  right: 5px;
  padding: 5px;
  box-sizing: border-box;
  background: #feb12a;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  font-size: 12px;
}

.live-container .live-content .liv-content-item .item-pic img[data-v-2a4522ae] {
  width: 100%;
  height: 100px;
  cursor: pointer;
  transition: all .6s;
}

.live-container .live-content .liv-content-item .item-pic img[data-v-2a4522ae]:hover {
  transform: scale(1.2);
}

.live-container .live-content .liv-content-item .item-title[data-v-2a4522ae] {
  font-size: 16px;
  color: #f2f3f6;
  margin-bottom: 5px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

body div[data-v-5954443c]:hover {
  cursor: default;
}

.home-container[data-v-5954443c] {
  width: 1200px;
  margin: 0 auto;
  height: auto;
  min-height: 100vh;
  padding-bottom: 163px;
  box-sizing: border-box;
}
</style>
