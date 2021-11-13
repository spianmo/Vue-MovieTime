<template>
  <div class="page">
    <el-container>
      <!-- 侧边栏导航菜单 -->
      <el-aside :width="isCollapse?'64px':'320px'">
        <el-menu class="el-menu" unique-opened :collapse="isCollapse" default-active="currentMenuItem">
          <div class="sidebar-header">
          </div>
          <el-submenu v-for="(groupItem,i) in menus" :key="groupItem.groupCode" :index="String(i)">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{ groupItem.groupName }}</span>
            </template>
            <el-menu-item-group class="el-submenu">
              <el-menu-item v-for="(menuItem,j) in groupItem.items" :key="menuItem.id" :index="i+'-'+j"
                            @click="menuClick(menuItem,i+'-'+j)" v-trigger="currentMenuItem" :id="i+'-'+j">
                {{ menuItem.menuName }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="exit" @click="logout">
            <template slot="title">
              <i class="el-icon-more"></i>
              <span>退出登录</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button type="text" circle class="el-icon-s-grid header-action" @click="isCollapse=!isCollapse"/>
          <!-- 导航面包屑 -->
          <el-breadcrumb style="font-size: medium" separator-class="el-icon-arrow-right"
                         v-if="this.$router.currentRoute.path !== '/home'">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.$router.currentRoute.name.toUpperCase() }}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="user right"><span style="font-size: medium">当前登录：admin</span></div>
        </el-header>
        <el-main style="height: calc(100vh - 56px - 80px);">
          <router-view></router-view>
        </el-main>
        <el-footer>
          <div class="text"></div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      currentUser: "",
      isCollapse: false,
      currentMenuItem: "0-0",
      screenWidth: document.body.clientWidth
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    async loadMenus() {
      this.menus = await this.$http.menu.getMenu().catch(error => {
        this.$message.error("获取菜单失败:"+error);
      })
    },
    menuClick(menu,id) {
      sessionStorage.setItem("currentMenuItem", id);
      this.currentMenuItem = id
      this.$router.push('/admin/' + menu.href);
    },
  },
  mounted() {
    this.currentUser = localStorage.getItem("userToken");
    const readCurrentMenuItem = sessionStorage.getItem("currentMenuItem");
    this.currentMenuItem = readCurrentMenuItem === null ? '0-0': readCurrentMenuItem;
    this.loadMenus();
    const that = this
    window.onresize= () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    }
  },
  directives:{
    trigger:{
      inserted(el, binding){
        el.id === binding.value ? el.click() : null
      }
    }
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      this.isCollapse = this.screenWidth < 640
    }
  }
}
</script>

<style scoped="scoped">
.sidebar-header {
  height: 200px;
  background: url("http://oss.cache.ren/img/01515d5c60761aa801203d22efcee6.png@1280w_1l_2o_100sh.png");
  background-size: cover;
}

.header-action {
  font-size: large;
  color: #7d7d7d;
}

.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}

span {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.el-header {
  box-shadow: 1px 5px 10px #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-aside {
  color: #fff;
  box-shadow: 1px 5px 10px #dedede;
  height: 1024px;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}

.logo {
  font-size: 230%;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 96%;
  border-bottom: 0.5px solid rgba(200, 200, 200, 0.7);
}

.title {
  font-size: 110%;
  margin-left: 30px;
}

.right {
  flex: 1;
  text-align: right;
  padding-right: 20px;
}

.el-menu:not(.el-menu--collapse) {
  width: 320px;
  min-height: 400px;
}

.el-menu-item{
  border-radius: 0 50px 50px 0;
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.el-menu-item.is-active{
  outline: 0;
  background-color: #ecf5ff;
}
</style>
