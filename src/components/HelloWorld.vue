<template>
  <div class="main">
    <el-container>
      <el-header>todoList</el-header>
      <el-main>
        <el-input type="text" v-model="todo" @change="input" placeholder="input todoList"></el-input>
        <el-card>
          <div slot="header">
            <span class="cardHead">
              todo
              <span class="count">{{countTodo}}</span>
            </span>
          </div>
          <todo-item
            v-for="item in searchTodo()"
            :key="item.id"
            :item="item"
            @delete="Del"
            @check="check"
          ></todo-item>
        </el-card>

        <el-card>
          <div slot="header">
            <span class="cardHead">
              done
              <span class="count">{{countDone}}</span>
            </span>
          </div>
          <todo-item
            v-for="item in searchDone()"
            :key="item.id"
            :item="item"
            @delete="Del"
            @check="check"
          ></todo-item>
        </el-card>
      </el-main>
      <el-footer>@copyright</el-footer>
    </el-container>
  </div>
</template>

<script>
import todoItem from './todoItem.vue';

export default {
  name: 'todoList',
  data() {
    return {
      id: 0,
      todo: '',
      list: [],
      countTodo: 0,
      countDone: 0
    };
  },
  components: { todoItem },
  methods: {
    input() {
      this.list.push({ id: this.id++, value: this.todo, done: false });
      this.todo = '';
      this.countTodo++;
    },
    Del(id) {
      this.list.some((item, i) => {
        if (item.id == id && !item.done) {
          this.list.splice(i, 1);
          this.countTodo--;
          return true;
        } else if (item.id == id && item.done) {
          this.list.splice(i, 1);
          this.countDone--;
          return true;
        }
      });
    },
    searchTodo() {
      return this.list.filter(item => {
        if (!item.done) {
          return item;
        }
      });
    },
    searchDone() {
      return this.list.filter(item => {
        if (item.done) {
          return item;
        }
      });
    },
    check(id) {
      return this.list.filter(item => {
        if (item.id == id) {
          item.done = !item.done;
          if (item.done) {
            this.countDone++;
            this.countTodo--;
          } else {
            this.countTodo++;
            this.countDone--;
          }
          return item;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 2em;
}

.el-main {
  width: 40%;
  margin: auto;
}

.cardHead {
  font-size: 1.5em;
}

.count {
  margin-left: 80%;
}

.el-input {
  margin-bottom: 20px;
}

.el-card {
  .el-input();
}
</style>
