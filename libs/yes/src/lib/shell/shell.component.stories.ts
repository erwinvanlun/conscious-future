import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ShellComponent } from './shell.component';
import { ENV } from '../environment/environment';
import { Environment } from '../environment/environment.type';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from '../logo/logo.component';

const meta: Meta<ShellComponent> = {
  component: ShellComponent,
  title: 'ShellComponent',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatLineModule,
        MatButtonModule,
        MatSidenavModule
      ],
      declarations: [LogoComponent],
      providers: [{ provide: ENV, useValue: { branchName: 'mock-branch' } as Environment }]
    })
  ]
};
export default meta;
type Story = StoryObj<ShellComponent>;

export const Default: Story = {
  args: {}
};
