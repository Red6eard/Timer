// на сколько минут ставим таймер
var count = 0;
// запущен таймер или нет
started = false;

// установка стартового значения
function submitCount() {
  count = +document.getElementById("input").value;
  document.getElementById("timer").innerHTML = count + ":00";
};


// запуск таймера по кнопке
function start() {
  // если таймер уже запущен — выходим из функции
  if (started) { return };
  // запоминаем время нажатия
  var start_time = new Date();
  // получаем время окончания таймера
  var stop_time = start_time.setMinutes(start_time.getMinutes() + count);

  // запускаем ежесекундный отсчёт
  var countdown = setInterval(function() {
    // текущее время
    var now = new Date().getTime();
    // сколько времени осталось до конца таймера
    var remain = stop_time - now;
    // переводим миллисекунды в минуты и секунды
    var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((remain % (1000 * 60)) / 1000);
    // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
    sec = sec < 10 ? "0" + sec : sec;
    // отправляем значение таймера на страницу в нужный раздел
    document.getElementById("timer").innerHTML = min + ":" + sec;
    // если время вышло
    if (remain < 0 ) {
      // останавливаем отсчёт
      clearInterval(countdown);
      // пишем текст вместо цифр
      document.getElementById("timer").innerHTML = "Всё!";
    }else if(started === false){
      clearInterval(countdown);
    }
    
  }, 1000);
  // помечаем, что таймер уже запущен
  started = true;
};

//функция остановки таймера
function stop () {
  if (started) {
    started = false;
  }
};

//функция сброса таймера на ноль
function reset () {
  count = 0;
  started = false;
  document.getElementById("timer").innerHTML = count + ":00";
}