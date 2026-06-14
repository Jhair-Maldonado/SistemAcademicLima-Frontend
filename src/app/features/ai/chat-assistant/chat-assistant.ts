import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiDiagnostic } from '../../../core/services/ai/gemini-diagnostic';

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-assistant.html',
  styleUrl: './chat-assistant.css'
})
export class ChatAssistant implements OnInit {
  private aiService = inject(GeminiDiagnostic);

  isOpen = false;
  userInput = '';
  isTyping = false;
  userRole = 'ALUMNO';
  
  messages: any[] = [];

  ngOnInit() {
    this.userRole = 'DIRECTOR'; 
    this.setInitialGreeting();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  setInitialGreeting() {
    let greeting = '';
    if (this.userRole === 'DIRECTOR') {
      greeting = 'Hola Director. Soy EduCore AI. ¿Desea analizar métricas de deserción o redactar un comunicado institucional?';
    } else if (this.userRole === 'DOCENTE') {
      greeting = 'Hola Profesor. Puedo ayudarle a generar rúbricas o analizar el rendimiento de su aula. ¿En qué trabajamos hoy?';
    } else {
      greeting = '¡Hola! Soy tu tutor virtual. Recuerda que estoy aquí para guiarte en tus dudas, no para hacer tu tarea. ¿Qué tema repasamos?';
    }

    this.messages = [{ 
      role: 'assistant', 
      content: greeting,
      timestamp: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
    }];
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMsg = {
      role: 'user',
      content: this.userInput,
      timestamp: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
    };
    this.messages.push(userMsg);
    
    const query = this.userInput;
    this.userInput = '';
    this.isTyping = true;

    const mode = this.userRole === 'ALUMNO' ? 'TUTOR' : 'DOCENTE';

    this.aiService.askAssistant(query, mode).subscribe({
      next: (response) => {
        this.messages.push(response);
        this.isTyping = false;
      },
      error: () => {
        this.isTyping = false;
      }
    });
  }
}