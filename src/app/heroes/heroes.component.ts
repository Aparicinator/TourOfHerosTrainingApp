import { Component, OnInit } from '@angular/core';
import { Hero } from '../../state/hero/hero';
import { HEROES } from '../../state/hero/mock-heros';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
