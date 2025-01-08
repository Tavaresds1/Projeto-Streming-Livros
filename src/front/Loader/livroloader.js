function adicionarLoaderAoBotao(funcaoAExecutar) {
    const loader = document.getElementById("loaderGif");
    const buttons = document.getElementById("button");
   
  button.addEventListener("click", () => {
      const originalBodyContent = document.body.innerHTML;

      document.body.innerHTML = `
      <div class="book">
              <div class="inner">
                  <div class="left"></div>
                  <div class="middle"></div>
                  <div class="right"></div>
              </div>
              <ul>
              </ul>
          </div>
    `;
    const ul = document.querySelector('ul');


for (let i = 0; i < 18; i++) {
  const li = document.createElement('li');
  li.style.animationName = `page-${i}`;
  ul.appendChild(li);
}


for (let i = 0; i < 19; i++) {
  const delay = i * 1.86;
  const delayAfter = i * 1.74;

  const style = document.createElement('style');
  style.innerHTML = `
      @keyframes page-${i} {
          ${4 + delay}% {
              transform: rotateZ(0deg) translateX(-18px);
          }
          ${13 + delayAfter}%, ${54 + delay}% {
              transform: rotateZ(180deg) translateX(-18px);
          }
          ${63 + delayAfter}% {
              transform: rotateZ(0deg) translateX(-18px);
          }
      }
  `;
  document.head.appendChild(style);
}
      setTimeout(() => {
          try {
              funcaoAExecutar();
          } catch (error) {
              console.error("Erro ao executar a função:", error);
          
          }
      }, 1000);
  });
};



  adicionarLoaderAoBotao(funcao);