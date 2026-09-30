export interface Product {
  id: string;
  sku: string;
  name: string;
  brand: string;
  category: 
    | 'cctv'
    | 'acceso'
    | 'alarmas'
    | 'incendio'
    | 'apertura-ppa'
    | 'apertura-garen'
    | 'citofonia'
    | 'accesorios-acceso'
    | 'redes'
    | 'computo';
  shortDesc: string;
  description: string;
  price: number;
  wholesalePrice?: number;
  originalPrice?: number;
  stock: number;
  image: string;
  tags: string[];
  specs: {
    [key: string]: string;
  };
  features: string[];
  warranty: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
