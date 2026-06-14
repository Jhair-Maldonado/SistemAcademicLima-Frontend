import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiDiagnostic {

  askAssistant(query: string, mode: 'DOCENTE' | 'TUTOR'): Observable<any> {
    
    let simulatedResponse = '';

    if (mode === 'DOCENTE') {
      if (query.toLowerCase().includes('joseph') || query.toLowerCase().includes('pajuelo')) {
        simulatedResponse = 'He analizado el registro de **Pajuelo Cardenas, Joseph**. Actualmente tiene un 95% de asistencia. En la competencia "Resuelve problemas de cantidad" mantiene un logro "A", pero sugiero asignarle ejercicios de refuerzo en matrices cuadradas para alcanzar el "AD".';
      } else {
        simulatedResponse = 'Como tu asistente académico, puedo generar rúbricas, analizar tendencias de notas o redactar correos para padres de familia. ¿En qué curso deseas enfocarte hoy?';
      }
    } else {
      simulatedResponse = '¡Hola! Revisé el sílabo de tu curso. El próximo examen de Álgebra Lineal es el 30 de marzo. ¿Quieres que te genere un cuestionario de práctica de 5 preguntas basado en los PPTs subidos por tu profesor?';
    }

    return of({
      id: Math.random().toString(36).substr(2, 9),
      role: 'assistant',
      content: simulatedResponse,
      timestamp: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
      contextUsed: ['registro_notas_2doA.pdf', 'silabo_mate_2026.pdf']
    }).pipe(delay(2500));
  }
}