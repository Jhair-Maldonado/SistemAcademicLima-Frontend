import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Academic {

  getDashboardStats(): Observable<any> {
    return of({
      totalAlumnos: 450,
      asistenciaPromedio: '92%',
      alumnosRiesgo: 12,
      aulasActivas: 18
    }).pipe(delay(800));
  }

  generateAIDiagnostic(): Observable<any> {
    return of({
      tipo: 'PREDICTIVO',
      analisis: 'Se ha detectado un patrón de descenso del 15% en el rendimiento del área de Matemáticas en 2do de Secundaria. La IA sugiere reforzar la competencia "Resuelve problemas de cantidad" y programar una citación preventiva con los apoderados del grupo identificado.',
      nivelRiesgo: 'MEDIO',
      fecha: new Date().toLocaleString()
    }).pipe(delay(3000));
  }

  getCourseDetails(courseId: string): Observable<any> {
    return of({
      id: courseId,
      nombre: 'Matemáticas Avanzadas',
      grado: '2do Año de Secundaria - Sección A',
      docente: 'Jhair Maldonado',
      materiales: [
        { id: 1, titulo: 'Sílabo del Curso 2026', tipo: 'PDF', fecha: '01/03/2026' },
        { id: 2, titulo: 'Diapositivas: Álgebra Lineal', tipo: 'PPT', fecha: '15/03/2026' }
      ],
      tareas: [
        { id: 1, titulo: 'Ejercicios de Matrices', fechaEntrega: '22/03/2026', entregas: 28, total: 35 },
        { id: 2, titulo: 'Foro: Aplicaciones de la Geometría', fechaEntrega: '30/03/2026', entregas: 12, total: 35 }
      ],
      alumnos: [
        { id: 101, nombre: 'Pajuelo Cardenas, Joseph', asistencia: 95, riesgo: 'BAJO' },
        { id: 102, nombre: 'Porras Palpa, Jair', asistencia: 88, riesgo: 'MEDIO' },
        { id: 103, nombre: 'Maldonado Quintana, Jhair', asistencia: 100, riesgo: 'BAJO' }
      ]
    }).pipe(delay(600));
  }

  getCurriculumStructure(): Observable<any> {
    return of({
      area: 'Matemáticas',
      competencias: [
        { 
          id: 1, 
          nombre: 'Resuelve problemas de cantidad',
          capacidades: ['Traduce cantidades', 'Comunica su comprensión', 'Usa estrategias y procedimientos']
        },
        { 
          id: 2, 
          nombre: 'Resuelve problemas de regularidad y cambio',
          capacidades: ['Traduce datos a expresiones', 'Argumenta afirmaciones']
        }
      ]
    }).pipe(delay(500));
  }

  getSectionGrades(): Observable<any[]> {
    return of([
      { id: 1, alumno: 'Pajuelo Cardenas, Joseph', notas: { c1: 'A', c2: 'AD', c3: 'A' } },
      { id: 2, alumno: 'Porras Palpa, Jair', notas: { c1: 'B', c2: 'A', c3: 'A' } },
      { id: 3, alumno: 'Maldonado Quintana, Jhair', notas: { c1: 'AD', c2: 'AD', c3: 'AD' } },
    ]).pipe(delay(700));
  }

}