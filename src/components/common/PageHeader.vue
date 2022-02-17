<template>
    <el-page-header ref="pageHeader" content="" />
<!--    <el-icon><arrow-left /></el-icon>-->
</template>

<script>
// import { ArrowLeft } from '@element-plus/icons-vue';

export default {
    props : ['title'],
    data(){
      return {
          // title : '',
          pageTitle : this.title
      }
    },
    mounted() {
        // this.title = this.$props["page-title"];
        console.log(this.pageTitle);
        // FIXME page-header content 변경 방법 ???
        document.querySelector('.el-page-header__content').textContent = this.pageTitle;
    },
    components :{
        // ArrowLeft
    }
}
</script>
<style scoped>
</style>