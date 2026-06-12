import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Academic } from '../../../core/services/academic/academic';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private academicService = inject(Academic);
  private cdr = inject(ChangeDetectorRef);

  course: any = null;
  isLoading = true;
  
  activeTab = 'materiales'; 

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id') || '1';
    
    this.academicService.getCourseDetails(courseId).subscribe({
      next: (data) => {
        this.course = data;
        this.isLoading = false;
        
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("Error cargando el curso:", err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
    this.cdr.detectChanges(); 
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}