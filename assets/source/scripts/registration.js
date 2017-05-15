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

/*  */
addUser && addUser.addEventListener('click', function() {
  name = document.querySelector('.registration__field--name').value;
  surname = document.querySelector('.registration__field--surname').value;
  photoUrl = document.querySelector('.registration__field--photo').files[0];

  /* Проверям введенные данные на пустоту */
  if(!name || !surname || !photoUrl){
  errorMessage.innerHTML = 'Все поля обязательны к заполнению. ';
  return;
  }
  /* Проверяем тип файла */
  if((photoUrl.type != 'image/png') && (photoUrl.type != 'image/jpeg')){
  errorMessage.innerHTML = 'Доступный формат фото: jpg и png. ';
  return;
  }
  /* Проверяем размер файла */
  if(photoUrl.size > 512000) {
    errorMessage.innerHTML = 'Максимальные размер файлы 500 КБ ';
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
});
