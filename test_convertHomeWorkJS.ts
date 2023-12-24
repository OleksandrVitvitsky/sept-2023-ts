// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName:string   = 'Oleksandr';
let middleName:string  = 'Vasyliovych';
let lastName:string    = 'Vitvitsky';
const Person:string =`${firstName} ${middleName} ${lastName}`;
console.log(Person)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a:number = 100;
console.log('type of "a" is ' + typeof a);
let b :string= '100';
console.log('type of "b" is ' + typeof b);
let c:boolean = true;
console.log('type of "c" is ' + typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// firstName   = prompt('enter your first name?','');
// middleName  = prompt('enter your middle name?','');
// lastName    = prompt('enter your last name?','');
// let age:number = +prompt('enter your age?');
// console.log(`My name is ${firstName} ${middleName} ${lastName}. \nI'm ${age}. :)`);

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arrayOfData:any[] = [51, 44, 'a', true, [], 'a23', {}, [22, 44, "21"], 88, 99];
console.log(arrayOfData[0]);
console.log(arrayOfData[1]);
console.log(arrayOfData[2]);
console.log(arrayOfData[3]);
console.log(arrayOfData[4]);
console.log(arrayOfData[5]);
console.log(arrayOfData[6]);
console.log(arrayOfData[7]);
console.log(arrayOfData[8]);
console.log(arrayOfData[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

interface IBook<Autors> {
    title:string,
    pageCount:number,
    genre:string,
    autors:Autors
}

let book1:Partial<IBook<[]>> = {
    title: 'Witches',
    pageCount: 185,
    genre: 'fantasy'
};
let book2:Partial<IBook<[]>> = {
    title: 'Aragon',
    pageCount: 384,
    genre: 'scientific '
};
let book3:Partial<IBook<[]>> = {
    title: 'Жорстокий принц',
    pageCount: 874,
    genre: 'adventures'
};
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4:IBook<object[]> = {
    title: 'Witches',
    pageCount: 185,
    genre: 'fantasy',
    autors: [{
        name: 'Roald Dahl',
        age: 68
    }]};
let book5:IBook<object[]> = {
    title: 'Aragon',
    pageCount: 384,
    genre: 'scientific',
    autors: [{
        name: 'Christopher Paolini',
        age: 58
    }]};
let book6:IBook<object[]> = {
    title: 'Жорстокий принц',
    pageCount: 874,
    genre: 'adventures',
    autors: [{
        name: 'Holly Black',
        age: 48
    }]};
console.log(book4, book5, book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrOfHeroes:object[] = [
    {name:'Spider man', username:'spider',password:'5255asd554'},
    {name:'Capitan America', username:'cap',password:'asdxc547845asAA'},
    {name:'Iron man', username:'metalicMan', password: 31315},
    {name:'Halk', username:'greenBoy',password:'asds3gbmv'},
    {name:'Wolverine', username:'wolverine_nnav',password:'646535assAA'},
    {name:'Thor', username:'asgardec',password:'5423163165'},
    {name:'Dr. Strange', username:'doc',password:'bumbum'},
    {name:'Black Panther', username:'murmur',password:'aasdcvcxcv22'},
    {name:'Venom', username:'VenomusGnomus',password:'1'},
    {name:'Grut', username:'tree',password:'0000'}
]
console.log(arrOfHeroes[0]['password']);
console.log(arrOfHeroes[1]['password']);
console.log(arrOfHeroes[2]['password']);
console.log(arrOfHeroes[3]['password']);
console.log(arrOfHeroes[4]['password']);
console.log(arrOfHeroes[5]['password']);
console.log(arrOfHeroes[6]['password']);
console.log(arrOfHeroes[7]['password']);
console.log(arrOfHeroes[8]['password']);
console.log(arrOfHeroes[9]['password']);

/// за допомогою switch
let time:number = 37;
switch (true){
    case time > 60:
        console.log('Ваше число більше 60. До побачення!!!');
        break;
    case time >= 45:
        console.log('Ваше число відноситься до 4 чверті');
        break;
    case time >= 30:
        console.log('Ваше число відноситься до 3 чверті');
        break;
    case time >= 15:
        console.log('Ваше число відноситься до 2 чверті');
        break;
    case time > 0:
        console.log('Ваше число відноситься до 1 чверті');
        break;
    default:
        console.log('Ваше число не підходить!!!');
}