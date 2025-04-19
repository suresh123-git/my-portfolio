import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Suresh Lingala';
  subtitle = 'MEAN Stack Developer';
  description = 'I specialize in building scalable applications using modern technologies. With expertise in microservices architecture, I help transform monolithic applications into distributed systems.';
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/suresh123-git', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lingalasuresh', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://x.com/LINGALASUR81209', icon: 'fab fa-twitter' },
    { name: 'Gmail', url: 'mailto:lingalasuresh0606@gmail.com', icon: 'fas fa-envelope' }
  ];

  developerInfo = {
    name: 'Suresh Lingala',
    title: 'MEAN Stack Developer',
    quickIntro: 'Transforming HRMS Applications with Modern Architecture',
    tagline: 'Building Scalable HRMS Solutions with Microservices & GraphQL',
    location: 'Hyderabad, India',
    email: 'lingalasuresh0606@gmail.com',
    github: 'https://github.com/suresh123-git',
    linkedin: 'https://www.linkedin.com/in/lingalasuresh',
    bio: `I'm a Full Stack Developer specializing in building scalable HRMS applications using modern technologies. My expertise includes implementing microservices architecture, GraphQL APIs, and ensuring code quality through comprehensive unit testing.`,
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'GraphQL with NestJS', level: 90 },
      { name: 'Microservices Architecture', level: 90 },
      { name: 'NestJS & Unit Testing (Jest)', level: 95 },
      { name: 'MongoDB', level: 85 },
      { name: 'Kafka', level: 70 }
    ],
    recentProjects: [
      {
        title: 'Enterprise HRMS Application',
        description: 'Developed a large-scale HRMS application using microservices architecture, implementing GraphQL APIs and real-time data processing with Kafka.',
        technologies: ['Angular', 'NestJS', 'MongoDB', 'GraphQL', 'KafkaJS', 'Jest'],
        image: 'assets/images/projects/hrms_img.jpg',
        slug: 'enterprise-hrms-application'
      },
      {
        title: 'Real-time Chat Application',
        description: 'Built a real-time chat application using WebSocket technology, featuring instant messaging, online status indicators, and message history.',
        technologies: ['Angular', 'NestJS', 'WebSocket', 'MongoDB', 'TypeScript'],
        image: 'assets/images/projects/chatapp-img.png',
        slug: 'real-time-chat-application'
      }
    ],
    experience: [
      {
        company: 'Akrivia Automation Private Limited',
        position: 'MEAN Stack Developer',
        period: '2022 June - Present',
        description: 'Working on a large-scale HRMS application, implementing microservices architecture and modern web technologies.',
        achievements: [
          'Architected and implemented microservices using NestJS and MongoDB',
          'Developed GraphQL APIs from scratch, improving data fetching efficiency',
          'Implemented real-time data processing using KafkaJS',
          'Wrote comprehensive unit test cases using Jest.js',
          'Contributed to the development of a scalable HRMS application'
        ]
      },
      {
        company: 'Akrivia Automation Private Limited',
        position: 'Software Development Intern',
        period: '2021 Nov - 2022 May',
        description: 'Started as an intern, focusing on API development and testing.',
        achievements: [
          'Implemented unit test cases for Hapi.js APIs',
          'Developed and maintained RESTful APIs',
          'Collaborated with the team on various development tasks'
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    // Add animation classes after component is mounted
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        element.classList.add('visible');
      });
    }, 100);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight && elementBottom > 0) {
        element.classList.add('visible');
      }
    });
  }

  getProjectRoute(project: any): string[] {
    return ['/projects', project.slug];
  }
} 