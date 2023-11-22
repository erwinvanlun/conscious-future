import { InjectionToken } from '@angular/core';
import { Environment } from './environment.type';

export const ENV: InjectionToken<Environment> = new InjectionToken('Environment objects as an injectable token');
