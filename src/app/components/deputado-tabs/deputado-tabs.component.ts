import { Component, Input, OnInit } from '@angular/core';
import { Deputado } from 'src/app/models';

@Component({
  selector: 'app-deputado-tabs',
  templateUrl: './deputado-tabs.component.html',
  styleUrls: ['./deputado-tabs.component.scss']
})
export class DeputadoTabsComponent implements OnInit {
  @Input() deputado!: Deputado;
  constructor() { }

  ngOnInit(): void {
  }

}
