import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutInfo = {
    name: 'Suresh Lingala',
    title: 'Full Stack Developer & Microservices Architect',
    location: 'Hyderabad, India',
    email: 'lingalasuresh0606@gmail.com',
    bio: `I'm a Full Stack Developer with expertise in building scalable HRMS applications using modern web technologies. My journey in tech has been marked by successfully implementing microservices architecture, GraphQL APIs, and ensuring code quality through comprehensive unit testing.`,
    personalInfo: {
      education: 'Bachelor of Technology in Computer Science',
      university: 'Your University Name',
      graduationYear: '2020',
      interests: ['Microservices Architecture', 'GraphQL', 'Unit Testing', 'System Design'],
      languages: ['English']
    },
    technicalSkills: {
      frontend: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'HTML5', 'CSS3', 'SASS'],
      backend: ['NestJS', 'Node.js', 'Hapi.js', 'GraphQL', 'REST APIs'],
      databases: ['MongoDB', 'KafkaJS'],
      architecture: ['Microservices', 'System Design', 'Event-Driven Architecture'],
      tools: ['Git', 'Jest', 'VS Code', 'Postman', 'Figma'],
      methodologies: ['Agile', 'Scrum', 'Test-Driven Development']
    },
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
    ],
    certifications: [
      {
        name: 'Angular Advanced Developer',
        issuer: 'Google',
        year: '2021'
      },
      {
        name: 'GraphQL Fundamentals',
        issuer: 'Apollo GraphQL',
        year: '2021'
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
} 