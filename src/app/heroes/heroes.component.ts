import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero:Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void {
  //   this.heroes = this.HeroService.getHeroes();
  // }


  // getHeroes(): void {
  //   this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  // }

  

}
