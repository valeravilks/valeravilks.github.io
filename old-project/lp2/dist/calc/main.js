window.onload = function () {
    new Vue({
        el: '.tabs_new',

        data: {
            numberSex: "7",
            picked: {
                dev: 'devS',
                design: 'designS',
                prototype: 'prototypeS'
            },
            calcData: {
                prototype: {
                    name: 'Прототипирование'
                },
                main_br: {
                    name: 'Заполнение БРИФа (можно самостоятельно)',
                    checkbox: false,
                    money: 1000
                },
                prototypeS: {
                    name: 'Разработка прототипа для шаблонного дизайна',
                    radio: {prototype : true},
                    money_start: 1000,
                    money_plus: 500
                },
                prototypeEx: {
                    name: 'Разработка прототипа для эксклюзивного дизайна',
                    radio: {prototype : false},
                    money_start: 2000,
                    money_plus: 700
                },
                prototypeAd: {
                    name: 'Разработка прототипа для адаптивного дизайна',
                    radio: {prototype : false},
                    money_start: 4000,
                    money_plus: 1000
                },
                prototypeVip: {
                    name: 'Разработка прототипа для VIP-дизайна',
                    radio: {prototype : false},
                    money_start: 6000,
                    money_plus: 1500
                },
                copyright: {
                    name: 'Копирайтинг',
                    checkbox: false,
                    money_start: 4000,
                    money_plus: 1000
                },
                design: {
                    name: 'Дизайн',
                },
                designS: {
                    name: 'Шаблонный дизайн',
                    radio: {design : true},
                    money_start: 3000,
                    money_plus: 700
                },
                designEx: {
                    name: 'Эксклюзивный дизайн',
                    radio: {design : false},
                    money_start: 5000,
                    money_plus: 700
                },
                designAd: {
                    name: 'Адаптивный дизайн',
                    radio: {design : false},
                    money_start: 9000,
                    money_plus: 1500
                },
                designVip: {
                    name: 'VIP-дизайн',
                    radio: {design : false},
                    money_start: 12000,
                    money_plus: 1500
                },
                devHtml: {
                    name: 'Верстка'
                },
                devS: {
                    name: 'HTML верстка шаблонного дизайна',
                    radio: {dev : true},
                    money_start: 5000,
                    money_plus: 1000
                },
                devEx: {
                    name: 'HTML верстка эксклюзивного дизайна',
                    radio: {dev : false},
                    money_start: 8000,
                    money_plus: 100
                },
                devAd: {
                    name: 'HTML верстка адаптивного дизайна',
                    radio: {dev : false},
                    money_start: 12000,
                    money_plus: 1000
                },
                devVip: {
                    name: 'HTML верстка VIP-дизайна',
                    radio: {dev : false},
                    money_start: 15000,
                    money_plus: 1500
                },
                devDop: {
                    name: 'Дополнительные модули для сайта'
                },
                onlineCons: {
                    name: 'Онлайн консультант',
                    checkbox: false,
                    money: 1000
                },
                calcPrice: {
                    name: 'Калькулятор цен',
                    checkbox: false,
                    money: 2000
                },
                adminPanel: {
                    name: 'Админка для сайта',
                    checkbox: false,
                    money: 1500
                },
                callBack: {
                    name: 'Сервис обратного звонка',
                    checkbox: false,
                    money: 1000
                },
                smsAlert: {
                    name: 'CMC оповещения о заявках',
                    checkbox: false,
                    money: 1000
                }

            }
        },
        methods: {
            showCheck(mass){
                if (mass.checkbox == null) {
                    return false
                }
                else {
                    return true
                }
            },
            radioCheck(mass){
                if (mass.radio == null) {
                    return false
                }
                else {
                    return true
                }

            },
            moneySum(){
                let resultMoney = 0;
                let thisData = this.calcData;
                for (var keys in thisData) {
                    //    console.log("Начинаем перебирать массив clacData " + keys);
                    //    console.log("Получаем булево значение чекбоксов " + thisData[keys]['checkbox']);
                    //    console.log("Сотрим цену" + thisData[keys]['money']);
                    // считам цену с чекбоксами, но без цен, которые зависят от блоков

                    if (thisData[keys]['checkbox'] === true && thisData[keys]['money'] !== undefined) {
                      //  console.log(thisData[keys]['money']);
                        resultMoney = resultMoney + thisData[keys]['money'];
                    }

                    // добавляем цену на чексоксы с ценой, которая зависит от количества блоков

                    if (thisData[keys]['checkbox'] === true && thisData[keys]['money_start'] !== undefined) {
                       // console.log(thisData[keys]['money_start']);
                        resultMoney = resultMoney + thisData[keys]['money_start'];
                    }
                }



                // Считаеться цена за радиокнопки

                resultMoney = resultMoney + this.calcData[this.picked.dev].money_start + this.calcData[this.picked.design].money_start + this.calcData[this.picked.prototype].money_start;

                // Считаеться цена выше 8 экранов


                if(this.numberSex > 7){
                    for (var keys in thisData) {
                        if(thisData[keys]['money_plus'] != null && thisData[keys]['checkbox'] === true){
                           // console.log(resultMoney + (this.numberSex - 7) * thisData[keys]['money_plus']);
                            resultMoney = resultMoney + (this.numberSex - 7) * thisData[keys]['money_plus'];
                        }
                    }
                    resultMoney = resultMoney + (this.numberSex - 7) * (this.calcData[this.picked.dev].money_plus + this.calcData[this.picked.design].money_plus + this.calcData[this.picked.prototype].money_plus);
                }


                return resultMoney;
            },
            connect(key){
                if(key.indexOf("dev") == '0'){
                    console.log(key.substring(4));
                    this.picked.design = 'design' + key.substring(3);
                    this.picked.prototype = 'prototype' + key.substring(3);
                }
                if(key.indexOf("design") == '0'){
                    console.log(key.substring(6));
                    this.picked.dev = 'dev' + key.substring(6);
                    this.picked.prototype = 'prototype' + key.substring(6);
                }
                if(key.indexOf("prototype") == '0'){
                    console.log(key.substring(9));
                    this.picked.design = 'design' + key.substring(9);
                    this.picked.dev = 'dev' + key.substring(9);
                }
            }
        }

    });
}
