import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'https://web.powerva.microsoft.com/environments/f946f50b-d77f-e468-aa35-998b939a2846/bots/crf56_custodianCare/canvas?__version__=2' ; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Create operation: Submit data to the API
  create(formData: FormGroup): Observable<any> {
    const data = formData.value; // Extract form values
    return this.http.post(this.apiUrl, data);
  }

  // Read operation: Fetch data from the API (optional)
  read(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Update operation: Update data in the API (optional)
  update(id: number, formData: FormGroup): Observable<any> {
    const data = formData.value; // Extract form values
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete operation: Delete data from the API (optional)
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
