// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(array) {
    let win = array.find(isWin)
    if (win) {
      return win.year
    }
    return win
  }
  
  function isWin(score){
      return score.result === "W"
        
  }