export interface ActiveJob {
    title: string,
    location: string,
    companyName: string,
    salary: number,
    jobType: string,
    createdTime: string
}

export interface PaginatedJobsResponse {
  content: ActiveJob[];
  totalPages: number;
  totalElements: number;
  number: number; // current page
  size: number;   // page size
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}
