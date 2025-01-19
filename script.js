let result = document.querySelector('.result')
let hero = document.querySelector('.hero')
let check = document.querySelector('.check').checked

let name_male = ["Глеб", "Юрий", "Станислав", "Николай", "Алексей", "Илья", "Дмитрий", "Арсений", "Александр", "Пётр"];
let name_female = ["Марта", "Ольга", "Мария", "Татьяна", "Виктория", "Мира", "Вероника", "Арина", "Мирослава", "Сафия"]
let surname_male = ["Нефедов", "Кузнецов", "Андреев", "Антонов", "Павлов", "Грибов", "Терехов", "Васильев", "Сазонов", "Иванов"];
let surname_female = ["Большакова", "Чижова", "Иванова", "Смирнова", "Виноградова", "Рожкова", "Павлова", "Щербакова", "Никифорова", "Малышева"]
let proffesion = ["Бренд-менеджер", "Модель", "Философ", "Администратор сайта", "Системный администратор", "Матрос", "Мусорщик", "Типограф", "Химик-технолог", "Испытатель"];

hero.addEventListener('click', () => {
  let characters = {};
  let check = document.querySelector('.check').checked
  let age = Math.round(Math.random() * (120-0)+0)
  // let random_name = Math.round(Math.random() * (9-0)+0)
  // let random_surname = Math.round(Math.random() * (9-0)+0)
  let random_proffesion = Math.round(Math.random() * (9-0)+0)
  if(check){
    let random_name = Math.floor(Math.random() * name_female.length);
    let random_surname = Math.floor(Math.random() * surname_female.length);
    characters = {
      name: name_female[random_name],
      surename: surname_female[random_surname],
      proffesion: proffesion[random_proffesion],
      age: age}
  }
  else{
    let random_name = Math.floor(Math.random() * name_male.length);
    let random_surname = Math.floor(Math.random() * name_female.length);
    characters = {
      name: name_male[random_name],
      surename: surname_male[random_surname],
      proffesion: proffesion[random_proffesion],
      age: age}
  };

 let hero_card = document.createElement('div');

    for (let hero_key in characters){
        let characters_information = document.createElement('p');
        let text = `${hero_key}: ${characters[hero_key]}`;
        characters_information.append(text)
        hero_card.append(characters_information);

}
  result.append(hero_card);
})