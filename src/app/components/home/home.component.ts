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
  developerInfo = {
    name: 'Suresh Lingala',
    title: 'Full Stack Developer & Microservices Architect',
    quickIntro: 'Transforming HRMS Applications with Modern Architecture',
    tagline: 'Building Scalable HRMS Solutions with Microservices & GraphQL',
    location: 'Hyderabad, India',
    email: 'lingalasuresh0606@gmail.com',
    github: 'https://github.com/SureshLingala',
    linkedin: 'https://linkedin.com/in/suresh-lingala',
    bio: `I'm a Full Stack Developer specializing in building scalable HRMS applications using modern technologies. My expertise includes implementing microservices architecture, GraphQL APIs, and ensuring code quality through comprehensive unit testing.`,
    skills: [
      { name: 'Angular & NestJS', level: 95 },
      { name: 'GraphQL Development', level: 90 },
      { name: 'Microservices Architecture', level: 90 },
      { name: 'Unit Testing (Jest)', level: 95 },
      { name: 'MongoDB & Kafka', level: 85 },
      { name: 'System Design', level: 85 }
    ],
    recentProjects: [
      {
        title: 'Enterprise HRMS Application',
        description: 'Developed a large-scale HRMS application using microservices architecture, implementing GraphQL APIs and real-time data processing with Kafka.',
        technologies: ['Angular', 'NestJS', 'MongoDB', 'GraphQL', 'KafkaJS', 'Jest'],
        image: 'https://picsum.photos/600/400?random=1',
        link: '#'
      },
      {
        title: 'API Testing Framework',
        description: 'Implemented comprehensive unit test cases for Hapi.js APIs, improving code quality and reducing bugs.',
        technologies: ['Hapi.js', 'Jest', 'TypeScript', 'REST APIs'],
        image: 'https://picsum.photos/600/400?random=2',
        link: '#'
      }
    ],
    experience: [
      {
        company: 'Akrivia Automation Private Limited',
        position: 'Full Stack Developer',
        period: '2021 - Present',
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
        period: '2020 - 2021',
        description: 'Started as an intern, focusing on API development and testing.',
        achievements: [
          'Implemented unit test cases for Hapi.js APIs',
          'Developed and maintained RESTful APIs',
          'Collaborated with the team on various development tasks'
        ]
      }
    ]
  };

  ngOnInit() {
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
} 