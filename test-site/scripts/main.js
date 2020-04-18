let my=document.querySelector('img');
//点击切换图片
my.onclick=function () {
    let mysrc=my.getAttribute('src');
    if(mysrc==='images/1.jpg')
    {
        my.setAttribute('src','images/2.jpg')
    }
    else
    {
        my.setAttribute('src','images/1.jpg')
    }

};



//记录用户名
let myButton=document.querySelector('button');
let myh1=document.querySelector('h1');
function setname() {
    let myname =prompt('请输入你的用户名');
    if(myname===null){
        setname();
    }else{
        localStorage.setItem('name',myname);
        myh1.innerHTML='Mozilla 酷毙了，'+myname;
    }
}
//初始化代码
if(!localStorage.getItem('name')){
    setname();
}
else{
    let stor=localStorage.getItem('name');
    myh1.textContent='Mozilla 酷毙了，'+stor;
}
myButton.onclick=function () {
    setname();
};