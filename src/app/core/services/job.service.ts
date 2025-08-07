import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActiveJob, PaginatedJobsResponse } from '../../shared/models/active-job.model';
import { ApiResponse } from '../../shared/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private readonly apiUrl = 'http://localhost:8080/api/jobs';

  constructor(private http: HttpClient) { }

  getActiveJobs(page: number, size: number): Observable<ApiResponse<PaginatedJobsResponse>> {
    return this.http.get<ApiResponse<PaginatedJobsResponse>>(
      `${this.apiUrl}/view?page=${page}&size=${size}`
    );
  }


}
