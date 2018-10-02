import { Component, OnInit } from '@angular/core';
import  {Formation}   from '../model/Formation';
import { FormationService } from '../services/FormationService';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css'], 
  providers: [
    FormationService
  ]
})
export class FormationListComponent implements OnInit {

  private formations:Formation[];
  
  constructor(private formationsService:FormationService) { }

  ngOnInit() {
    this.formationsService.getFormation().then(formations => this.formations = formations);
    this.formationsService.addFormation(new Formation('aaaaa', 'aaaaaaaaaa'));
  }

}
