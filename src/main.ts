import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
declare let Zone: any;
try {
  // init zone
  Zone.__init__();
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;

      // Otherise, log the boot error
    })
    .catch(err => console.error(err));
} finally {
  Zone.__unloadAll_patch();
}
