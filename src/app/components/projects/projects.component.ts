import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectDetailModalComponent } from './project-detail-modal/project-detail-modal.component';

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectCaseStudy {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  summary: string;
  impact: string;
  role: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  technologies: string[];
  links?: ProjectLink[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectDetailModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectCaseStudy[] = [
    {
      title: 'Enterprise HRMS Platform',
      subtitle: 'Time Attendance and Timesheets',
      image: 'assets/images/projects/hrms_img.jpg',
      slug: 'enterprise-hrms-application',
      summary:
        'Built enterprise HRMS workflows focused on time attendance and timesheets using Angular, NestJS, GraphQL, Kafka, Redis, and MongoDB.',
      impact: 'Processed 10k+ attendance records per minute, reduced timesheet processing time by 60%, and improved attendance accuracy to 99.9%.',
      role: 'Full-stack contributor with a backend-heavy focus on architecture, APIs, and real-time processing.',
      problem:
        'The product needed reliable handling for high-frequency attendance data, complex shift logic, and timesheet workflows that could scale for enterprise operations.',
      approach: [
        'Designed microservice workflows in NestJS for attendance and timesheet modules',
        'Implemented GraphQL APIs for more efficient frontend data retrieval',
        'Added Kafka-based event processing and Redis caching for real-time throughput',
        'Built automated calculations, notifications, and workflow-driven UX patterns'
      ],
      outcomes: [
        '10,000+ attendance records processed per minute',
        '60% faster timesheet processing',
        '99.9% attendance tracking accuracy',
        'Improved reporting and anomaly visibility for HR operations'
      ],
      technologies: ['Angular', 'NestJS', 'GraphQL', 'KafkaJS', 'Redis', 'MongoDB', 'Jest']
    },
    {
      title: 'GraphQL API Migration in NestJS',
      subtitle: 'REST to GraphQL modernization',
      image: 'assets/images/projects/graphql_img.png',
      slug: 'graphql-nestjs-api',
      summary:
        'Migrated a REST-based mobile backend to GraphQL in NestJS to improve response efficiency, developer experience, and client performance.',
      impact: 'Cut API response time by 40% and reduced data transfer size by 60%.',
      role: 'Backend engineer focused on API design, schema modeling, and resolver performance.',
      problem:
        'The existing REST setup created overfetching, extra client round-trips, and poor ergonomics for a mobile app with growing data complexity.',
      approach: [
        'Designed GraphQL schemas and resolver flows around real client data needs',
        'Added DataLoader patterns to avoid N+1 query issues',
        'Implemented field-level permissions and stronger validation patterns',
        'Improved documentation and testing through GraphQL tooling'
      ],
      outcomes: [
        '40% faster API responses',
        '60% smaller data payloads',
        'Cleaner API contracts for frontend and mobile teams',
        'Better developer productivity through strong typing and playground tooling'
      ],
      technologies: ['NestJS', 'GraphQL', 'Apollo Server', 'TypeScript', 'PostgreSQL', 'TypeORM'],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/suresh123-git/graphql-nestjs-api'
        }
      ]
    },
    {
      title: 'Real-time Chat Application',
      subtitle: 'WebSocket-powered communication experience',
      image: 'assets/images/projects/chatapp-img.png',
      slug: 'real-time-chat-application',
      summary:
        'Built a modern real-time chat application with WebSockets, online presence, typing indicators, and persistent messaging.',
      impact: 'Delivered a low-latency messaging UX with presence-aware interactions and persistent communication history.',
      role: 'Full-stack engineer covering frontend UX and backend event delivery.',
      problem:
        'The goal was to create a communication product that felt instant, reliable, and responsive across live user interactions.',
      approach: [
        'Built WebSocket-based real-time messaging and presence updates',
        'Persisted message history in MongoDB',
        'Designed responsive Angular UI patterns for live conversation states',
        'Handled typing indicators, notifications, and session awareness'
      ],
      outcomes: [
        'Instant message delivery and online status updates',
        'Persistent history for conversation continuity',
        'Improved interaction quality through typing and notification feedback'
      ],
      technologies: ['Angular', 'NestJS', 'WebSocket', 'MongoDB', 'TypeScript', 'RxJS']
    },
    {
      title: 'Personal Portfolio',
      subtitle: 'Recruiter-focused Angular portfolio',
      image: 'assets/images/projects/portfolio_img.jpg',
      slug: 'personal-portfolio',
      summary:
        'Designed and built a portfolio experience focused on clean storytelling, recruiter clarity, and responsive presentation.',
      impact: 'Improved project discoverability, first-impression clarity, and content structure for hiring conversations.',
      role: 'Designer and frontend engineer for personal branding and UX.',
      problem:
        'A portfolio has to communicate strengths quickly while still giving enough depth for technical validation.',
      approach: [
        'Used Angular and SCSS to build a structured, responsive experience',
        'Focused on clear hierarchy, project storytelling, and lightweight motion',
        'Added contact and project detail flows that support hiring conversion'
      ],
      outcomes: [
        'Clearer first-screen value proposition',
        'Better case-study presentation',
        'Stronger recruiter call-to-action flow'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design']
    }
  ];

  selectedProject: ProjectCaseStudy | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];

      if (!id) {
        return;
      }

      const project = this.projects.find((item) => item.slug === id);
      if (project) {
        this.viewProject(project);
      }
    });

    this.revealVisibleElements();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.revealVisibleElements();
  }

  viewProject(project: ProjectCaseStudy): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }

  private revealVisibleElements(): void {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 40 && rect.bottom > 0) {
        element.classList.add('visible');
      }
    });
  }
}
