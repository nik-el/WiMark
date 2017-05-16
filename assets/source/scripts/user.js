/* Создания профиля из localStorage */
var userProfile = document.querySelector('.user');

function createProfile() {
if(userProfile){
  if(localData){
  /* Проверяем сохраненные данные*/
  name = data.name;
  surname = data.surname;
  photoFile = data.photo;

  /* Переносим данные на страницу */
  var nameProfile = document.querySelector('.user__name');
  var surnameProfile = document.querySelector('.user__surname');
  var photoProfile = document.querySelector('.user__photo');
  nameProfile.innerHTML = name;
  surnameProfile.innerHTML = surname;
  photoProfile.src = photoFile;
  photoProfile.alt = `Фото ${name} ${surname}`;
  }else {
  alert('Неудачная попытка создания профиля');
  window.location.href = "/index.html";
  return;
  }
}
}

createProfile();
