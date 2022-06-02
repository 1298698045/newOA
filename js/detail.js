var app = new Vue({
  el: "#app",
  components: {
      Comment
  },
  data: function () {
    return {
      tableData: [
        {
          start: "开始",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          start: "开始",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          start: "开始",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          start: "开始",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        }
      ],
      current: "tab1",
      selectTableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        }
      ],
      multipleSelection: [],
      remarksFile: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        }
      ],
      multipleSelectionRemarks: [],
      circulationRecord: []
    };
  },
  created: function () {
      
  },
  methods: {
    toggleSelection: function (rows) {
      if (rows) {
        rows.forEach(function(row) {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange: function (val) {
      console.log(val, "====");
      this.multipleSelection = val;
    },
    handleClickPreview: function (row) {
      console.log(row);
    },
    selectRemarksChange: function (val) {
    console.log(val);
    this.multipleSelectionRemarks = val;
    },
  },
});
// Vue.component(id, [definition])