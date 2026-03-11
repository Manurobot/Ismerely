import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'lib-lsm-video',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="video-card">
      <h3>{{ word }}</h3>

      <ng-container *ngIf="isEmbedUrl; else localVideo">
        <iframe
          class="video-frame"
          width="100%"
          height="470"
          [src]="safeVideoUrl"
          title="Video de producto"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </ng-container>

      <ng-template #localVideo>
        <video class="video-frame local-video" controls [src]="videoUrl"></video>
      </ng-template>

      <p class="summary">{{ summary }}</p>

      <section class="info" *ngIf="benefits.length">
        <h4>Para que sirve</h4>
        <ul>
          <li *ngFor="let benefit of benefits">{{ benefit }}</li>
        </ul>
      </section>

      <section class="info" *ngIf="howToTake.length">
        <h4>Como se toma</h4>
        <ul>
          <li *ngFor="let item of howToTake">{{ item }}</li>
        </ul>
      </section>

      <p class="note" *ngIf="note">{{ note }}</p>
    </section>
  `,
  styles: `
    .video-card {
      font-family: 'Trebuchet MS', 'Gill Sans', 'Lucida Sans Unicode', sans-serif;
      color: #132744;
      animation: reveal 320ms ease-out;
    }

    h3 {
      margin: 2px 0 14px;
      font-size: 56px;
      line-height: 0.98;
      color: #132744;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .video-frame {
      border: 12px solid #14263f;
      border-left-width: 0;
      border-right-width: 0;
      background: #08111f;
      display: block;
      width: 100%;
      height: 430px;
      border-radius: 12px;
      box-shadow: 0 18px 36px rgba(7, 25, 56, 0.32);
    }

    .local-video {
      object-fit: cover;
    }

    .summary {
      margin: 16px 0;
      font-size: 24px;
      line-height: 1.35;
      color: #2b405e;
    }

    .info {
      margin-top: 14px;
      background: linear-gradient(160deg, #ffffff, #f5f9ff);
      border: 1px solid #d6e3f6;
      border-radius: 14px;
      padding: 14px;
    }

    .info h4 {
      margin: 0 0 6px;
      font-size: 28px;
      color: #143965;
    }

    .info ul {
      margin: 0;
      padding-left: 28px;
      color: #9a6200;
      font-size: 22px;
      line-height: 1.3;
    }

    .note {
      margin: 14px 0 0;
      font-size: 20px;
      color: #2f4e73;
      line-height: 1.2;
      border-left: 4px solid #f5aa1f;
      padding-left: 10px;
    }

    @keyframes reveal {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 900px) {
      h3 {
        font-size: 38px;
      }

      .video-frame {
        height: 240px;
      }

      .summary,
      .info h4,
      .info ul,
      .note {
        font-size: 20px;
      }
    }
  `,
})
export class LsmVideoComponent implements OnChanges {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() word = 'abeja';
  @Input() videoUrl = 'https://www.youtube.com/embed/D_wf6M8Vj2k';
  @Input() summary = '';
  @Input() benefits: string[] = [];
  @Input() howToTake: string[] = [];
  @Input() note = '';

  safeVideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  isEmbedUrl = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoUrl']) {
      this.isEmbedUrl = this.videoUrl.includes('youtube.com/embed');
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    }
  }
}
