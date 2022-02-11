<template>
    <div>
        <h2>게시판 리스트</h2>
        <ul>
            <li v-for="board in boardList" v-bind:key="board">
                <a @click="goBoardView(board.id)">
                    {{board.subject}}
                </a>
            </li>
        </ul>
        <el-button type="primary" @click="goBoardForm()">
            등록<el-icon><Plus /></el-icon>
        </el-button>
    </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons'
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