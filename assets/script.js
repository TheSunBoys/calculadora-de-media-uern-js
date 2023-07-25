function calcular() {
    let n1 = parseFloat(document.querySelector('#nota1').value);
    let n2 = parseFloat(document.querySelector('#nota2').value);
    let n3 = parseFloat(document.querySelector('#nota3').value);
    const resultado = document.querySelector('span');
    const aviso = document.querySelector('#aviso');
  
    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      n1 = n1 * 4;
      n2 = n2 * 5;
      n3 = n3 * 6;
      let media = (n1 + n2 + n3) / 15;
      media = parseFloat(media.toFixed(2));

      if (media<7 && media>4){
        let recuperacao = 12 - media;
        let texto = `Você precisa de ${recuperacao} na quarta prova.`

        aviso.textContent = texto;
      } else if (media<4){
        texto = "Você está reprovado!"

        aviso.textContent = texto;
      }
      
  
      resultado.innerHTML = media;
    } else {
      resultado.innerHTML = "Preencha todas as notas corretamente.";
    }   
}

  
  

