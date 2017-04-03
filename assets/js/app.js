var chile4 = ["anais-araya.jpg","andrea-miranda.jpg","berenisse-ríos.jpg","caterina-da-silva.jpg","daniela-sanchez.jpg","francisca-ojeda.jpg","katerine-sandoval.jpg"];
var lima5 = ["andrea-cabrera.jpg","ariadna-izaguirre.jpg","carito-juarez.jpg","cristy-castro.jpg","karol-orrillo.jpg","paola-ortiz.jpg","teresa-lara.jpg"];
var lima6 = ["arantza-burga.jpg","daguiana-revoredo.jpg","elizabeth-condori.jpg","grecia-rayme.jpg","janine-vega.jpg","michelle-more.jpg","mishel-velasquez.jpg","rosario-felix.jpg"];

var divGalery = document.getElementById("galery");
var divChile4 = document.getElementById("chile4");
var divLima5 = document.getElementById("lima5");
var divLima6 = document.getElementById("lima6");

function addImage(carpeta,array,divImage){
  for(var i = 0; i < array.length; i++){
      var imgNew = document.createElement("img");
      imgNew.setAttribute("src","assets/img/"+carpeta+"/"+array[i]);
      divImage.appendChild(imgNew);
      }
}

addImage("chile4",chile4,divChile4);
addImage("lima5",lima5,divLima5);
addImage("lima6",lima6,divLima6);

var select = document.getElementById("select");
select.onchange = function(){
  filter(select.value);
}

function filter(value){
  switch (value){
    case "chile4":  divChile4.style.display = "block";
                    divLima5.style.display = "none";
                    divLima6.style.display = "none";
                    break;
    case "lima5":   divChile4.style.display = "none";
                    divLima5.style.display = "block";
                    divLima6.style.display = "none";
                    break;
    case "lima6":   divChile4.style.display = "none";
                    divLima5.style.display = "none";
                    divLima6.style.display = "block";
                    break;
  }
}
