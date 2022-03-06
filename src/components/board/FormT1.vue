<template>
    <h2>게시물 {{ label }} T1</h2>
    <div>
        <el-form :model="categoryView">
            <el-form-item label="카테고리">
                <el-select v-model="boardView.category.id">
                    <el-option v-for="category in categoryList"
                        :key="category.id"
                        :label="category.name"
                        :value="category.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="제목">
                <el-input v-model="boardView.subject"></el-input>
            </el-form-item>
            <el-form-item label="설명">
                <el-input type="textarea" v-model="boardView.contents" :rows="3" resize="none"
                    placeholder="설명을 작성해 주세요." />
            </el-form-item>
            <el-form-item label="작업기간">
                <el-select v-model="boardView.term">
                    <el-option v-for="term in termList"
                        :key="term.id"
                        :label="term.name"
                        :value="term.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="가격">
                <el-input-number v-model="boardView.amount" :min="5000" :step="1000" step-strictly controls="false"/>
                <!-- <el-input v-model="boardView.amount" type="number" :min="5000" :step="1000" /> -->
            </el-form-item>
            <el-form-item>
                <el-button @click="goBoardList()">목록으로</el-button>
                <el-button type="primary" @click="saveBoard()">{{ label }}</el-button>
            </el-form-item>
        </el-form>
    </div>
<!--    <el-message-box v-show="alert.show" :confirm-button-text="확인" icon-->
<!--        :message="alert.message" :type="alert.type"/>-->
</template>

<script>
// import {ElMessageBox} from 'element-plus'
export default {
    data(){
        return {
            id : 0,
            label : '등록',
            boardView : {
                category : {
                    id : 0
                }
            },
            categoryList : [
                {
                    id : 0,
                    name : '선택해주세요.'
                }
            ],
            termList : [
                {id : '1D', name : '1일'},{id : '2D', name : '2일'},{id : '1M', name : '1개월'},
            ],
            // alert : {
            //     show : false,
            //     title : '',
            //     message : '',
            //     type : 'success',
            //     callback : null,
            //
            // }
        }
    },
    // components : {
    //     ElMessageBox
    // },
    created() {
        this.id = this.$route.query.id || 0;
        this.label = this.id === 0 ? '등록' : '수정';
        this.getCategoryList();
    },
    mounted() {
        if (this.id){
            this.getBoardView();
        }
    },
    methods : {
        getCategoryList(){
            this.axios({
                method : 'GET',
                url : '/category',
                data : {}
            })
            .then((response) =>{
                console.log(response);
                if (response.data && response.data.length > 0){
                  this.categoryList = response.data;
                }
            })
            .catch();
        },
        // 작업기간
        // getCategoryList(){
        //     this.axios({
        //         method : 'GET',
        //         url : '/category',
        //         data : {}
        //     })
        //     .then((response) =>{
        //         console.log(response);
        //         if (response.data && response.data.length > 0){
        //           this.categoryList = response.data;
        //         }
        //     })
        //     .catch();
        // },
        saveBoard() {
            this.boardView.state = 'T2';
            console.log(this.boardView);

            this.axios({
                method : 'POST',
                url : `/board${this.id === 0 ? '' : '/' + this.id}`,
                data : this.boardView
            })
                .then((response) =>{
                    console.log(response);
                    if (response.data && response.data.id){

                        // alert(`${this.label}되었습니다.`);
                        // this.alert = true;
                        // ElMessageBox.alert(`${this.label}되었습니다.`, '', {
                        //     confirmButtonText : '확인',
                        //     callback : () => {
                        //         this.id = response.data.id;
                        //         this.goBoardForm();
                        //     }
                        // });
                    }
                })
                .catch();

        },
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
        goBoardList(){
            this.$router.push({path : './list'});
        },
        goBoardView(boardId){
            this.$router.push({path : `./view/${boardId}`});
        },
        goBoardForm(){
            this.$router.push({path: './form/T2', query: {id : this.id}});
        }
    }
}
</script>

<style scoped>

</style>