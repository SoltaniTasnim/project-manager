import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  getErrorMessage(control: AbstractControl | null): string {
    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'Ce champ est requis.';
    }

    if (control.errors['email']) {
      return "Le format de l'email est invalide.";
    }

    if (control.errors['minlength']) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `Minimum ${requiredLength} caracteres requis.`;
    }

    if (control.errors['maxlength']) {
      const requiredLength = control.errors['maxlength'].requiredLength;
      return `Maximum ${requiredLength} caracteres autorises.`;
    }

    if (control.errors['min']) {
      return `La valeur minimum est ${control.errors['min'].min}.`;
    }

    if (control.errors['max']) {
      return `La valeur maximum est ${control.errors['max'].max}.`;
    }

    if (control.errors['pattern']) {
      return 'Le format saisi est invalide.';
    }

    if (control.errors['passwordStrength']) {
      return 'Le mot de passe doit contenir majuscule, minuscule, chiffre, special et 8 caracteres minimum.';
    }

    if (control.errors['mustMatch']) {
      return 'Les champs doivent correspondre.';
    }

    if (control.errors['emailExists']) {
      return 'Cet email existe deja.';
    }

    return 'Valeur invalide.';
  }

  hasError(control: AbstractControl | null, errorType: string): boolean {
    return !!control && control.touched && control.hasError(errorType);
  }
}
