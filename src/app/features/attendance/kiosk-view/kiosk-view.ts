import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Attendance } from '../../../core/services/attendance/attendance';

@Component({
  selector: 'app-kiosk-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kiosk-view.html',
  styleUrl: './kiosk-view.css'
})
export class KioskView implements OnInit, OnDestroy {
  private attendanceService = inject(Attendance);
  private cdr = inject(ChangeDetectorRef);

  dni = '';
  isProcessing = false;
  currentTime = '';
  private timerId: any;
  result: any = null;

  ngOnInit() {
    this.updateClock();
    this.timerId = setInterval(() => {
      this.updateClock();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerId) clearInterval(this.timerId);
  }

  private updateClock() {
    this.currentTime = new Date().toLocaleTimeString('es-PE', { 
      hour: '2-digit', minute: '2-digit', second: '2-digit' 
    });
  }

  onScan() {
    const dniLimpio = this.dni.trim(); 
    
    console.log("1. Botón clickeado. DNI enviado:", dniLimpio);

    if (!dniLimpio || dniLimpio.length < 8) return;

    this.isProcessing = true;
    this.result = null;
    this.cdr.detectChanges();

    this.attendanceService.registerKioskAttendance(dniLimpio).subscribe({
      next: (res) => {
        console.log("2. Respuesta del Mock recibida:", res);
        
        this.isProcessing = false;
        this.result = res;
        this.dni = ''; 
        
        this.cdr.detectChanges(); 

        setTimeout(() => {
          this.result = null;
          this.cdr.detectChanges();
        }, 4000);
      },
      error: (err) => {
        console.error("Error en la petición:", err);
        this.isProcessing = false;
        this.cdr.detectChanges();
      }
    });
  }
}