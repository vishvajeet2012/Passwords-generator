let copybtn = document.getElementById('copytxt')
let para = document.getElementById('pass'); /// para is paragrah tag

        function clickme(){
         
            
          
  let a  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let b = " " // gen... password is pr store hoga
  let len = 8 ;  // password ki lenth 
  for(let i = 0; i<len; i++) {
  let gen = Math.floor(Math.random() * a.length)
  
  b += a.charAt(gen)
  }
      para.innerText = b;        
     
  }
           


  function coppy(){
    navigator.clipboard.writeText(para.innerText)  //yha pr copy copy kr rha hu 
    alert("Copied the text: " + para.innerText)

  }