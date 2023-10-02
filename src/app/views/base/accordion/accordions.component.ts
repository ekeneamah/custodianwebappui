import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent implements OnInit {

  items = [1, 2, 3, 4];
  title: any;
  form!: FormGroup;
  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private crudService: CrudService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let policy = params['policy'];
      this.title=policy
      console.log(policy); // Print the parameter to the console.
  });

  this.form = this.fb.group({
    title: ['', Validators.required],
    FirstName: ['', Validators.required],
    MiddleName: [''],
    Surname: ['', Validators.required],
    DateofBirth: [''],
    Gender: [''],
    email: ['', Validators.required],
    MobileNo: [''],
    InsuranceStartDate: [''],
    Identification: [''],
    IdentificationNumber: ['', Validators.required],
    IdentificationFile: [''],
    Amounttosave: ['', Validators.required],
    PaymentFrequency: [''],
    PolicyTerm: ['', Validators.required],
    LifeSumAssured: ['', Validators.required]
  });
  }
  onSubmit() {
    console.log(this.form.value);
    // You can send the form data to your server or perform other actions here
    this.crudService.create(this.form).subscribe({
      next:(response) => {
        console.log('Data submitted successfully:', response);
        // Optionally, you can reset the form after successful submission
        this.form.reset();
      },
      error:(error) => {
        console.error('Error submitting data:', error);
        this.form.reset();
        alert("Data saved");
      }
    }
    );
  }
}
