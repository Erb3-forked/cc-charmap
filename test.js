

// term.setScale(2)
// term.clear()

// let bimg = [
//     ["\u0084\u0099\u008A\u009E\u0091\u0092\u0095\u0084\u0086\u0086\u008D\u009A\u009D\u0094\u009A\u008E\u0082\u0083\u0080\u0080\u0080\u0080\u0080\u0080\u0080","6667c7746666886fc70000000","888f7c668888668efffffffff"],
//     ["\u0085\u0095\u0097\u0085\u0084\u009C\u0084\u0086\u0094\u0099\u0096\u0085\u008B\u0084\u0081\u009B\u0095\u0090\u0080\u0080\u0080\u0080\u0080\u0080\u0080","6667fcf00cfff006f70000000","888c7fc6867776647ffffffff"],
//     ["\u0083\u008F\u0081\u0084\u0081\u009B\u0095\u009D\u008E\u008A\u0093\u0086\u0084\u009C\u0097\u0090\u0082\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080","6767ecc667bbb979700000000","7fcccff049999bf6fffffffff"],
//     ["\u008A\u0081\u0081\u0090\u0094\u0081\u0094\u0080\u0089\u008B\u008F\u0083\u0084\u0097\u0090\u0095\u0080\u0080\u0082\u0080\u0080\u0090\u0080\u0080\u0080","feffffc00999399f00c00d000","7cccecf061439bb0fffffffff"],
//     ["\u0097\u009B\u0081\u0082\u0084\u0088\u009B\u0095\u0080\u0085\u009F\u008B\u008A\u008F\u0097\u0085\u0080\u0081\u0080\u0080\u0080\u0094\u0091\u0080\u009A","7cfffeff044499df0d000f707","cfccccc6013045f8fffffcfff"],
//     ["\u0098\u009B\u0083\u0099\u0086\u0081\u0081\u0095\u008A\u008B\u008C\u0091\u0080\u0086\u0087\u0080\u0080\u008A\u0080\u0080\u0080\u0080\u0080\u0080\u0090","cc7cfeec0c1504100f0000007","7fcfecf46641114007fffffff"],
//     ["\u009D\u0092\u0099\u009B\u009E\u0081\u0085\u0081\u0092\u0094\u0090\u009F\u0085\u0085\u0081\u0080\u0080\u0080\u0095\u0080\u0080\u0080\u0080\u0080\u0080","7fcecfce4401514000c000000","ccfffcf46614140000fffffff"],
//     ["\u0099\u0099\u0099\u0088\u0088\u0089\u0085\u0096\u0080\u0080\u0095\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0081\u0080\u0080\u0080\u0080\u0080\u0090","ccffecf400400000000000007","77cccf4000000000006ffffff"],
//     ["\u0091\u0096\u009D\u009E\u0087\u0093\u0084\u0095\u009F\u0089\u0080\u008B\u0091\u0080\u0080\u0080\u0080\u0080\u0095\u0080\u0080\u0080\u0080\u0080\u0080","67cff44440006000006000000","fcfc66601444000000fffffff"],
//     ["\u0083\u008A\u008A\u0090\u0081\u009D\u0089\u009D\u0094\u0082\u0082\u0082\u0080\u0080\u0080\u0080\u009E\u0080\u0095\u0084\u0080\u0084\u0080\u0080\u009F","f8ff4646c441000000470400f","6f86606411140000607fffff7"],
//     ["\u0089\u0095\u0081\u0095\u0081\u0086\u009D\u0099\u009A\u008B\u009A\u0096\u008F\u0089\u0080\u0080\u0080\u0080\u008F\u0083\u0082\u008B\u0098\u009A\u0096","0f6f046441444100008fff777","67f463306e511400006777fff"],
//     ["\u009F\u0080\u0080\u008E\u008F\u0083\u008C\u0093\u008F\u008F\u0085\u0098\u008B\u0082\u0082\u0097\u0085\u0080\u0081\u0094\u009F\u009F\u0084\u0098\u0098","f00644787ff6144110c877ff3","7ff777c7ee7441144067ff777"],
//     ["\u0081\u009F\u0084\u0083\u0083\u0080\u0082\u0090\u008F\u0082\u0080\u0082\u0083\u008F\u0092\u0092\u0087\u0089\u008B\u0083\u008E\u0083\u0081\u0083\u0081","7fcfc0e5ef0c04554ff7f7777","fcf1111e1eeeee11fc7f7ffff"],
//     ["\u0080\u0093\u0096\u0090\u0086\u0090\u0081\u0080\u009F\u0088\u0080\u0088\u0080\u0091\u0098\u0090\u0082\u0097\u008A\u008A\u0090\u009A\u0098\u009F\u0080","0ff54550150f0fff7c7fd77f0","f7c1111151eeeeeef4c7fff7f"],
//     ["\u0095\u0081\u0095\u0080\u0084\u0097\u0091\u0095\u0080\u0090\u0095\u009B\u0096\u0097\u0097\u0085\u0080\u0081\u0083\u0082\u0088\u0088\u0082\u0080\u0080","7c705151051eeeee0577d7700","f711151411effffffffffffff"],
//     ["\u0091\u0092\u0094\u0088\u0080\u0094\u0098\u0080\u0081\u0085\u0099\u0099\u009B\u009E\u0084\u009E\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080","7ff5015041ffeeef000000000","f711151115eefff1fffffffff"],
//     ["\u008B\u0095\u0084\u0082\u009D\u0095\u0091\u0084\u0081\u0088\u0098\u0081\u008A\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080","fff511f555f5f000000000000","7c715511115eeffffffffffff"],
//     ["\u0095\u009D\u0096\u0082\u0094\u0085\u0091\u0082\u009F\u0096\u008A\u008F\u0081\u0094\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080","f7c5511511fefc00000000000","7cf11f51555fcffffffffffff"],
//     ["\u0089\u0084\u0097\u0092\u0092\u0088\u0099\u0090\u0080\u0085\u0099\u008C\u0092\u0081\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080\u0080","ffc5f1ff015ffc00000000000","7cf11f1115f1cffffffffffff"]
// ]

// for (y = 0; y < bimg.length; y++) {
//     term.setCursorPos(0, y)
//     let line = bimg[y]
//     term.blit(line[0], line[1], line[2])
// }

// term.print("Hello world")
// term.print("Testetsetstes")

// term.setMousemoveHandler((x,y) => {
//     term.setCursorPos(x,y)
//     term.write("*")
// })

let characterInfo = document.getElementById("characterInfo")

let term = new Term(document.getElementById("term"))
let charTerm = new Term(document.getElementById("charPreview"))


let bgSelect = document.getElementById("bgSelect")
let fgSelect = document.getElementById("fgSelect")
function render() {
    term.setfg(Term.colors[fgSelect.value])
    term.setbg(Term.colors[bgSelect.value])
    term.setScale(3)
    term.setSize(18,17)
    for (i = 0; i < 256; i++) {
        term.setChar(i % 16 + 2, Math.floor(i / 16) + 1, i)
    }
    
    term.setbg(Term.colors.gray)
    term.setfg(Term.colors.white)
    for (y = 0; y < 16; y++) {
        term.setCursorPos(0, y+1)
        term.write(`${y.toString(16).toUpperCase()}_`)
    }
    term.setCursorPos(0,0)
    term.write("  ")
    for (x = 0; x < 16; x++) {
        term.write(x.toString(16).toUpperCase())
    }
}

bgSelect.value = 'black'
bgSelect.addEventListener("change", function(e) {
    term.setbg(Term.colors[bgSelect.value])
    charTerm.setbg(Term.colors[bgSelect.value])
    render()
})
fgSelect.value = 'white'
fgSelect.addEventListener("change", function(e) {
    term.setfg(Term.colors[fgSelect.value])
    charTerm.setfg(Term.colors[fgSelect.value])
    render()
})
let formatSelect = document.getElementById("formatSelect")

charTerm.setScale(20)
charTerm.setSize(1,1)
render()

term.setMousemoveHandler((x,y) => {
    x -= 2
    y -= 1
    if (x >= 0 && y >= 0) {
        let idx = y * 16 + x
        charTerm.setbg(Term.colors[bgSelect.value])
        charTerm.setfg(Term.colors[fgSelect.value])
        charTerm.setChar(0,0,idx)
        if (formatSelect.value == "dec") {
            characterInfo.innerHTML = `Character: ${idx}`
        } else if (formatSelect.value == "hex") {
            characterInfo.innerHTML = `Character: 0x${idx.toString(16)}`
        } else {
            characterInfo.innerHTML = `Character: 0x${idx.toString(16)} (${String.fromCharCode(idx)})`
        }
    }
})

term.setClickHandler((x,y) => {
    x -= 2
    y -= 1
    if (x >= 0 && y >= 0) {
        let idx = y * 16 + x
        if (formatSelect.value == "dec") {
            navigator.clipboard.writeText(`\\${idx}`)
        } else if (formatSelect.value == "hex") {
            navigator.clipboard.writeText(`\\x${idx.toString(16)}`)
        } else {
            navigator.clipboard.writeText(String.fromCharCode(idx))
        }
    }

})