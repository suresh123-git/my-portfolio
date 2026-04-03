import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactInfo = {
    email: 'lingalasuresh0606@gmail.com',
    location: 'Hyderabad, India',
    phone: '+91 7981570771',
    availability: {
      days: 'Monday - Friday',
      hours: '9:00 AM - 6:00 PM'
    },
    socialLinks: {
      github: 'https://github.com/suresh123-git',
      linkedin: 'https://www.linkedin.com/in/lingalasuresh',
      twitter: 'https://x.com/LINGALASUR81209'
    }
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Reset form state when component initializes
    this.submitSuccess = false;
    this.submitError = false;

    // Add animation classes after component is mounted
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        element.classList.add('visible');
      });
    }, 100);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      // Get form data
      const formData = this.contactForm.value;

      // Send email using your backend API
      this.http.post(`${environment.apiUrl}/api/email/send`, formData)
        .subscribe({
          next: (response) => {
            console.log('Email sent successfully:', response);
            this.isSubmitting = false;
            this.submitSuccess = true;
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Error sending email:', error);
            this.isSubmitting = false;
            this.submitError = true;
          }
        });
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `This field must be at least ${requiredLength} characters long`;
    }
    return '';
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  isFormLoading(): boolean {
    return this.isSubmitting;
  }

  isFormSubmitted(): boolean {
    return this.submitSuccess;
  }

  hasFormError(): boolean {
    return this.submitError;
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  async onSubmitForm(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      try {
        console.log(this.contactForm.value,'djkghdjghdj');
        
        await this.http.post(`${environment.apiUrl}/api/email/send`, this.contactForm.value).toPromise();
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('Error sending email:', error);
        this.isSubmitting = false;
        this.submitError = true;
      }
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
} 