/*
var h2= document.getElementsByTagName( "h2");
var icariaTitle;

for (var i=0; i< h2.length; i++){  
    h2[i].setAttribute( "href", "#icaria"+i); 
    console.log( h2[i]); 
    icariaTitle[ i]= getTextContent( h2[i]);
}


var x=0;
var tableOfContents= [];

for( i=0; i< icariaTitle.length; i++){
    var link = document.createElement( "a");
    link.setAttribute( "name", "x");
}
*/

var h2= document.getElementsByTagName( "H2");
var icariaTitle= [];

for (var i=0; i< h2.length; i++){  
    console.log( "innerHTML=" + h2[i].innerHTML); 
    h2[i].setAttribute( "id", "icaria"+i); 
    icariaTitle[ i]= h2[i].innerHTML;
    console.log( "title " , icariaTitle[ i]);
}


for( i=0; i< icariaTitle.length; i++){
    var link = document.createElement( "a");
    link.setAttribute( "name", icariaTitle[i]);
    console.log( link);
}
