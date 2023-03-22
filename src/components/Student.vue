<template>
  <tr>
    <th scope="row" v-show="!is_edit">{{studentCopy.id}}</th>
    <td v-show="!is_edit">{{ studentCopy.name }}</td>
    <td v-show="!is_edit">{{ studentCopy.name }}</td>
    <td v-show="!is_edit">{{ studentCopy.name }}</td>
    <td v-show="!is_edit">
    <el-button plain @click="modify">修改</el-button>
    <el-button plain @click="deleteStudent" >删除</el-button>
    </td>
  </tr>

  <tr>

    <th scope="row" v-show="is_edit"><input class="w-50" type="text" v-model.number="studentCopy.id" /></th>
    <td v-show="is_edit"><input class="w-50" type="text" v-model="studentCopy.name" /></td>
    <td v-show="is_edit"><input class="w-50" type="text" v-model="studentCopy.name"/></td>
    <td v-show="is_edit"><input class="w-50" type="text" v-model="studentCopy.name" /></td>
    <td v-show="is_edit">
      <el-button plain @click="save" >保存</el-button>
      <el-button plain @click="deleteStudent" >删除</el-button>
    </td>
  </tr>
</template>

<script>

import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  props:["student"],//父组件来的

  //is_edit:true,
  data(){
    return{
      is_edit:false,
      studentCopy: {...this.student},
      students:[],
    }
  },
  // computed: {
  //   //将student prop绑定到新的数据属性studentCopy
  //   // eslint-disable-next-line vue/no-dupe-keys
  //   studentCopy: {
  //     get() {
  //       return this.student
  //     },
  //     set(newValue) {
  //       this.$emit('update:student', newValue)
  //     }
  //   }
  // },
  methods:{

    modify(){
      // this.studentCopy = Object.assign({}, this.student);
      this.is_edit=true;
    },
    save(){

      axios({
        url:"http://localhost:8888/update",
        method:"POST",
        data:this.studentCopy//student=>studentCopy
      })
      this.is_edit=false;
    },
    deleteStudent(){
      axios({
        url:"http://localhost:8888/delete",
        method:"POST",
        data:this.studentCopy//发送数据
      }).then(()=>{
            //console.log(res.data);
          this.$emit('get_Student');//触发父组件

      })

      }

    ,
    getStudents(){
      axios({
        url:"http://localhost:8888/students",
        method:'GET'
      }).then(res=>{
        console.log(res.data);
        this.students=res.data;
      })

    },


    // handleClose(done){
    //   this.$confirm('确认关闭？').then(
    //       ()=>{
    //         done();
    //       }
    //   ).catch(()=>{});
    // }

  }
}
</script>

<style scoped>

</style>