<template>
    <footer class="main-footer">
        <el-row :gutter="10" type="flex" justify="space-between">
            <el-col :xs="{span:4, offset:0}" :sm="{span:4, offset:0}" :md="{span:4, offset:0}" :lg="{span:4, offset:0}" :xl="{span:4, offset:0}" class="lh18">
                <el-icon :size="18"><House /></el-icon>
                <p>홈</p>
            </el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}" class="lh18">
                <el-icon><Menu /></el-icon>
                <p>카테고리</p>
            </el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}" class="lh18">
                <el-icon><Star /></el-icon>
                <p>찜</p>
            </el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}" class="lh18">
                <el-icon><Message /></el-icon>
                <p>메시지</p>
            </el-col>
            <el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}" class="lh18">
                <el-icon><User /></el-icon>
                <p>마이재능</p>
            </el-col>
        </el-row>
    </footer>
</template>

<script>
import { House, Menu, Star, Message, User } from '@element-plus/icons-vue'

export default {
    components : {
        House, Menu, Star, Message, User
    }
}
</script>

<style scoped>
footer {
    position: absolute;
    bottom: 0;
    left: 0;
}
.main-footer{width:100%; text-align:center; display: flex;bottom: 0px;}
footer > .el-row {width : 100%; margin: 0 !important;}
</style>