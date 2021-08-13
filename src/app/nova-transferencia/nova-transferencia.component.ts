import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor = 0;
  destino = 0;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  realizarTransferencia() {
    console.log('Dados transferidos com sucesso');
    this.service
      .adicionar({ valor: this.valor, destino: this.destino })
      .subscribe(
        () => this.router.navigateByUrl('extrato'),
        (error) => console.error(error)
      );
  }

  limparValores() {
    this.valor = 0;
    this.destino = 0;
  }
}
