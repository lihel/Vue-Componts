<template>
  <li class="todoItem">
    <el-checkbox @change="check"></el-checkbox>
    <span contenteditable="true" @blur="update" ref="val">{{this.item.value}}</span>
    <el-button type="danger" icon="el-icon-delete" @click="handelDelete" circle></el-button>
  </li>
</template>
<script>

  export default {
    name: 'todoItem',
    data () {
      return {}
    },
    props: ['item'],
    methods: {
      handelDelete () {
        this.$emit('delete', this.item.id)
      },
      update () {
        let newVal = this.$refs.val.innerHTML
        this.item.value = newVal
      },
      check () {
        this.$emit('check', this.item.id)
      },
    },
    watch: {
      item: {
        handler (item) {
          // debugger
        },
        immediate: true,
        deep: true
      }
    }
  }
</script>
<style scoped lang="less">
  .todoItem {
    position: relative;
    text-align: left;
    display: block;
    overflow: hidden;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .todoItem:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .todoItem:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .el-button {
    float: right;
    clear: both;
  }
</style>
