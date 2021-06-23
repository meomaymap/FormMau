var DisplaySize = [[992, 576, 1], 
                  [5000,991,575]];
var tyle1 = [3.6,2.2,1.1];
var tyle2 = [2.5,2,1];
const root = document.querySelector(':root');

const h = window.innerHeight;

displayWindowSize();

function displayWindowSize() {

  for(var i=0; i<DisplaySize[0].length;i++){
      if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
          root.style.setProperty('--tyle1', tyle1[i]);
          root.style.setProperty('--tyle2', tyle2[i]);
          break;
      }
  }

    var x1 = document.getElementsByClassName("header")[0].offsetWidth;
    var x2 = (h <= x1) ? "flex" :  "none";
  if (i==2){
    root.style.setProperty('--display_Fuzzy', x2);
  }
}

window.addEventListener('resize', function() {
  displayWindowSize();
}, true);
