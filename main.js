let btns = document.querySelectorAll("button")
let screen = document.querySelector('#screen')

btns.forEach(function(el) {
  el.onclick = function() {
    switch(el.innerText) {
      case '=':
        if(screen.value == "") {
          screen.value = "0";
        } else {
             screen.value = eval(screen.value)
        }
        break;
      case 'AC':
        screen.value = "";
        break;
      case 'del':
        screen.value = screen.value.slice(0, -1);
        break;
      case 'sin':
        screen.value = Math.sin(eval(screen.value) * (Math.PI / 180)).toFixed(1);
        break;
      case 'cos':
        screen.value = Math.cos(eval(screen.value) * (Math.PI / 180)).toFixed(1);
        break;
      case 'tan':
        screen.value = Math.tan(eval(screen.value) * (Math.PI / 180)).toFixed(1);
        break;
      default:
        const operations = ['/', '*', '-', '+', '%'];
        const lastChar = screen.value.slice(-1);
        if (operations.includes(lastChar) && operations.includes(el.innerText)) {
          break;
        }
        screen.value += el.innerText;
    }

  }
})

