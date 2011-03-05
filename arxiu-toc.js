
var h2= document.getElementsByTagName( "h2");
var icariaTitle

for (var i=0; i< h2.length; i++){  
    h2[i].setAttribute( "href", "#icaria"+i); 
    console.log( h2[i]); 
    icariaTitle[ i]= getTextContent( h2[i])
}


for( i=0; i< icariaTitle.length; i++){
    var link = document.createElement( "a");
    link.setAttribute( "name")
}