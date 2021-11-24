/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

function displayColors(colors) {
    console.log(colors)
    

}


async function getColors() {
    let response = await fetch("https://apis.scrimba.com/hexcolors?count=5")
    let data = await response.json()
    let colors = data.colors
    
    displayColors(colors)
}

getColors()
