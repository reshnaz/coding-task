import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Pipe, PipeTransform} from '@angular/core';
import { HomeComponent } from './home.component';

@Pipe({name: 'translate'})
class Translate implements PipeTransform {
    transform(value: string): string {
        return value;
    }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, Translate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
