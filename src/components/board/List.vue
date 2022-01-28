<template>
    <div>
        <h2>게시판 리스트</h2>
    </div>
</template>

<script>
export default {
    data (){
        return {
            boardList : []
        };
    },
    mounted (){
        this.getBoardList();
    },
    methods: {
        getBoardList(){
            //console.log('getBoardList');
            this.axios({
                // headers: { 'Access-Control-Allow-Origin': '*' },
                method : 'GET',
                url : 'http://dev.lemonhc.com/mobile-ui/user/api/payment/v1/37100092/418372+2010000000/O/Y',
                data : {}
            })
            .then((response) =>{
                console.log('then..');
                console.log(response);
            })
            .catch();
        }
    },
}
</script>

<style scoped>

</style>