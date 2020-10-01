import { NgModule } from '@angular/core';
import {MatButtonModule, MatSliderModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';



 const MaterialComponet=[
  MatButtonModule,
  MatSliderModule,
  MatGridListModule
];
@NgModule({
  
  imports: [
    MaterialComponet
   
  ],
  exports: [
    MaterialComponet

  ],
})
export class AngularMaterialModule { }
