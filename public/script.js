function display(val) {
    document.getElementById('input').value += val
    return val
}

function solve() {
    let x = document.getElementById('input').value
    let y = eval(x);
    document.getElementById('input').value = y
    return y
}

function clearScreen() {
    document.getElementById('input').value = ''
}