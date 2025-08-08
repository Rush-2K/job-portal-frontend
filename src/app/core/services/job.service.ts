import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PaginatedJobsResponse } from '../../shared/models/active-job.model';
import { ApiResponse } from '../../shared/models/api-response.model';
import { JobDetails } from '../../shared/models/job-details.model';
import { JobPostRequest } from '../../shared/models/job-post.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private readonly apiUrl = 'http://localhost:8080/api/jobs';
  private readonly employerApiUrl = 'http://localhost:8080/api/jobmgmt';

  constructor(private http: HttpClient) { }

  getActiveJobs(page: number, size: number): Observable<ApiResponse<PaginatedJobsResponse>> {
    return this.http.get<ApiResponse<PaginatedJobsResponse>>(
      `${this.apiUrl}/view?page=${page}&size=${size}`
    );
  }

  getJobDetails(id: number) {
    return this.http.get<ApiResponse<JobDetails>>(
      `${this.apiUrl}/view/${id}`
    );
  }

  postJob(job: JobPostRequest): Observable<any> {
    return this.http.post(`${this.employerApiUrl}/createpost`, job);
  }


}
