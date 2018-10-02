import { TestBed, inject } from '@angular/core/testing';
import { FormationService } from './formationService';
import {Formation} from '../model/Formation';
import {FormationApi} from './formationApi';

describe('FormationService', () => {
  beforeEach(() => {
    const apiFormation = new FormationApi();
    spyOn(apiFormation, 'addFormation').and.callThrough();
    TestBed.configureTestingModule({
        providers: [
            { 
                provide: FormationApi, useValue: apiFormation 
            },
            FormationService
        ]
    });
  });

  it('should be created', inject([FormationService], (service: FormationService) => {
    expect(service).toBeTruthy();
  }));

  it('should add a new formation with empty list',
        inject([FormationService, FormationApi], (service: FormationService, api: FormationApi) => {
            const formation: Formation = new Formation('test', 'description');
            service.addFormation(formation);
            expect(service.getFormations()).toContain(formation);
            // expect(api.addFormation).toHaveBeenCalledWith(formation);
        }
    ));

    it('should not delete on an empty list',
        inject([FormationService, FormationApi], (service: FormationService, api: FormationApi) => {
            const formation: Formation = new Formation('test', 'description');
            service.deleteFormation(formation);
            expect(service.getFormations()).toEqual([]);
        }
    ));

    it('should delete nothing on a list that not contains formation',
        inject([FormationService, FormationApi], (service: FormationService, api: FormationApi) => {
            service.addFormation(new Formation('testA', 'descA'));
            service.addFormation(new Formation('testB', 'descB'));
            service.addFormation(new Formation('testC', 'descC'));
            
            const formation: Formation = new Formation('test', 'description');
            
            service.deleteFormation(formation);
            expect(service.getFormations().length).toEqual(3);
            expect(service.getFormations().indexOf(formation)).toEqual(-1);
        }
    ));
    it('should be deleted',
        inject([FormationService, FormationApi], (service: FormationService, api: FormationApi) => {
            service.addFormation(new Formation('testA', 'descA'));
            service.addFormation(new Formation('testB', 'descB'));
            service.addFormation(new Formation('testC', 'descC'));
            const formation: Formation = new Formation('test', 'description');
            service.addFormation(formation);

            service.deleteFormation(formation);
            expect(service.getFormations().length).toEqual(3);
            expect(service.getFormations().indexOf(formation)).toEqual(-1);
        }
    ));
    
    //EMPTY LIST
    it('should not update on an empty list',
        inject([FormationService, FormationApi], (service: FormationService, api:FormationApi) => {
            const formation: Formation = new Formation('test', 'description');
            service.updateFormation(formation, '', '');
            expect(service.getFormations()).toEqual([]);
        }
    ));

     //UPDATE on unexisting object
    it('should not update with an inexisting object',
        inject([FormationService, FormationApi], (service: FormationService, api:FormationApi) => {
            service.addFormation(new Formation('testA', 'descA'));
            service.addFormation(new Formation('testB', 'descB'));
            service.addFormation(new Formation('testC', 'descC'));
            const formation: Formation = new Formation('test', 'description');

            service.updateFormation(formation, '', '');

            expect(service.getFormations()[0].name).toEqual('testA');
            expect(service.getFormations()[0].description).toEqual('descA');

            expect(service.getFormations()[1].name).toEqual('testB');
            expect(service.getFormations()[1].description).toEqual('descB');

            expect(service.getFormations()[2].name).toEqual('testC');
            expect(service.getFormations()[2].description).toEqual('descC');
        }
    ));

    //UPDATE on undefined field
    it('should not update with an unknow field',
      inject([FormationService, FormationApi], (service: FormationService, api:FormationApi) => {
            service.addFormation(new Formation('testA', 'descA'));
            service.addFormation(new Formation('testB', 'descB'));
            service.addFormation(new Formation('testC', 'descC'));
            const formation: Formation = new Formation('test', 'description');
            service.addFormation(formation);

            service.updateFormation(formation, 'unknow', 'value');

            expect(service.getFormations()[3].name).toEqual('test');
            expect(service.getFormations()[3].description).toEqual('description');
        }
    ));

    //UPDATE should works
    it('should be updated',
    inject([FormationService, FormationApi], (service: FormationService, api:FormationApi) => {
          service.addFormation(new Formation('testA', 'descA'));
          service.addFormation(new Formation('testB', 'descB'));
          service.addFormation(new Formation('testC', 'descC'));
          const formation: Formation = new Formation('test', 'description');
          service.addFormation(formation);

          service.updateFormation(formation, 'name', 'newTest');
          service.updateFormation(formation, 'description', 'newDescription');

          expect(service.getFormations()[3].name).toEqual('newTest');
          expect(service.getFormations()[3].description).toEqual('newDescription');
      }
  ));
    
});
