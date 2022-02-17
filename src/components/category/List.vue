<template>
    <div>
        <pageHeader title="카테고리 리스트"/>

        <el-table :data="categoryList" @row-click="goCategoryView"
                  row-key="id"
                  stripe style="width: 100%">
            <el-table-column prop="id" label="아이디" width="200"></el-table-column>
            <el-table-column prop="name" label="이름"></el-table-column>
            <el-table-column prop="sort" width="200" label="순서"></el-table-column>
        </el-table>
        <el-button type="primary" :icon="Edit" @click="goCategoryForm()">등록</el-button>
    </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";

export default {
    components :{
        PageHeader
    },
    // props : ['pageTitle'],
    data (){
        return {
            categoryList : []
        };
    },
    mounted (){
        this.getCategoryList();
    },
    methods: {
        getCategoryList(){
            this.axios({
                method : 'GET',
                url : '/category',
                data : {}
            })
            .then((response) =>{
                console.log(response);
                if (response.data && response.data.length > 0){
                  this.categoryList = response.data;
                }
            })
            .catch();
        },
        goCategoryView(row){
            this.$router.push({path : `./view/${row.id}`});
        },
        goCategoryForm(){
            this.$router.push({path : `./form`});
        }
    },
}
</script>

<style scoped>

</style>