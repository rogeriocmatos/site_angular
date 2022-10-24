import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let dados = `
      Nome: ${form.value.name}
      Email: ${form.value.email}
      Subject: ${form.value.subject}
      Message: ${form.value.message}
    `;

    console.log(dados);
  }

}
