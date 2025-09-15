function delayCallback (number,callback) {
    setTimeout(()=>{
        
        callback(number);
    },2000) 
}


function callBack (rs) {
    console.log(`goi ket qua sau 2s ${rs}`);
    
}
delayCallback(5,callBack);