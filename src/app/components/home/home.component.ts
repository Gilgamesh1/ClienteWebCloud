import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valor: number;
  constructor() { }

  ngOnInit() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
  }

}
