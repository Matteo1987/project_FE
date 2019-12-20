import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Beach, Orientation} from '../../../shared/models/Beach';
import {BeachService} from '../../../shared/services/beaches.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beach-create',
  templateUrl: './beach-create.component.html',
  styleUrls: ['./beach-create.component.css']
})
export class BeachCreateComponent {

  orient = Orientation;
  beachForm: FormGroup;
  pathPreview = '';

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private beachService: BeachService,
    private router: Router
  ) {
    this.beachForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(30), Validators.required])],
      city: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
      province: ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
      latitude: [null, Validators.required],
      longitude: [null, Validators.required],
      orientation: ['Nord', Validators.required],
      park: [false],
      food_service: [false],
      lifeguard: [false],
      dogs_allowed: [false],
      summer_crowding: [false],
      photo: ['', Validators.required]
    });
  }

  insertBeach = () => {
    this.submitted = true;

    if (this.beachForm.invalid) {
      console.warn('invalid');
      return;
    }

    const beach: Beach = {...this.beachForm.value};

    this.beachService.insertBeach(beach)
      .subscribe(result => {
        this.router.navigate(['beaches/list']);
      }, error => {
        console.error(error);
      });

    console.log(this.beachForm.value);

  };

  previewPhoto = (path) => {
    this.pathPreview = path;
  };
}
