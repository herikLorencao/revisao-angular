import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor = 0;
  destino = 0;

  @Output()
  transferir = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  realizarTransferencia() {
    console.log('Dados transferidos com sucesso');
    this.transferir.emit({ valor: this.valor, destino: this.destino });
    this.limparValores();
  }

  limparValores() {
    this.valor = 0;
    this.destino = 0;
  }
}
