<template>
    <div>
        <h2>게시판 리스트</h2>
        <el-table :data="boardList" @row-click="goBoardView"
                  row-key="id"
                  stripe style="width: 100%">
            <el-table-column prop="id" label="아이디" width="200"></el-table-column>
            <el-table-column prop="subject" label="제목"></el-table-column>
            <!-- <el-column prop=""></el-column> -->
        </el-table>
        <el-button type="primary" :icon="Edit" @click="goBoardForm()">등록</el-button>
    </div>
</template>

<script setup>
// import { Edit, Share, Delete, Search, Upload } from '@element-plus/icons-vue'
import { Edit } from '@element-plus/icons-vue'
// import { useStore } from 'vuex';
//
// const store = useStore();
</script>
<script>
export default {
    data (){
        return {
            boardList : []
        };
    },
    mounted (){
        this.getBoardList();
    },
    methods: {
        getBoardList(){
            this.axios({
                // headers: { 'Access-Control-Allow-Origin': '*' },
                method : 'GET',
                url : '/board',
                data : {}
            })
            .then((response) =>{
                console.log(response);
                if (response.data && response.data.length > 0){
                  this.boardList = response.data;
                }
            })
            .catch();
        },
        goBoardView(row){
            this.$router.push({path : `./view/${row.id}`});
        },
        goBoardForm(){
            this.$router.push({path : `./form`});
        }
    },
}
</script>

<style scoped>

</style>