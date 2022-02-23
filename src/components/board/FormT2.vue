<template>
    <h2>게시물 {{ label }} T2</h2>
    <div>
        <el-form :model="categoryView" label-width="200px">
            <el-form-item label="메인이미지">
                <el-upload name="file" action="attach.BOARD_IMG_MAIN.path"
                     multiple="false" accept="image/png, image/jpeg"
                     before-remove="handleBeforeRemove"
                     on-remove="handleRemove"
                     on-success="handleSuccess(...arguments, 'BOARD_IMG_MAIN')">
                    <el-button type="primary">첨부파일</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="상세이미지">

            </el-form-item>
            <el-form-item label="동영상">
                
            </el-form-item>
            <el-form-item label="수정횟수">
                <el-input-number v-model="boardView.amount" :min="0" step-strictly controls="false"/>
                <!-- <el-input v-model="boardView.amount" type="number" :min="5000" :step="1000" /> -->
            </el-form-item>
            <el-form-item label="수정안내">
                <el-input type="textarea" v-model="boardView.contents" :rows="3" resize="none"
                    placeholder="설명을 작성해 주세요." />
            </el-form-item>
            <el-form-item>
                <el-button @click="goBoardList()">목록으로</el-button>
                <el-button type="primary" @click="saveBoard()">{{ label }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import {UploadFile} from 'element-plus/es/components/upload/src/upload.vue'
export default {
    data(){
        return {
            id : 0,
            label : '등록',
            boardView : {},
            attach : {
                requestUrl : 'http://localhost:8088/common/attach/',
                BOARD_IMG_MAIN : {
                    id : 0,
                    path : ''
                },
                BOARD_IMG_DETAIL : {
                    ids : [],
                    path : ''
                },
                BOARD_VEDIO : {
                    ids : [],
                    path : ''
                }
            }
        }
    },
    created() {
        this.id = this.$route.query.id || 0;
        this.label = this.id === 0 ? '등록' : '수정';
    },
    mounted() {
        if (this.id){
            // URL 세팅
            this.attach.BOARD_IMG_MAIN.path = this.attach.requestUrl + 'BOARD_IMG_MAIN/' + this.id;
            this.attach.BOARD_IMG_DETAIL.path = this.attach.requestUrl + 'BOARD_IMG_DETAIL/' + this.id;
            this.attach.BOARD_VEDIO.path = this.attach.requestUrl + 'BOARD_VEDIO/' + this.id;
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
                .catch();
        },
        saveBoard() {
            console.log(this.boardView);
            this.axios({
                method : 'POST',
                url : `/board${this.id === 0 ? '' : '/' + this.id}`,
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
        handleSuccess(response, file, fileList, serviceName){
            console.log(serviceName);
            console.log(response);
        },
        handleBeforeRemove(response){
            console.log(response);
            if(!confirm('삭제하시겠습니까?')){
                return false;
            }
            console.log('handleBeforeRemove');
        },
        handleRemove(response){
            console.log(response);
        },        
    }
}
</script>

<style scoped>

</style>