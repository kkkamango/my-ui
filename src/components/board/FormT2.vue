<template>
    <!-- <h2>게시물 {{ label }} T2</h2> -->
    <div>
        <el-form :model="categoryView" label-width="auto">
            <el-form-item label="메인이미지">
                <el-upload name="file" 
                    :action="attach.BOARD_IMG_MAIN.path"
                   :file-list="attach.BOARD_IMG_MAIN.fileList"
                   :limit="1"
                    accept="image/png, image/jpeg"
                    :before-remove="handleBeforeRemove"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"><!-- handleSuccess(...arguments, {serviceName: 'BOARD_IMG_MAIN'}) -->
                    <el-button type="primary">첨부파일</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="상세이미지">
                <el-upload name="file" 
                    :action="attach.BOARD_IMG_DETAIL.path"
                    :file-list="attach.BOARD_IMG_DETAIL.fileList"
                    :limit="9"
                    accept="image/png, image/jpeg"
                    :before-remove="handleBeforeRemove"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess">
                    <el-button type="primary">첨부파일</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="동영상">
                <el-upload name="file" 
                    :action="attach.BOARD_VIDEO.path"
                    :file-list="attach.BOARD_VIDEO.fileList"
                    :limit="6"
                    accept="video/*"
                    :before-remove="handleBeforeRemove"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"><!-- handleSuccess(...arguments, {serviceName: 'BOARD_IMG_MAIN'}) -->
                    <el-button type="primary">첨부파일</el-button>
                </el-upload>
            </el-form-item>
            <!-- <el-form-item label="수정횟수">
                <el-input-number v-model="boardView.revisionNo" :min="0" step-strictly controls="false"/>
            </el-form-item>
            <el-form-item label="수정안내">
                <el-input type="textarea" v-model="boardView.revisionNoti" :rows="3" resize="none"
                    placeholder="수정안내사항을 작성해 주세요." />
            </el-form-item> -->
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
            // url : 'http://localhost:8088/common/attach/BOARD_IMG_MAIN/1',
            label : '등록',
            boardView : {},
            attach : {
                requestUrl : 'http://localhost:8088/common/attach/',
                BOARD_IMG_MAIN : {
                    fileList : [],
                    path : ''
                },
                BOARD_IMG_DETAIL : {
                    fileList : [],
                    path : ''
                },
                BOARD_VIDEO : {
                    fileList : [],
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
            this.attach.BOARD_VIDEO.path = this.attach.requestUrl + 'BOARD_VIDEO/' + this.id;
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

                        if (this.boardView.imgSrcMain){
                            this.attach.BOARD_IMG_MAIN.fileList = [{
                                name : this.boardView.imgSrcMain.fileName,
                                url : this.boardView.imgSrcMain.filePath
                            }];
                        }

                        if (this.boardView.imgSrcDetail && this.boardView.imgSrcDetail.length > 0){
                            this.boardView.imgSrcDetail.forEach(img => {
                                this.attach.BOARD_IMG_DETAIL.fileList.push({
                                    name : img.fileName,
                                    url : img.filePath
                                });
                            });
                        }

                        if (this.boardView.videoSrc && this.boardView.videoSrc.length > 0){
                            this.boardView.videoSrc.forEach(img => {
                                this.attach.BOARD_VIDEO.fileList.push({
                                    name : img.fileName,
                                    url : img.filePath
                                });
                            });
                        }
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
            this.$router.push({path : '/board/list'});
        },
        goBoardView(boardId){
            this.$router.push({path : `/board/view/${boardId}`});
        },
        handleSuccess(){
            // const serviceName = [].slice.call(arguments).find(d => d.serviceName)['serviceName'];
            // console.log(serviceName);
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