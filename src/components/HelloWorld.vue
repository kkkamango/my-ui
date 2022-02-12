<template>
  <div>
    <Category/>
    <ListCard/>
  </div>
</template>

<script>
import Category from '@/components/main/Category';
import ListCard from '@/components/board/ListCard';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    components : {
      Category,
      ListCard
    }
}
</script>

<style scoped>

</style>
