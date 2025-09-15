// call back la tac vu truoc doi tac vu sau hoan thanh gay tình trạng khó đọc khó bảo trì gây rối

function getDataFormAPI1 (callBack) {
    setTimeout (()=>{
        console.log('get form data api 1');    
        callBack()
    },2000)   
}
function getDataFormAPI2 (callBack) {
    setTimeout (()=>{
        console.log('get form data api 1');   
        callBack() 
    },2000)   
}
function getDataFormAPI3 (callBack) {
    setTimeout (()=>{
        console.log('get form data api 1');    
        callBack()
    },2000)   
}
function getDataFormAPI4 (callBack) {
    setTimeout (()=>{
        console.log('get form data api 1');    
        callBack()
    },2000)   
}

function runAllTask () {
    getDataFormAPI1(()=>{
        getDataFormAPI2(()=>{
            getDataFormAPI3(()=>{
                getDataFormAPI4();
            })
        })
    })
}
runAllTask();