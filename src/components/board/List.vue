<template>
    <div>
        <h2>게시판 리스트</h2>
        <el-table :data="boardList" stripe >
            <el-column prop="id" label="아이디"></el-column>
            <el-column prop="subject" label="제목"></el-column>
            <!-- <el-column prop=""></el-column> -->
        </el-table>
        <ul>
            <li v-for="board in boardList" v-bind:key="board">
                <el-link href="javascript:;" @click="goBoardView(board.id)">
                    {{board.subject}}
                </el-link>
            </li>
        </ul>
        <el-button type="primary" :icon="Edit" @click="goBoardForm()">등록</el-button>
    </div>
</template>

<script setup>
// import { Edit, Share, Delete, Search, Upload } from '@element-plus/icons-vue'
import { Edit } from '@element-plus/icons-vue'
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
                url : 'http://localhost:8088/board',
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
        goBoardView(boardId){
            this.$router.push({path : `./view/${boardId}`});
        },
        goBoardForm(){
            this.$router.push({path : `./form`});
        }
    },
}
</script>

<style scoped>

</style>