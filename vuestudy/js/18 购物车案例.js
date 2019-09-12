const vm = new Vue({
  el:"#app",
  data:{
    list:[
      {
        id:1,
        name:"《算法导论》",
        date:"2006-9",
        price:85.00,
        count:1
      },
      {
        id:2,
        name:"《编程艺术》",
        date:"2006-2",
        price:59.00,
        count:1
      },
      {
        id:3,
        name:"《代码大全》",
        date:"2005-3",
        price:67.00,
        count:1
      },
      {
        id:4,
        name:"《数据库导论》",
        date:"2010-4",
        price:104.00,
        count:1
      }
    ],
  },
  methods: {
    add(index){
        this.list[index].count++
      },
    sub(index){
        this.list[index].count--
    },
    removeHandle(index){
      this.list.splice(index,1)
    }
  },
  computed: {
    fullPrice(){
      let money=0
      for(let i=0;i<this.list.length;i++){
        money += this.list[i].price * this.list[i].count
      }
      return money
    }
  },
  filters:{
    showPrice(price){
      return "￥" + price.toFixed(2)
      // toFixed()用于保留小数，参数为保留的位数
    }
  }
})