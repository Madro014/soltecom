import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (product: Product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isOpen: true,
        };
      }
      return {
        items: [...state.items, { product, quantity }],
        isOpen: true,
      };
    });
  },

  removeItem: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    }));
  },

  updateQuantity: (productId: string, delta: number) => {
    set((state) => {
      const target = state.items.find((item) => item.product.id === productId);
      if (!target) return state;

      const newQty = target.quantity + delta;
      if (newQty <= 0) {
        return {
          items: state.items.filter((item) => item.product.id !== productId),
        };
      }

      return {
        items: state.items.map((item) =>
          item.product.id === productId ? { ...item, quantity: newQty } : item
        ),
      };
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalItems: () => {
    return get().items.reduce((acc, item) => acc + item.quantity, 0);
  },

  getSubtotal: () => {
    return get().items.reduce(
      (acc, item) => acc + (item.product.wholesalePrice || item.product.price) * item.quantity,
      0
    );
  },

  getTax: () => {
    return get().getSubtotal() * 0.19;
  },

  getTotal: () => {
    const subtotal = get().getSubtotal();
    return subtotal + subtotal * 0.19;
  },
}));
