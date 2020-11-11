<template>
  <h4>{{ msg }}</h4>
  <a-space>
    <a-button @click="count++">count is: {{ count }}</a-button>
    <a-button type="primary" @click="touch">摸我</a-button>
  </a-space>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { message } from 'ant-design-vue'

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
    touch () {
      message.info('This is a normal message')
    },
  },
}
</script>
