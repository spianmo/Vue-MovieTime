<template>
  <div>
    <el-form ref="form" :model="movieForm" label-width="80px">
      <el-row>
        <el-col :span="4">
          <el-form-item label="影片编号">
            <el-input v-model="movieForm.movieId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="影片名称">
            <el-input v-model="movieForm.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="英文名称">
            <el-input v-model="movieForm.nameEn"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="参演人数">
            <el-input v-model="movieForm.personCount"></el-input>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="4">
          <el-form-item label="影片导演">
            <el-select v-model="selectedDirector" placeholder="请选择活动区域">
              <el-option label="张艺谋" value="zhangyimou"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="上映日期">
            <el-date-picker v-model="movieForm.moviePublishDate" placeholder="请选择日期" type="date">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item  label="综合评分">
        <el-rate v-model="movieForm.rating"></el-rate>
      </el-form-item>
      <el-form-item label="影片海报">
        <el-upload :show-file-list="false" action="" class="avatar-uploader">
          <img v-if="imageUrl!=''" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="影片类型">
        <el-checkbox-group v-model="selectedTypes">
          <el-checkbox label="剧情" name="movieType"></el-checkbox>
          <el-checkbox label="军事" name="movieType"></el-checkbox>
          <el-checkbox label="历史" name="movieType"></el-checkbox>
          <el-checkbox label="喜剧" name="movieType"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="影片剧情">
        <el-input v-model="movieForm.story" rows="5" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">添加电影</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeList: [], //分类候选项
      directorList: [], //导演候选项

      selectedTypes: [], //已选择分类
      selectedDirector: {}, //已选择导演

      imageUrl: "", //当前已选海报图片
      movieForm: {
        movieId: 0,
        name: "",
        nameEn: "",
        img: "",
        rating: 0.0,
        directorInfo: {},
        personCount: 0,
        story: "",
        moviePublishDate: "",
        movieYear: 0,
        typeInfoList: []
      }
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
