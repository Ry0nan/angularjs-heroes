import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Make sure this imports AppComponent

bootstrapApplication(AppComponent, appConfig) // Make sure this uses AppComponent
  .catch((err) => console.error(err));