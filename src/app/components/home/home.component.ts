import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SocialLink {
  name: string;
  label: string;
  url: string;
  icon: string;
}

interface HighlightMetric {
  value: string;
  label: string;
  detail: string;
}

interface Capability {
  title: string;
  description: string;
  evidence: string;
}

interface HeroSignal {
  label: string;
  value: string;
}

interface SkillChartItem {
  label: string;
  value: number;
  note: string;
  color: string;
}

interface ArchitectureNode {
  label: string;
  detail: string;
}

interface StrengthGroup {
  title: string;
  summary: string;
  items: string[];
}

interface FeaturedProject {
  title: string;
  image: string;
  slug: string;
  impact: string;
  summary: string;
  technologies: string[];
}

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  scope: string;
  achievements: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      label: 'Open GitHub profile',
      url: 'https://github.com/suresh123-git',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      label: 'Open LinkedIn profile',
      url: 'https://www.linkedin.com/in/lingalasuresh',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'X',
      label: 'Open X profile',
      url: 'https://x.com/LINGALASUR81209',
      icon: 'fab fa-x-twitter'
    },
    {
      name: 'Email',
      label: 'Send email',
      url: 'mailto:lingalasuresh0606@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];

  hero = {
    badge: 'Available for full-time product engineering roles',
    name: 'Suresh Lingala',
    title: 'Building scalable web applications and real-time platforms.',
    summary:
      'I build Angular and NestJS systems backed by GraphQL, Kafka, Redis, and MongoDB. My work focuses on enterprise workflows, real-time data pipelines, and backend architectures that stay reliable under production load.',
    location: 'Hyderabad, India',
    primaryCta: 'View Case Studies',
    secondaryCta: 'Contact Me'
  };

  resumeUrl = 'assets/images/profile/Suresh%20Lingala%20Resume.pdf';
  resumeFileName = 'Suresh-Lingala-Resume.pdf';

  highlightMetrics: HighlightMetric[] = [
    {
      value: '10k+',
      label: 'attendance events/min',
      detail: 'Supported high-frequency workforce data processing in production'
    },
    {
      value: '40%',
      label: 'faster API responses',
      detail: 'Improved GraphQL efficiency during migration and optimization work'
    },
    {
      value: '60%',
      label: 'faster timesheet processing',
      detail: 'Reduced turnaround time for employee workflow operations'
    },
    {
      value: '90%+',
      label: 'test coverage on key services',
      detail: 'Invested in maintainability and safer backend changes'
    }
  ];

  deliverySignals: HighlightMetric[] = [
    {
      value: 'End-to-end',
      label: 'feature ownership',
      detail: 'Comfortable moving from UI decisions to API design and production-ready implementation.'
    },
    {
      value: 'Backend-first',
      label: 'system thinking',
      detail: 'Strongest in service design, data flow, and architectures that stay reliable under load.'
    },
    {
      value: 'Product-aware',
      label: 'engineering delivery',
      detail: 'I focus on workflows, business outcomes, and user journeys instead of isolated technical tasks.'
    },
    {
      value: 'Quality-driven',
      label: 'release confidence',
      detail: 'Testing, maintainability, and measurable performance improvements are part of the work.'
    }
  ];

  capabilities: Capability[] = [
    {
      title: 'Backend systems that scale',
      description: 'Designing NestJS services, GraphQL APIs, and event-driven flows for enterprise workloads.',
      evidence: 'Microservices, Kafka, Redis, MongoDB'
    },
    {
      title: 'Frontend that supports real operations',
      description: 'Building Angular interfaces for time, attendance, approvals, and workflow-heavy user journeys.',
      evidence: 'Angular, TypeScript, stateful dashboards'
    },
    {
      title: 'Engineering with measurable outcomes',
      description: 'I focus on response time, reliability, testing, and product behavior that recruiters and teams can actually trust.',
      evidence: 'Performance gains, test coverage, production delivery'
    }
  ];

  heroSignals: HeroSignal[] = [
    { label: 'Core stack', value: 'Angular + NestJS + GraphQL' },
    { label: 'Best fit', value: 'Product teams with complex workflows' },
    { label: 'Strength', value: 'Backend-heavy full-stack execution' }
  ];

  skillChartItems: SkillChartItem[] = [
    { label: 'Backend APIs', value: 45, note: 'NestJS, GraphQL, REST', color: '#ff8a3d' },
    { label: 'Real-time Systems', value: 25, note: 'Kafka, WebSockets, Redis', color: '#ffb366' },
    { label: 'Frontend Delivery', value: 15, note: 'Angular, TypeScript, workflow-heavy UI', color: '#d96d2a' },
    { label: 'Testing & Quality', value: 15, note: 'Jest, maintainability, release confidence', color: '#ffcf99' }
  ];

  architectureNodes: ArchitectureNode[] = [
    { label: 'Frontend', detail: 'Angular interfaces for dashboards, approvals, and workflow-heavy products.' },
    { label: 'API Layer', detail: 'NestJS services and GraphQL endpoints shaped around business logic.' },
    { label: 'Real-time Flow', detail: 'Kafka, Redis, and event-driven processing for live system behavior.' },
    { label: 'Data Layer', detail: 'MongoDB-backed persistence with practical production-oriented access patterns.' },
    { label: 'Cloud', detail: 'Deployment awareness, hosting, and production readiness across modern web applications.' }
  ];

  strengthGroups: StrengthGroup[] = [
    {
      title: 'Product Engineering',
      summary: 'I work best on features that combine UX, APIs, business logic, and operational reliability.',
      items: ['Angular', 'TypeScript', 'Responsive UI', 'Workflow-heavy interfaces']
    },
    {
      title: 'Backend Architecture',
      summary: 'Most of my strongest work sits in backend services, API design, and distributed system behavior.',
      items: ['NestJS', 'GraphQL', 'Microservices', 'REST APIs']
    },
    {
      title: 'Real-time & Data',
      summary: 'I enjoy systems where throughput, consistency, and fast updates matter.',
      items: ['Kafka', 'Redis', 'WebSockets', 'MongoDB']
    }
  ];

  featuredProjects: FeaturedProject[] = [
    {
      title: 'Enterprise HRMS Platform',
      image: 'assets/images/projects/hrms_img.jpg',
      slug: 'enterprise-hrms-application',
      impact: 'Processed 10k+ attendance records per minute with 99.9% tracking accuracy',
      summary:
        'Built time attendance and timesheets workflows using Angular, NestJS, GraphQL, Kafka, Redis, and MongoDB for enterprise-scale HR operations.',
      technologies: ['Angular', 'NestJS', 'GraphQL', 'Kafka', 'Redis', 'MongoDB']
    },
    {
      title: 'GraphQL API Migration',
      image: 'assets/images/projects/graphql_img.png',
      slug: 'graphql-nestjs-api',
      impact: 'Reduced API response time by 40% and data transfer by 60%',
      summary:
        'Migrated a REST-based mobile backend to GraphQL in NestJS with resolver optimization, schema design, and stronger developer ergonomics.',
      technologies: ['NestJS', 'GraphQL', 'Apollo Server', 'PostgreSQL']
    },
    {
      title: 'Real-time Chat Application',
      image: 'assets/images/projects/chatapp-img.png',
      slug: 'real-time-chat-application',
      impact: 'Delivered instant messaging, presence, and live interaction patterns',
      summary:
        'Built a real-time communication product with WebSockets, presence indicators, and persistent message history.',
      technologies: ['Angular', 'NestJS', 'WebSocket', 'MongoDB', 'RxJS']
    }
  ];

  experience: ExperienceItem[] = [
    {
      company: 'Akrivia Automation Private Limited',
      position: 'MEAN Stack Developer',
      period: 'June 2022 - Present',
      scope: 'Building enterprise HRMS modules with a backend-heavy focus on microservices, GraphQL, and real-time workflows.',
      achievements: [
        'Built NestJS microservices and MongoDB-backed services for HRMS modules',
        'Implemented GraphQL APIs that improved data-fetching efficiency',
        'Added Kafka-based processing for high-frequency event streams',
        'Increased release confidence through Jest-based unit test coverage'
      ]
    },
    {
      company: 'Akrivia Automation Private Limited',
      position: 'Software Development Intern',
      period: 'November 2021 - May 2022',
      scope: 'Started with API development, testing, and backend support work across production features.',
      achievements: [
        'Implemented unit tests for Hapi.js APIs',
        'Contributed to REST API development and maintenance',
        'Built foundations that led into full-stack product work'
      ]
    }
  ];

  recruiterCtas = [
    { label: 'Explore Projects', route: '/projects' },
    { label: 'Read Case Studies', route: '/blog' },
    { label: 'Contact Suresh', route: '/contact' }
  ];

  get skillChartGradient(): string {
    let currentAngle = 0;
    const segments = this.skillChartItems.map((item) => {
      const start = currentAngle;
      const sweep = (item.value / 100) * 360;
      currentAngle += sweep;
      return `${item.color} ${start}deg ${currentAngle}deg`;
    });

    return `conic-gradient(${segments.join(', ')})`;
  }

  ngOnInit(): void {
    this.revealVisibleElements();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.revealVisibleElements();
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
