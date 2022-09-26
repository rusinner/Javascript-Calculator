//declarations
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
//appear pn screen when press a button
for (item of btn){
    item.addEventListener('click', (e)=>{
       btnText = e.target.innerText;

       if(btnText == 'x'){
        btnText = '*';
       }

       if(btnText == '÷'){
         btnText = '/';
       }
       
       screen.value += btnText;
    });
}

//trigonometry and other functions
function sin(){
     screen.value = Math.sin(screen.value * (Math.PI / 180));
    
}

function cos(){
    screen.value = Math.cos(screen.value * (Math.PI / 180));
}

function pi(){
    screen.value  = Math.PI;
    
}

function e(){
    screen.value  = Math.E;
}

function tan(){
    screen.value = Math.tan(screen.value * (Math.PI / 180));
}

function root(){
    screen.value  = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
      

    }
    return num;
  }
    
    


function backsp(){
    screen.value = screen.value.substr(0,screen.value.length - 1);
}

function clean(){
    screen.value  = '';
    
}