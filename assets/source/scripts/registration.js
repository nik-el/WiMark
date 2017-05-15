var name, surname, photo, photoUrl;
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

/* Функция добавления пользователяи в localStorage */
function addUserFunc() {
  var nameField = document.querySelector('.registration__field--name');
  name = nameField.value;
  var surnameField = document.querySelector('.registration__field--surname');
  surname = surnameField.value;
  var photoFiled = document.querySelector('.registration__field--photo');
  photoUrl = photoFiled.files[0];
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
  if(!photoUrl){
  addPhoto.style.backgroundColor = 'rgba(255, 0, 0, .5)';
  errorMessage.innerHTML = 'Добавьте фото';
  return;
} else{
  errorMessage.innerHTML = '';
  addPhoto.style.backgroundColor = '';
}

  /* Проверяем тип файла */
  if((photoUrl.type != 'image/png') && (photoUrl.type != 'image/jpeg')){
  errorMessage.innerHTML = 'Доступный формат фото: jpg и png';
  return;
  }
  /* Проверяем размер файла */
  if(photoUrl.size > 512000) {
    errorMessage.innerHTML = 'Максимальные размер файлы 500 КБ';
    return;
  }

  /* Перевод изображения в base64 */
  var reader = new FileReader();
  reader.readAsDataURL(photoUrl);
  reader.onloadend = function () {
    photo = reader.result;
    var user = new Users(name, surname, photo);
    /* Добавление в localStorage */
    localStorage.setItem('user', JSON.stringify(user));
  }

  window.location.href = "profile.html";
  nameField.value = '';
  surnameField.value = '';
  addPhoto.innerHTML = 'Добавить фото';
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
