<template>
    <div>
        <div class="list-card">
            <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="4">
                    <el-col class="list-card-thumbnail">
                        <el-image :src="require('@/assets/image/thumbnail_0001.jpg')" :fit="cover"/>
                    </el-col>
                    <el-col class="list-card-content">
                        <div class="mb4">다양한 일러스트를 그려 드립니다.</div>
                        <div class="mb4">
                            <el-icon color="#ffff00"><StarFilled /></el-icon>
                            5.0 | 396 리뷰</div>
                        <div>&#8361;15,000</div>

                    </el-col>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { StarFilled } from '@element-plus/icons-vue'

export default {
    components : {
        StarFilled
    }
}
</script>

<style scoped>
.el-row { height: 100px; padding: 8px; }
.list-card-thumbnail { width: 130px;}
</style>