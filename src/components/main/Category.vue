<template>
    <div class="main-category">
        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><Picture /></el-icon>
                <p>디자인</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><Platform /></el-icon>
                <p>IT/프로그래밍</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><VideoPlay /></el-icon>
                <p>영상/사진/음향</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><TrendCharts /></el-icon>
                <p>마케팅</p>
            </el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><Document /></el-icon>
                <p>번역/통역</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><EditPen /></el-icon>
                <p>문서/글쓰기</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><Management /></el-icon>
                <p>비즈니스컨설팅</p>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="lh18">
                <el-icon :size="40"><Sell /></el-icon>
                <p>투잡/노하우</p>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import { Picture, Platform, VideoPlay, TrendCharts, Document, EditPen, Management, Sell } from '@element-plus/icons-vue'
export default {
    components : {
        Picture, Platform, VideoPlay, TrendCharts,
        Document, EditPen, Management, Sell
    }
}
</script>
<style scoped>
.main-category{width:100%; text-align:center; position:relative; padding: 20px;}
.main-category > .el-row {width : 100%; line-height: 60px; margin-bottom: 20px; }
.main-category > .el-row:last-child {margin-bottom: 0}

</style>