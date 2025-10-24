import { Component, Input } from '@angular/core'; 
import { Hero } from '../hero.interface'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero; 
}