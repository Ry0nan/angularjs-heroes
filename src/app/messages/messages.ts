import { Component } from '@angular/core';
import { MessageService } from '../message'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}