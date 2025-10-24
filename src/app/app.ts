import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MessagesComponent } from './messages/messages'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MessagesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}