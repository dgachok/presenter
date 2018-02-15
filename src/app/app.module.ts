import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PresenterComponent} from './components/presenter/presenter.component';
import {ConsumerComponent} from './components/consumer/consumer.component';
import {AppService} from "./services/app.service";
import {ReactiveFormsModule} from "@angular/forms";
import {NgDatepickerModule} from "ng2-datepicker";

@NgModule({
  declarations: [
    AppComponent,
    PresenterComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgDatepickerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
