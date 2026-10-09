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
    <div className="flex flex-col w-full bg-[#030914] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#030914] pt-28 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-emerald-400 uppercase tracking-widest text-xs font-bold font-montserrat">
            {COMPANY_INFO.slogan}
          </span>
          <h1 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl mt-2 text-white">
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
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-montserrat">
              Canales Verificados
            </span>
            <h2 className="font-montserrat font-bold text-2xl text-white leading-tight">
              Comuníquese con nuestros especialistas
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Atención presencial en nuestra sede en Bogotá y despachos con acompañamiento técnico a nivel nacional.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {/* WhatsApp Card */}
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl transition-colors duration-200 flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">
                    Línea WhatsApp Comercial
                  </span>
                  <span className="text-xs text-emerald-400/90 font-bold mt-0.5">
                    {COMPANY_INFO.whatsappFull} (Respuesta Rápida)
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white border border-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-white">
                    Correo Electrónico Oficial
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5 font-medium">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white border border-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-white">
                    Sede y Dirección Comercial
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5 font-medium">
                    {COMPANY_INFO.address}, {COMPANY_INFO.city}
                  </span>
                </div>
              </div>

              {/* Social Networks Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white border border-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">share</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-semibold text-sm text-white">
                    Redes Sociales Oficiales
                  </span>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-400 font-semibold">
                    <a href={COMPANY_INFO.social.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                      Facebook: {COMPANY_INFO.social.facebook}
                    </a>
                    <span>•</span>
                    <a href={COMPANY_INFO.social.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                      Instagram: @{COMPANY_INFO.social.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Box with React Hook Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-3xl" />
              
              <h3 className="font-montserrat font-bold text-lg sm:text-xl text-white relative z-10">
                Solicitud Formal de Cotización B2B
              </h3>
              <p className="text-xs text-gray-300 mt-1 mb-6 relative z-10">
                Complete el formulario técnico para asignar un ingeniero a su requerimiento.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-300 mb-1 ml-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Ej: Carlos Ramírez"
                      {...register('name', { required: 'El nombre es obligatorio' })}
                      className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-400 mt-1 ml-1 block">{errors.name.message}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-gray-300 mb-1 ml-1">
                      Empresa / Razón Social *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Ej: Constructora Andes SAS"
                      {...register('company', { required: 'La empresa es obligatoria' })}
                      className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
                    />
                    {errors.company && (
                      <span className="text-[11px] text-red-400 mt-1 ml-1 block">{errors.company.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-300 mb-1 ml-1">
                      Teléfono / WhatsApp Móvil *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Ej: 320 123 4567"
                      {...register('phone', { required: 'El teléfono es obligatorio' })}
                      className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-400 mt-1 ml-1 block">{errors.phone.message}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-300 mb-1 ml-1">
                      Correo Corporativo *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Ej: compras@empresa.com"
                      {...register('email', { required: 'El correo es obligatorio' })}
                      className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1 ml-1 block">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-solution" className="block text-xs font-semibold text-gray-300 mb-1 ml-1">
                    Solución Tecnológica de Interés *
                  </label>
                  <select
                    id="contact-solution"
                    {...register('solution', { required: 'Seleccione una solución' })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071324] border border-white/10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500">Seleccione el tipo de proyecto...</option>
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
                    <span className="text-[11px] text-red-400 mt-1 ml-1 block">{errors.solution.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-details" className="block text-xs font-semibold text-gray-300 mb-1 ml-1">
                    Alcance o Detalles del Proyecto
                  </label>
                  <textarea
                    id="contact-details"
                    rows={3}
                    placeholder="Describa la cantidad de puntos, sector (bodega, conjunto, oficinas) o requerimientos especiales..."
                    {...register('notes')}
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 mt-2 rounded-xl bg-white text-slate-900 hover:bg-gray-200 font-montserrat font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.02]"
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
