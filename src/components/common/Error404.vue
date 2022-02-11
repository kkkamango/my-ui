<template>
    <el-result icon="error"
        title="404"
        sub-title="404 Not Found.">
    </el-result>
    <el-button type="primary" @click="goHome()">홈</el-button>
</template>

<script>
export default {
    methods: {
        goHome(){
            this.$router.push({path : '/'});
        }
    },
}
</script>

