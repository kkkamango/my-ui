<template>
    <div class="main-category">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">A</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">B</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">C</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">D</div></el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">A</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">B</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">C</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">D</div></el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">A</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">B</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">C</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">D</div></el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">A</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">B</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="brown">C</div></el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="purple">D</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.main-category{width:100%; text-align:center; position:relative;}
.main-category > .el-row {width : 100%; line-height: 60px; margin-bottom: 10px; }

</style>