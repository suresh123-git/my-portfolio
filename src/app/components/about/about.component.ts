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
    title: 'MEAN Stack Developer',
    location: 'Hyderabad, India',
    email: 'lingalasuresh0606@gmail.com',
    bio: `I'm a passionate MEAN Stack Developer with expertise in building scalable applications using modern web technologies. My journey in tech has been marked by successfully implementing microservices architecture, real-time applications, and ensuring code quality through comprehensive testing.`,
    personalInfo: {
      education: {
        degree: 'Bachelor of Technology in Computer Science',
        university: 'Raghu Engineering College',
        graduationYear: '2022',
        specialization: 'Computer Science & Engineering'
      },
      contact: {
        email: 'lingalasuresh0606@gmail.com',
        phone: '+91 7981570771',
        location: 'Hyderabad, India',
        availability: 'Available for freelance projects'
      },
      interests: [
        { name: 'Microservices Architecture', icon: 'architecture' },
        { name: 'Real-time Applications', icon: 'bolt' },
        { name: 'Web Development', icon: 'code' },
        // { name: 'System Design', icon: 'settings_suggest' }
      ],
      languages: [
        { name: 'English', level: 'Professional' },
        { name: 'Telugu', level: 'Native' },
        { name: 'Hindi', level: 'Professional' }
      ]
    },
    experience: [
      {
        company: 'Akrivia Automation Private Limited',
        position: 'Full Stack Developer',
        period: '2021 - Present',
        location: 'Hyderabad, India',
        description: 'Working on a large-scale HRMS application, implementing microservices architecture and modern web technologies.',
        achievements: [
          {
            title: 'Microservices Implementation',
            description: 'Architected and implemented microservices using NestJS and MongoDB',
            impact: 'Improved system scalability and maintainability'
          },
          {
            title: 'GraphQL API Development',
            description: 'Developed GraphQL APIs from scratch, improving data fetching efficiency',
            impact: 'Reduced API response time by 40%'
          },
          {
            title: 'Real-time Features',
            description: 'Implemented real-time data processing using KafkaJS',
            impact: 'Enhanced user experience with instant updates'
          },
          {
            title: 'Testing Framework',
            description: 'Wrote comprehensive unit test cases using Jest.js',
            impact: 'Achieved 90% test coverage'
          }
        ],
        technologies: ['Angular', 'NestJS', 'MongoDB', 'GraphQL', 'KafkaJS', 'Jest']
      },
      {
        company: 'Akrivia Automation Private Limited',
        position: 'Software Development Intern',
        period: '2020 - 2021',
        location: 'Hyderabad, India',
        description: 'Started as an intern, focusing on API development and testing.',
        achievements: [
          {
            title: 'API Testing',
            description: 'Implemented unit test cases for Hapi.js APIs',
            impact: 'Improved code quality and reduced bugs'
          },
          {
            title: 'API Development',
            description: 'Developed and maintained RESTful APIs',
            impact: 'Enhanced system functionality'
          }
        ],
        technologies: ['Hapi.js', 'Jest', 'TypeScript', 'REST APIs']
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