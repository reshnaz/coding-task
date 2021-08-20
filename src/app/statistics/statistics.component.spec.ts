import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Pipe, PipeTransform} from '@angular/core';
import { StatisticsComponent } from './statistics.component';
import { By } from '@angular/platform-browser';

@Pipe({name: 'translate'})
class Translate implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsComponent, Translate ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
