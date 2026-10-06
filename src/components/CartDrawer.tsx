import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { COMPANY_INFO } from '../data/company';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal, getTax, getTotal } = useCartStore();

  if (!isOpen) return null;

  const formatCOP = (num: number) => {
    return '$' + num.toLocaleString('es-CO') + ' COP';
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const phone = '573202949267'; // Verificado del PDF oficial
    let text = `¡Hola SOLTECOM! Deseo formalizar una cotización B2B con los siguientes equipos homologados:%0A%0A`;
    items.forEach((item, index) => {
      const price = item.product.wholesalePrice || item.product.price;
      text += `${index + 1}. *${item.product.name}* (Marca: ${item.product.brand}, SKU: ${item.product.sku}) - Cantidad: ${item.quantity} - Valor: ${formatCOP(price * item.quantity)}%0A`;
    });
    text += `%0A*Subtotal estimado:* ${formatCOP(getSubtotal())}%0A*Total estimado (+IVA):* ${formatCOP(getTotal())}%0ASolicito disponibilidad y tiempo estimado de despacho para Bogotá / Nacional.`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <button 
        type="button"
        aria-label="Cerrar panel de cotización"
        className="absolute inset-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity border-none cursor-default"
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 bg-secondary-darker text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed">shopping_cart_checkout</span>
              <div>
                <h2 className="font-montserrat font-bold text-base">Orden de Cotización B2B</h2>
                <span className="text-[10px] text-gray-300 block">{COMPANY_INFO.legalName}</span>
              </div>
            </div>
            <button 
              onClick={closeCart}
              aria-label="Cerrar panel de cotización"
              className="p-1 hover:bg-white/10 rounded-lg transition-colors text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <span className="material-symbols-outlined text-5xl text-gray-300 mb-2">production_quantity_limits</span>
                <p className="font-montserrat font-semibold text-gray-700">Su cotización está vacía</p>
                <p className="text-sm mt-1">Explore nuestro catálogo y agregue equipos de seguridad electrónica.</p>
              </div>
            ) : (
              items.map((item) => {
                const price = item.product.price;
                return (
                  <div key={item.product.id} className="p-3 bg-surface-low rounded-xl border border-gray-100 flex flex-col gap-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase">{item.product.brand}</span>
                        <h4 className="font-montserrat font-semibold text-sm text-gray-900 line-clamp-1">{item.product.name}</h4>
                        <span className="text-xs text-gray-500">{formatCOP(price)} c/u</span>
                      </div>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        aria-label={`Eliminar ${item.product.name} de la cotización`}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-2 py-0.5 shadow-sm">
                        <button 
                          onClick={() => updateQuantity(item.product.id, -1)}
                          aria-label="Disminuir cantidad"
                          className="w-6 h-6 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 rounded"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-gray-800 px-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, 1)}
                          aria-label="Aumentar cantidad"
                          className="w-6 h-6 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 rounded"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-montserrat font-bold text-primary">{formatCOP(price * item.quantity)}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col gap-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal estimado:</span>
                <span className="font-semibold text-gray-900">{formatCOP(getSubtotal())}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>IVA (19% referencial):</span>
                <span className="font-semibold text-gray-900">{formatCOP(getTax())}</span>
              </div>
              <div className="flex justify-between font-montserrat font-bold text-base text-gray-900 pt-2 border-t">
                <span>Total Estimado B2B:</span>
                <span className="text-primary text-lg">{formatCOP(getTotal())}</span>
              </div>
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full mt-2 py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-montserrat font-semibold flex items-center justify-center gap-2 shadow-md transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                <span>Enviar cotización a WhatsApp ({COMPANY_INFO.whatsapp})</span>
              </button>
              <p className="text-center text-xs text-gray-400">Atención inmediata: {COMPANY_INFO.address}, {COMPANY_INFO.city}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
