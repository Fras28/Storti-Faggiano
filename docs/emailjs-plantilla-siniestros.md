# Plantilla de EmailJS — Denuncia de Siniestros

El código (`src/pages/DenunciaSiniestro.jsx`) ahora arma el correo **completo** en HTML y lo manda
en la variable `message_html`, junto con todos los campos sueltos y los links de Cloudinary.
Para que el correo llegue completo y con las fotos clickeables, la plantilla de EmailJS solo
tiene que **renderizar ese HTML**.

## Pasos en el panel (https://dashboard.emailjs.com/admin)

1. Entrá a **Email Templates** y abrí la plantilla de siniestros
   (la que corresponde al ID `VITE_EMAILJS_TEMPLATE_SINIESTROS` de tu `.env`).
2. Configurá los campos de cabecera:

   | Campo | Valor |
   |---|---|
   | **Subject** | `Nueva denuncia de siniestro — {{compania}} — {{cliente_nombre}}` |
   | **To Email** | el correo de la empresa donde quieren recibir las denuncias |
   | **From Name** | `Web Storti & Faggiano` |
   | **Reply To** | `{{reply_to}}` *(así "Responder" le contesta directo al cliente)* |

3. En el **cuerpo/contenido** del email, borrá lo que haya y pegá **solo** esto:

   ```
   {{{message_html}}}
   ```

   > ⚠️ **Importante: son TRES llaves `{{{ }}}`, no dos.**
   > Con dos llaves (`{{message_html}}`) EmailJS "escapa" el HTML y verías las etiquetas
   > como texto. Con tres llaves lo renderiza como HTML de verdad.
   >
   > Si el editor de EmailJS está en modo visual y no te deja pegar las tres llaves,
   > cambiá a la vista de **código/HTML** (`<>`) y pegalo ahí.

4. **Guardá** la plantilla y mandá una denuncia de prueba desde la web.

Con eso el correo llega con: datos del siniestro, titular, vehículo, conductor, tercero
(si hubo) y **los links de Cloudinary de cada foto, clickeables**.

---

## Variables que envía el código (por si preferís armar la plantilla campo por campo)

El HTML de `message_html` ya incluye todo, pero si en algún momento querés diseñar la
plantilla a mano, estas son todas las variables disponibles:

**Siniestro:** `{{compania}}`, `{{descripcion}}`, `{{heridos}}`, `{{ambulancia}}`,
`{{fecha_siniestro}}`, `{{hora_siniestro}}`, `{{direccion}}`, `{{entre_calles}}`, `{{ciudad}}`

**Titular:** `{{cliente_nombre}}`, `{{cliente_dni}}`, `{{cliente_telefono}}`, `{{cliente_email}}`

**Vehículo asegurado:** `{{patente}}`, `{{marca}}`, `{{modelo}}`, `{{anio}}`

**Conductor:** `{{titular_es_conductor}}`, `{{conductor_nombre}}`, `{{conductor_dni}}`, `{{conductor_telefono}}`

**Tercero:** `{{involucra_tercero}}`, `{{tercero_nombre}}`, `{{tercero_dni}}`, `{{tercero_telefono}}`,
`{{tercero_email}}`, `{{tercero_aseguradora}}`, `{{tercero_patente}}`, `{{tercero_marca}}`,
`{{tercero_modelo}}`, `{{tercero_anio}}`

**Fotos (Cloudinary):**
- `{{photo_links}}` — texto plano (una URL por línea, agrupadas por categoría)
- `{{{photo_links_html}}}` — links clickeables en HTML *(recordá las tres llaves)*

**Otros:** `{{reply_to}}` — email del cliente para el "Responder"
