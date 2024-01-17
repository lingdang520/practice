// 程式碼寫這裡
document.addEventListener("DOMContentLoaded", () => {
  let addBtn = document.querySelector("#addBtn")
  let todo_list = document.querySelector(".todo-list")
  let taskInput = document.querySelector("#taskInput")
  //   console.log(addBtn, todo_list, taskInput)

  //新增代辦事項方法
  function addItem() {
    let task = taskInput.value
    let tode_item = `<li class="todo-item">
    <span class="item">${task}</span>
    <button class="closeBtn">X</button>
    </li>`
    taskInput.value = ""
    taskInput.focus() //自動focus讓使用者可以再次輸入，不必滑鼠點擊才能輸入
    //console.log(task)
    if (task) {
      //若有輸入東西才新增
      todo_list.insertAdjacentHTML("afterbegin", tode_item)
    }
  }
  //按下新增按鈕
  addBtn.addEventListener("click", addItem)

  //按下xx按鈕，移除一列
  todo_list.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
      e.target.parentNode.remove()
    }
    // console.log(e.target.nodeName)
  })

  //按下enter自動送出
  taskInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      addItem()
    }
    //console.log(e.key)
  })
})
