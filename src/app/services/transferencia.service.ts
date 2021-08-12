import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias = <any>[];
  private readonly url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}

  adicionar(transferencia: any) {
    const transferenciaComData = this.inserirDataTransferencia(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferenciaComData);
  }

  inserirDataTransferencia(transferencia: any) {
    return { ...transferencia, data: new Date() };
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  listarTransferencias() {
    return this.httpClient.get<Transferencia>(this.url);
  }
}
