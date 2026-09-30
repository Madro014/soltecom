import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createLegalPdf({ title, subtitle, documentNumber, sections, outputPath }) {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Load and embed official SOLTECOM logo
  const logoPath = path.resolve('public/logo/logosoteco.png');
  const logoBytes = fs.readFileSync(logoPath);
  const logoImage = await pdfDoc.embedPng(logoBytes);

  let page = pdfDoc.addPage([595.28, 841.89]); // A4 Size
  const { width, height } = page.getSize();
  const margin = 45;
  const contentWidth = width - margin * 2;
  let y = height - 68;

  const primaryColor = rgb(0 / 255, 135 / 255, 68 / 255); // #008744 Soltecom Green
  const darkColor = rgb(11 / 255, 27 / 255, 54 / 255);    // #0b1b36 Dark Blue
  const textDark = rgb(30 / 255, 41 / 255, 59 / 255);     // #1e293b
  const textMuted = rgb(100 / 255, 116 / 255, 139 / 255); // #64748b
  const borderColor = rgb(226 / 255, 232 / 255, 240 / 255);

  let pageNumber = 1;

  function drawHeader() {
    // Top banner bar
    page.drawRectangle({
      x: 0,
      y: height - 8,
      width: width,
      height: 8,
      color: primaryColor,
    });

    // Embed SOLTECOM Logo in Header
    // Aspect ratio 2089 / 753 = 2.774. Height 28 -> width 77.7
    page.drawImage(logoImage, {
      x: margin,
      y: height - 42,
      width: 78,
      height: 28,
    });

    // Official company name and details beside logo
    page.drawText('Soluciones Tecnológicas y Comerciales LD S.A.S. | NIT Oficial', {
      x: margin + 88,
      y: height - 26,
      size: 8.5,
      font: fontBold,
      color: darkColor,
    });

    page.drawText('Tecnología • Seguridad • Confianza | www.soltecomld.com | Bogotá D.C., Colombia', {
      x: margin + 88,
      y: height - 38,
      size: 7.5,
      font: fontRegular,
      color: textMuted,
    });

    // Horizontal separator line
    page.drawLine({
      start: { x: margin, y: height - 48 },
      end: { x: width - margin, y: height - 48 },
      thickness: 1,
      color: borderColor,
    });
  }

  function drawFooter() {
    page.drawLine({
      start: { x: margin, y: 35 },
      end: { x: width - margin, y: 35 },
      thickness: 0.8,
      color: borderColor,
    });

    page.drawText('Documento Oficial B2B • www.soltecomld.com • Carrera 10 # 21 - 06 Local 348, Bogotá, Colombia', {
      x: margin,
      y: 22,
      size: 7.5,
      font: fontRegular,
      color: textMuted,
    });

    const pageStr = `Página ${pageNumber}`;
    const pageStrWidth = fontRegular.widthOfTextAtSize(pageStr, 7.5);
    page.drawText(pageStr, {
      x: width - margin - pageStrWidth,
      y: 22,
      size: 7.5,
      font: fontRegular,
      color: textMuted,
    });
  }

  function checkPageBreak(neededSpace = 30) {
    if (y < 55 + neededSpace) {
      drawFooter();
      pageNumber++;
      page = pdfDoc.addPage([595.28, 841.89]);
      y = height - 65;
      drawHeader();
    }
  }

  // Initial header on first page
  drawHeader();

  // Title Box
  page.drawRectangle({
    x: margin,
    y: y - 50,
    width: contentWidth,
    height: 50,
    color: rgb(240 / 255, 253 / 255, 244 / 255), // light emerald
    borderColor: rgb(187 / 255, 247 / 255, 208 / 255),
    borderWidth: 1,
  });

  page.drawText(title, {
    x: margin + 12,
    y: y - 22,
    size: 13,
    font: fontBold,
    color: darkColor,
  });

  page.drawText(`${subtitle} • Ref: ${documentNumber} • Vigencia: ${new Date().getFullYear()}`, {
    x: margin + 12,
    y: y - 38,
    size: 8,
    font: fontRegular,
    color: primaryColor,
  });

  y -= 65;

  // Render sections
  for (const sec of sections) {
    checkPageBreak(40);

    // Section title
    page.drawText(sec.heading, {
      x: margin,
      y: y,
      size: 10,
      font: fontBold,
      color: darkColor,
    });
    y -= 14;

    // Section paragraphs
    for (const para of sec.paragraphs) {
      const words = para.split(' ');
      let currentLine = '';

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.5);

        if (testWidth > contentWidth) {
          checkPageBreak(12);
          page.drawText(currentLine, {
            x: margin,
            y: y,
            size: 8.5,
            font: fontRegular,
            color: textDark,
          });
          y -= 12;
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }

      if (currentLine) {
        checkPageBreak(12);
        page.drawText(currentLine, {
          x: margin,
          y: y,
          size: 8.5,
          font: fontRegular,
          color: textDark,
        });
        y -= 15;
      }
    }

    y -= 6;
  }

  // Legal Acceptance & Signature Notice Box
  checkPageBreak(50);
  page.drawRectangle({
    x: margin,
    y: y - 44,
    width: contentWidth,
    height: 44,
    color: rgb(248 / 255, 250 / 255, 252 / 255),
    borderColor: borderColor,
    borderWidth: 1,
  });

  page.drawText('SOLUCIONES TECNOLÓGICAS Y COMERCIALES LD S.A.S. — DEPARTAMENTO JURÍDICO Y COMPLIANCE', {
    x: margin + 10,
    y: y - 18,
    size: 7.5,
    font: fontBold,
    color: darkColor,
  });

  page.drawText('Canal Oficial de Radicación y Consultas Legales: soltecom1025@gmail.com | Línea Nacional: +57 320 294 9267', {
    x: margin + 10,
    y: y - 30,
    size: 7,
    font: fontRegular,
    color: textMuted,
  });

  drawFooter();

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`[PDF] Generated successfully with LOGO: ${outputPath}`);
}

async function run() {
  const pdfsDir = path.resolve('public/pdfs');
  if (!fs.existsSync(pdfsDir)) {
    fs.mkdirSync(pdfsDir, { recursive: true });
  }

  // 1. TÉRMINOS Y CONDICIONES
  await createLegalPdf({
    title: 'TÉRMINOS Y CONDICIONES GENERALES DE USO Y COTIZACIÓN B2B',
    subtitle: 'Marco Regulatorio Colombiano Ley 1480 de 2011 y Ley 527 de 1999',
    documentNumber: 'TYC-SOLTECOM-2026-V1',
    outputPath: path.join(pdfsDir, 'terminos-y-condiciones.pdf'),
    sections: [
      {
        heading: '1. OBJETO Y ALCANCE COMERCIAL',
        paragraphs: [
          'El presente documento establece las cláusulas y condiciones generales que regulan el acceso, consulta, solicitud de cotizaciones y adquisición de equipos o servicios a través del portal web oficial de SOLUCIONES TECNOLÓGICAS Y COMERCIALES LD S.A.S. (en adelante "SOLTECOM"), sociedad comercial legalmente constituida bajo las leyes de la República de Colombia, con domicilio principal en la ciudad de Bogotá D.C.',
          'La interacción con esta plataforma implica la aceptación expresa, libre e informada de estos términos por parte del usuario o empresa solicitante.'
        ]
      },
      {
        heading: '2. CARÁCTER INFORMATIVO DEL CATÁLOGO Y VALIDEZ DE COTIZACIONES',
        paragraphs: [
          'Las referencias de productos, fotografías técnicas, fichas de rendimiento y precios publicados en www.soltecomld.com corresponden a soluciones de seguridad electrónica y conectividad corporativa dirigidas al sector empresarial (B2B) e institucional.',
          'La generación de una orden de cotización mediante el cotizador web o a través de los canales de WhatsApp empresarial constituye una propuesta comercial preliminar sujeta a disponibilidad de inventario en bodega central y verificación de compatibilidad técnica. Toda cotización formal conserva una vigencia comercial de quince (15) días calendario contados a partir de su emisión por parte del ingeniero asignado.'
        ]
      },
      {
        heading: '3. POLÍTICA DE PRECIOS, MONEDA E IMPUESTOS (IVA)',
        paragraphs: [
          'Todos los valores monetarios reflejados en el portal se encuentran denominados en Pesos Colombianos (COP). Salvo que se indique de forma expresa lo contrario, los precios de catálogo están sujetos a la adición del Impuesto sobre las Ventas (IVA del 19%) de acuerdo con el Estatuto Tributario de Colombia.',
          'SOLTECOM se reserva el derecho de ajustar los precios de lista sin previo aviso ante variaciones significativas en la tasa de cambio representativa del mercado (TRM) o modificaciones en los costos de importación de los fabricantes aliados (Tiandy, ZKTeco, Intelbras, PPA, Garen, Akuvox, Ruijie).'
        ]
      },
      {
        heading: '4. GARANTÍAS TÉCNICAS DE FÁBRICA Y SOPORTE POSTVENTA',
        paragraphs: [
          'Todos los equipos suministrados por SOLTECOM cuentan con respaldo oficial y garantía limitada directa de fábrica que oscila entre doce (12) y veinticuatro (24) meses, según la política particular de cada marca aliada.',
          'La garantía cubre exclusivamente defectos de manufactura, componentes electrónicos internos y fallas inherentes a la fabricación. Quedan expresamente excluidos de cobertura averías derivadas de descargas atmosféricas o sobretensiones eléctricas, inundaciones, vandalismo, golpes mecánicos, negligencia operativa o manipulaciones efectuadas por personal no certificado.'
        ]
      },
      {
        heading: '5. PROPIEDAD INTELECTUAL E INDUSTRIAL',
        paragraphs: [
          'Los logotipos, esquemas, textos y elementos visuales propios de SOLTECOM están protegidos por la legislación colombiana e internacional sobre derechos de autor y propiedad industrial. Las marcas comerciales, denominaciones de modelos y logos de terceros citados en el catálogo pertenecen a sus respectivos fabricantes y se exhiben bajo condición de distribución autorizada.'
        ]
      },
      {
        heading: '6. LEY APLICABLE Y JURISDICCIÓN',
        paragraphs: [
          'Cualquier controversia derivada de la interpretación o ejecución de los presentes términos se regirá por las leyes sustanciales de la República de Colombia. Las partes acuerdan acudir en primera instancia a un arreglo directo o conciliación extrajudicial en la Cámara de Comercio de Bogotá.'
        ]
      }
    ]
  });

  // 2. POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
  await createLegalPdf({
    title: 'POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES (HABEAS DATA)',
    subtitle: 'Cumplimiento Estatutario Ley 1581 de 2012 y Decreto 1377 de 2013',
    documentNumber: 'POL-DATOS-SOLTECOM-2026',
    outputPath: path.join(pdfsDir, 'politica-tratamiento-datos.pdf'),
    sections: [
      {
        heading: '1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO',
        paragraphs: [
          'Razón Social: SOLUCIONES TECNOLÓGICAS Y COMERCIALES LD S.A.S. (SOLTECOM)',
          'Domicilio: Carrera 10 # 21 - 06 Local 348, Bogotá D.C., Colombia.',
          'Canal Electrónico de Habeas Data: soltecom1025@gmail.com',
          'Línea de Atención Comercial y WhatsApp: +57 320 294 9267.',
          'Sitio Web Institucional: www.soltecomld.com'
        ]
      },
      {
        heading: '2. FINALIDAD DEL TRATAMIENTO DE DATOS PERSONALES',
        paragraphs: [
          'Los datos personales recopilados a través de formularios de contacto, solicitudes de cotización, carritos de compras o interacciones de mensajería instantánea son tratados con las siguientes finalidades legítimas:',
          'a) Remitir cotizaciones formales, pliegos técnicos y especificaciones de ingeniería solicitadas por el cliente.',
          'b) Facturación electrónica, registro contable y cumplimiento de las directrices fiscales de la DIAN.',
          'c) Coordinar visitas técnicas de inspección, despacho logístico nacional de equipos y soporte en garantías.',
          'd) Informar sobre actualizaciones críticas de firmware, lanzamientos de líneas de seguridad y circulares técnicas.'
        ]
      },
      {
        heading: '3. DERECHOS DE LOS TITULARES (DERECHOS ARCO)',
        paragraphs: [
          'En concordancia con el Artículo 8 de la Ley 1581 de 2012, todo titular de datos tiene derecho a: Conocer, actualizar y rectificar sus datos frente a SOLTECOM; solicitar prueba de la autorización otorgada; ser informado sobre el uso de sus datos; revocar la autorización o solicitar la supresión del dato cuando no medie un deber legal o contractual de conservarlo; y acceder de forma gratuita a sus datos personales.'
        ]
      },
      {
        heading: '4. PROCEDIMIENTO PARA EL EJERCICIO DE DERECHOS',
        paragraphs: [
          'Para radicar consultas, reclamos o peticiones de revocatoria, el titular o su apoderado deberá dirigir una comunicación formal al correo electrónico soltecom1025@gmail.com con el asunto "Ejercicio de Derechos Habeas Data", detallando su nombre, número de identificación y la descripción clara de la solicitud.',
          'Las consultas serán atendidas en un término máximo de diez (10) días hábiles y los reclamos en quince (15) días hábiles conforme a los plazos legales establecidos.'
        ]
      },
      {
        heading: '5. MEDIDAS DE SEGURIDAD DIGITAL',
        paragraphs: [
          'SOLTECOM implementa protocolos de seguridad técnica, humana y administrativa con el propósito de evitar la adulteración, pérdida, consulta o acceso no autorizado a las bases de datos de clientes corporativos y particulares.'
        ]
      },
      {
        heading: '6. VIGENCIA DE LA POLÍTICA',
        paragraphs: [
          'La presente política entra en vigencia a partir de su publicación en el sitio web institucional y las bases de datos se mantendrán activas mientras subsista la relación comercial o legal con el titular de la información.'
        ]
      }
    ]
  });
}

run().catch(console.error);
