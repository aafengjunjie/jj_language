<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    	<HelloWorld :msg="echo('自动百度翻译，优先本地语言库')"/>
    <br/>
      原文:{{test}}
    <br/>
      翻译后:{{echo(test)}}
      </br>
      如果翻译的是变量，那么渲染内容会跟着变量的变化而变化，而且不影响变量原本的内容。
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    setTimeout(()=>{
      this.test = '内容被变化了'
    },2000);
    return {
      test:'我是一个简单的测试文字'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
