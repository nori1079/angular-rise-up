import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ActionService } from 'src/app/service/action.service';
import { AuthService } from 'src/app/servise/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  fitnessIds = [...Array(10)].map((_, i) => i + 1);
  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    pagination: {
      el: '.pager',
      clickable: true
    },
    centeredSlides: true,
    slidesPerView: 3
  };
  selectedFitnessId = 0;
  form = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(40)
    ]],
    gender: ['', [
      Validators.required,
      Validators.pattern(/male|female/)
    ]]
  });
  get nameControl() {
    return this.form.get('name') as FormControl;
  }
  constructor(
    private fb: FormBuilder,
    private actionService: ActionService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submit() {
    const formDate = this.form.value;
    this.actionService.createAction({
      name: formDate.name,
      gender: formDate.gender,
      fitnessId: this.selectedFitnessId,
      level: 1,
      exp: 0,
      trainerId: this.authService.uid,
      ownerGitHubId: this.authService.gitHubId
    });
  }
}
