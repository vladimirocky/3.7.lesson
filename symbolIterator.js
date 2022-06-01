/**
 * ЗАДАНИЕ №1
 *  [Symbol.iterator]
 * Условия:
 * 1. Раскомментруйте и посмотрите код "АЛЬТЕРНАТИВНАЯ РЕАЛИЗАЦИЯ ОБЪЕКТА RANGE" ниже, реализующий объект range (делает тоже самое)
 * 2. Разберитесь как он работает
 * 3. Допишите класс DispersionArray
 * 4. Класс должен работать следующим образом:
 *    4.1 При создании экземпляра класс в конструктор передается число centerPoint (средняя точка) и число dispersion (разброс)
 *    4.2 Экземпляр класса должен быть перебираемым объектом --
 *   -- если пройтись по нему циклом for...of то получим целые числа от (centerPoint - dispersion) до (centerPoint + dispersion)
 *    4.3 Для этого необходимо самостоятельно реализовать метод [Symbol.iterator]
 *    4.4 И метод next
 * 5. Выполнить действия с экземплярами класса DispersionArray указанные в "Вторая часть задания #1"
 *
 * ЗАДАНИЕ №2
 * Prototype
 * Условие: создать дочерний класс который наследуется от родителя(который наследуется от объекта String, у которого будет метод для фильтрации HTML)
 * а у дочернего класса сделать метод который вернет исходную строку типа "HeLlO WoRd"
 *
 * const string = 'Some text with <span class="highlighted">highlighted text</span>'
 *
 * string.toString().replace(/<[^>]*>?/gm, '') - удаляет HTML код из строки
 *
 */


  /АЛЬТЕРНАТИВНАЯ РЕАЛИЗАЦИЯ ОБЪЕКТА RANGE/
 
  let range = {
      from: 1,
        to: 5,
   // вначале цкл for...of вернет вызовет [Symbol.iterator]
  [Symbol.iterator]() {
      this.current = this.from;
 // вернет сам объект range у которого есть метод next
      return this;
      },
   // полсе того как [Symbol.iterator] вернет range
   // for...of вызовет у него метод next
   next() {
     if (this.current <= this.to) {
       return { done: false, value: this.current++ };
     } else {
       return { done: true };
     }
   }
 };

/**
 * ДОПИШИТЕ КЛАСС
 * ===========================================
 */
class DispersionArray {
  constructor(centerPoint, dispersion) {
    this.from = from;
    this.to = to;
    /**
     * ВАШ КОД ТУТ
     * this.from = ...
     * this.to = ...
     */
  }
  [Symbol.iterator](){
    this.current = this.from;
    return this;
    /**
   * ВАШ КОД ТУТ
     * должен возвращать сам объект
   */
  }
  next() {
    if (this.current <= this.to) {
      return { done:false, value: this.current++};
    } else {
      return {done: true};
    }
    /**
     * ВАШ КОД ТУТ
     * должен возвращать каждый следующий элемент диапазона
     */
  }
}

class firDict1 extends DispersionArray {
  constructor(centerPoint, dispersion) {
    this.from = from;
    this.to = to;
    }
  }

const firDict = Object.create(null); 

class secDict1 extends DispersionArray {
  constructor(centerPoint,dispersion) {
    this.from = from;
    this.to = to;
  }
}
const secDict = Object.create (range)

for (let num of secDict)
  console.log(secDict);

/**
 * ========================================================
 * Вторая часть задания #1
 * ========================================================
 * ВАШ КОД ТУТ
 * 1. Создайте два экземпляра (firDict и secDict) класса DispersionArray
 * 2. Первому экземпляру firDict в качетве прототпа укажите null
 * 3. Пройдитесь по второму эземпляру secDict циклом for...of и убедитесь что он корректно выводит все числа в заданном диапазоне
 * 4. Откройте браузер и выведите secDict --  у него есть итератор? С чем это связано? -- ответ оставьте в комментарии ниже в разделе "ПОЧЕМУ ТАК"
 */

/**
 * ПОЧЕМУ ТАК
 * { current: 2 }
   { current: 3 }
   { current: 4 }
   { current: 5 }
   { current: 6 }
   вывод консоли secDict, итератор у него есть, но считает значения +1.
 * хотя код вроде правильный
 * =========================================================
 * ВАШ КОММЕНТАРИЙ ТУТ
 *
 */

//
//const arr = [1,2,4,5,6]

//for(item of arr){
//  console.log(item); //1,2,3,4,5,6
//}

let range = {
  from: 1,
  to: 5
};

//for (let num of range) { // Ошибка - range is not iterable
//  alert(num);
//}

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// теперь работает!
for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}
