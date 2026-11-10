# Datos operativos extraídos de los Excel

> **Fuentes:** `agenda spt oct nov dic 2026.xlsx` y `OCTUBRE KINTSUGI 2026.xlsx`
> (libros entregados por el cliente).
> **Método:** lectura con `openpyxl` de valores, fórmulas, celdas combinadas, formatos y
> **colores de relleno**. El detalle celda a celda y los nombres de clientes se guardan solo en
> `_local/analysis/` (fuera del repositorio) por privacidad.
> **Fecha del análisis:** 9 de noviembre de 2026.
>
> Este documento reemplaza los supuestos de servicios, precios, horarios y comisiones que
> estaban pendientes en [`RESPUESTAS-CLIENTE.md`](../discovery/RESPUESTAS-CLIENTE.md).

## 1. Resumen ejecutivo

| Hallazgo | Dato |
|---|---|
| Catálogo de servicios | **72 conceptos** de precio en 7 áreas: cabello, manicura y pedicura, adicionales de uñas, cejas y pestañas, depilación, maquillaje y promociones. |
| Tipos de precio | **Fijo**, **desde** y **rango** (rango por uña o por diseño). |
| Agenda | 5 columnas por día (una por profesional), franjas de **06:00 a 19:00**; las citas reales se mueven entre **08:00 y 19:00**. |
| Profesionales | **NICO, MARCE, LAURA y DANNA** en la operación de octubre; **YULIANA** aparece en octubre/noviembre y **ELIANA** en septiembre, sin citas registradas. |
| Descanso | El **relleno negro** marca horas no disponibles: columna completa negra = día libre; negro parcial = horario reducido o festivo. |
| Patrón de descanso | NICO jueves y domingo; MARCE martes y domingo; LAURA miércoles, viernes y domingo; DANNA domingo y lunes. |
| Comisión | **55 %** para el profesional y **45 %** para el estudio en todas las líneas de octubre. El **60 %** por implementos propios no aparece aplicado en el libro. |
| Liquidación | Semanal, con **anticipos**, **auxilio de transporte de $7.100/día**, **gastos de tintes** y bonificaciones. |
| Octubre 2026 | **$10.593.500** en ventas, **$5.826.425** en comisiones, **$4.016.252** neto pagado tras anticipos y **$298.200** de transporte. |
| Ticket promedio | **$60.882** sobre 175 líneas de servicio registradas. |
| Meta diaria | **$645.800** por día (dato del libro de liquidación). |
| Gastos del mes | **$2.448.012** en gastos y **$633.300** en productos (hoja `CONTROL`, rotulada “septiembre”). |

## 2. Inventario de los libros

### 2.1 `agenda spt oct nov dic 2026.xlsx`

| Hoja | Filas | Columnas | Contenido |
|---|---:|---:|---|
| `SEPTIEMBRE 2026` | 138 | 37 | Agenda de septiembre: 5 días por banda, 5 profesionales por día. |
| `OCTUBRE 2026` | 151 | 36 | Agenda de octubre. |
| `NOVIEMBRE 2026` | 116 | 36 | Agenda de noviembre (parcial). |
| `DICIEMBRE 2026` | 116 | 34 | Agenda de diciembre (casi vacía). |
| `LUMARAK` | 42 | 13 | Costos y proveedores de **otro emprendimiento** (polos, delantales, sillas, estampado). **No pertenece a Kintsugi**; se excluye del alcance. |
| `PRECIOS KINTSUGI` | 42 | 21 | Catálogo completo de servicios y precios. |

### 2.2 `OCTUBRE KINTSUGI 2026.xlsx`

| Hoja | Filas | Columnas | Contenido |
|---|---:|---:|---|
| `NICOLLE` | 65 | 23 | Liquidación semanal de Nico (4 semanas). |
| `MARCELA` | 131 | 16 | Liquidación semanal de Marce (4 semanas) + costos de tintes. |
| `LAURA` | 51 | 22 | Liquidación semanal de Laura (4 semanas). |
| `DANNA` | 51 | 21 | Liquidación semanal de Danna (4 semanas). |
| `CONTROL` | 37 | 11 | Gastos, productos, transporte y resumen de ventas. |
| `LIQUIDACION` | 42 | 11 | Resumen mensual: venta, 55 % profesional, 45 % estudio, gastos y margen. |

## 3. Catálogo de servicios y precios

### 3.1 Reglas de precio que se desprenden de la hoja

1. **Precio fijo:** se cobra tal cual (ej. corte estructural $45.000).
2. **Precio “desde”:** es un mínimo; el valor final depende del largo, densidad, estado del
   cabello o diseño (ej. balayage desde $270.000).
3. **Rango por uña o por diseño:** adicionales de uñas (pedrería, relieves, arte 3D, etc.).
4. **Retiros:** se cobran aparte y no están incluidos en las promociones.
5. **Decoración básica incluida:** varios procesos incluyen una decoración sencilla; los
   diseños complejos se cobran como adicional.
6. **Promoción de martes 2x1:** no incluye retiros.
7. **Promoción de cabello:** a partir de $250.000, maquillaje gratis.

### 3.2 Cabello

| Servicio | Tipo | Precio | Notas |
|---|---|---:|---|
| SHAMPOO STANDAR | fijo | $5.000 | 2 SH + acondicionador |
| CEPILLADO (SIN SHAMPOO) | desde | Desde $22.000 | Trayendo el cabello limpio |
| SHAAMPOO PROFESIONAL | fijo | $8.000 | 3 shampoos + mascarilla |
| BALAYAGE | desde | Desde $270.000 | — |
| CORTE O DESPUNTE SIN SHAMPOO (NO ESTRUCTURAL) | fijo | $20.000 | — |
| CORRECCIÓN DE COLOR | desde | Desde $290.000 | — |
| CORTE ESTRUCTURAL | fijo | $45.000 | Shampoo + acondicionador + corte + cepillado |
| MONTAJE EXPRESS | desde | Desde $160.000 | Solo mechas + shampoo profesional + mascarilla + cepillado |
| CORTE BORDADO | fijo | $65.000 | Shampoo profesional + acondicionador + cepillado + planchado + corte bordado |
| TONO PLANO | desde | Desde $130.000 | Cubre canas o tinte plano + shampoo + mascarilla + corte o despunte + cepillado |
| REPOLARIZACIÓN BYSPRO | fijo | $60.000 | Shampoo profesional + cóctel BySpro + vaporozono + cepillado |
| APLICACIÓN DE TINTE | desde | Desde $45.000 | Tinte traído por la clienta + shampoo profesional + sellado técnico |
| HIDRATACIÓN DELUXE | desde | Desde $80.000 | Exfoliación capilar + shampoo + mascarilla |
| REFRESH DE COLOR CON MATIZANTE | fijo | $20.000 | Shampoo profesional + matizante + mascarilla |
| ENSAMBLE PROTEÍNICO BTX | desde | Desde $150.000 | Shampoo Recamier paso 1 + BTX + paso 3 Recamier |
| REFRESH DE COLOR CON TINTE | fijo | $35.000 | Shampoo profesional + tinte + mascarilla |
| ALISADO PROGRESIVO | desde | Desde $150.000 | Shampoo Recamier paso 1 + keratina + paso 3 |
| PEINADO QUINCEAÑERA / NOVIA | desde | Desde $150.000 | — |
| PAQUETE QUINCE / NOVIA (MAQUILLAJE + PEINADO) | desde | Desde $280.000 | — |
| PAQUETE INVITADAS (MAQUILLAJE + PEINADO) | desde | Desde $170.000 | — |
| A PARTIR DE $250.000, MAQUILLAJE GRATIS | promo | $250.000 | Promoción de cabello |

### 3.3 Manicura y pedicura

| Servicio | Tipo | Precio |
|---|---|---:|
| CAMBIO DE ESMALTE TRADICIONAL | fijo | $10.000 |
| SEMIPERMANENTE | desde | Desde $45.000 |
| CAMBIO DE ESMALTE SECADO RÁPIDO | fijo | $13.000 |
| PEDICURA SEMIPERMANENTE | desde | Desde $48.000 |
| MANICURA TRADICIONAL BÁSICA | fijo | $20.000 |
| BAÑO DE RUBBER-DIPPING | desde | Desde $57.000 |
| MANICURA TRADICIONAL GEL EVOLUTION | fijo | $24.000 |
| RETOQUE SISTEMAS | desde | Desde $68.000 |
| LIMPIEZA BÁSICA MANOS | fijo | $14.000 |
| KAPPING POLIGEL-ACRÍLICO | desde | Desde $70.000 |
| LIMPIEZA BÁSICA DE PIES | fijo | $20.000 |
| SOFT GEL | desde | Desde $88.000 |
| PEDICURA GEL EVOLUTION | fijo | $27.000 |
| TIPS POLIGEL-ACRÍLICO HASTA LARGO #2 | desde | Desde $90.000 |
| MANICURA DE HOMBRE TRADICIONAL | fijo | $19.000 |
| ACRI-PIES | desde | Desde $90.000 |
| ESCULPIDAS POLIGEL-ACRÍLICO HASTA LARGO #2 | desde | Desde $100.000 |
| SEMIPERMANENTE DE HOMBRE | fijo | $35.000 |

### 3.4 Adicionales de uñas

| Servicio | Tipo | Precio | Notas |
|---|---|---:|---|
| RETIRO SISTEMA KINTSUGI | rango | $20.000 | Si se aplica un nuevo sistema a partir de semipermanente, cuesta $15.000 |
| RETIRO SISTEMA OTRO LUGAR | rango | $25.000 | Si se aplica un nuevo sistema a partir de semipermanente, cuesta $20.000 |
| RETIRO SEMIPERMANENTE | rango | $7.000 | — |
| EXTRA POR LARGO DE SISTEMAS | rango | $7.000 por uña | — |
| REPARACIÓN POR UÑA | rango | $3.000 por uña | — |
| ALARGAMIENTO POR UÑA, LARGO #3 EN ADELANTE | rango | $7.000 por uña | — |
| CHARMS | rango | $2.000–$7.000 por uña | Valor por cada uña |
| PEDRERÍA | rango | $1.000–$15.000 por uña | Depende del diseño; la decoración básica está incluida |
| DECORACIÓN ABSTRACTA | rango | $5.000–$10.000 por uña | Todos los procesos incluyen una decoración sencilla |
| RELIEVES | rango | $2.000–$15.000 por uña | Francés sin texturas, en tono plano |
| ARTE 3D | rango | $5.000–$30.000 por uña | Tono plano |
| EFECTO ESPEJO | rango | $1.000–$3.000 por uña | Una uña decorada: pedrería básica, blooming, trazos o flores básicas, difuminado de un tono |
| EFECTO AURORA | rango | $1.000 por uña | — |
| OJO DE GATO | rango | $1.000–$3.000 por uña | — |
| NAIL ART | rango | $5.000–$30.000 por uña | — |

### 3.5 Cejas y pestañas

| Servicio | Tipo | Precio |
|---|---|---:|
| DEPILACIÓN CON CERA CEJAS | fijo | $20.000 |
| DEPILACIÓN BOZO | fijo | $10.000 |
| CEJAS / BOZO | fijo | $25.000 |
| DEPILACIÓN CEJAS HILO | fijo | $25.000 |
| DEPILACIÓN BOZO HILO | fijo | $15.000 |
| CEJAS / BOZO HILO | fijo | $35.000 |
| LAMINADO DE CEJAS | fijo | $50.000 |
| LIFTING DE PESTAÑAS | fijo | $70.000 |
| PESTAÑAS PUNTO A PUNTO | fijo | $35.000 |
| CEJAS EN HENNA CON CERA | fijo | $40.000 |
| CEJAS EN HENNA CON HILO | fijo | $45.000 |

### 3.6 Depilación

| Servicio | Tipo | Precio |
|---|---|---:|
| DEPILACIÓN AXILAS | fijo | $15.000 |
| DEPILACIÓN MEDIA PIERNA | desde | Desde $35.000 |
| PIERNA COMPLETA | desde | Desde $48.000 |
| BIKINI | desde | Desde $60.000 |

### 3.7 Maquillaje y promociones

| Servicio | Tipo | Precio | Notas |
|---|---|---:|---|
| MAQUILLAJE SOCIAL | desde | Desde $50.000 | — |
| MAQUILLAJE QUINCEAÑERA / NOVIA | desde | Desde $150.000 | — |
| MARTES 2X1 | promo | — | No incluye retiros |

> **Importante:** la hoja de precios **no incluye duraciones**. La duración es un dato que el
> cliente cotiza caso por caso (el mensaje de reserva de ejemplo habla de “6 hrs” para un
> combinado). El motor de reservas necesita una duración estándar por servicio y por adicional.

## 4. Profesionales y agenda

### 4.1 Profesionales detectados

| Nombre en agenda | Nombre en liquidación | Rol observado |
|---|---|---|
| NICO | NICOLLE | Manicura, pedicura, sistemas y retoques. |
| MARCE | MARCELA | Cabello, color, cortes y tintes. |
| LAURA | LAURA | Manicura, pedicura, montajes y sistemas. |
| DANNA | DANNA | Cejas, pestañas, maquillaje y apoyo de color. |
| YULIANA | — | Aparece en octubre y noviembre; **sin citas** en las hojas. |
| ELIANA | — | Aparece solo en septiembre; **sin citas** en las hojas. |

`LAURA` tiene la cabecera en magenta (`#D60093`) en la agenda; es un color de identificación
visual, no un estado.

### 4.2 Estructura de la agenda

- Cada hoja mensual se divide en bandas de **5 días**.
- Cada día tiene una columna de hora y **5 columnas de profesional**.
- Las franjas van de **06:00 a 19:00** (14 filas).
- Las citas reales se registran entre **08:00 y 19:00**; no se observaron citas a las 06:00 ni
  a las 07:00.
- Cada cita se escribe como **texto libre en 1 a 3 filas contiguas**: cliente, servicio y,
  a veces, precio o abono. No hay una celda de duración ni un identificador de cliente.
- Una cita puede combinar varios servicios (ej. “semi + retiro + montaje + pedicura”), lo que
  confirma que el modelo debe soportar **varias líneas por cita**.

### 4.3 Descansos: el negro

El relleno **negro** (`theme 1`, sin tinte) marca las horas no disponibles:

- **Columna completa negra (14 franjas):** día libre del profesional.
- **Negro parcial:** horario reducido, festivo o cierre temporal.

Ejemplos observados:

| Fecha | Profesional | Horas negras | Lectura |
|---|---|---|---|
| 2026-10-01 (jueves) | NICO | 14 | Día libre completo. |
| 2026-10-04 (domingo) | NICO, MARCE, LAURA | 13:00–19:00 | Trabajaron solo la mañana (08:00–12:00). |
| 2026-10-11 (domingo) | Todos | 08:00–12:00 y 18:00–19:00 | Trabajaron 13:00–17:00. |
| 2026-10-12 (festivo) | NICO, LAURA, YULIANA | 08:00–09:00 y 18:00–19:00 | Trabajaron 10:00–17:00. |
| 2026-11-02 (festivo) | NICO, LAURA, MARCE, YULIANA | 08:00–09:00 y 18:00–19:00 | Trabajaron 10:00–17:00. |

**Conclusión para el motor de reservas:** la disponibilidad no se puede derivar solo de un
horario semanal fijo. Hay que modelar **excepciones por fecha** (`rest`, `reduced`, `holiday`)
y bloques de horas no disponibles.

### 4.4 Patrón semanal de descanso (septiembre–noviembre)

| Profesional | Días de descanso más frecuentes |
|---|---|
| NICO | Jueves y domingo |
| MARCE | Martes y domingo |
| LAURA | Miércoles, viernes y domingo |
| DANNA | Domingo y lunes |
| YULIANA | Domingo |
| ELIANA | Sin patrón claro (solo septiembre) |

El patrón es una **tendencia**, no una regla absoluta: hay festivos y cambios puntuales. El
sistema debe permitir editar el horario por semana y por fecha.

### 4.5 Volumen observado en la agenda

| Mes | Bloques de cita detectados | Profesionales con más citas |
|---|---:|---|
| Septiembre 2026 | 105 | NICO 40, LAURA 33, MARCE 25, DANNA 7 |
| Octubre 2026 | 122 | NICO 51, LAURA 33, MARCE 27, DANNA 11 |
| Noviembre 2026 | 44 | NICO 21, LAURA 11, MARCE 10, DANNA 2 |
| Diciembre 2026 | 4 | NICO 3, MARCE 1 |

Los meses están llenos de forma desigual: septiembre y octubre están trabajados; noviembre es
parcial y diciembre casi no se usó. **No se debe leer como el volumen real del negocio**, sino
como el nivel de diligenciamiento del archivo. El cliente reporta 200–230 clientes/mes.

### 4.6 Señales de demanda en el texto de las citas

Sobre 275 bloques de cita, los términos más frecuentes son:

| Término | Apariciones |
|---|---:|
| semi | 90 |
| pies | 43 |
| color | 30 |
| manos | 29 |
| retoque | 24 |
| montaje | 16 |
| soft gel | 11 |
| maquillaje | 9 |
| cepillado | 8 |
| pedicure | 7 |
| cejas | 7 |
| corte | 6 |
| rubber | 5 |
| balayage | 4 |
| keratina | 2 |

La mayor demanda observada es **semipermanente, pies, color, manos y retoques**, consistente
con el catálogo de manicura/pedicura y cabello.

## 5. Semántica de los colores

| Color | Hex / tema | Estado |
|---|---|---|
| **Negro** | `theme 1` | **Confirmado:** descanso o hora no disponible. |
| Amarillo | `#FFFF00` | Sin leyenda. Aparece en todos los profesionales y en servicios variados. |
| Rosa | `#FF99FF` | Sin leyenda. |
| Verde claro | `#92D050` | Sin leyenda. |
| Lila | `#FFCCFF` | Se usa también en las cabeceras de fecha. |
| Rojo | `#FF0000` | Sin leyenda. |
| Magenta | `#D60093` | Color de la cabecera de LAURA. |
| Naranja | `#FFC000` | Sin leyenda. |
| Azul | `#00B0F0` | Sin leyenda. |
| Rosa fuerte | `#FF66CC` | Sin leyenda. |
| Fucsia | `#FF3399` | Sin leyenda. |
| Morado | `#7030A0` | Una sola celda. |

**No se debe inventar el significado de los colores distintos al negro.** Los conteos muestran
que no se correlacionan de forma limpia ni con el profesional ni con el tipo de servicio.
Hipótesis a validar con el cliente: estado de confirmación, abono recibido, tipo de servicio o
simple resaltado manual. El producto solo debe usar el color como **ayuda visual**, no como
dato de negocio, hasta que el cliente defina la leyenda.

## 6. Operación económica y liquidación

### 6.1 Modelo semanal

Cada hoja de profesional tiene cuatro semanas. En cada semana:

| Columna | Significado |
|---|---|
| `FECHA` | Día del servicio (el año está corrupto; el día se recupera del año: 2004→4, 1931→31). |
| `CLIENTE Y SERVICIO` | Texto libre con cliente y servicio. |
| `VENTA GENERAL` | Valor vendido del servicio. |
| `COMISIÓN` | `VENTA × 55 %`. |
| `ANTICIPOS` | Dinero ya entregado al profesional o compras/avances descontados. |
| `CONCEPTO` | Motivo del anticipo (desayuno, almuerzo, tintes, novaventa, sistecredito, etc.). |
| `TOTAL` | `COMISIÓN − ANTICIPO`. |
| `FORMA DE PAGO` | Cómo se le paga al profesional (Bancolombia, efectivo). |

Además, cada semana suma:

- **Auxilio de transporte:** $7.100 por día trabajado.
- **Gastos de tintes:** se descuentan del pago (observado en MARCELA).
- **Bonificaciones:** `NOVAVENTA`, `BASE` y `comisión shampoo` se suman.
- **Total devengado:** comisión − anticipos + transporte + bonificaciones − tintes.

> **No confundir dos “anticipos”:** en la liquidación, *anticipo* es un avance al profesional.
> En la reserva, *abono* es el depósito del cliente. Son conceptos distintos y deben ser
> campos distintos en la base de datos.

### 6.2 Totales de octubre 2026

| Concepto | Valor |
|---|---:|
| Venta general | **$10.593.500** |
| Comisión profesional (55 %) | **$5.826.425** |
| Parte del estudio (45 %) | **$4.767.075** |
| Anticipos a profesionales | **$1.810.173** |
| Neto pagado tras anticipos | **$4.016.252** |
| Auxilio de transporte | **$298.200** |
| Tintes y prueba de color descontados (MARCELA) | **$216.800** |
| Líneas de servicio registradas | **175** |
| Ticket promedio | **$60.882** |
| Meta diaria | **$645.800** |

### 6.3 Detalle por profesional

| Profesional | Semanas | Venta | Comisión 55 % | Anticipos | Neto | Transporte |
|---|---:|---:|---:|---:|---:|---:|
| NICOLLE | 4 | $3.931.000 | $2.162.050 | $328.400 | $1.833.650 | $0 |
| LAURA | 4 | $2.859.500 | $1.572.725 | $162.500 | $1.410.225 | $163.300 |
| MARCELA | 4 | $2.668.000 | $1.467.400 | $1.245.273 | $222.127 | $0 |
| DANNA | 4 | $1.135.000 | $624.250 | $74.000 | $550.250 | $134.900 |

MARCELA no recibe auxilio de transporte; en su lugar se le descuentan tintes y pruebas de color.
NICOLLE tampoco lo recibe y solo registra un descuento puntual de $3.000 (Bancolombia). LAURA y
DANNA sí reciben auxilio. Esto debe confirmarse con el cliente antes de automatizarlo.

### 6.4 Formas de pago y financiación observadas

- **Bancolombia** y **efectivo** son las formas de pago al profesional.
- En los conceptos aparecen **ADDI**, **Sistecrédito**, **Novaventa** y **Sura**: son compras o
  avances del profesional, no medios de pago del cliente.
- Solo 33 de las 175 líneas de servicio tienen forma de pago registrada; el resto está vacío.
  Es una **debilidad del registro actual** que el producto debe cerrar con un campo obligatorio.

### 6.5 Gastos y productos

Hoja `CONTROL` (rotulada “septiembre” aunque vive en el libro de octubre):

| Tipo | Total | Ejemplos |
|---|---:|---|
| Gastos | **$2.448.012** | Crédito Bancolombia, acueducto, cera, tintes, dulces, Enel, aseo, claro, sillas, Addi Blush. |
| Productos | **$633.300** | Recamier, Tec Italy, shampoos, venta de shampoo. |

Categorías compatibles con lo confirmado por el cliente: **servicio, arriendo, proveedores y
gastos diarios**. El libro no usa aún esa taxonomía; el producto debe normalizarla.

### 6.6 Resumen mensual (`LIQUIDACION`)

La hoja `LIQUIDACION` calcula:

- Venta general por profesional y total.
- Pago total al profesional (`venta × 55 %`).
- Parte del estudio (`venta × 45 %`).
- Total de sueldos.
- Gastos del mes.
- Margen del estudio (`45 % − gastos`).
- Meta diaria de **$645.800** y comparación diaria contra la meta.

## 7. Calidad de los datos y limitaciones

1. **Fechas corruptas:** en las hojas de liquidación el año codifica el día
   (`2004-10-01` = 4 de octubre, `1931-10-01` = 31 de octubre). El producto no debe importar
   esas fechas tal cual; hay que reconstruirlas.
2. **Texto libre:** cliente, servicio, precio y abono se escriben en la misma celda. No hay
   catálogo de servicios ni identificador de cliente.
3. **Sin duraciones:** la agenda no guarda duración; la hoja de precios tampoco. Es el dato
   faltante más importante para la reserva real.
4. **Sin leyenda de colores:** solo el negro está confirmado.
5. **Meses incompletos:** diciembre está casi vacío; noviembre es parcial.
6. **Nombres variables:** `NICO`/`NICOLLE`, `MARCE`/`MARCELA`, `ELIANA`/`eliana`.
7. **Datos personales:** los libros contienen nombres de clientas y detalles de servicios.
   No deben subirse al repositorio ni a herramientas externas sin anonimizar.
8. **Hoja ajena:** `LUMARAK` es de otro negocio y queda fuera del alcance.
9. **Moneda e impuestos:** los valores están en COP, sin IVA explícito. Hay que confirmar el
   tratamiento tributario.
10. **Meta diaria:** `$645.800` puede ser una meta diaria o semanal; el libro la repite por día.
    Confirmar.

## 8. Cómo se mapea al producto

### 8.1 Entidades

| Entidad | Campos mínimos |
|---|---|
| `Service` | nombre, área, tipo de precio (`fixed`, `from`, `range`), precio base, notas, duración, activo. |
| `ServiceAddon` | nombre, precio mínimo, precio máximo, unidad (`per_nail`, `per_design`, `total`). |
| `Professional` | nombre, color de agenda, activo. |
| `Schedule` | profesional, día de la semana, hora inicio, hora fin. |
| `ScheduleException` | profesional, fecha, hora inicio, hora fin, tipo (`rest`, `reduced`, `holiday`). |
| `Appointment` | cliente, profesional, fecha, hora inicio, hora fin, estado, origen, notas. |
| `AppointmentItem` | cita, servicio, precio, duración, adicionales. |
| `Quote` | subtotal, abono, saldo pendiente, observaciones. |
| `Settlement` | profesional, periodo, venta, tasa, comisión, anticipos, transporte, deducciones, total. |
| `CommissionRule` | 55 % por defecto; 60 % si el profesional aporta implementos. |
| `Advance` | profesional, fecha, monto, concepto, estado. |
| `Expense` | categoría, fecha, concepto, monto, proveedor. |
| `Purchase` | proveedor, factura, fecha, monto, plazo, estado. |
| `DailyGoal` | fecha, monto. |

### 8.2 Reglas de negocio derivadas

1. **Disponibilidad = horario base − excepciones − citas − margen de alistamiento.**
2. **Descanso negro:** una columna completa negra bloquea el día; un negro parcial bloquea solo
   esas horas.
3. **Cita multi-servicio:** una cita puede tener varias líneas y un total cotizado.
4. **Precio “desde”:** la reserva muestra un mínimo y el valor final se ajusta en el salón.
5. **Abono del cliente:** se registra por separado del saldo; no es un anticipo al profesional.
6. **Anticipo al profesional:** se descuenta de la comisión semanal.
7. **Comisión:** 55 % por defecto; 60 % cuando el profesional aporta los implementos. El libro
   de octubre usa 55 % en todas las líneas, así que el 60 % requiere una marca explícita.
8. **Auxilio de transporte:** $7.100 por día trabajado, configurable por profesional.
9. **Gastos de tintes:** se descuentan del pago del profesional cuando el estudio pone el
   producto.
10. **Liquidación semanal:** cierra por profesional y por semana.
11. **Meta diaria:** $645.800, comparable contra la venta del día.
12. **Reserva:** reprogramación máximo 12 horas antes, una sola vez.
13. **Espera:** 5 minutos; después la cita pasa a otro especialista o se cancela.
14. **Garantía:** 5 días posteriores al servicio.
15. **Restricciones:** no mascotas, no menores de 7 años, no devolución de abono.
16. **Precio variable:** el valor cotizado puede cambiar si se agrega o modifica un servicio.

## 9. Preguntas que quedan para el cliente

- [ ] Confirmar la leyenda de colores distinta al negro.
- [ ] Confirmar cómo se marca el 60 % por implementos propios.
- [ ] Confirmar si el auxilio de transporte aplica a todos o solo a algunos profesionales.
- [ ] Confirmar la deducción de tintes y qué producto cuenta como gasto del profesional.
- [ ] Confirmar el rol de YULIANA y ELIANA (¿profesionales, ayudantes, reemplazos?).
- [ ] Entregar la duración estándar de cada servicio y adicional.
- [ ] Confirmar la política de cancelación, no-show y anticipación mínima.
- [ ] Confirmar la ventana de recordatorios.
- [ ] Confirmar el monto o porcentaje del abono.
- [ ] Confirmar si los precios incluyen IVA y cómo se factura.
- [ ] Confirmar si la meta de $645.800 es diaria o semanal.
- [ ] Completar la agenda de diciembre y las semanas faltantes de noviembre.

## 10. Archivos estructurados (solo locales)

Los siguientes archivos se generan con `_local/tools/xlsx_extract.py` y viven en
`_local/analysis/`. **No se versionan** porque contienen nombres de clientas y datos
personales:

| Archivo | Contenido |
|---|---|
| `services.csv` | Catálogo de 72 servicios y precios. |
| `professionals.csv` | Profesionales por mes y color de cabecera. |
| `schedule_cells.csv` | 8.820 celdas de agenda: día, profesional, hora, texto, color y descanso. |
| `rest_days.csv` | 138 registros de descanso (día completo o parcial). |
| `appointments.csv` | 275 bloques de cita agrupados. |
| `settlements.csv` | 175 líneas de liquidación de octubre. |
| `settlements_summary.csv` | 16 totales semanales por profesional. |
| `settlement_adjustments.csv` | 79 ajustes: transporte, tintes, bonificaciones y total devengado. |
| `expenses_control.csv` | 36 gastos y productos del mes. |
| `services_tables.md` | Tablas Markdown del catálogo. |

Para regenerarlos:

```bash
python _local/tools/xlsx_dump.py
python _local/tools/xlsx_extract.py
python _local/tools/make_service_tables.py
```
