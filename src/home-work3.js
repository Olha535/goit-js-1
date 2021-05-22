"use strict";

// 1.  Создание объекта
/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};*/

//2.  Вложенные свойства

/*const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],

owner: {
name: "Henry",
 phone: "982-126-1588",
email: "henry.carter@aptmail.com",
 },
};*/

// 3.  Доступ к свойствам через точку

/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
 descr: "Spacious apartment in the city centre",
 rating: 4,
 price: 2153,
 tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;*/

//   4.  Доступ к вложенным свойствам
// Дополни код присвоив объявленным переменным выражения обращения
//к соответствующим свойствам обьекта apartment.

/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
 descr: "Spacious apartment in the city centre",
 rating: 4,
 price: 2153,
 tags: ["premium", "promoted", "top"],
 owner: {
  name: "Henry",
  phone: "982-126-1588",
 email: "henry.carter@aptmail.com",
 },
};

 //Change code below this line
const ownerName = apartment.owner.name;

const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];*/

//5.  Доступ к свойствам через квадратные скобки

/*const apartment = {
 imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city centre",
 rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};

 //Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];*/

//6. Изменение значения свойства

/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city centre",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");*/

//7.  Добавление свойств

/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city centre",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;

apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};*/

//  8. Короткие свойства

/*const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};*/

//  9.  Вычисляемые свойства

/*const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
}; */

//10.  Цикл for...in
