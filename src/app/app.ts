import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero.interface';
import { FormsModule } from '@angular/forms'; 
import { HeroesComponent } from './heroes/heroes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeroesComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}