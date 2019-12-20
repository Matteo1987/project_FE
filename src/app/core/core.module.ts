import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormInputComponent} from './form-input/form-input.component';
import {FormInputSelectComponent} from './form-input/form-input-select.component';
import {FormInputCheckboxComponent} from './form-input/form-input-checkbox.component';

@NgModule({
  declarations: [
    FormInputComponent,
    FormInputSelectComponent,
    FormInputCheckboxComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    FormInputComponent,
    FormInputSelectComponent,
    FormInputCheckboxComponent
  ]
})

export class CoreModule {
}
