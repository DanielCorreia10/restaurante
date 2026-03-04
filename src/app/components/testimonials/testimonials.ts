import { Component } from '@angular/core';
import { ButtonDefault } from '../button-default/button-default';

@Component({
  selector: 'app-testimonials',
  imports: [Testimonials, ButtonDefault],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {

  starArray = [1, 2, 3, 4, 5];
  reviews: Review[] = [
    {
      id: 1,
      name: 'Maria Silva',
      comment: 'Excelente comida e atendimento, os pratos são incríveis e o ambiente é acolhedor. Recomendo a todos!',
      rating: 5,
      imageUrl: '/images/avatar.png'
    },
    {
      id: 5,
      name: 'Fernanda Souza',
      comment: 'A melhor experiência gastronômica que já tive! Os pratos são deliciosos e o serviço é impecável.',
      rating: 5,
      imageUrl: '/images/avatar5.png'
    },
    {
      id: 3,
      name: 'Ana Costa',
      comment: 'Adorei a variedade do menu e a qualidade dos pratos. O ambiente é perfeito para um jantar romântico.',
      rating: 5,
      imageUrl: '/images/avatar3.png'
    },
    {
      id: 2,
      name: 'João Pereira',
      comment: 'A comida é boa, mas o serviço deixou a desejar. Tive que esperar muito tempo para ser atendido.',
      rating: 4,
      imageUrl: '/images/avatar2.png'
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      comment: 'O atendimento foi excelente, mas achei os preços um pouco altos para a qualidade da comida.',
      rating: 3,
      imageUrl: '/images/avatar4.png'
    },

  ]
}
