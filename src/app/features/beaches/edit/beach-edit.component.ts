import {Component, OnInit} from '@angular/core';
import {Beach, Orientation,BeachType} from '../../../shared/models/Beach';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BeachService} from '../../../shared/services/beaches.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-beach-edit',
  templateUrl: './beach-edit.component.html',
  styleUrls: ['./beach-edit.component.css']
})
export class BeachEditComponent implements OnInit {

  orient = Orientation;
  beachForm: FormGroup;
  pathPreview = '';
  beach: Beach;
  beachtypes = BeachType;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private beachService: BeachService,
  ) {
  }

  ngOnInit() {
    this.loadData(this.route.snapshot.params.id);
  }

  loadData(id) {
    this.beachService.getBeachById(id)
      .subscribe((data: Beach) => {
        this.beach = data;
        this.pathPreview = data.photo;
        this.beachForm = this.formBuilder.group({
          name: [data.name, Validators.compose([Validators.minLength(5), Validators.maxLength(30), Validators.required])],
          city: [data.city, Validators.compose([Validators.required, Validators.maxLength(40)])],
          province: [data.province, Validators.compose([Validators.required, Validators.maxLength(2)])],
          latitude: [data.latitude, Validators.required],
          longitude: [data.longitude, Validators.required],
          orientation: [data.orientation, Validators.required],
          park: [data.park],
          food_service: [data.food_service],
          lifeguard: [data.lifeguard],
          dogs_allowed: [data.dogs_allowed],
          tobacconist: [data.tobacconist],  
          disabled_access: [data.disabled_access],
          sunbed_umbrella: [data.disabled_access],
          wifi: [data.wifi],
          first_aid:[data.first_aid],
          toilet:[data.toilet],
          showers:[data.showers],
          beach_type: [data.beach_type],
          summer_crowding: [data.summer_crowding],
          photo: [data.photo, Validators.required]
        });
      });
  }

  editBeach = () => {
    this.submitted = true;

    if (this.beachForm.invalid) {
      console.warn('invalid');
      return;
    }

    const beach: Beach = {...this.beachForm.value, id: this.beach.id };

    this.beachService.editBeach(beach)
      .subscribe(result => {
        this.router.navigate([`../beaches/details/${this.beach.id}`]);
      }, error => {
        console.error(error);
      });
  };

  previewPhoto = (path) => {
    this.pathPreview = path;
  };


}
