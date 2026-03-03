import { Component, Input } from '@angular/core';
import { ButtonDefault } from "../button-default/button-default";
import { DishInterface } from './dish.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish',
  imports: [ButtonDefault, CommonModule],
  templateUrl: './dish.html',
  styleUrl: './dish.css',
})


export class Dish {

  @Input() dishData!: DishInterface;
  starsArray = [1, 2, 3, 4, 5];
}
