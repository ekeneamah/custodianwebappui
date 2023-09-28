import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'https://prod-135.westeurope.logic.azure.com:443/workflows/8e1c03358b6a435ca912609e3d703c3d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=f77Shm8SqXEHCrUx1cXTXkB_cxaE49ddQTmWmI3kp04' ; // Replace with your API endpoint

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
