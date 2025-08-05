import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: false,
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registrationForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.registrationForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        role: ['', Validators.required]
      });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';

    const { name, email, password, role } = this.registrationForm.value;

    console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("role: ", role);

    this.authService.registration(name, email, password, role).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/home']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
      }
    });
  }
}
