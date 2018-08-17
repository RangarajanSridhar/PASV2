import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {OfficesComponent} from './offices/offices.component'
import { AppComponent } from './app.component';
import { OfficeComponent } from './office/office.component';
//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({

    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        BrowserAnimationsModule,MatButtonModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatTabsModule,MatCardModule,BrowserAnimationsModule
       
    ],
    providers: [],
    bootstrap : [AppComponent]
})

export class AppModule { }