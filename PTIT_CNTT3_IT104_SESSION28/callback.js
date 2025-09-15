// call back la hàm được truyền làm đối số ủa hàm khác

function askForPhoneNumber (callBack1) {
    let std;
    console.log('nhat goi cho duy xin so cua lan');
    console.log('doi minh ti minh kiem tra danh ba');
    setTimeout (()=>{
        console.log('minh tim xong roi');
        std = "0362490374"
        callBack1(std);
    },3000);
}
function susscessPhone(rs) {
     console.log(`nhat goi cho lan theo sdt ${rs}`); 
}
askForPhoneNumber(susscessPhone);