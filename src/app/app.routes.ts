import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // Rutas Públicas
  { 
    path: 'login', 
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login) 
  },
  { 
    path: 'kiosk', 
    loadComponent: () => import('./features/attendance/kiosk-view/kiosk-view').then(m => m.KioskView) 
  },
  
  // Rutas Privadas Protegidas
  { 
    path: 'dashboard', 
    canActivate: [authGuard], 
    loadComponent: () => import('./features/dashboard/admin-panel/admin-panel').then(m => m.AdminPanel) 
  },
  { 
    path: 'attendance/web', 
    canActivate: [authGuard],
    loadComponent: () => import('./features/attendance/web-register/web-register').then(m => m.WebRegister) 
  },
  { 
    path: 'classroom/course/:id', 
    canActivate: [authGuard],
    loadComponent: () => import('./features/classroom/course-detail/course-detail').then(m => m.CourseDetail) 
  },
  { 
    path: 'curriculum/grades', 
    canActivate: [authGuard],
    loadComponent: () => import('./features/curriculum/minedu-grades/minedu-grades').then(m => m.MineduGrades) 
  },
  
  { path: '**', redirectTo: 'login' }
];