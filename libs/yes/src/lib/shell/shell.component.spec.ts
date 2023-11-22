import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';
import { ENV } from '@biodanza/yes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

describe('ShellComponent', () => {
    let component: ShellComponent;
    let fixture: ComponentFixture<ShellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ShellComponent],
            imports: [NoopAnimationsModule, MatToolbarModule, MatIconModule, MatListModule, MatSidenavModule],
            providers: [
                { provide: ENV, useValue: { } }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
