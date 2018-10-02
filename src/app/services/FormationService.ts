import {Formation}  from '../model/Formation';
import {FormationApi} from "./FormationApi";
import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class FormationService{

    constructor(private formationApi:FormationApi){};

    getFormation(): Promise<Array<Formation>> {
        return this.formationApi.fetchFormation();
    }
      
    addFormation(formation: Formation) {
        this.formationApi.addFormation(formation);
    }

    getFormations() {
        return this.formationApi.formations;
    }

    deleteFormation(formation: Formation){
        this.formationApi.deleteFormation(formation);
    }

    updateFormation(oldFormation:Formation, field:string, value:string){
        this.formationApi.updateFormation(oldFormation, field, value);
    }
}