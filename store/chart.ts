// 示例
import { defineStore } from "pinia"

export const useChartStore = defineStore("chart", {
  // 存储位置
  state: () => {
    return {
	  tableData: null,
      options: null,
    }
  },
  // 数据操作
  actions: {
    setOptions(options: any) {
      this.options = options
    },
    setTableData(data: any) {
      this.tableData = data
    }
  },
  // 数据读取
  getters: {
    getOption: (state) => {
      return state.options
    },
    getData: (state) => {
      return state.tableData
    }
  }
})
