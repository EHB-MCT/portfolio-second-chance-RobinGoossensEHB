import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  errorMessage: any;
  getParamID: any;
  constructor(
    private service: ApiserviceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getParamID = this.router.snapshot.paramMap.get('id');
    if (this.getParamID) {
      this.service.getSingleData(this.getParamID).subscribe((res) => {
        console.log(res);
        this.userForm.patchValue({
          name: res.data[0].name,
          email: res.data[0].email,
          number: res.data[0].mobile,
        });
      });
    }
  }

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
  });

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.service.saveData(this.userForm.value).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.errorMessage = 'All fields required';
    }
  }

  userUpdate() {
    if (this.userForm.valid) {
      this.service
        .editData(this.getParamID, this.userForm.value)
        .subscribe((res) => {
          console.log(res);
        });
    } else {
      this.errorMessage = 'All fields required';
    }
  }
}
