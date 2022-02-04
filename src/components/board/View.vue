<template>
    <div>
        <h2>게시물 조회</h2>
        <div>
            <p>{{boardView.createdDate}}</p>
            <p>{{boardView.subject}}</p>
            <p>{{boardView.contents}}</p>
        </div>
        <a @click="goBoardList()">목록으로</a>
        <a @click="goBoardForm()">수정</a>
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
                url : `http://localhost:8088/board/${this.id}`,
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