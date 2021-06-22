var DisplaySize = [[992, 576, 1], 
                  [5000,991,575]];
var tyle = [4,3,1];
const root = document.querySelector(':root')

displayWindowSize();

function displayWindowSize() {

  for(var i=0; i<DisplaySize[0].length;i++){
      if(window.innerWidth > DisplaySize[0][i] && window.innerWidth <= DisplaySize[1][i]) {
          root.style.setProperty('--tyle1', tyle[i]);
      }
  }
  
}

window.addEventListener('resize', function() {
  displayWindowSize();
}, true);

