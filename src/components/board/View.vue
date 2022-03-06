<template>
    <div>
        <div>
            <el-descriptions title="게시물 조회" :column="2" border>
                <el-descriptions-item label="카테고리" v-if="boardView.category">{{boardView.category.name}}</el-descriptions-item>
                <el-descriptions-item label="제목">{{boardView.subject}}</el-descriptions-item>
                <el-descriptions-item label="작성일">{{boardView.createdDate}}</el-descriptions-item>
                <el-descriptions-item label="설명">{{boardView.contents}}</el-descriptions-item>
            </el-descriptions>
<!--            <el-image :src="boardView.imgSrcMain.filePath" :fit="cover"/>-->
        </div>
        <el-button @click="goBoardList()">목록으로</el-button>
        <el-button type="primary" @click="goBoardForm()">수정</el-button>
        <el-button type="danger" @click="deleteBoardView()">삭제</el-button>
    </div>
</template>

<script>
export default {
    data (){
        return {
            id : 0,
            boardView : {}
        }
    },
    created() {
        this.id = this.$route.params.id || 0;
    },
    mounted() {
        this.getBoardView();
    },
    methods : {
        getBoardView(){
            this.axios({
                method : 'GET',
                url : `/board/${this.id}`,
                data : {}
            })
                .then((response) =>{
                    console.log(response);
                    if (response.data){
                        this.boardView = response.data;
                    }
                })
                .catch();
        },
        deleteBoardView(){
            this.axios({
                method : 'DELETE',
                url : `/board/${this.id}`,
                data : {}
            })
                .then((response) =>{
                    console.log(response);
                    if (response.data.result && response.data.result === 'OK'){
                        alert('삭제되었습니다.');
                        this.goBoardList();
                    } else {
                        // TODO 오류 처리
                    }
                })
                .catch();
        },
        goBoardList(){
            this.$router.push({path : '../list'})
        },
        goBoardForm(){
            this.$router.push({path: '../form', query: {id : this.id}});
        }
    }
}
</script>

<style scoped>

</style>