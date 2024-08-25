import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function domainValidator(blockedHosts: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toLowerCase();

    if (!value) {
      return null;
    }

    // Regular expression to check for a valid domain structure
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Extract domain from the email
    const domain = value.split('@')[1];

    // Check if domain matches the pattern and is not in the blocked list
    if (domain && domainPattern.test(domain)) {
      const isBlocked = blockedHosts.some(host => domain.includes(host));
      return isBlocked ? { notAllowedDomain: true } : null;
    }

    // If domain does not match the pattern or contains invalid characters
    return { invalidEmailDomain: true };
  };
}
