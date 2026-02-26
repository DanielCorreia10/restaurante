import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ButtonDefault } from "../../components/button-default/button-default";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, ButtonDefault],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
