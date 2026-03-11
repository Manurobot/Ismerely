import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface LsmListadoItem {
  label: string;
  value: string;
}

@Component({
  selector: 'lib-lsm-listado',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="listado">
      <div class="brand-card">
        @if (logoUrl) {
          <img class="brand-logo" [src]="logoUrl" alt="Logo Ismerely" />
        }
        <h2>{{ title }}</h2>
        <p class="subtitle">Selecciona un producto para ver video y detalles.</p>
      </div>

      <label class="search-label" for="busqueda">Buscar producto</label>
      <input
        id="busqueda"
        class="search"
        type="text"
        [value]="query"
        (input)="onQueryChange($event)"
        placeholder="Escribe para filtrar..."
      />

      <ul>
        @for (item of filteredItems; track item.value) {
          <li [class.selected]="item.value === selectedValue">
            <button
              type="button"
              (click)="selectItem(item.value)"
              [attr.aria-pressed]="item.value === selectedValue"
            >
              {{ item.label }}
            </button>
          </li>
        }
      </ul>
    </aside>
  `,
  styles: `
    .listado {
      font-family: 'Trebuchet MS', 'Gill Sans', 'Lucida Sans Unicode', sans-serif;
      color: #10223b;
    }

    .brand-card {
      background: linear-gradient(155deg, #fff7ea 0%, #ffe8b6 60%, #ffdfa0 100%);
      border: 1px solid #f0c573;
      border-radius: 18px;
      padding: 12px;
      margin-bottom: 14px;
      box-shadow: 0 14px 30px rgba(77, 47, 8, 0.18);
    }

    .brand-logo {
      width: 100%;
      border-radius: 12px;
      margin-bottom: 10px;
      display: block;
      object-fit: cover;
      max-height: 140px;
    }

    h2 {
      margin: 0;
      color: #1a2a45;
      font-weight: 700;
      font-size: 42px;
      line-height: 1.1;
    }

    .subtitle {
      margin: 8px 0 0;
      font-size: 18px;
      color: #4c607f;
      line-height: 1.3;
    }

    .search-label {
      display: block;
      font-size: 16px;
      color: #516684;
      margin-bottom: 6px;
    }

    .search {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 12px;
      border: 1px solid #b9c6d7;
      border-radius: 12px;
      padding: 12px 14px;
      font-size: 18px;
      color: #243752;
      background: #f8fbff;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .search:focus {
      border-color: #f6a21a;
      box-shadow: 0 0 0 3px rgba(246, 162, 26, 0.2);
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 28px;
      line-height: 1.3;
      color: #c37a00;
      max-height: 500px;
      overflow: auto;
      display: grid;
      gap: 6px;
      padding-right: 2px;
    }

    li button {
      cursor: pointer;
      width: 100%;
      border: 0;
      background: transparent;
      color: inherit;
      font: inherit;
      padding: 8px 10px;
      text-align: left;
      border-radius: 10px;
      transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
    }

    li button:hover,
    li.selected button {
      color: #8d5800;
      background: rgba(252, 189, 72, 0.22);
      transform: translateX(3px);
      text-decoration: none;
    }

    @media (max-width: 900px) {
      h2 {
        font-size: 30px;
      }

      .search {
        font-size: 16px;
      }

      ul {
        font-size: 23px;
        max-height: 320px;
      }
    }
  `,
})
export class LsmListadoComponent {
  @Input() title = 'Lengua de Senas Mexicana';
  @Input() logoUrl = '';
  @Input() items: LsmListadoItem[] = [];
  @Input() selectedValue = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  query = '';

  get filteredItems(): LsmListadoItem[] {
    const normalized = this.query.trim().toLowerCase();
    if (!normalized) {
      return this.items;
    }

    return this.items.filter((item) => item.label.toLowerCase().includes(normalized));
  }

  onQueryChange(event: Event): void {
    const element = event.target as HTMLInputElement | null;
    this.query = element?.value ?? '';
  }

  selectItem(value: string): void {
    this.selectedValueChange.emit(value);
  }
}
