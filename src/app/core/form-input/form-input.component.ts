import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <p [formGroup]="group">
      <label for="{{attributeName}}">{{label}}</label>
      <input
        type="{{type}}"
        id="{{attributeName}}"
        class="form-control"
        formControlName="{{attributeName}}"
        placeholder="{{placeholder}}"
        maxlength="{{maxLength}}"
        min="{{minValue}}"
        max="{{maxValue}}"
      />
      <span *ngIf="submitted && group && group.controls[attributeName] && group.controls[attributeName].errors" class="text-danger">
        {{invalidFeedback}}
      </span>
    </p>
  `,
})

export class FormInputComponent {
  @Input() group: FormGroup;
  @Input() attributeName: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() type: string;

  @Input() dimensionClass: string;

  @Input() minValue;
  @Input() maxValue;
  @Input() maxLength;

  @Input() submitted: boolean;
  @Input() invalidFeedback: string;

  @HostBinding('class') @Input('class') classList = '';

}
