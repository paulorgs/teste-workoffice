import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DogListPage } from './dog-list.page';

describe('DogListPage', () => {
  let component: DogListPage;
  let fixture: ComponentFixture<DogListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DogListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
