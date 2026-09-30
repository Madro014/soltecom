import React from 'react';
import { useForm } from 'react-hook-form';
import { COMPANY_INFO } from '../data/company';
import Grainient from '../components/animations/Grainient';

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  solution: string;
  notes: string;
}

export default function Contacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const phone = '573202949267';
    const message =
      `¡Hola SOLTECOM! Solicitud formal de cotización:%0A` +
      `*Nombre:* ${data.name}%0A` +
      `*Empresa:* ${data.company}%0A` +
      `*Teléfono:* ${data.phone}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Solución:* ${data.solution}%0A` +
      `*Detalles del proyecto:* ${data.notes || 'No especificado'}`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    alert('Su solicitud ha sido dirigida a un ingeniero especializado vía WhatsApp.');
    reset();
  };

  return (
    <div className="flex flex-col w-full bg-surface-low min-h-screen">
      {/* Header Banner */}
      <section className="bg-secondary-darker pt-28 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-primary-fixed uppercase tracking-widest text-xs font-bold font-montserrat">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl mt-2">
            Contacto & Asesoría Directa
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            {COMPANY_INFO.subSlogan}. Estamos listos para estructurar su proyecto con ingeniería calificada y cotización en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="relative w-full py-12 flex-1 overflow-hidden">
        {/* Animated Grainient Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
          <Grainient
            color1="#008744"
            color2="#ffffff"
            color3="#14325b"
            timeSpeed={0.8}
            colorBalance={0.0}
            warpStrength={1.0}
            warpFrequency={5.0}
            warpSpeed={2.5}
            warpAmplitude={50.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={500.0}
            noiseScale={2.0}
            grainAmount={0.08}
            grainScale={2.0}
            grainAnimated={true}
            contrast={1.5}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary font-montserrat">
              Canales Verificados
            </span>
            <h2 className="font-montserrat font-bold text-2xl text-surface-dark leading-tight">
              Comuníquese con nuestros especialistas
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Atención presencial en nuestra sede en Bogotá y despachos con acompañamiento técnico a nivel nacional.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {/* WhatsApp Card */}
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white hover:bg-primary/5 border border-gray-100 shadow-sm transition-colors duration-200 flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-gray-900 group-hover:text-primary transition-colors">
                    Línea WhatsApp Comercial
                  </span>
                  <span className="text-xs text-primary font-bold mt-0.5">
                    {COMPANY_INFO.whatsappFull} (Respuesta Rápida)
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-gray-900">
                    Correo Electrónico Oficial
                  </span>
                  <span className="text-xs text-gray-600 mt-0.5 font-medium">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-gray-900">
                    Sede y Dirección Comercial
                  </span>
                  <span className="text-xs text-gray-600 mt-0.5 font-medium">
                    {COMPANY_INFO.address}, {COMPANY_INFO.city}
                  </span>
                </div>
              </div>

              {/* Social Networks Card */}
              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-dark text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">share</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-gray-900">
                    Redes Sociales Oficiales
                  </span>
                  <div className="flex items-center gap-3 mt-1 text-xs text-primary font-semibold">
                    <a href={COMPANY_INFO.social.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Facebook: {COMPANY_INFO.social.facebook}
                    </a>
                    <span>•</span>
                    <a href={COMPANY_INFO.social.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Instagram: @{COMPANY_INFO.social.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Box with React Hook Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="font-montserrat font-bold text-lg sm:text-xl text-surface-dark">
                Solicitud Formal de Cotización B2B
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-6">
                Complete el formulario técnico para asignar un ingeniero a su requerimiento.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Ej: Carlos Ramírez"
                      {...register('name', { required: 'El nombre es obligatorio' })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary transition-[border-color,box-shadow] duration-200"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.name.message}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-gray-700 mb-1">
                      Empresa / Razón Social *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Ej: Constructora Andes SAS"
                      {...register('company', { required: 'La empresa es obligatoria' })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary transition-[border-color,box-shadow] duration-200"
                    />
                    {errors.company && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.company.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 mb-1">
                      Teléfono / WhatsApp Móvil *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Ej: 320 123 4567"
                      {...register('phone', { required: 'El teléfono es obligatorio' })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary transition-[border-color,box-shadow] duration-200"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.phone.message}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 mb-1">
                      Correo Corporativo *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Ej: compras@empresa.com"
                      {...register('email', { required: 'El correo es obligatorio' })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary transition-[border-color,box-shadow] duration-200"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-0.5 block">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-solution" className="block text-xs font-semibold text-gray-700 mb-1">
                    Solución Tecnológica de Interés *
                  </label>
                  <select
                    id="contact-solution"
                    {...register('solution', { required: 'Seleccione una solución' })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary transition-[border-color,box-shadow] duration-200"
                    defaultValue=""
                  >
                    <option value="" disabled>Seleccione el tipo de proyecto...</option>
                    <option value="Sistemas de Videovigilancia (CCTV IP Tiandy)">Sistemas de Videovigilancia (CCTV IP Tiandy)</option>
                    <option value="Control de Acceso Peatonal y Vehicular (ZKTeco)">Control de Acceso Peatonal y Vehicular (ZKTeco)</option>
                    <option value="Sistemas de Alarmas y Detección de Incendio (Intelbras)">Sistemas de Alarmas y Detección de Incendio (Intelbras)</option>
                    <option value="Automatización de Accesos Vehiculares (PPA / Garen)">Automatización de Accesos Vehiculares (PPA / Garen)</option>
                    <option value="Video Portería y Citofonía IP (Akuvox / Hikvision)">Video Portería y Citofonía IP (Akuvox / Hikvision)</option>
                    <option value="Equipos de Conectividad para Redes (Ruijie / Ubiquiti)">Equipos de Conectividad para Redes (Ruijie / Ubiquiti)</option>
                    <option value="Accesorios de Cómputo Corporativo">Accesorios de Cómputo Corporativo</option>
                    <option value="Proyecto Integral Multidisciplinar Llave en Mano">Proyecto Integral Multidisciplinar Llave en Mano</option>
                  </select>
                  {errors.solution && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">{errors.solution.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-details" className="block text-xs font-semibold text-gray-700 mb-1">
                    Alcance o Detalles del Proyecto
                  </label>
                  <textarea
                    id="contact-details"
                    rows={3}
                    placeholder="Describa la cantidad de puntos, sector (bodega, conjunto, oficinas) o requerimientos especiales..."
                    {...register('notes')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary transition-[border-color,box-shadow] duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-montserrat font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-[background-color,box-shadow] duration-200"
                >
                  <span className="material-symbols-outlined text-xl">send</span>
                  <span>Enviar Solicitud a Ingeniero Asignado</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
