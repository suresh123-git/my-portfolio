import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CaseStudyDetailComponent } from '../case-study-detail/case-study-detail.component';

interface BlogPost {
  id: number;
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
      id: 1,
      title: 'Scaling HRMS: From Monolithic to Microservices - A Real-World Case Study',
      excerpt: 'Learn how we transformed a traditional HRMS system to handle massive attendance data processing using microservices architecture.',
      content: `
        <div class="article-content">
          <h2>Introduction</h2>
          <p>In this case study, we'll explore how we successfully migrated a monolithic HRMS (Human Resource Management System) to a microservices architecture, with a particular focus on handling massive attendance data processing. Our system needed to handle thousands of attendance punches per second from multiple clients, along with various bulk operations.</p>

          <h2>The Challenge</h2>
          <p>Our monolithic application was facing several critical challenges:</p>
          <ul>
            <li><strong>Massive Data Processing:</strong> Handling thousands of attendance punches per second from multiple clients</li>
            <li><strong>Bulk Operations:</strong> Processing large-scale attendance data updates and reports</li>
            <li><strong>Scalability Issues:</strong> The system was struggling to handle increasing user load</li>
            <li><strong>Performance Bottlenecks:</strong> Real-time data processing was causing delays</li>
            <li><strong>Complex Deployment:</strong> Making changes required deploying the entire application</li>
          </ul>

          <h2>The Solution Architecture</h2>
          <p>We implemented a modern microservices architecture with the following components:</p>
          <ul>
            <li><strong>Frontend:</strong> Angular with standalone components for better performance</li>
            <li><strong>Backend Services:</strong> NestJS microservices for modular functionality</li>
            <li><strong>Database:</strong> MongoDB for flexible data storage and better scalability</li>
            <li><strong>Message Broker:</strong> Apache Kafka for real-time data processing</li>
            <li><strong>Cache Layer:</strong> Redis for high-performance data caching</li>
          </ul>

          <h2>Key Implementations</h2>
          
          <h3>1. Attendance Processing Service</h3>
          <p>We created a dedicated microservice for handling attendance data:</p>
          <ul>
            <li>Implemented Kafka for handling bulk attendance operations</li>
            <li>Processed thousands of attendance punches per second</li>
            <li>Used Redis for real-time data caching</li>
            <li>Implemented data validation and error handling</li>
          </ul>

          <h3>2. Data Processing Pipeline</h3>
          <p>Our data processing pipeline includes:</p>
          <ul>
            <li>Real-time data ingestion through Kafka</li>
            <li>Data validation and transformation</li>
            <li>Parallel processing of attendance records</li>
            <li>Error handling and retry mechanisms</li>
          </ul>

          <h3>3. Bulk Operations Handling</h3>
          <p>For handling bulk operations, we implemented:</p>
          <ul>
            <li>Batch processing for large datasets</li>
            <li>Asynchronous processing for non-critical operations</li>
            <li>Progress tracking and status updates</li>
            <li>Error recovery mechanisms</li>
          </ul>

          <h2>Technical Implementation Details</h2>
          
          <h3>1. Kafka Implementation</h3>
          <p>We used Kafka for handling real-time data processing:</p>
          <ul>
            <li>Created separate topics for different types of operations</li>
            <li>Implemented consumer groups for parallel processing</li>
            <li>Used Kafka Streams for data transformation</li>
            <li>Implemented proper error handling and retry logic</li>
          </ul>

          <h3>2. Database Optimization</h3>
          <p>Key database optimizations included:</p>
          <ul>
            <li>Sharding for better data distribution</li>
            <li>Indexing for faster queries</li>
            <li>Connection pooling for better resource utilization</li>
            <li>Implementing read replicas for better performance</li>
          </ul>

          <h3>3. Caching Strategy</h3>
          <p>We implemented a multi-level caching strategy:</p>
          <ul>
            <li>Redis for real-time data caching</li>
            <li>In-memory caching for frequently accessed data</li>
            <li>Cache invalidation strategies</li>
            <li>Distributed caching for better scalability</li>
          </ul>

          <h2>Results and Benefits</h2>
          <ul>
            <li><strong>Improved Performance:</strong> Reduced processing time by 70%</li>
            <li><strong>Better Scalability:</strong> System now handles 10x more concurrent users</li>
            <li><strong>Enhanced Reliability:</strong> 99.9% uptime with proper error handling</li>
            <li><strong>Cost Efficiency:</strong> Reduced infrastructure costs by 40%</li>
            <li><strong>Better Maintainability:</strong> Easier to update and deploy individual services</li>
          </ul>

          <h2>Best Practices Implemented</h2>
          <ul>
            <li>Proper error handling and logging</li>
            <li>Comprehensive monitoring and alerting</li>
            <li>Automated testing and deployment</li>
            <li>Documentation and knowledge sharing</li>
            <li>Regular performance optimization</li>
          </ul>

          <h2>Conclusion</h2>
          <p>The migration to microservices architecture has significantly improved our system's ability to handle massive attendance data processing. The combination of Kafka for real-time processing, MongoDB for flexible data storage, and Redis for caching has enabled us to achieve unprecedented scalability and performance. This architecture now efficiently handles thousands of attendance punches per second while maintaining data consistency and system reliability.</p>
        </div>
      `,
      date: '2024-03-20',
      readTime: '12 min read',
      category: 'Architecture',
      image: 'https://picsum.photos/800/400?random=1',
      tags: ['Microservices', 'Kafka', 'MongoDB', 'NestJS', 'Angular', 'Performance']
    },
    {
      id: 2,
      title: 'Building Scalable APIs with NestJS and GraphQL',
      excerpt: 'A comprehensive guide to building scalable and maintainable APIs using NestJS and GraphQL, with real-world examples and best practices.',
      content: `
        <div class="article-content">
          <h2>Introduction to NestJS and GraphQL</h2>
          <p>NestJS and GraphQL make a powerful combination for building modern APIs. In this post, we'll explore how to leverage these technologies effectively.</p>
          
          <h2>Why NestJS + GraphQL?</h2>
          <ul>
            <li>Type-safe API development</li>
            <li>Efficient data fetching</li>
            <li>Built-in validation</li>
            <li>Excellent developer experience</li>
          </ul>
          
          <h2>Implementation Details</h2>
          <p>Learn about the key aspects of implementing a GraphQL API with NestJS...</p>
        </div>
      `,
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'Backend',
      image: 'https://picsum.photos/800/400?random=4',
      tags: ['NestJS', 'GraphQL', 'TypeScript', 'API Design']
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
    private router: Router
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

  viewPost(postId: number): void {
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