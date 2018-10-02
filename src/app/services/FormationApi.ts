
import { Injectable } from "@angular/core";
import { Formation } from "../model/Formation";

@Injectable({
    providedIn: 'root'
})
export class FormationApi{
    public formations:Formation[] = [];

    fetchFormation():Promise<Array<Formation>> {
        return new Promise((resolve)=> {
            setTimeout(()=> {
                resolve([
                new Formation('Module Angular'),
                new Formation('Module JavaScript'),
                new Formation('Module TypeScript'),
                ])
            }, 2000);
        });
    }

    addFormation(formation:Formation){ 
        this.formations.push(formation);
    }

    deleteFormation(formation:Formation){
        if(this.formations.length !== 0){
            const index = this.formations.indexOf(formation);
            if(index != -1){
                this.formations.splice(index, 1);
            }
        }
    }

    updateFormation(oldFormation:Formation, field:string, value:string){
        if(this.formations.length !== 0){
            const index = this.formations.indexOf(oldFormation);
            if(index != -1){
                if(field === 'name'){
                    this.formations[index].name = value;
                }else if(field === 'description'){
                    this.formations[index].description = value;
                }
            }
        }
    }
}