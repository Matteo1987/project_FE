import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input-checkbox',
  template: `
    <p [formGroup]="group">
      <input class="form-check-input" type="checkbox" formControlName="{{attributeName}}" id="{{attributeName}}">
      <label class="form-check-label" for="{{attributeName}}">{{label}}</label>
    </p>
  `,
})

export class FormInputCheckboxComponent {
  @Input() attributeName: string;
  @Input() group: FormGroup;
  @Input() label: string;

  @HostBinding('class') @Input('class') classList = '';

}
