const lightbox=document.getElementById("lightbox");
const preview=document.getElementById("preview");

function openImage(src){
preview.src=src;
lightbox.style.display="flex";
}

function closeImage(){
lightbox.style.display="none";
}

lightbox.addEventListener("click",function(e){
if(e.target===lightbox){
closeImage();
}
});
