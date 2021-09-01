const requestURL ="https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?";
const applicationId = "1053809799070991190";
const format = "format=json&";
const paramTitle = '&title='
                        //app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&keyword=%E5%83%95%E3%81%AE%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC&applicationId=1053809799070991190

var app = new Vue({
  el: "#app",
  data: {
    bookList: [],
    taskList: [
      { id: 1, name: "learn vue", complete_flg: true },
      { id: 2, name: "learn ruby", complete_flg: false },
      { id: 3, name: "learn react", complete_flg: false },
    ],
  },
  methods: {
    createTask: function (newTask, newTaskState) {
      var currentTaskList = this.taskList;
      currentTaskList.push({
        id: currentTaskList.slice(-1)[0].id + 1,
        name: newTask,
        complete_flg: newTaskState,
      });
    },
  },
});