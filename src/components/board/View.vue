<template>
    <div>
        <h2>게시물 조회</h2>
        <div>
            <p>{{boardView.createdDate}}</p>
            <p>{{boardView.state}}</p>
            <p>{{boardView.subject}}</p>
            <p>{{boardView.contents}}</p>
        </div>
        <a @click="goBoardList()">목록으로</a>
        <a @click="goBoardForm()">수정</a>
        <a @click="deleteBoardView()">삭제</a>
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