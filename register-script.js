function multiplyByTwo(){
    const num = document.getElementById("fnum").value;
  
    if(!isNaN(num)){
      const result = num * 2;
      document.getElementById("answer").innerText = result;
    } else{
      alert("Put a valid number!");
    }
  }