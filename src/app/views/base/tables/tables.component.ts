import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent  implements OnInit {

  items = [1, 2, 3, 4];
  title: any;
  form!: FormGroup;
  caseService:any[] = [];
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
      console.log(policy);
      this.form = this.fb.group({
        title: ['', Validators.required],
        FirstName: ['', Validators.required],
        MiddleName: [''],
        Surname: ['', Validators.required],
        policy:[this.title],
        email: ['', Validators.required],
        MobileNo: [''],
        policyProduct:[''],
        caseDetails: ['', Validators.required]
      }); // Print the parameter to the console.
  });
this.caseService = [{"General Insurance":["Auto Insurance","Travel Insurance","Home Insurance","Events Insurance","Safety Plus","Others"],
"Life Insurance":["Savings and Investment","Endowment Policies","Protection Policies","Annuities"]}]
console.log(this.caseService[0][this.title])
console.log(this.caseService)

  }
  onSubmit() {
    console.log(this.form.value); // You can send the form data to your server or perform other actions here
    this.crudService.createComplaint(this.form).subscribe({
      next:(response) => {
        console.log('Data submitted successfully:', response);
        // Optionally, you can reset the form after successful submission
        this.form.reset();
      },
      error:(error) => {
        console.error('Error submitting data:', error);
      }
    }
    );
  }
}
