import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHeaderComponent, UiHeaderColor } from './ui-header.component';
import {Component} from "@angular/core";

@Component(({
  template:'<bdl-ui-header [color]="testColor">{{testContent}}</bdl-ui-header>'
}))
class TestHost{
  testColor : UiHeaderColor = 'primary';
  testContent = 'TEXT_CONTENT';
}

describe('UiHeaderComponent', () => {
  let hostComponent: TestHost;
  let hostFixture: ComponentFixture<TestHost>

  let component: UiHeaderComponent;
  let fixture: ComponentFixture<UiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHeaderComponent, TestHost ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiHeaderComponent);
    component = fixture.componentInstance;

    hostFixture = TestBed.createComponent(TestHost);
    hostComponent = hostFixture.componentInstance;

    fixture.detectChanges();
    hostFixture.detectChanges();
  });

  afterEach(async () => {
    fixture.autoDetectChanges(false);
    hostFixture.autoDetectChanges(false);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be danger color', () => {
    component.color = 'danger'
    fixture.detectChanges();

    let divElement:HTMLDivElement = fixture.nativeElement.querySelector('div');

    expect(divElement.classList.contains('bg-danger')).toBeTruthy();
  });

  it('should be primary color', () => {
    // given
      component.color = 'primary'

    // when
      fixture.detectChanges();

    // then
      let divElement:HTMLDivElement = fixture.nativeElement.querySelector('div');

      expect(divElement.classList.contains('bg-primary')).toBeTruthy();
  });

  it('should be secondary color', () => {
    component.color = 'secondary'
    fixture.detectChanges();

    let divElement:HTMLDivElement = fixture.nativeElement.querySelector('div');

    expect(divElement.classList.contains('bg-secondary')).toBeTruthy();
  });

  it('should be default color', () => {
    fixture.detectChanges();

    let divElement:HTMLDivElement = fixture.nativeElement.querySelector('div');

    expect(divElement.classList.contains('bg-secondary')).toBeTruthy();
  });

  it('should be primary color from TestHost', () => {
    let divElement:HTMLDivElement = hostFixture.nativeElement.querySelector('bdl-ui-header>div.bg-' + hostComponent.testColor);

    expect(divElement).toBeTruthy()
   expect(divElement.classList.contains('bg-' + hostComponent.testColor)).toBeTruthy();
  } );

  it('should have \'TEXT_CONTENT\' content  from TestHost', () => {
    let divElement:HTMLDivElement = hostFixture.nativeElement.querySelector('bdl-ui-header>div');

    expect(divElement?.innerText === hostComponent.testContent).toBeTruthy();
  });
});
