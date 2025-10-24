import { Component } from '@angular/core';
import { Hero } from '../hero.interface'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { HEROES } from '../mock-heroes'; 
import { HeroDetailComponent } from '../hero-detail/hero-detail';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent], 
  templateUrl: './heroes.html', 
  styles: [`
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
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
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
  `]
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}