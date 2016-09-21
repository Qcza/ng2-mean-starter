import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';
import { AppComponent } from '../components/app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    NgbModule 
  ],
  declarations: [ 
    AppComponent, 
    UPLOAD_DIRECTIVES 
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {  }