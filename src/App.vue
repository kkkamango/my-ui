<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default {
  name: 'App',
  components: {
    Header
    , Footer
  }
}
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/default.css";
</style>
