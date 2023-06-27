import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { RatingComponent } from './rating/rating.component';
import {RatingModule} from "ngx-bootstrap/rating";
import {FormsModule} from "@angular/forms";
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { CellComponentDirective } from './cell/cell-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    RatingComponent,
    TableComponent,
    CellComponent,
    CellComponentDirective
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
