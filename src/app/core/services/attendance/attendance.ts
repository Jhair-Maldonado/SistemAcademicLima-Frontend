import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Attendance {

  registerKioskAttendance(dni: string): Observable<any> {
    if (dni === '76543210') {
      return of({
        success: true,
        message: 'Asistencia registrada correctamente.',
        alumno: 'Jhair Junior Maldonado',
        hora: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }),
        estado: 'PUNTUAL'
      }).pipe(delay(800));
    }

    return of({
      success: false,
      message: 'DNI no encontrado en el padrón actual.'
    }).pipe(delay(600));
  }
}