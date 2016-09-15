import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'changeMe',
  providers: [ AppService ],
  templateUrl: 'app/templates/changeMe.component.html',
  styleUrls: ['app/styles/changeMe.component.css']
})

export class changeMeComponent { }