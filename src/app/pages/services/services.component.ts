import { Component, OnInit } from '@angular/core';

interface List {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceList: List[] = [
    {
      title: 'Консультационные и юридические вопросы:',
      items: [
        'Бесплатная круглосуточная консультация диспетчера по всем вопросам связанных с организацией похорон;',
        'Бесплатный незамедлительный выезд представителя на дом усопшего или иное место по желанию заказчиков;',
        'Выезд представителя за пределы Волгограда;',
        'Оформление всех необходимых документов для захоронения;',
        'Прием заказов, а также заключение предварительных (прижизненных) ' +
        'договоров на организацию похорон  с предоставлением широкого выбора ритуальных принадлежностей;',
        'Места на кладбищах в городе Волгограде и Волгоградом районе.',
      ]
    },
    {
      title: 'Сохранение тела усопшего:',
      items: [
        'Бальзамирование, санитарная и косметическая обработка тела усопшего;',
        'Холодильная камера;',
        'Омовение;',
        'Одевание.'
      ]
    },
    {
      title: 'Похороны:',
      items: [
        'Проведение захоронения, в том числе и в отсутствии заказчика;',
        'Бригада носильщиков;',
        'Бригада могильщиков;',
        'Сопровождение представителем похоронной процессии;',
        'Любой ритуальный транспорт (катафалки: УАЗ, ГАЗель, Fiat Ducato, ПАЗ, Ford-Transit, New Ford);',
        'Автобусы для сопровождающих (Газель, ПАЗ, Ford-Transit);',
        'Духовой оркестр на похоронах.'
      ]
    },
    {
      title: 'Траурные церемонии:',
      items: [
        'Траурный зал;',
        'Организация и проведение отпевания в храме, дома, на кладбище;',
        'Организация гражданской панихиды, предоставление банкетных залов в любом районе г.Волгограда;',
        'Домашняя кухня.'
      ]
    },
    {
      title: 'Уход за могилами:',
      items: [
        'Изготовление памятников из натурального камня;',
        'Изготовление оград, столов, лавочек;',
        'Доставка и установка всей нашей продукции;',
        'Уход за могилами.'
      ]
    },
    {
      title: 'Другое:',
      items: [
        'Кремация;',
        'Проведение перезахоронения и эксгумации, помощь с разрешительной документацией;',
        'Подготовка груза 200 со сбором всех необходимых сопроводительных документов;',
        'Транспортировка умерших по РФ и зарубежью;',
        'Организация выезда родственников на могилу в дни поминовения усопших.'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
