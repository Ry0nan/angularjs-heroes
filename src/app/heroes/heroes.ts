import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './heroes.html',
  styles: [`
    /* HeroesComponent's private CSS styles */
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none; /* Removes bullets */
      padding: 0;
      width: 15em;
    }
    .heroes li {
      position: relative;
      cursor: pointer;
    }
    .heroes li:hover {
      left: .1em;
    }
    .heroes a {
      color: #333;
      text-decoration: none;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
      display: block;
      width: 100%;
    }
    .heroes a:hover {
      color: #2c3a41;
      background-color: #e6e6e6;
    }
    .heroes a:active {
      background-color: #525252;
      color: #fafafa;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #405061;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      min-width: 16px;
      text-align: right;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    /* Style for the selected item (though not used in list view now) */
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    /* Styles for the delete button */
    button.delete {
      position: absolute;
      left: 194px; /* Adjusted position slightly */
      top: 5px;
      background-color: white;
      color: #525252;
      font-size: 1.1rem;
      padding: 1px 10px;
      border-radius: 4px;
    }
    button.delete:hover {
      background-color: #525252;
      color: white;
    }
  `]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}