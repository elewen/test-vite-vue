<template>
  <h4>{{ msg }}</h4>
  <el-button @click="count++">count is: {{ count }}</el-button>
  <el-button @click="showInfo">摸我</el-button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    showInfo () {
      this.$message('这是一条消息提示')
    },
  },
}
</script>
