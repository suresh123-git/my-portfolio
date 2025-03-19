import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study-detail.component.html',
  styleUrls: ['./case-study-detail.component.scss']
})
export class CaseStudyDetailComponent implements OnInit {
  @Input() caseStudy: any;
  @Input() onBack!: () => void;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Scroll to top when component is initialized
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleBack(): void {
    if (this.onBack) {
      this.onBack();
    } else {
      this.router.navigate(['/blog']);
    }
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
