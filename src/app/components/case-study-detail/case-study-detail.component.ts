import { Component, HostListener, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study-detail.component.html',
  styleUrls: ['./case-study-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CaseStudyDetailComponent implements OnInit, OnDestroy {
  @Input() caseStudy: any;
  @Input() onBack!: () => void;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
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

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.handleBack();
  }
}
