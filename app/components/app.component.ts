import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'main-app',
  providers: [AppService],
  templateUrl: 'app/templates/app.component.html',
  styleUrls: ['app/styles/app.component.css'],
})

export class AppComponent { 
  
}