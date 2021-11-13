<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="gotoCreate">添加影片</el-button>
      </el-form-item>
      <div style="float: right">
        <el-form-item >
          <el-input v-model="keyword" placeholder="请输入影片名称关键字查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="doSearch()">搜索</el-button>
        </el-form-item>
      </div>

    </el-form>
    <el-table v-loading="tableLoading" :data="movieList" stripe style="width: 100%">
      <el-table-column label="影片Id" prop="movieId" width="80">
      </el-table-column>
      <el-table-column label="影片名称" prop="name">
      </el-table-column>
      <el-table-column label="影片海报">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="movie-img-tablecell">
        </template>
      </el-table-column>
      <el-table-column label="综合评分" prop="rating">
      </el-table-column>
      <el-table-column label="参演人数" prop="personCount">
      </el-table-column>
      <el-table-column label="影片时长" prop="length">
      </el-table-column>
      <el-table-column label="上映日期" prop="moviePublishDate">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="rowEdit(scope.row)">编辑</el-button>
          <el-button type="text" @click="rowDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="pageIndex+1" :page-size="pageSize" :total="total" background class="page-tool"
                   layout="prev, pager, next" @current-change="pageChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [],
      total: 0,
      pageIndex: 0,
      pageSize: 6,
      keyword: '',
      tableLoading: false
    }
  },
  methods: {
    async loadMovieList() {
      this.tableLoading = true;
      let data = await this.$http.movie.getMovieList(this.keyword, null, null, this.pageIndex, this.pageSize)
          .catch(error => {
            this.$message.error('获取影片列表出错：', error)
          }).finally(() => {
            this.tableLoading = false;
          })
      this.movieList = data.content;
      this.total = data.totalElements;
    },
    doSearch() {
      this.pageIndex = 0;
      this.loadMovieList();
    },
    pageChange(e) {
      console.log("分页切换", e);
      let page = e - 1;
      this.pageIndex = page;
      this.loadMovieList();
    },
    rowDelete(movie) {
      console.log("删除影片按钮点击", movie);
      this.$confirm('影片[' + movie.name + ']将被删除, 是否继续?', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.http({
          url: '/api/movies/admin/delete/' + movie.movieId,
          method: 'DELETE'
        }).then((result) => {
          if (result.status == 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.loadMovieList()
          }
        })

      }).catch(() => {

      });
    },
    rowEdit(movie) {
      console.log("编辑影片按钮点击", movie);
    },
    gotoCreate() {
      this.$router.push("/admin/create-movie")
    }
  },
  mounted() {
    this.loadMovieList()
  }
}
</script>

<style>
.movie-img-tablecell {
  width: 40px;
  height: 60px;
}

.page-tool {
  margin-top: 20px;
  text-align: right;
}
</style>
