import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input-select',
  template: `
    <p [formGroup]="group">
      <label for="{{attributeName}}">{{label}}</label>
      <select *ngIf="!!keys" class="form-control" id="{{attributeName}}" formControlName="{{attributeName}}">
        <option *ngFor="let item of keys" value="{{item}}">{{values[item]}}</option>
      </select>
    </p>
  `,
})

export class FormInputSelectComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() attributeName: string;
  @Input() label: string;
  @Input() values: any;

  @HostBinding('class') @Input('class') classList = '';

  keys;

  ngOnInit() {
    this.keys = Object.keys(this.values);
  }

}
