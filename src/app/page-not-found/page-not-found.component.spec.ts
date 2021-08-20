import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Pipe, PipeTransform} from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';


@Pipe({name: 'translate'})
class Translate implements PipeTransform {
    transform(value: string): string {
        return value;
    }
}

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent, Translate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
