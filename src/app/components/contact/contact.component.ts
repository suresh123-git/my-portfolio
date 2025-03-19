import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = {
    email: 'lingalasuresh0606@gmail.com',
    location: 'Hyderabad, India',
    phone: '+91 9876543210',
    availability: {
      days: 'Monday - Friday',
      hours: '9:00 AM - 6:00 PM IST'
    },
    socialLinks: {
      github: 'https://github.com/SureshLingala',
      linkedin: 'https://linkedin.com/in/suresh-lingala',
      twitter: 'https://twitter.com/SureshLingala'
    }
  };

  private submitted = false;
  private loading = false;
  private hasError = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Add animation classes after component is mounted
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => element.classList.add('visible'));
    }, 100);
  }

  isFormLoading(): boolean {
    return this.loading;
  }

  isFormSubmitted(): boolean {
    return this.submitted;
  }

  hasFormError(): boolean {
    return this.hasError;
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  async onSubmit(): Promise<void> {
    this.hasError = false;
    this.submitted = false;
    
    // Validate all fields
    if (!this.formData.name.trim() || 
        !this.formData.email.trim() || 
        !this.formData.subject.trim() || 
        !this.formData.message.trim() ||
        !this.isEmailValid(this.formData.email)) {
      this.hasError = true;
      return;
    }

    this.loading = true;

    try {
      await this.http.post('http://localhost:3000/api/email/send', this.formData).toPromise();
      this.loading = false;
      this.submitted = true;
      
      // Reset form after successful submission
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.submitted = false;
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      this.loading = false;
      this.hasError = true;
    }
  }
} 