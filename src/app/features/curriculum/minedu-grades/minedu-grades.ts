import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Academic } from '../../../core/services/academic/academic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minedu-grades',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './minedu-grades.html',
  styleUrl: './minedu-grades.css'
})
export class MineduGrades implements OnInit {
  private academicService = inject(Academic);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  isLoading = true;
  curriculum: any = null;
  alumnos: any[] = [];
  
  escala = ['AD', 'A', 'B', 'C'];
  
  periodos = ['I Trimestre', 'II Trimestre', 'III Trimestre'];
  periodoSeleccionado = 'I Trimestre';

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.academicService.getCurriculumStructure().subscribe(cur => {
      this.curriculum = cur;
      this.academicService.getSectionGrades().subscribe(alu => {
        this.alumnos = alu;
        this.isLoading = false;
        this.cdr.detectChanges();
      });
    });
  }

  saveGrades() {
    alert('Notas sincronizadas con el servidor de SistemAcademicLima (Mock)');
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}