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
            <el-select v-model="selectedDirector" placeholder="请选择" value-key="directorId" :filterable="true" :remote="true"
                       :remote-method="getDirectors">
              <el-option v-for='item in directorList' :label="item.name" :value="item" :key='item.directorId'></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="上映日期">
            <el-date-picker v-model="movieForm.moviePublishDate" type="date" placeholder="选择日期" format="yyyyMMdd"
                            value-format="yyyyMMdd">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item  label="综合评分">
        <el-rate v-model="movieForm.rating"></el-rate>
      </el-form-item>
      <el-form-item label="影片海报">
        <el-upload class="avatar-uploader" action="/api/movies/admin/upload" :headers="uploadHeaders" name="imageFile"
                   :on-success="uploadSuccess" :show-file-list="false">
          <img v-if="imageUrl!==''" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="影片类型">
        <el-checkbox-group v-model="selectedTypes">
          <el-checkbox v-for="item in typeList" :label="item.name" :key='item.typdId' name="movieType">
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="影片剧情">
        <el-input v-model="movieForm.story" rows="5" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click='doAdd'>{{editMode?'修改电影':'添加电影'}}</el-button>
        <el-button @click="goBack">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      typeList: [],
      directorList: [],

      selectedTypes: [],
      selectedDirector: {},

      imageUrl: "",
      uploadHeaders: {},

      editMode: false,
      editMovieId: 0,

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
      },
      rules: {
        name: [
          { required: true, message: '请输入影片名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async getTypeList () {
      let resp = await this.$http.movie.getAllTypes()
      if (resp) {
        this.typeList = resp
      }
    },
    async getDirectors (keyword) {
      let resp = await this.$http.movie.getDirectors(keyword)
      if (resp) {
        this.directorList = resp
      }
    },
    doAdd () {
      this.$refs.movieForm.validate(async valid => {
        if (!valid) {
          this.$message.error('影片名称不能为空')
          return
        }
        try {
          this.movieForm.directorInfo = this.selectedDirector;
          if (this.movieForm.moviePublishDate != null &&
              this.movieForm.moviePublishDate.length > 0) {
            this.movieForm.movieYear = this.movieForm.moviePublishDate.substring(0, 4);
          }

          let typeArray = [];
          for (let i = 0; i < this.selectedTypes.length; i++) {
            let typeItem = this.typeList.find((item) => {
              if (item.name === this.selectedTypes[i]) {
                return item;
              }
            });
            typeArray.push(typeItem);
          }
          this.movieForm.typeInfoList = typeArray;
          if (this.imageUrl.length > 0) {
            this.movieForm.img = this.imageUrl;
            this.movieForm.bigImage = this.imageUrl;
          }

          let response = await this.$http.movie.addMovie(this.editMode, this.movieForm)
          if (response) {
            this.$message.success("保存成功")
            await this.$router.push('/admin/list-movie')
          }
        } catch (error) {
          console.log(error);
          this.$message.error('添加失败', error)
        }
      })
    },
    uploadSuccess (response, file, fileList) {
      console.log("上传成功:", response, file, fileList);
      this.imageUrl = response;
    },
    goBack () {
      this.$router.back();
    },
    async loadEditMovieItem () {
      console.log("loadEditMovieItem")
      let response = await this.$http.movie.getMovieDetail(this.editMovieId)
      if (response) {
        this.movieForm = response
        this.movieForm.movieId = this.editMovieId;
        this.selectedDirector = this.movieForm.directorInfo
        await this.getDirectors(this.selectedDirector.name)
        let typesArr = this.movieForm.typeInfoList
        typesArr.forEach(type => {
          this.selectedTypes.push(type.name);
        })

        this.imageUrl = this.movieForm.img;
      }
    },
  },
  mounted () {
    this.getTypeList()
    this.getDirectors()
    this.uploadHeaders = {
      'Authorization': localStorage.getItem("userToken")
    }
    let queryParams = this.$route.query;
    console.log("获得查询参数：", queryParams);
    if (queryParams && queryParams.isEdit) {
      this.editMode = true;
      this.editMovieId = queryParams.movieId;
    }
    if (this.editMode) {
      this.loadEditMovieItem();
    }
  },
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
