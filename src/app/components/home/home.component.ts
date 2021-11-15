import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Deputado } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort!: string;
  public deputados!: Array<Deputado>;
  public routeSub!: Subscription;
  public deputadoSub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['deputado-search']) {
        this.searchDeputados('metacritic', params['deputado-search']);
      } else {
        this.searchDeputados('metacritic');
      }
    })
  }

  searchDeputados(sort: string, search?: string): void {
    this.deputadoSub = this.httpService
      .getDeputadoList(sort, search)
      .subscribe((deputadoList: APIResponse<Deputado>) => {
        this.deputados = deputadoList.results;
        console.log(deputadoList)
      });
  }

  openDeputadoDetails(id: string): void {
    this.router.navigate(['details', id])
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
