<template>
    <h2>게시물 {{ label }}</h2>
    <div>
        <form>
            <table>
                <colgroup>
                    <col width="20%">
                    <col>
                </colgroup>
                <tr>
                    <th>제목</th>
                    <td><input type="text" v-model="boardView.subject"></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td><textarea v-model="boardView.contents"></textarea></td>
                </tr>
            </table>
        </form>
        <a @click="goBoardList()">목록으로</a>
        <a @click="saveBoard()">{{ label }}</a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id : 0,
            label : '등록',
            boardView : {}
        }
    },
    created() {
        this.id = this.$route.query.id || 0;
        this.label = this.id === 0 ? '등록' : '수정';
    },
    mounted() {
        if (this.id){
            this.getBoardView();
        }
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
        saveBoard() {
            console.log(this.boardView);
            this.axios({
                method : 'POST',
                url : `http://localhost:8088/board${this.id === 0 ? '' : '/' + this.id}`,
                data : {
                    subject : this.boardView.subject,
                    contents : this.boardView.contents
                }
            })
                .then((response) =>{
                    console.log(response);
                    if (response.data && response.data.id){
                        alert(`${this.label}되었습니다.`);
                        if(this.id === 0 ){
                            this.goBoardList();
                        } else {
                            this.goBoardView(this.id);
                        }
                    }
                })
                .catch();
        },
        goBoardList(){
            this.$router.push({path : './list'});
        },
        goBoardView(boardId){
            this.$router.push({path : `./view/${boardId}`});
        },
    }
}
</script>

<style scoped>

</style>