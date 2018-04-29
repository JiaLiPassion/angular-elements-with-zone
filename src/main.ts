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
  // unload all monkey-patch, so Window/Global API will be
  // reverted to native one. No impact to outside world.
  Zone.__unloadAll_patch();
}
