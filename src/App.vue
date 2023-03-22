<template>

  <router-view> </router-view>







</template>

<script >
// import Student from './components/Student'
// import axios from 'axios';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // Student
  },
//   data(){
//     return{
//
//       page:1,
//       students:[],
//       centerDialogVisible: false,
//       newStudent:{
//         id:"",
//         name:"",
//       }
//     }
//   },
//   methods:{
//
//     getStudents(){
//       axios({
//         url:"http://localhost:8888/students",
//         method:'GET'
//       }).then(res=>{
//         console.log(res.data);
//         this.students=res.data;
//       })
//
//     },
//     openDialog() {
//       this.centerDialogVisible = true;
//     },
//     closeDialog() {
//       this.centerDialogVisible = false;
//     },
//     addStudent(){
//
//       axios({
//         url:"http://localhost:8888/add",
//         method:"POST",
//         data:this.newStudent,
//       }).then(res=>{
//         console.log(res.data);
//         this.getStudents();
//         this.centerDialogVisible=false;
//       })
// //      this.centerDialogVisible=false;
//
//     },
//     nextPage(){
//       if (this.page * 5 < this.students.length) {
//         this.page += 1;
//       }
//     },
//     PreviosPage(){
//       this.page-=1;
//       if (this.page < 1) {
//         this.page = 1;
//       }//防止小于1
//     }
//
//   },
//
//   computed:{
//     //放一个函数
//     students_for_page(){
//       return this.students.slice(this.page*5-5,this.page*5);
//     },
//     isTheLastPage() {
// //      return this.students_for_page.length < 5;
//       return this.page*5>this.students.length;
//     },
//     isTheFirstPage(){
//       return this.page===1;
//     }
//   },
//
//   mounted() {
//     this.getStudents();
//   }

}


</script>

<style >

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
