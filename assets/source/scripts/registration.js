var name, surname, photo, photoFile;
var data = {};
var addUser = document.querySelector('.js-adduser-btn');
var errorMessage = document.querySelector('.js-error-message');

var localData = localStorage.getItem('user');
if(localData) {
  data = JSON.parse(localData);
}

/* Конструктор регистрации пользователя */
class Users {
  constructor(name, surname, photo) {
    this.name = name;
    this.surname = surname;
    this.photo = photo;
  }
}

/* Перевод фото в base64 и подгрузка превью */
function previewFile(){
var photoTitle = document.querySelector('.registration__photo-title');
var photoIcon = document.querySelector('.registration__icon--photo');
var photoLabel = document.querySelector('.registration__label--photo');
var addPhoto = document.querySelector('.registration__photo-button');
photoFile = document.querySelector('.registration__field--photo').files[0];

var reader = new FileReader();
reader.onloadend = function () {
photo = reader.result;
addPhoto.style.backgroundImage = `url('${photo}')`;
photoTitle.innerHTML = '';
photoLabel.removeChild(photoIcon);
}
if(photoFile){
  reader.readAsDataURL(photoFile);
} else {
  addPhoto.style.backgroundImage = '';
  photoTitle.innerHTML = 'Загрузить фото';
}
document.querySelector('.registration__field--photo').value = '';
}


/* Функция добавления пользователяи в localStorage */
function addUserFunc() {
  var nameField = document.querySelector('.registration__field--name');
  name = nameField.value;
  var surnameField = document.querySelector('.registration__field--surname');
  surname = surnameField.value;
  var addPhoto = document.querySelector('.registration__photo-button');

  /* Проверям введенные данные на пустоту */
  if(!name){
  nameField.style.borderColor = 'rgba(255, 0, 0, .5)';
  errorMessage.innerHTML = 'Все поля обязательны к заполнению';
  return;
  } else {
  errorMessage.innerHTML = '';
  nameField.style.borderColor = '';
  }
  if(!surname){
  surnameField.style.borderColor = 'rgba(255, 0, 0, .5)';
  errorMessage.innerHTML = 'Все поля обязательны к заполнению';
  return;
  } else {
  errorMessage.innerHTML = '';
  surnameField.style.borderColor = '';
  }
  if(!photoFile){
  addPhoto.style.backgroundColor = 'rgba(255, 0, 0, .5)';
  return;
} else{
  errorMessage.innerHTML = '';
  addPhoto.style.backgroundColor = '';
}

  /* Проверяем тип файла */
  if((photoFile.type != 'image/png') && (photoFile.type != 'image/jpeg')){
  errorMessage.innerHTML = 'Доступный формат фото: jpg и png';
  return;
  }
  /* Проверяем размер файла */
  if(photoFile.size > 512000) {
    errorMessage.innerHTML = 'Максимальные размер файлы 500 КБ';
    return;
  }

  /* Создания объекта user и добавление в localStorage */
  var user = new Users(name, surname, photo);
  localStorage.setItem('user', JSON.stringify(user));

  /* Переходим к профилю и очищаем форму */
  window.location.href = "profile.html";
  nameField.value = '';
  surnameField.value = '';
}

/* Вызов функции по клику  */
addUser && addUser.addEventListener('click', function addUser() {
  addUserFunc();
});

/* Вызов функции по нажатию Enter  */
window.addEventListener('keydown', function() {
  if (event.keyCode == 13){
    addUserFunc();
  }
});
