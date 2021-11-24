async function getColors() {
    let response = await fetch("https://apis.scrimba.com/hexcolors?count=5")
    let data = await response.json()
    
    console.log(data)
}

getColors()