import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-button" (click)="close()">
          <i class="material-icons">close</i>
        </button>
        
        <div class="project-header">
          <h2>{{ project.title }}</h2>
          <div class="project-image">
            <img [src]="project.image" [alt]="project.title">
          </div>
        </div>

        <div class="project-body">
          <div class="content-section">
            <h3>Project Overview</h3>
            <p class="description">{{ project.description }}</p>
          </div>
          
          <div class="content-section">
            <h3>Technologies Used</h3>
            <div class="tech-tags">
              <span class="tech-tag" *ngFor="let tech of project.technologies">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="content-section">
            <h3>Key Features</h3>
            <ul class="features-list">
              <li *ngFor="let feature of project.features">{{ feature }}</li>
            </ul>
          </div>

          <ng-container *ngIf="project.keyFeatures">
            <div class="content-section module-features">
              <h3>Time and Attendance Module</h3>
              <ul class="features-list success-list">
                <li *ngFor="let feature of project.keyFeatures.timeAndAttendance">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="content-section module-features">
              <h3>Timesheets Module</h3>
              <ul class="features-list success-list">
                <li *ngFor="let feature of project.keyFeatures.timeSheets">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </ng-container>

          <div class="content-section" *ngIf="project.challenges">
            <h3>Challenges Overcome</h3>
            <ul class="challenges-list">
              <li *ngFor="let challenge of project.challenges">{{ challenge }}</li>
            </ul>
          </div>

          <div class="content-section" *ngIf="project.outcomes">
            <h3>Project Outcomes</h3>
            <ul class="outcomes-list">
              <li *ngFor="let outcome of project.outcomes">{{ outcome }}</li>
            </ul>
          </div>
        </div>

        <div class="project-footer">
          <a [href]="project.link" target="_blank" class="view-live-btn" *ngIf="project.link">
            <i class="material-icons">launch</i>
            View Project
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      padding: 2rem;
      animation: fadeIn 0.3s ease;
      backdrop-filter: blur(8px);
    }

    .modal-content {
      background: var(--background-color);
      border-radius: 20px;
      width: 100%;
      max-width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      animation: slideUp 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      color: var(--text-color);

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: var(--background-color);
        border-radius: 0 20px 20px 0;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 4px;
        
        &:hover {
          background: var(--secondary-color);
        }
      }
    }

    .close-button {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: var(--background-color);
      border: none;
      color: var(--text-color);
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 2;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      &:hover {
        background: var(--primary-color);
        color: white;
        transform: rotate(90deg);
      }

      i {
        font-size: 24px;
      }
    }

    .project-header {
      padding: 2.5rem;
      border-bottom: 1px solid var(--border-color);
      background: var(--card-background);

      h2 {
        font-size: 2.2rem;
        color: var(--primary-color);
        margin-bottom: 1.5rem;
        padding-right: 2rem;
        font-weight: 600;
        line-height: 1.3;
      }

      .project-image {
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
          aspect-ratio: 16/9;
        }
      }
    }

    .project-body {
      padding: 2.5rem;
      background: var(--background-color);

      .content-section {
        margin-bottom: 3rem;
        
        &:last-child {
          margin-bottom: 0;
        }

        .challenges-list,
        .outcomes-list {
          list-style: none;
          padding: 0.5rem 0;
          margin: 0;

          li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 1.2rem;
            color: var(--text-color);
            font-size: 1.1rem;
            line-height: 1.6;

            &:last-child {
              margin-bottom: 0;
            }

            &:before {
              content: '';
              position: absolute;
              left: 0;
              top: 0.5rem;
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }
          }
        }

        .challenges-list li:before {
          background: #ff6b6b;
          box-shadow: 0 0 0 2px var(--background-color), 
                     0 0 0 4px #ff6b6b;
        }

        .outcomes-list li:before {
          background: #51cf66;
          box-shadow: 0 0 0 2px var(--background-color), 
                     0 0 0 4px #51cf66;
        }
      }

      .description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-color);
        margin: 1rem 0;
        text-align: justify;
        hyphens: auto;
      }

      h3 {
        color: var(--primary-color);
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
        font-weight: 600;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: var(--primary-color);
          border-radius: 2px;
        }
      }

      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 0.5rem 0;

        .tech-tag {
          background: var(--card-background);
          color: var(--primary-color);
          padding: 0.8rem 1.2rem;
          border-radius: 20px;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

          &:hover {
            background: var(--primary-color);
            color: white;
            transform: translateY(-2px);
          }
        }
      }

      .features-list {
        list-style: none;
        padding: 0.5rem 0;
        margin: 0;

        li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1.2rem;
          color: var(--text-color);
          font-size: 1.1rem;
          line-height: 1.6;

          &:last-child {
            margin-bottom: 0;
          }

          &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 10px;
            height: 10px;
            background: var(--primary-color);
            border-radius: 50%;
            box-shadow: 0 0 0 2px var(--background-color), 
                       0 0 0 4px var(--primary-color);
          }
        }
      }
    }

    .project-footer {
      padding: 2rem;
      border-top: 1px solid var(--border-color);
      display: flex;
      justify-content: flex-end;
      background: var(--card-background);

      .view-live-btn {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 1rem 2rem;
        background: var(--primary-color);
        color: white;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

        &:hover {
          background: var(--secondary-color);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        i {
          font-size: 20px;
        }
      }
    }

    .module-features {
      background: var(--card-background);
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 2rem;

      h3 {
        color: var(--primary-color);
        margin-bottom: 1.5rem;
      }

      .features-list {
        display: grid;
        gap: 1rem;
      }
    }

    .success-list li:before {
      background: #00c853;
      box-shadow: 0 0 0 2px var(--background-color), 
                 0 0 0 4px #00c853;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .modal-overlay {
        padding: 1rem;
      }

      .project-header {
        padding: 1.5rem;

        h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
      }

      .project-body {
        padding: 1.5rem;

        .content-section {
          margin-bottom: 2rem;
        }

        .description {
          font-size: 1rem;
          line-height: 1.6;
        }

        h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .tech-tags {
          gap: 0.8rem;

          .tech-tag {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }
        }

        .features-list li {
          font-size: 1rem;
          padding-left: 1.8rem;
          margin-bottom: 1rem;
        }
      }

      .project-footer {
        padding: 1.5rem;

        .view-live-btn {
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
        }
      }
    }
  `]
})
export class ProjectDetailModalComponent {
  @Input() project: any;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
} 