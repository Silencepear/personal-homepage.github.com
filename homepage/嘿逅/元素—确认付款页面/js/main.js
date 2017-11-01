window.onload = function(){
	var thArr = document.getElementsByTagName('th');
	// console.log(thArr);
	var spanArr = document.getElementsByTagName('span');
	// console.log(spanArr);
	var inputArr = document.getElementsByTagName('input');
	// console.log(inputArr);
    var dianx = document.getElementsByClassName('dianx')[0];
    console.log(dianx);
  
   	 var count = -1;
   	 // console.log(input);
   	 for(var i = 0;i<thArr.length;i++){
   	 	var th = thArr[i];
   	 	th.onclick = function(){
   	 	  count++;
   	 	  // console.log(this);
   	 	  console.log(this.innerText);
   	 	// console.log(count);
   	   // console.log(inputArr[count]);
   	    inputArr[count].value =  this.innerText; 
         
       	var index = 6;
       	 dianx.onclick = function(){
       	 	index--;
       	 	console.log(index);
       	 	for (var j = inputArr.length - 1; j >= 0; j--) {
       	      var input = inputArr[j];
       	     inputArr[index].value = '';
       	    // console.log(j);
       	}
        }
       
       }

   	}
   
   
}


    $('.ljfk').click(function(){

    	$('.password').fadeIn(800);
        $('.shade').css('display','block');
        $('.password').css('backgroundColor','rgba(0)'); 
    })
    

    $('.cha').click(function(){
    	console.log('click');
    	$('.password').fadeOut(800);
    	 $('.shade').css('display','none');

    })
