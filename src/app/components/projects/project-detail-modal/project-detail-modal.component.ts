import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="close.emit()" *ngIf="project">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-button" (click)="close.emit()">
          <i class="material-icons">close</i>
        </button>
        
        <div class="project-header">
          <div class="project-media">
            <img [src]="project.image" [alt]="project.title" class="project-image">
          </div>
          <div class="project-title-section">
            <p class="eyebrow">{{ project.subtitle }}</p>
            <h2>{{ project.title }}</h2>
            <p class="subtitle">{{ project.impact }}</p>
          </div>
        </div>

        <div class="project-body">
          <div class="description-section">
            <h3>Overview</h3>
            <p>{{ project.summary }}</p>
          </div>

          <div class="overview-grid">
            <div class="overview-card">
              <h3>Role</h3>
              <p>{{ project.role }}</p>
            </div>

            <div class="overview-card">
              <h3>Problem</h3>
              <p>{{ project.problem }}</p>
            </div>
          </div>

          <div class="technologies-section">
            <h3>Stack</h3>
            <div class="tech-tags">
              <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
            </div>
          </div>

          <div class="features-section" *ngIf="project.approach">
            <h3>Approach</h3>
            <ul>
              <li *ngFor="let feature of project.approach">{{ feature }}</li>
            </ul>
          </div>

          <div class="outcomes-section" *ngIf="project.outcomes">
            <h3>Outcomes</h3>
            <ul>
              <li *ngFor="let outcome of project.outcomes">{{ outcome }}</li>
            </ul>
          </div>

          <div class="links-section" *ngIf="project.links?.length">
            <h3>Links</h3>
            <div class="link-list">
              <a *ngFor="let link of project.links" [href]="link.url" target="_blank" rel="noopener noreferrer">
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./project-detail-modal.component.scss']
})
export class ProjectDetailModalComponent {
  @Input() project: any;
  @Output() close = new EventEmitter<void>();
} 

// changes
