import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './logo.component';

const meta: Meta<LogoComponent> = {
  component: LogoComponent,
  title: 'LogoComponent',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule]
    })
  ]
};
export default meta;
type Story = StoryObj<LogoComponent>;

export const Default: Story = {
  args: {
    widthInRem: 40
  }
};
