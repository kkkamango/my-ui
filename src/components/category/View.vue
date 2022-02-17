<template>
    <div>
        <pageHeader title="카테고리 조회"/>
        <div>
            <p>{{categoryView.createdDate}}</p>
            <p>{{categoryView.name}}</p>
            <p>{{categoryView.sort}}</p>
            <p>{{categoryView.description}}</p>
        </div>
        <a @click="goCategoryList()">목록으로</a>
        <a @click="goCategoryForm()">수정</a>
        <a @click="deleteCategoryView()">삭제</a>
    </div>
</template>

<script>

import PageHeader from "@/components/common/PageHeader";

export default {
    components :{
        PageHeader
    },
    data (){
        return {
            id : 0,
            categoryView : {}
        }
    },
    created() {
        this.id = this.$route.params.id || 0;
    },
    mounted() {
        this.getCategoryView();
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
        deleteCategoryView(){
            this.axios({
                method : 'DELETE',
                url : `/category/${this.id}`,
                data : {}
            })
                .then((response) =>{
                    console.log(response);
                    if (response.data.result && response.data.result === 'OK'){
                        alert('삭제되었습니다.');
                        this.goCategoryList();
                    } else {
                        // TODO 오류 처리
                    }
                })
                .catch();
        },
        goCategoryList(){
            this.$router.push({path : '../list'})
        },
        goCategoryForm(){
            this.$router.push({path: '../form', query: {id : this.id}});
        }
    }
}
</script>

<style scoped>

</style>