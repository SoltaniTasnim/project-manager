import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly existingEmails = [
    'admin@example.com',
    'test@example.com',
    'john@company.com',
  ];

  checkEmailExists(email: string): Observable<boolean> {
    const normalizedEmail = email.trim().toLowerCase();
    const exists = this.existingEmails.includes(normalizedEmail);

    return of(exists).pipe(delay(800));
  }
}
