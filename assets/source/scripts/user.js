/* Создания профиля из localStorage */
if (localData) {
name = data.name;
surname = data.surname;
photoUrl = data.photo;
}

function createProfile() {
var nameProfile = document.querySelector('.user__name');
var surnameProfile = document.querySelector('.user__surname');
var photoProfile = document.querySelector('.user__photo');

nameProfile.innerHTML = name;
surnameProfile.innerHTML = surname;
photoProfile.src = photoUrl;
}
createProfile();
