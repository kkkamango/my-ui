<template>
    <footer>
        <el-row :gutter="10">
            <el-col :xs="{span:4, offset:0}" :sm="{span:4, offset:0}" :md="{span:4, offset:0}" :lg="{span:4, offset:0}" :xl="{span:4, offset:0}"><div class="purple">홈</div></el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}"><div class="brown">카테</div></el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}"><div class="purple">찜</div></el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}"><div class="brown">알림</div></el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}"><div class="purple">마이</div></el-col>
        </el-row>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
footer{width:100%; text-align:center; position:relative; display: flex;}
footer > .el-row {width : 100%; line-height: 60px;}
</style>