import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', Validators.required),
    senderMessage: new FormControl('', Validators.required)
  })

  submitForm(){
    console.log(this.contactForm.value)
    console.log(this.contactForm.valid)
  }

}
