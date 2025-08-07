import { Component, OnInit } from '@angular/core';
import { JobDetails } from '../../../shared/models/job-details.model';
import { JobService } from '../../../core/services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  standalone: false,
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit{
  jobId!: number;
  isLoading = true;
  // jobDetails!: JobDetails;
  jobDetails: JobDetails | null = null;
  yearlySalary: number = 0;

  constructor(private jobService: JobService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchJobDetails();
  }

  fetchJobDetails(): void {
    this.jobService.getJobDetails(this.jobId).subscribe({
      next: (response) => {
        this.jobDetails = response.data;
        this.yearlySalary = this.jobDetails.salary * 12;
        this.isLoading = false;
        console.log("job details: ", this.jobDetails);
      },
      error: (err) => {
        console.error('Failed to fetch job details:', err);
        this.isLoading = false;
      }
    });
  }
}
