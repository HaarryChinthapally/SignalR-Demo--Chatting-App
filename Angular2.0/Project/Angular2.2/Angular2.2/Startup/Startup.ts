import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from '../Modules/MainModule';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);
