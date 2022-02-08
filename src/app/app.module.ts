import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ChildComponent } from './components/child/child.component';
import { PrintAnimalComponent } from './components/print-animal/print-animal.component';
import { HighLightDirective } from './directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    ChildComponent,
    PrintAnimalComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
