import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProjectDetailModalComponent } from './project-detail-modal/project-detail-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectDetailModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Personal Portfolio',
      subtitle: 'Portfolio Website',
      description: 'Developed a modern, responsive portfolio website using Angular, featuring a clean design, smooth animations, and interactive project showcases. The portfolio includes detailed project descriptions, skills visualization, and a contact form.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Angular Material', 'Angular Animations', 'Responsive Design'],
      image: 'assets/images/projects/portfolio_img.jpg',
      link: '/projects/personal-portfolio',
      features: [
        'Modern and responsive design with Angular Material',
        'Interactive project showcase with modal views',
        'Animated skill bars and progress indicators',
        'Dynamic content loading with smooth transitions',
        'Contact form with email integration',
        'SEO-friendly implementation',
        'Cross-browser compatibility',
        'Mobile-first approach'
      ],
      challenges: [
        'Implementing smooth animations and transitions',
        'Creating an intuitive and engaging user interface',
        'Optimizing performance and load times',
        'Ensuring responsive design across all devices',
        'Managing state and routing effectively'
      ],
      outcomes: [
        'Created a professional and modern portfolio website',
        'Implemented responsive design for all screen sizes',
        'Achieved optimal performance scores',
        'Enhanced user experience with smooth animations',
        'Improved project showcase with detailed modal views'
      ]
    },
    {
      title: 'Enterprise HRMS Application',
      subtitle: 'HRMS Application',
      description: 'Developed a large-scale HRMS application using microservices architecture, with a special focus on Time and Attendance and Timesheets modules. Implemented real-time data processing for attendance tracking and timesheet management using GraphQL APIs and Kafka for high-frequency data updates.',
      technologies: ['Angular', 'NestJS', 'MongoDB', 'GraphQL', 'KafkaJS', 'Jest', 'Redis', 'WebSocket'],
      image: 'assets/images/projects/hrms_img.jpg',
      link: '/projects/enterprise-hrms-application',
      features: [
        'Real-time Time and Attendance tracking with WebSocket integration',
        'Advanced Timesheet management with automated calculations',
        'Microservices architecture with NestJS',
        'GraphQL API implementation for efficient data fetching',
        'Real-time data processing with KafkaJS',
        'Redis caching for high-frequency attendance data',
        'Comprehensive unit testing with Jest',
        'MongoDB for scalable data storage'
      ],
      challenges: [
        'Handling real-time data flow for thousands of employees\' attendance records',
        'Implementing complex time calculation logic for various shift patterns',
        'Ensuring data consistency across multiple time zones',
        'Optimizing performance for high-frequency data updates',
        'Managing concurrent timesheet submissions and approvals',
        'Integrating with multiple biometric devices and systems'
      ],
      outcomes: [
        'Successfully processed over 10,000 attendance records per minute',
        'Reduced timesheet processing time by 60%',
        'Improved attendance tracking accuracy to 99.9%',
        'Implemented real-time notifications for attendance anomalies',
        'Automated overtime calculations and leave balance updates',
        'Enhanced reporting capabilities with custom analytics dashboard'
      ],
      keyFeatures: {
        timeAndAttendance: [
          'Real-time attendance tracking and monitoring',
          'Integration with multiple biometric devices',
          'Automated shift management and rotation',
          'Break time tracking and compliance monitoring',
          'Real-time attendance analytics and reporting',
          'Mobile check-in with geolocation validation'
        ],
        timeSheets: [
          'Dynamic timesheet templates for different departments',
          'Automated time calculation for regular and overtime hours',
          'Multi-level approval workflow',
          'Project-wise time allocation and tracking',
          'Automated reminders and notifications',
          'Integration with payroll and billing systems'
        ]
      }
    },
    {
      title: 'Real-time Chat Application',
      subtitle: 'Chat Application',
      description: 'Built a modern real-time chat application featuring instant messaging capabilities, online status indicators, and message history using WebSocket technology.',
      technologies: ['Angular', 'NestJS', 'WebSocket', 'MongoDB', 'TypeScript', 'RxJS'],
      image: 'assets/images/projects/chatapp-img.png',
      link: '/projects/real-time-chat-application',
      features: [
        'Real-time messaging using WebSocket',
        'User presence detection and status updates',
        'Message history with MongoDB',
        'Responsive UI with Angular Material',
        'Backend implementation with NestJS',
        'WebSocket Gateway implementation',
        'Real-time notifications and typing indicators'
      ]
    },
    {
      title: 'GraphQL API Migration in NestJS',
      subtitle: 'GraphQL in NestJS',
      description: 'Successfully migrated a REST API-based mobile application to GraphQL using NestJS, resulting in significant performance improvements and reduced data overfetching. This migration addressed scalability challenges and enhanced the mobile app\'s user experience through optimized data fetching.',
      image: 'assets/images/projects/graphql_img.png',
      technologies: ['NestJS', 'GraphQL', 'TypeScript', 'Apollo Server', 'TypeORM', 'PostgreSQL'],
      features: [
        'Implemented GraphQL schema and resolvers for existing REST endpoints',
        'Designed optimized data models and type definitions using TypeGraphQL',
        'Reduced API response time by 40% through efficient query resolution',
        'Implemented field-level permissions and authentication using GraphQL directives',
        'Created custom scalars for complex data types and validations',
        'Implemented DataLoader for solving N+1 query problems',
        'Added real-time subscription support for live data updates',
        'Integrated GraphQL Playground for API documentation and testing'
      ],
      link: 'https://github.com/suresh123-git/graphql-nestjs-api',
      challenges: [
        'Complex data relationships requiring careful resolver design',
        'Migration of existing REST-based authentication system',
        'Ensuring backward compatibility during gradual migration',
        'Optimizing query performance for nested relationships'
      ],
      outcomes: [
        '40% reduction in API response time',
        '60% decrease in data transfer size',
        'Improved mobile app performance and user experience',
        'Better developer experience with strong typing and IDE support',
        'Simplified API documentation and testing process'
      ]
    }
  ];

  selectedProject: any = null;
  touchStartTime: number = 0;
  touchTimeout: any = null;

  constructor(private route: ActivatedRoute) {}

  viewProject(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

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
      const projectId = card.getAttribute('data-project-id');
      const project = this.projects.find(p => p.link.includes(projectId || ''));
      if (project) {
        this.viewProject(project);
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
    // Handle both route parameters and query parameters
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        const project = this.projects.find(p => 
          p.link === params['id'] || 
          p.link.includes(params['id']) || 
          params['id'].includes(p.link)
        );
        if (project) {
          this.viewProject(project);
        }
      }
    });

    // Handle route parameters for direct URLs
    this.route.params.subscribe(params => {
      if (params['id']) {
        const project = this.projects.find(p => 
          p.link === params['id'] || 
          p.link.includes(params['id']) || 
          params['id'].includes(p.link)
        );
        if (project) {
          this.viewProject(project);
        }
      }
    });

    // Add animation classes after component is mounted
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        element.classList.add('visible');
      });
    }, 100);
  }
} 