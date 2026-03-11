import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="hero-video-wrap">
      <video class="hero-video" controls autoplay muted loop playsinline>
        <source src="/assets/videos/LSM_inicio.mp4" type="video/mp4" />
      </video>
    </section>
  `,
  styles: `
    .hero-video-wrap {
      border-radius: 20px;
      overflow: hidden;
      background: #0a1020;
      border: 1px solid #203255;
      box-shadow: 0 18px 40px rgba(8, 20, 42, 0.35);
    }

    .hero-video {
      display: block;
      width: 100%;
      height: min(76vh, 860px);
      object-fit: cover;
      background: #000;
    }
  `,
})
export class HomePageComponent {}
