import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ButtonDefault } from "../../components/button-default/button-default";
import { Menu } from '../../components/menu/menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, ButtonDefault, Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
