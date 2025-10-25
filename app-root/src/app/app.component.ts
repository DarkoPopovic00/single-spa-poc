import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { SingleSpaService } from './single-spa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'root-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private singleSpaService: SingleSpaService,
    private router: Router
  ) {}

  ngOnInit(): void {
      (window as any).authService = this.authService;

    // Subscribe to auth state
    // this.authService.user$.subscribe(user => {
      this.isAuthenticated = true;
      // this.isAuthenticated = user !== null && !user.expired;
      
      if (this.isAuthenticated) {
        // Register and start single-spa apps
        this.singleSpaService.registerApps();
        this.singleSpaService.start();
      }
    // });

    // Check if we're on the callback route
    if (window.location.pathname === '/callback') {
      this.authService.handleCallback().then(() => {
        this.router.navigate(['/app1']);
      });
    } else if (!this.isAuthenticated) {
      this.authService.login();
    }
  }

  logout(): void {
    this.authService.logout();
  }}
