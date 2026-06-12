import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { delay, Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);

  login(username: string, password: string): Observable<any> {
    
    if (environment.useMocks) {
      console.log('SistemAcademicLima: Ejecutando en modo SIMULACIÓN (Mock).');
      
      if (username === 'admin' && password === '1234') {
        return of({
          success: true,
          token: 'mock-jwt-token-789456123',
          user: { id: 1, nombres: 'Jhair', rol: 'DIRECTOR' }
        }).pipe(delay(1500));
      }
      return of({
        success: false,
        message: 'Credenciales incorrectas. Verifique su DNI/Usuario.'
      }).pipe(delay(1000));

    } else {
      console.log('SistemAcademicLima: Conectando con Backend Java en:', environment.apiUrl);
      
      const loginDto = { username: username, password: password };
      
      return this.http.post<any>(`${environment.apiUrl}/auth/login`, loginDto);
    }
  }
}