document.addEventListener('DOMContentLoaded', () => {
    const timerLabel = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
  
    let startTime, elapsedTime = 0;
    let timerInterval;
  
    function formatTime(milliseconds) {
      const totalSeconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const hours = Math.floor(minutes / 60);
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
  
    function padZero(number) {
      return number.toString().padStart(2, '0');
    }
  
    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(() => {
        const elapsedMilliseconds = Date.now() - startTime;
        timerLabel.textContent = formatTime(elapsedMilliseconds);
      }, 10);
    //   startButton.disabled = true;
    //   stopButton.disabled = false;
    //   resetButton.disabled = true;
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
      elapsedTime = Date.now() - startTime;
    //   startButton.disabled = false;
    //   stopButton.disabled = true;
    //   resetButton.disabled = false;
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      timerLabel.textContent = '00:00:00';
    //   startButton.disabled = false;
    //   stopButton.disabled = true;
    //   resetButton.disabled = true;
    }
  
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
  });
  