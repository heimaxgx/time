
window.onload = function () {
  time()
  setInterval(() => {
    time()
  }, 1000)
  function time () {
    let start = moment(new Date());//获取开始时间
    let end = moment(new Date("2022/09/17"));//结束时间
    let diff = end.diff(start);//时间差
    const months = moment.duration(diff).months();
    const days = moment.duration(diff).days();
    const hours = moment.duration(diff).hours();
    const minutes = moment.duration(diff).minutes();
    const seconds = moment.duration(diff).seconds();
    // 为页面上的元素赋值
    document.querySelector('#MM').innerHTML = months + '个月'
    document.querySelector('#DD').innerHTML = days + '天'
    document.querySelector('#HH').innerHTML = hours + '小时'
    document.querySelector('#mm').innerHTML = minutes + '分钟'
    document.querySelector('#ss').innerHTML = seconds + '秒'
  }
}


