/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

function displayColors(colors) {
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`
    }).join('')
    
    console.log(myColorsHtml)

    document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
}



async function getColors(colorCount) {
    let response = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`)
    let data = await response.json()
    let colors = data.colors
    
    displayColors(colors)
}

let colorCount = 100
getColors(colorCount)
