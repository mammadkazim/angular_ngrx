import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input('validationErrors') validationErrorsProps: BackendErrorsInterface
  errorMessages: string[] 
  constructor(){}
  ngOnInit(): void {
    this.errorMessages= Object.keys(this.validationErrorsProps).map((name:string)=>{
      const messages = this.validationErrorsProps[name].join("")
      return `${name} ${messages}`
    })
  }
}
