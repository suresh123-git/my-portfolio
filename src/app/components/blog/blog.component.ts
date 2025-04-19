import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CaseStudyDetailComponent } from '../case-study-detail/case-study-detail.component';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, CaseStudyDetailComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [
    {
      id: 'monolithic-to-microservices',
      title: 'Microservices vs Monolithic Architecture',
      excerpt: 'A detailed analysis of migrating from monolithic to microservices architecture, focusing on scalability and maintainability.',
      content: `
        <h2>Architectural Evolution: From Monolithic to Microservices</h2>
        <p>In today's fast-paced digital landscape, the choice between monolithic and microservices architecture is crucial for application scalability and maintainability.</p>
        
        <h3>Monolithic Architecture</h3>
        <p>Traditional monolithic applications bundle all components into a single codebase, making initial development straightforward but posing challenges in scaling and maintenance.</p>
        
        <h3>Microservices Architecture</h3>
        <p>Microservices break down applications into smaller, independent services, each responsible for specific business capabilities. This approach offers:</p>
        <ul>
          <li>Independent scaling of services</li>
          <li>Faster deployment cycles</li>
          <li>Technology flexibility</li>
          <li>Improved fault isolation</li>
        </ul>
        
        <h3>Decision Factors</h3>
        <p>Key considerations when choosing between architectures:</p>
        <ul>
          <li>Application complexity and size</li>
          <li>Team structure and expertise</li>
          <li>Scalability requirements</li>
          <li>Deployment frequency</li>
        </ul>
        
        <h3>Real-world Implementation</h3>
        <p>Our experience in migrating a monolithic HRMS application to microservices demonstrated significant improvements in:</p>
        <ul>
          <li>System performance and reliability</li>
          <li>Development velocity</li>
          <li>Resource utilization</li>
          <li>Maintenance efficiency</li>
        </ul>
      `,
      date: '2024-03-20',
      readTime: '12 min read',
      category: 'Architecture',
      image: 'assets/images/projects/mono_micro_img.png',
      tags: ['Architecture', 'Microservices', 'Scalability', 'NestJS']
    },
    {
      id: 'graphql-implementation',
      title: 'GraphQL Implementation Case Study',
      excerpt: 'Exploring the benefits and challenges of implementing GraphQL in a large-scale application.',
      content: `
        <h2>GraphQL Implementation Journey</h2>
        <p>Our experience in implementing GraphQL for a large-scale HRMS application revealed valuable insights about modern API design.</p>
        
        <h3>Why GraphQL?</h3>
        <p>GraphQL's flexible querying capabilities addressed several challenges in our REST API implementation:</p>
        <ul>
          <li>Over-fetching and under-fetching of data</li>
          <li>Multiple round trips for related data</li>
          <li>Versioning complexities</li>
          <li>Documentation maintenance</li>
        </ul>
        
        <h3>Implementation Approach</h3>
        <p>Our GraphQL implementation strategy included:</p>
        <ul>
          <li>Schema-first development</li>
          <li>Resolver optimization</li>
          <li>Caching strategies</li>
          <li>Error handling standardization</li>
        </ul>
        
        <h3>Challenges and Solutions</h3>
        <p>Key challenges we faced and how we addressed them:</p>
        <ul>
          <li>Performance optimization for complex queries</li>
          <li>Security and access control</li>
          <li>Monitoring and debugging</li>
          <li>Team adoption and training</li>
        </ul>
        
        <h3>Results and Benefits</h3>
        <p>The implementation yielded significant improvements:</p>
        <ul>
          <li>Reduced network payload</li>
          <li>Improved client performance</li>
          <li>Better developer experience</li>
          <li>Enhanced API discoverability</li>
        </ul>
      `,
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'Backend',
      image: 'assets/images/projects/graphql_casestudy_img.jpg',
      tags: ['GraphQL', 'API Design', 'Performance', 'NestJS']
    },
    {
      id: 'kafka-implementation',
      title: 'Kafka Implementation for Real-time Data Processing',
      excerpt: 'How we solved high-frequency data processing challenges using Kafka in our Time and Attendance module.',
      content: `
        <h2>Kafka Implementation: Solving Real-time Data Processing Challenges</h2>
        <p>Our Time and Attendance module faced significant challenges with high-frequency data processing, leading us to implement Kafka for robust data handling.</p>
        
        <h3>The Challenge</h3>
        <p>Our Time and Attendance module was experiencing critical issues:</p>
        <ul>
          <li>Data arriving every second from multiple sources</li>
          <li>High volume of concurrent data processing</li>
          <li>Frequent server failures under load</li>
          <li>Data consistency and reliability issues</li>
          <li>System performance degradation during peak hours</li>
        </ul>
        
        <h3>Why Kafka?</h3>
        <p>Kafka provided the perfect solution for our requirements:</p>
        <ul>
          <li>High throughput message processing</li>
          <li>Distributed architecture for scalability</li>
          <li>Message persistence and replay capability</li>
          <li>Built-in fault tolerance</li>
          <li>Real-time data streaming capabilities</li>
        </ul>
        
        <h3>Implementation Strategy</h3>
        <p>Our Kafka implementation in NestJS included:</p>
        <ul>
          <li>Topic partitioning for parallel processing</li>
          <li>Consumer groups for load balancing</li>
          <li>Message compression for efficiency</li>
          <li>Dead letter queues for error handling</li>
          <li>Monitoring and alerting setup</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>Key technical aspects of our implementation:</p>
        <ul>
          <li>NestJS Kafka microservice setup</li>
          <li>Custom serializers and deserializers</li>
          <li>Retry mechanisms for failed messages</li>
          <li>Message validation and sanitization</li>
          <li>Performance optimization techniques</li>
        </ul>
        
        <h3>Results and Benefits</h3>
        <p>The implementation yielded significant improvements:</p>
        <ul>
          <li>99.99% system uptime</li>
          <li>50% reduction in server load</li>
          <li>Real-time data processing capability</li>
          <li>Improved data consistency</li>
          <li>Better error handling and recovery</li>
        </ul>
        
        <h3>Lessons Learned</h3>
        <p>Key takeaways from our Kafka implementation:</p>
        <ul>
          <li>Importance of proper topic partitioning</li>
          <li>Need for comprehensive monitoring</li>
          <li>Value of message schema evolution</li>
          <li>Benefits of consumer group management</li>
          <li>Significance of proper error handling</li>
        </ul>
      `,
      date: '2024-03-15',
      readTime: '10 min read',
      category: 'Backend',
      image: 'assets/images/projects/kafka_img.png',
      tags: ['Kafka', 'Real-time Processing', 'NestJS', 'Microservices', 'Performance']
    }
  ];

  // Search and filter properties
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedTag: string = '';
  currentPage: number = 1;
  postsPerPage: number = 6;
  selectedPost: BlogPost | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Computed properties
  get filteredPosts(): BlogPost[] {
    return this.blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      const matchesCategory = !this.selectedCategory || post.category === this.selectedCategory;
      const matchesTag = !this.selectedTag || post.tags.includes(this.selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }

  get paginatedPosts(): BlogPost[] {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  get categories(): string[] {
    return [...new Set(this.blogPosts.map(post => post.category))];
  }

  get allTags(): string[] {
    return [...new Set(this.blogPosts.flatMap(post => post.tags))];
  }

  // Methods
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.viewPost(params['id']);
      }
    });

    // Add animation classes after component is mounted
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        element.classList.add('visible');
      });
      this.cdr.detectChanges();
    }, 100);
  }

  onSearch(): void {
    this.currentPage = 1; // Reset to first page when searching
  }

  onCategoryChange(): void {
    this.currentPage = 1; // Reset to first page when changing category
  }

  onTagChange(): void {
    this.currentPage = 1; // Reset to first page when changing tag
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  viewPost(postId: string): void {
    this.selectedPost = this.blogPosts.find(post => post.id === postId) || null;
    if (this.selectedPost) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.cdr.detectChanges();
    }
  }

  backToList(): void {
    this.selectedPost = null;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.router.navigate(['/blog']);
    }, 0);
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
} 