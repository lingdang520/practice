// 程式碼寫這裡
const timer = document.querySelector(".timer")
let defaultSeconds = 120
let totalSeconds
let running = false
let timerID
let paused = false
var time = prompt("請輸入要倒數幾分鐘?案enter開始倒數，案空白鍵可暫停");
if (time != '') {
  defaultSeconds = time*60;
  let mins = String(Math.floor(defaultSeconds / 60)).padStart(2, "0")
  let secs = String(defaultSeconds % 60).padStart(2, "0")
  timer.textContent = `${mins}:${secs}`
}



function updateTimer(seconds) {
  let mins = String(Math.floor(seconds / 60)).padStart(2, "0")
  let secs = String(seconds % 60).padStart(2, "0")

  timer.textContent = `${mins}:${secs}`

  if (seconds === 0) {
    timer.classList.add("times-up") //變紅字
  }
}

//時間到
function timesUp() {
  clearInterval(timerID) //暫停clearInterval事件
  running = false
  updateTimer(0)
  playSound()
}

function playSound() {
  let sound = new Audio("sounds/news.mp3")
  sound.play()
}

function initTimer() {
  running = true
  totalSeconds = defaultSeconds
  timer.classList.remove("times-up") //移除變紅字
  updateTimer(totalSeconds)

  timerID = setInterval(() => {
    if (totalSeconds > 1) {
      totalSeconds -= 1
      updateTimer(totalSeconds)
    } else {
      timesUp()
    }
  }, 1000)
}

function pauseTimer() {
  paused = true
  clearInterval(timerID)
}

function resumeTimer() {
  paused = false

  timerID = setInterval(() => {
    if (totalSeconds > 1) {
      totalSeconds -= 1
      updateTimer(totalSeconds)
    } else {
      timesUp()
    }
  }, 1000)
}

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Enter":
      if (!running) {
        initTimer()
      }
      break
    case " ":
      if (running) {
        if (paused) {
          // 繼續
          resumeTimer()
        } else {
          // 暫停
          pauseTimer()
        }
      }
      break
  }
})
