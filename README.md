# eldeloscartuchos.com

Sitio de **El de los Cartuchos**: cartuchos, tóner, recargas, impresoras, computadoras y reparación.
Local en Col. El Olivo, Naucalpan (Edo. Méx.) y servicio a domicilio en CDMX Poniente y Centro.

Sitio estático (HTML, CSS y JS sin frameworks) publicado con GitHub Pages en el dominio de [CNAME](CNAME).

## Estructura

```
├── index.html               página única
├── CNAME                    dominio de GitHub Pages (no borrar)
├── favicon.ico              ícono 16/32/48 px en la raíz (navegadores y Google)
└── assets/
    ├── css/style.css        estilos y paleta
    ├── js/main.js           menú móvil, año del footer, estado "abierto/cerrado"
    └── img/
        ├── logo.svg         logo "C" del cliente, redibujado en vector a partir de su PNG
        ├── logo-letras.png  nombre + eslogan (PNG original del cliente)
        ├── logo-nombre.png  solo el nombre (se usa en pantallas angostas)
        ├── logo-512.png     logo cuadrado para Google (JSON-LD)
        ├── favicon.svg      ícono de pestaña (misma "C", lienzo cuadrado)
        ├── favicon-192.png  ícono PNG transparente (también fuente de /favicon.ico 16/32/48)
        ├── apple-touch-icon.png
        └── og-image.png     imagen al compartir el enlace (1200×630)
```

## Identidad

- **Paleta del cliente** (Adobe Color): cian `#1BAAC7`, magenta `#C71C63`, dorado `#C7B61C`, teal `#366872`, café `#47452E`.
  El texto blanco solo va sobre teal, magenta o café. El cian y el dorado se usan como acento o en texto grande.
- **Tipografías:** Anton (títulos), Atkinson Hyperlegible (texto), IBM Plex Mono (etiquetas).
- **Concepto:** hoja de prueba de impresión, con barra de control CMYK, marcas de registro, ticket de horario y patrón de inyectores en el footer.

## Datos del negocio que viven en el código

Si cambia algo, actualízalo en todos los lugares:

| Dato | Dónde |
|---|---|
| WhatsApp `5215525030663` | todos los enlaces `wa.me` de `index.html` |
| Horario L–V 9:00–18:00 | ticket del hero, sección "El local", footer, JSON-LD y `OPEN`/`CLOSE` en `main.js` |
| Dirección y coordenadas | sección "El local", ticket, footer y JSON-LD |

## Desarrollo

```bash
python3 -m http.server 8000   # y abre http://localhost:8000
```

Se trabaja en `desarrollo` y se publica a producción con un PR a `main`.
