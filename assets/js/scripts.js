"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function createProfile(){if(userProfile){if(!localData)return alert("Неудачная попытка создания профиля"),void(window.location.href="/index.html");name=data.name,surname=data.surname,photoUrl=data.photo;var e=document.querySelector(".user__name"),r=document.querySelector(".user__surname"),o=document.querySelector(".user__photo");e.innerHTML=name,r.innerHTML=surname,o.src=photoUrl}}var name,surname,photo,photoUrl,data={},addUser=document.querySelector(".js-adduser-btn"),errorMessage=document.querySelector(".js-error-message"),localData=localStorage.getItem("user");localData&&(data=JSON.parse(localData));var Users=function e(r,o,a){_classCallCheck(this,e),this.name=r,this.surname=o,this.photo=a};addUser&&addUser.addEventListener("click",function(){var e=document.querySelector(".registration__field--name");name=e.value;var r=document.querySelector(".registration__field--surname");surname=r.value;var o=document.querySelector(".registration__field--photo");photoUrl=o.files[0];var a=document.querySelector(".registration__photo-button");if(!name)return e.style.borderColor="rgba(255, 0, 0, .5)",void(errorMessage.innerHTML="Все поля обязательны к заполнению. ");if(errorMessage.innerHTML="",e.style.borderColor="rgba(0, 0, 0, .2)",!surname)return r.style.borderColor="rgba(255, 0, 0, .5)",void(errorMessage.innerHTML="Все поля обязательны к заполнению. ");if(errorMessage.innerHTML="",r.style.borderColor="rgba(0, 0, 0, .2)",!photoUrl)return a.style.backgroundColor="rgba(255, 0, 0, .5)",void(errorMessage.innerHTML="Добавьте фото");if(errorMessage.innerHTML="",a.style.backgroundColor="rgba(0,0,0,.2)","image/png"!=photoUrl.type&&"image/jpeg"!=photoUrl.type)return void(errorMessage.innerHTML="Доступный формат фото: jpg и png. ");if(photoUrl.size>512e3)return void(errorMessage.innerHTML="Максимальные размер файлы 500 КБ ");var t=new FileReader;t.readAsDataURL(photoUrl),t.onloadend=function(){photo=t.result;var e=new Users(name,surname,photo);localStorage.setItem("user",JSON.stringify(e))},window.location.href="/profile.html",e.value="",r.value="",a.innerHTML="Добавить фото"});var userProfile=document.querySelector(".user");createProfile();