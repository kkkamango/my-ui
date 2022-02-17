<template>
    <h2>카테고리 {{ label }}</h2>
<!--    <pageHeader :title="카테고리 {{ label }}"/>-->
    <div>
        <el-form :model="categoryView" label-width="200px">
            <el-form-item label="이름">
                <el-input v-model="categoryView.name"></el-input>
            </el-form-item>
            <el-form-item label="순서">
                <el-input-number v-model="categoryView.sort" :min="0" step-strictly controls-position="right"/>
            </el-form-item>
            <el-form-item label="설명">
                <el-input type="textarea" v-model="categoryView.description" :rows="3" resize="none"
                          placeholder="카테고리 설명을 작성해 주세요." />
            </el-form-item>
            <el-form-item>
                <el-button @click="goCategoryList()">목록으로</el-button>
                <el-button type="primary" @click="saveCategory()">{{ label }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import PageHeader from "@/components/common/PageHeader";

export default {
    // components : {
    //     PageHeader
    // },
    data(){
        return {
            id : 0,
            label : '등록',
            categoryView : {}
        }
    },
    created() {
        this.id = this.$route.query.id || 0;
        this.label = this.id === 0 ? '등록' : '수정';
    },
    mounted() {
        if (this.id){
            this.getCategoryView();
        }
    },
    methods : {
        getCategoryView(){
            this.axios({
                method : 'GET',
                url : `/category/${this.id}`,
                data : {}
            })
                .then((response) =>{
                    console.log(response);
                    if (response.data){
                        this.categoryView = response.data;
                    }
                })
                .catch();
        },
        saveCategory() {
            console.log(this.categoryView);
            this.axios({
                method : 'POST',
                url : `/category${this.id === 0 ? '' : '/' + this.id}`,
                data : {
                    name : this.categoryView.name,
                    description : this.categoryView.description,
                    sort : this.categoryView.sort
                }
            })
                .then((response) =>{
                    console.log(response);
                    if (response.data && response.data.id){
                        alert(`${this.label}되었습니다.`);
                        if(this.id === 0 ){
                            this.goCategoryList();
                        } else {
                            this.goCategoryView(this.id);
                        }
                    }
                })
                .catch();
        },
        goCategoryList(){
            this.$router.push({path : './list'});
        },
        goCategoryView(categoryId){
            this.$router.push({path : `./view/${categoryId}`});
        },
    }
}
</script>

<style scoped>

</style>