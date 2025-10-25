import { Injectable } from '@angular/core';
import { registerApplication, start, LifeCycles } from 'single-spa';

@Injectable({
  providedIn: 'root'
})
export class SingleSpaService {
  
  registerApps(): void {
    // Register App 1
    registerApplication({
      name: 'app1',
      app: () => (window as any).System.import('http://localhost:4201/main.js'),
      activeWhen: ['/app1']
    });

    // Register App 2
    registerApplication({
      name: 'app2',
      app: () => (window as any).System.import('http://localhost:4202/main.js'),
      activeWhen: ['/app2']
    });

    // Register App 3
    registerApplication({
      name: 'app3',
      app: () => (window as any).System.import('http://localhost:4203/main.js'),
      activeWhen: ['/app3']
    });
  }

  start(): void {
    start({
      urlRerouteOnly: true
    });
  }
}