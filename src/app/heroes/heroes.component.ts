import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero= {
  id:1,
  name: 'Spiderman',
  edad: 20,
  Poder: 'Poderes Aracnidos',
  Identidad: 'peter parker',
  Universo: 'Marvel',

  };

  constructor() { }

  ngOnInit(): void {
  }

}
