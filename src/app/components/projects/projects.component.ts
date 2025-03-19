import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Enterprise HRMS Application',
      description: 'Developed a large-scale HRMS application using microservices architecture, implementing GraphQL APIs and real-time data processing with Kafka.',
      technologies: ['Angular', 'NestJS', 'MongoDB', 'GraphQL', 'KafkaJS', 'Jest'],
      image: 'https://picsum.photos/600/400?random=1',
      link: '#',
      features: [
        'Microservices architecture with NestJS',
        'GraphQL API implementation',
        'Real-time data processing with KafkaJS',
        'Comprehensive unit testing with Jest',
        'MongoDB for data storage'
      ]
    },
    {
      title: 'API Testing Framework',
      description: 'Implemented comprehensive unit test cases for Hapi.js APIs, improving code quality and reducing bugs.',
      technologies: ['Hapi.js', 'Jest', 'TypeScript', 'REST APIs'],
      image: 'https://picsum.photos/600/400?random=2',
      link: '#',
      features: [
        'Unit test implementation for Hapi.js APIs',
        'Test coverage improvement',
        'Automated testing setup',
        'Bug reduction through testing'
      ]
    }
  ];

  touchStartTime: number = 0;
  touchTimeout: any = null;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartTime = Date.now();
    const card = (event.target as HTMLElement).closest('.project-card');
    if (card) {
      this.touchTimeout = setTimeout(() => {
        const overlay = card.querySelector('.project-overlay');
        if (overlay) {
          overlay.classList.add('active');
        }
      }, 200);
    }
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (this.touchTimeout) {
      clearTimeout(this.touchTimeout);
    }
    
    const touchDuration = Date.now() - this.touchStartTime;
    const card = (event.target as HTMLElement).closest('.project-card');
    
    if (card && touchDuration < 200) {
      const link = card.querySelector('a');
      if (link) {
        link.click();
      }
    }
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.touchTimeout) {
      clearTimeout(this.touchTimeout);
    }
  }

  ngOnInit() {
    // Add animation classes after component is mounted
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        element.classList.add('visible');
      });
    }, 100);
  }
} 