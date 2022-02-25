<template>
    <!-- <h2>게시물 {{ label }}</h2> -->
    <div v-if="boardView.state && boardView.state === 'T1'">
        <FormT1 />
        <!-- <el-form :model="categoryView" label-width="200px">
            <el-form-item label="제목">
                <el-input v-model="boardView.subject"></el-input>
            </el-form-item>
            <el-form-item label="첨부파일">
                <el-upload name="file" action="http://localhost:8088/common/attach/BOARD_IMG_MAIN/1"
                     multiple="false" accept="image/png, image/jpeg"
                     before-remove="handleBeforeRemove"
                     on-remove="handleRemove"
                     on-success="handleSuccess">
                    <el-button type="primary">첨부파일</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="내용">
                <el-input type="textarea" v-model="boardView.contents" :rows="3" resize="none"
                    placeholder="내용을 작성해 주세요." />
            </el-form-item>
            <el-form-item>
                <el-button @click="goBoardList()">목록으로</el-button>
                <el-button type="primary" @click="saveBoard()">{{ label }}</el-button>
            </el-form-item>
        </el-form> -->
    </div>
    <div v-else-if="id && boardView.state && boardView.state === 'T2'">
        <FormT2 />
    </div>
</template>

<script>
// import {UploadFile} from 'element-plus/es/components/upload/src/upload.vue'
import FormT1 from '@/components/board/FormT1'
import FormT2 from '@/components/board/FormT2'

export default {
    data(){
        return {
            id : 0,
            label : '등록',
            boardView : {},
            BOARD_IMG_MAIN : 0, // 첨부파일

        }
    },
    components : {
        FormT1, 
        FormT2
    },
    created() {
        this.id = this.$route.query.id || 0;
        this.label = this.id === 0 ? '등록' : '수정';
    },
    mounted() {
        if (this.id){
            // URL 세팅
            this.getBoardView();
        }
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
                .catch((response) => {
                    console.error(response);
                });
        },
        // saveBoard() {
        //     this.boardView.state = 'T3';
        //     console.log(this.boardView);
        //     this.axios({
        //         method : 'POST',
        //         url : `/board${this.id === 0 ? '' : '/' + this.id}`,
        //         data : this.boardView
        //     })
        //         .then((response) =>{
        //             console.log(response);
        //             if (response.data && response.data.id){
        //                 alert(`${this.label}되었습니다.`);
                        
        //                 this.id = response.data.id;
        //                 this.goBoardForm();
        //                 // if(this.id === 0 ){
        //                 //     this.goBoardList();
        //                 // } else {
        //                 //     this.goBoardView(this.id);
        //                 // }
        //             }
        //         })
        //         .catch();
        // },
        // goBoardList(){
        //     this.$router.push({path : './list'});
        // },
        // goBoardView(boardId){
        //     this.$router.push({path : `./view/${boardId}`});
        // },
        // goBoardForm(){
        //     this.$router.push({path: '../form', query: {id : this.id}});
        // }
        // handleSuccess(response){
        //     console.log(response);
        // },
        // handleBeforeRemove(response){
        //     console.log(response);
        // },
        // handleRemove(response){
        //     console.log(response);
        // },
    }
}
</script>

<style scoped>

</style>