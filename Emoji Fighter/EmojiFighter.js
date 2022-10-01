const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stage = document.getElementById("stageEl")
let fights = document.getElementById("fightButton")

function fight(){
    let fightCallOne = Math.floor(Math.random() * fighters.length)
    let fightCallTwo = Math.floor(Math.random() * fighters.length)
    stage.textContent = fighters [fightCallOne] + " VS " + fighters [fightCallTwo]
}