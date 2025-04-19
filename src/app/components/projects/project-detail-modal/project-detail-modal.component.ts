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
          <img [src]="project.image" [alt]="project.title" class="project-image">
          <div class="project-title-section">
            <h2>{{ project.title }}</h2>
            <p class="subtitle">{{ project.subtitle }}</p>
          </div>
        </div>

        <div class="project-body">
          <div class="description-section">
            <h3>Project Overview</h3>
            <p>{{ project.description }}</p>
          </div>

          <div class="technologies-section">
            <h3>Technologies Used</h3>
            <div class="tech-tags">
              <span class="tech-tag" *ngFor="let tech of project.technologies">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="features-section" *ngIf="project.features">
            <h3>Key Features</h3>
            <ul>
              <li *ngFor="let feature of project.features">{{ feature }}</li>
            </ul>
          </div>

          <div class="challenges-section" *ngIf="project.challenges">
            <h3>Challenges & Solutions</h3>
            <ul>
              <li *ngFor="let challenge of project.challenges">{{ challenge }}</li>
            </ul>
          </div>

          <div class="outcomes-section" *ngIf="project.outcomes">
            <h3>Outcomes & Achievements</h3>
            <ul>
              <li *ngFor="let outcome of project.outcomes">{{ outcome }}</li>
            </ul>
          </div>

          <!-- Special section for HRMS modules -->
          <div class="modules-section" *ngIf="project.keyFeatures">
            <div class="module" *ngIf="project.keyFeatures.timeAndAttendance">
              <h3>Time and Attendance Module</h3>
              <ul>
                <li *ngFor="let feature of project.keyFeatures.timeAndAttendance">
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="module" *ngIf="project.keyFeatures.timeSheets">
              <h3>Timesheets Module</h3>
              <ul>
                <li *ngFor="let feature of project.keyFeatures.timeSheets">
                  {{ feature }}
                </li>
              </ul>
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