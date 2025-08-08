import { Component, OnInit } from '@angular/core';
import { ActiveJob, PaginatedJobsResponse } from '../../../shared/models/active-job.model';
import { JobService } from '../../../core/services/job.service';
import { ApiResponse } from '../../../shared/models/api-response.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  standalone: false,
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{
  jobs: ActiveJob[] = [];
  totalPages: number = 0;
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 5;
  isLoading = false;
  error: string | null = null;
  totalJobs: number = 0;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
      this.fetchJobs(this.currentPage);
  }

  fetchJobs(page: number): void {
    const safePage = Number.isFinite(page) ? page : 0;
    console.log("fetching job..")
    this.isLoading = true;
    this.jobService.getActiveJobs(safePage, this.pageSize).subscribe({
      next: (response: ApiResponse<PaginatedJobsResponse>) => {
        const data = response.data;
        this.jobs = data.content;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.currentPage = data.page;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error fetching jobs:', err);
        this.isLoading = false;
      }
    });
  }

  onPageChange(page: number): void {
    if (!Number.isFinite(page) || page < 0 || page >= this.totalPages) {
      console.warn('Invalid page number:', page);
      return;
    }

    this.fetchJobs(page);
  }
}
