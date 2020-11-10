import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
  }

}
