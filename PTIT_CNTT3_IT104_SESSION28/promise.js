function getDataFormAPI1 () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('lay dât tu trinh duyet');
            resolve
        },2000)
    })
}
function getDataFormAPI2 () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('lay dât tu trinh duyet');
            resolve
        },2000)
    })
}
function getDataFormAPI3 () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('lay dât tu trinh duyet');
            resolve
        },2000)
    })
}
function getDataFormAPI4 () {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('lay dât tu trinh duyet');
            resolve
        },2000)
    })
}


async function runAllTask() {
  try {
      await Promise.all([
    getDataFormAPI1(),
    getDataFormAPI2(),
    getDataFormAPI3(),
    getDataFormAPI4(),
  ]);
  console.log("Hoàn thành tất cả");
  } catch (error) {
    console.log('loi;',error);
    
  
}
}



runAllTask();
