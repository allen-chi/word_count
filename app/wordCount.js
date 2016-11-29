module.exports={
    words: function (sentence){
  
 sentence=sentence.replace(/\s\s+/g, ' ');
 sentence=sentence.replace(/\n/, ' ');
 sentence=sentence.replace(/\t/, ' ');
 var sentence_array=sentence.split(" ");
 var compare=sentence.split(" ");
 var new_tuple={};

 for (var i=0; i<sentence_array.length; i++){
   var count =0;
   for(var j=0; j<compare.length; j++){
     if (compare[j]==sentence_array[i]){
       count+=1;
     }
   }
   new_tuple[sentence_array[i]] = count;
   
   
 }
return new_tuple;
 
}
 
 
}