import type { Meta, StoryObj } from '@storybook/angular';
import { ShellComponent } from './shell.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { moduleMetadata } from '@storybook/angular';
import { ENV } from '../environment/environment';
import { Environment } from '../environment/environment.type';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
      providers: [{ provide: ENV, useValue: { branchName: 'mock-branch' } as Environment }]
    })
  ]
};
export default meta;
type Story = StoryObj<ShellComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/shell works!/gi)).toBeTruthy();
  }
};
