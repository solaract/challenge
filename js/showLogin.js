/**
 * Created by zxy on 2014/10/18.
 */
document.getElementById('user_login').onclick=function(){
    document.getElementById('show').style.display='block';
};
document.getElementById('close').onclick=function(){
    document.getElementById('show').style.display='none';
};
document.getElementById("username").onfocus=function(){
    if(this.value=='姓名'){
        this.value='';
    }

};
document.getElementById("username").onblur=function(){
    if(this.value==''){
        this.value='姓名';
    }

};
document.getElementById("password").onfocus=function(){
    if(this.value=='学号')
    this.value='';
};
document.getElementById("password").onblur=function(){
    if(this.value==''){
        this.value='学号';
    }

};
//表单验证
document.getElementById("form_login").onsubmit=function(){
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    var reg=/[0-9]+/;
    if(username.value==''||username.value=='姓名'){
        alert('请输入姓名');
        return false;
    }
    else if(!reg.test(password.value)||password.value=='学号'){
        alert('请输入学号');
        return false;
    }
};
