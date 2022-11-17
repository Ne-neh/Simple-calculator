let val = document.getElementById('inp')


function exe() {
    val.value = eval(val.value);
}

function cls() {
    val.value = "";
}

function num_click(v) {
    val.value += v;
}

function del() {
    val.value = val.value.substr(0, val.value.length - 1);
}