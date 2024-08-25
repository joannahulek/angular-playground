import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

import {domainValidator} from "./domainValidator";

const blockedDomains = ['spam', '.bet'];

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, domainValidator(blockedDomains)]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)])
  })

  submitForm(){
    console.log(this.contactForm.value)
    console.log(this.contactForm.valid)
  }

}
