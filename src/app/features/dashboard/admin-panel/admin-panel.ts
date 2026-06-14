import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Academic } from '../../../core/services/academic/academic';
import { ChatAssistant } from '../../ai/chat-assistant/chat-assistant';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, ChatAssistant],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css'
})
export class AdminPanel implements OnInit {
  private academicService = inject(Academic);
  private router = inject(Router);

  stats: any = null;
  aiResult: any = null;
  isAnalyzing = false;
  userName = 'Jhair Maldonado';

  ngOnInit() {
    this.academicService.getDashboardStats().subscribe(data => this.stats = data);
  }

  runAIAnalysis() {
    this.isAnalyzing = true;
    this.aiResult = null;
    this.academicService.generateAIDiagnostic().subscribe(result => {
      this.aiResult = result;
      this.isAnalyzing = false;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}