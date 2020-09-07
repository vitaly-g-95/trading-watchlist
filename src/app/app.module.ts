import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { RateTextComponent } from './rate-text/rate-text.component';
import { RateDirectionComponent } from './rate-direction/rate-direction.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuComponent,
    RateTextComponent,
    RateDirectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
