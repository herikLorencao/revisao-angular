import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor = 0;
  destino = 0;

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {}

  realizarTransferencia() {
    console.log('Dados transferidos com sucesso');
    this.service
      .adicionar({ valor: this.valor, destino: this.destino })
      .subscribe(
        () => this.limparValores(),
        (error) => console.error(error)
      );
  }

  limparValores() {
    this.valor = 0;
    this.destino = 0;
  }
}
