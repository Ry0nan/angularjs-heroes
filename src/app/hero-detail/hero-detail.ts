import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { Hero } from '../hero.interface';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private cdr: ChangeDetectorRef 
  ) {
    console.log('HeroDetailComponent: Constructor called');
  }

  ngOnInit(): void {
    console.log('HeroDetailComponent: ngOnInit called');
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`HeroDetailComponent: Fetching hero with id: ${id}`);
    this.heroService.getHero(id)
      .subscribe(hero => {
        console.log('HeroDetailComponent: Received hero:', hero);
        this.hero = hero;
        this.cdr.markForCheck(); 
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}