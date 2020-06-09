const isLucky = (answers) {
  let luckyCount = 0;
  let unluckyCount = 0;

  answers.forEach((answer) => {
    if (answer === "lucky") {
      luckyCount++;
    }
    else {
      unluckyCount++
    }
  });

    if (luckyCount > unluckyCount) {
      return true
    }
    else {
      return false
    }
}


$(document).ready(function() {
  
});