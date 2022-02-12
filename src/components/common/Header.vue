<template>
    <header>
        <el-row :gutter="10">
            <el-col :xs="5" :sm="5" :md="6" :lg="4" :xl="2"><div class="purple">알림</div></el-col>
            <el-col :xs="14" :sm="14" :md="12" :lg="16" :xl="20"><div class="brown">로고</div></el-col>
            <el-col :xs="5" :sm="5" :md="6" :lg="4" :xl="2"><div class="purple">검색</div></el-col>
        </el-row>
<!--        <div class="menuWrap">-->
<!--            <ul class="menu">-->
<!--                <li><a href="/">홈</a></li>-->
<!--                <li><a href="/board/list">게시판</a></li>-->
<!--                <li><a href="#">메뉴3</a></li>-->
<!--            </ul>-->
<!--        </div>-->
    </header>
</template>

<script>
export default {
    
}
</script>
<style scoped>
header{width:100%; text-align:center; position:relative; display: flex;}
header > .el-row {width : 100%; line-height: 60px;}

</style>