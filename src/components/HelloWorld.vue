<template>
  <div>
    <Category/>
  </div>
</template>

<script>
import Category from '@/components/main/Category';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    components : {
      Category
    }
}
</script>

<style scoped>

</style>
