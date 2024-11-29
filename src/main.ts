import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Indica el punto de entrada en la app
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
