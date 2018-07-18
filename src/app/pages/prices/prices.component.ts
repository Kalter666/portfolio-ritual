import { Component, OnInit } from '@angular/core';

interface Price {
  title: string;
  price: string;
}

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  servicePrices: Price[] = [
    { title: 'Выезд агента', price: 'бесплатно' },
    { title: 'Обмывание тела покойного', price: 'бесплатно' },
    { title: 'Одевание покойного', price: 'бесплатно' },
    { title: 'Бальзамирование тела', price: 'от 300 р.' },
    { title: 'Бригада могильщиков', price: 'от 200 р.' },
    { title: 'Бригада носильщиков на похороны', price: ' от 200 р.' },
    { title: 'Места на кладбище, копка могил в Волгограде, районе и области', price: 'от 2500 р.' },
    { title: 'Проведение поминок (5 траурных залов)', price: ' от 200 р. на человека' },
    { title: 'Отпевание в храме, дома, на кладбище', price: 'оплата в виде пожертвования' },
  ];

  shopPrices: Price[] = [
    { title: 'Гробы, кресты', price: 'от 390 р.' },
    { title: 'Гробы лакированные', price: ' от 7 000 р.' },
    { title: 'Гробы элитные (саркофаги)', price: ' от 16 000 р.' },
    { title: 'Памятники (комплект с портретом)', price: ' от 4 000 р.' },
    { title: 'Установка памятника на могилу', price: 'бесплатно' },
    { title: 'Оградки, обрамления, столики, лавочки на могилу', price: 'от 290 р.' },
    { title: 'Установка на могилу оградки, обрамления, столика, лавочки', price: 'от 300 р.' },
    { title: 'Венки, корзины, венчики, цветы', price: ' от 5 р.' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
