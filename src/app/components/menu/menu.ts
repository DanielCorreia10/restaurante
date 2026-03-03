import { Component } from '@angular/core';
import { Dish } from '../dish/dish';
import { DishInterface } from '../dish/dish.interface';
import { ButtonDefault } from "../button-default/button-default";

@Component({
  selector: 'app-menu',
  imports: [Dish, ButtonDefault],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  dishes: DishInterface[] = [
    {
      id: 1,
      name: 'Moqueca Baiana',
      description: 'Deliciosa moqueca de peixe fresco preparada com azeite de dendê e leite de coco.',
      imageUrl: '/images/dish.png',
      rating: 5,
      reviewsCount: '500+',
      price: 65.90
    },
    {
      id: 2,
      name: 'Feijoada Completa',
      description: 'Nossa tradicional feijoada com carnes selecionadas, arroz, farofa e couve.',
      imageUrl: '/images/dish2.png',
      rating: 5,
      reviewsCount: '850+',
      price: 49.90
    },
    {
      id: 3,
      name: 'Salada Tropical',
      description: 'Mix de folhas verdes com frutas da estação e molho de mostarda e mel.',
      imageUrl: '/images/dish3.png',
      rating: 4,
      reviewsCount: '120+',
      price: 28.50
    },
    {
      id: 4,
      name: 'Bife à Parmegiana',
      description: 'Suculento bife empanado, coberto com queijo derretido e molho de tomate caseiro.',
      imageUrl: '/images/dish4.png',
      rating: 5,
      reviewsCount: '1k+',
      price: 54.00
    },
    {
      id: 5,
      name: 'Acarajé Tradicional',
      description: 'Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá, caruru e camarão seco.',
      imageUrl: '/images/dish5.png',
      rating: 5,
      reviewsCount: '2k+',
      price: 25.00
    },
    {
      id: 6,
      name: 'Bobó de Camarão',
      description: 'Creme de mandioca com azeite de dendê, leite de coco e camarões frescos, acompanhado de arroz.',
      imageUrl: '/images/dish6.png',
      rating: 5,
      reviewsCount: '730+',
      price: 72.50
    },
    {
      id: 7,
      name: 'Baião de Dois',
      description: 'Mistura clássica de arroz, feijão de corda, queijo coalho e carne de sol desfiada.',
      imageUrl: '/images/dish7.png',
      rating: 4,
      reviewsCount: '340+',
      price: 45.00
    },
    {
      id: 8,
      name: 'Frango com Quiabo',
      description: 'Prato reconfortante de frango caipira ensopado com quiabo, servido com angu de milho.',
      imageUrl: '/images/dish8.png',
      rating: 4,
      reviewsCount: '210+',
      price: 38.90
    }
  ];
}

