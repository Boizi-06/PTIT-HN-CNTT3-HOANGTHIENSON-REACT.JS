

function sum (a,b,callback) {
    let rs = a+b;
    callback(rs);
    
}
function prin (rs) {
    console.log(rs);
    
}
sum(1,2,prin);