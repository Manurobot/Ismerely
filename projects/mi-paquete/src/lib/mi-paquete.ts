import { Component } from '@angular/core';
import { LsmListadoComponent, LsmListadoItem } from './lsm-listado.component';
import { LsmVideoComponent } from './lsm-video.component';

interface ProductEntry extends LsmListadoItem {
  summary: string;
  benefits: string[];
  howToTake: string[];
  note?: string;
  videoUrl: string;
}

@Component({
  selector: 'lib-mi-paquete',
  standalone: true,
  imports: [LsmListadoComponent, LsmVideoComponent],
  template: `
    <main class="diccionario-layout">
      <section class="left-column">
        <lib-lsm-listado
          title="Productos Ismerely"
          logoUrl="/assets/img/logo2.jpg"
          [items]="entries"
          [selectedValue]="selectedWord"
          (selectedValueChange)="selectedWord = $event"
        />
      </section>

      <section class="right-column">
        <lib-lsm-video
          [word]="currentEntry.label"
          [videoUrl]="currentEntry.videoUrl"
          [summary]="currentEntry.summary"
          [benefits]="currentEntry.benefits"
          [howToTake]="currentEntry.howToTake"
          [note]="currentEntry.note ?? ''"
        />
      </section>
    </main>
  `,
  styles: `
    :host {
      --bg-start: #fff8ef;
      --bg-mid: #f6fbff;
      --bg-end: #eaf3ff;
      display: block;
      background:
        radial-gradient(circle at 85% 8%, rgba(255, 193, 68, 0.35), transparent 45%),
        radial-gradient(circle at 10% 90%, rgba(34, 146, 255, 0.2), transparent 34%),
        linear-gradient(145deg, var(--bg-start), var(--bg-mid) 48%, var(--bg-end));
      padding: 28px;
      box-sizing: border-box;
    }

    .diccionario-layout {
      display: grid;
      grid-template-columns: minmax(250px, 390px) 1fr;
      gap: 26px;
      align-items: start;
      max-width: 1440px;
      margin: 0 auto;
    }

    .left-column {
      min-width: 0;
    }

    .right-column {
      min-width: 0;
      background: rgba(255, 255, 255, 0.72);
      border: 1px solid rgba(40, 80, 130, 0.16);
      border-radius: 22px;
      padding: 18px;
      box-shadow: 0 20px 40px rgba(20, 55, 100, 0.14);
      backdrop-filter: blur(2px);
    }

    @media (max-width: 900px) {
      :host {
        padding: 14px;
      }

      .diccionario-layout {
        grid-template-columns: 1fr;
        gap: 14px;
      }
    }
  `,
})
export class MiPaquete {
  entries: ProductEntry[] = [
    {
      label: 'Revenue Juice',
      value: 'revenue-juice',
      summary:
        'Revenue Juice de Ismerely es un jugo funcional o suplemento en bebida para bienestar general.',
      benefits: [
        'Apoya la desintoxicacion del cuerpo.',
        'Ayuda a la digestion.',
        'Aporta energia y bienestar.',
        'Apoya el sistema inmunologico.',
      ],
      howToTake: [
        'Mezclar 1 sobre o medida en 250 a 500 ml de agua.',
        'Tomarlo una vez al dia, de preferencia por la manana.',
      ],
      videoUrl: '/assets/videos/Revenue.mp4',
    },
    {
      label: 'My Bion-Co',
      value: 'my-bion-co',
      summary:
        'My Bion-Co Ismerely es un suplemento nutricional para apoyar la salud integral del cuerpo.',
      benefits: [
        'Fortalece defensas del sistema inmunologico.',
        'Apoya energia y reduccion del cansancio.',
        'Favorece la salud digestiva.',
        'Aporta vitaminas, minerales y antioxidantes.',
        'Contribuye al bienestar general del organismo.',
      ],
      howToTake: [
        'Tomar 1 sobre o porcion al dia.',
        'Mezclar en agua o jugo.',
        'Se recomienda por la manana.',
      ],
      note: 'Nota importante: es suplemento, no sustituye medicamentos ni tratamientos medicos.',
      videoUrl: '/assets/videos/Bion‑Co.mp4',
    },
    {
      label: 'FT-Elym DTX Oxigen',
      value: 'ft-elym-dtx-oxigen',
      summary:
        'FT-Elym DTX Oxigen es un suplemento alimenticio para mezclar con agua y consumir como bebida.',
      benefits: [
        'Ayuda a oxigenar y limpiar el organismo.',
        'Apoya procesos de desintoxicacion.',
        'Fortalece el sistema inmunologico.',
        'Mejora digestion, energia y bienestar.',
        'Apoya pulmones, higado y rinones.',
        'Puede apoyar procesos de control de peso.',
      ],
      howToTake: [
        'Mezclar 1 cucharada o medida en 1 litro de agua.',
        'Tomarlo durante el dia como agua de uso.',
      ],
      note: 'Importante: es suplemento alimenticio, no es medicamento.',
      videoUrl: '/assets/videos/FT‑Elym.mp4',
    },
    {
      label: 'A-Coff Jarabe',
      value: 'a-coff-jarabe',
      summary:
        'A-Coff Jarabe Ismerely es un suplemento natural para apoyar vias respiratorias y garganta.',
      benefits: [
        'Auxiliar para tos y gripa.',
        'Ayuda a descongestionar vias respiratorias y nariz.',
        'Apoya sintomas respiratorios como bronquitis o asma.',
        'Ayuda a desinflamar garganta y anginas.',
        'Apoya sistema inmunologico.',
      ],
      howToTake: [
        '1 cucharada cada 4 horas, o',
        '1 a 2 cucharadas al dia, en ocasiones con te caliente.',
      ],
      note: 'Importante: es suplemento alimenticio, no es medicamento.',
      videoUrl: '/assets/videos/A-Coff.mp4',
    },
  ];

  selectedWord = this.entries[0].value;

  get currentEntry(): ProductEntry {
    return (
      this.entries.find((entry) => entry.value === this.selectedWord) ??
      this.entries[0]
    );
  }
}
