import React, { useState, useEffect } from 'react';
import { Plus, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import  {useNavigate}   from 'react-router-dom';
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export default function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Productname-1', price: 5, quantity: 10, total: 50 },
    { id: '2', name: 'Productname-2', price: 2, quantity: 10, total: 20 }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: ''
  });

  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product;
    direction: 'asc' | 'desc';
  } | null>(null);

  // Calculate totals
  const subTotal = products.reduce((sum, product) => sum + product.total, 0);
  const gstRate = 0.18;
  const gstAmount = subTotal * gstRate;
  const totalWithGST = subTotal + gstAmount;

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.quantity) {
      const price = parseFloat(newProduct.price);
      const quantity = parseInt(newProduct.quantity);
      const total = price * quantity;

      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price,
        quantity,
        total
      };

      setProducts([...products, product]);
      setNewProduct({ name: '', price: '', quantity: '' });
    }
  };

  const handleSort = (key: keyof Product) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  const sortedProducts = React.useMemo(() => {
    if (!sortConfig) return products;

    return [...products].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [products, sortConfig]);

  const getSortIcon = (key: keyof Product) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ChevronUp className="w-4 h-4 text-neutral-500" />;
    }
    return sortConfig.direction === 'asc' ? 
      <ChevronUp className="w-4 h-4 text-white" /> : 
      <ChevronDown className="w-4 h-4 text-white" />;
  };

  return (
    <div className="min-h-screen text-white p-6 px-16">
    
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Add Products</h1>
        <div className="border-2 border-yellow-400 bg-yellow-400/10 p-3 rounded-md inline-block">
          <p className="text-yellow-200 text-sm">
            This is basic login page which is used for levitation<br />
            assignment purpose.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            placeholder="Enter the product name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 px-3 py-2.5 rounded-md focus:border-neutral-500 focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Product Price</label>
          <input
            type="number"
            placeholder="Enter the price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="w-full bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 px-3 py-2.5 rounded-md focus:border-neutral-500 focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Quantity</label>
          <input
            type="number"
            placeholder="Enter the Qty"
            value={newProduct.quantity}
            onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
            className="w-full bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 px-3 py-2.5 rounded-md focus:border-neutral-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-8 flex justify-center items-center ">
        <Button
        variant="secondary">
          + Add Product
        </Button>
      </div>

      <div className="bg-neutral-900/50 rounded-lg overflow-hidden">
        <div className="bg-neutral-800 px-4 py-3 grid grid-cols-4 gap-4 text-sm font-medium">
          <button
            onClick={() => handleSort('name')}
            className="flex items-center justify-between text-left hover:text-white transition-colors"
          >
            Product name
            {getSortIcon('name')}
          </button>
          <div className="text-center">Price</div>
          <button
            onClick={() => handleSort('quantity')}
            className="flex items-center justify-center gap-1 hover:text-white transition-colors"
          >
            Quantity
            {getSortIcon('quantity')}
          </button>
          <div className="text-right">Total Price</div>
        </div>

        <div className="divide-y divide-neutral-800">
          {sortedProducts.map((product) => (
            <div key={product.id} className="px-4 py-4 grid grid-cols-4 gap-4 text-sm">
              <div className="text-neutral-300">({product.name})</div>
              <div className="text-center text-neutral-300">{product.price}</div>
              <div className="text-center text-neutral-300">{product.quantity}</div>
              <div className="text-right text-neutral-300">INR {product.total}</div>
            </div>
          ))}

          <div className="px-4 py-4 space-y-3 bg-neutral-900/70">
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="col-span-3 text-right font-medium">Sub Total</div>
              <div className="text-right text-neutral-300">INR {subTotal.toFixed(1)}</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="col-span-3 text-right font-medium">Incl + GST 18%</div>
              <div className="text-right text-neutral-300">INR {totalWithGST.toFixed(1)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="secondary" onClick={() => navigate('/generate-pdf')}>
          Generate PDF Invoice
        </Button>
      </div>
    </div>
        
  );
}