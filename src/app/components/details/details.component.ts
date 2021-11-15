import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Deputado } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  deputadoRating = 0;
  deputadoId!: string;
  deputado!: Deputado;
  routeSub!: Subscription;
  deputadoSub!: Subscription;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.deputadoId = params['id'];
      this.getDeputadoDetails(this.deputadoId);
    })
  }

  getDeputadoDetails(id: string): void {
    this.deputadoSub = this.httpService
      .getDeputadoDetails(id)
      .subscribe((deputadoResp: Deputado) => {
        this.deputado = deputadoResp;
      });
  }

  getColor(value: number): string {
    if (value > 75) {
      return ('#5ee432')
    } else if (value > 50) {
      return '#fffa50'
    } else if (value > 30) {
      return '#f7aa38'
    } else {
      return '#ef4655'
    }
  }

  ngOnDestroy(): void {
    if (this.deputadoSub) {
      this.deputadoSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
