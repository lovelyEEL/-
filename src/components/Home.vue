<template>
<router-view></router-view>
  <div class="col-7 offset-2">
  <table class="table caption-top table-hover table-hover">

  <caption class="text-center">
    <h1 class="text-center">管理系统</h1>

    <router-link to="/loginPage">退出登录</router-link>

    <div></div>



    <div>  <el-button @click="getStudents">获取学生信息</el-button>
      <el-button type="warning" @click="openDialog">添加学生</el-button></div>
  </caption>

  <div><!--对话框-->
    <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      <div>添加学生信息</div>
      <span>学生学号</span><input placeholder="学号" class="w-50" v-model="newStudent.id" />
      <div></div><span>学生姓名</span><input placeholder="姓名" class="w-50" v-model="newStudent.name"/>
    </span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="addStudent">
          确定添加
        </el-button>
      </span>
      </template>
    </el-dialog>
    <!--对话框-->
  </div>
  <thead>
  <tr>
    <th scope="col">学号</th>
    <th scope="col">姓名</th>
    <th scope="col">姓名</th>
    <th scope="col">姓名</th>
    <th scope="col">操作</th>
  </tr>
  </thead>
  <tbody>
  <!--    //:student="stu"把stu放进student传给子组件-->
  <Student v-for="stu in students_for_page " :key="stu.id" :student="stu" @get_Student="getStudents"></Student>
  </tbody><!-- students 换成 切片后的students_for_page-->

</table>
<div class="text-center">
  <el-button-group>



    <el-button type="primary" :icon="ArrowLeft" @click="PreviosPage">上一页
    </el-button>

    <el-button  type="primary" @click="nextPage">
      下一页
      <el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>

  </el-button-group>

</div>
</div>
</template>

<script >
import Student from './Student'
import axios from 'axios';

export default {
  // eslint-disable-next-line no-undef
  name:'HomePage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Student
  },
  data(){
    return{

      page:1,
      students:[],
      centerDialogVisible: false,
      newStudent:{
        id:"",
        name:"",
      }
    }
  },
  methods:{

    getStudents(){
      axios({
        url:"http://localhost:8888/students",
        method:'GET'
      }).then(res=>{
        console.log(res.data);
        this.students=res.data;
      })

    },
    openDialog() {
      this.centerDialogVisible = true;
    },
    closeDialog() {
      this.centerDialogVisible = false;
    },
    addStudent(){

      axios({
        url:"http://localhost:8888/add",
        method:"POST",
        data:this.newStudent,
      }).then(res=>{
        console.log(res.data);
        console.log("here2")
        this.getStudents();
        this.centerDialogVisible=false;
      })
//      this.centerDialogVisible=false;

    },
    nextPage(){
      if (this.page * 5 < this.students.length) {
        this.page += 1;
      }
    },
    PreviosPage(){
      this.page-=1;
      if (this.page < 1) {
        this.page = 1;
      }//防止小于1
    }

  },

  computed:{
    //放一个函数
    students_for_page(){
      return this.students.slice(this.page*5-5,this.page*5);
    },
    isTheLastPage() {
//      return this.students_for_page.length < 5;
      return this.page*5>this.students.length;
    },
    isTheFirstPage(){
      return this.page===1;
    }
  },
  created() {
    console.log(localStorage.getItem("name"))
  },

  mounted() {
    this.getStudents();
  }

}


</script>

<style >

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>