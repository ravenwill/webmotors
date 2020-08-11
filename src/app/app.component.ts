import { VersoesService } from './services/versoes/versoes.service';
import { ModelosService } from './services/modelos/modelos.service';
import { MarcasService } from './services/marcas/marcas.service';
import { Component, OnInit } from '@angular/core';
import { Marcas } from './models/marcas/marcas';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Modelos } from './models/modelos/modelos';
import { Versoes } from './models/versoes/versoes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'webmotors-teste';
  abaAtiva: number = 1;
  marcas: Marcas[] = [];
  modelos: Modelos[] = [];
  versoes: Versoes[] = [];
  loading: boolean = false;

  public formFiltro: FormGroup = new FormGroup({
    novos: new FormControl(false),
    usados: new FormControl(false),
    local: new FormControl(''),
    raio: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    ano: new FormControl(''),
    faixaPreco: new FormControl(''),
    versao: new FormControl(''),
  });

  constructor(
    private _marcasService: MarcasService,
    private _modelosService: ModelosService,
    private _versoesService: VersoesService
  ) {}

  ngOnInit() {
    this.carregaMarcas();
  }

  carregaMarcas() {
    this.loading = true;
    this._marcasService.listar().subscribe(
      (res: Marcas[]) => {
        this.marcas = res;
        this.loading = false;
      }
    );
  }

  carregaModelos() {
    this.loading = true;
    this._modelosService.listar(this.formFiltro.value.marca).subscribe(
      (res: Modelos[]) => {
        this.modelos = res;
        this.loading = false;
      }
    );
  }

  carregaVersoes() {
    this.loading = true;
    this._versoesService.listar(this.formFiltro.value.modelo).subscribe(
      (res: Versoes[]) => {
        this.versoes = res;
        this.loading = false;
      }
    );
  }

  alterouMarca() {
    if(this.formFiltro.value.marca != null  && this.formFiltro.value.marca != '') {
      this.carregaModelos();
    }
  }

  alterouModelo() {
    if(this.formFiltro.value.modelo != null  && this.formFiltro.value.modelo != '') {
      this.carregaVersoes();
    }
  }

  limparFiltro() {
    this.formFiltro.reset();
    this.formFiltro.patchValue({
      ano: '',
      faixaPreco: '',
    });
  }

}
