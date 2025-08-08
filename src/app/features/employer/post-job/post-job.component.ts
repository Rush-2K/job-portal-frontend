import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../../core/services/job.service';
import { JobPostRequest } from '../../../shared/models/job-post.model';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  standalone: false,
  styleUrl: './post-job.component.css'
})
export class PostJobComponent implements OnInit{
  jobForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private jobService: JobService) {};

  ngOnInit(): void {
      this.jobForm = this.fb.group({
      title: ['', [Validators.required]],
      location: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      salary: [null, [Validators.required, Validators.min(0)]],
      jobType: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit(): void {
    if (this.jobForm.invalid) return;

    this.isSubmitting = true;
    const jobData: JobPostRequest = this.jobForm.value;

    console.log('Job Data: ', jobData);

    this.jobService.postJob(jobData).subscribe({
      next: () => {
        console.log('Job posted successfully');
        this.jobForm.reset();
        this.isSubmitting = false;
      },
      error: err => {
        console.error('Failed to post job', err);
        this.isSubmitting = false;
      }
    });
  }

}
