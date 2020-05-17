import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatListPage } from './cat-list.page';

describe('CatListPage', () => {
  let component: CatListPage;
  let fixture: ComponentFixture<CatListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
