import logo from '../assets/Logo-dark.svg';
type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export default function GeneratePDFPage() {
  const products: Product[] = [
    { id: "1", name: "Product 1", price: 120, quantity: 32, total: 100 },
    { id: "2", name: "Product 2", price: 120, quantity: 32, total: 100 },
    { id: "3", name: "Product 3", price: 120, quantity: 32, total: 100 },
    { id: "4", name: "Product 4", price: 120, quantity: 32, total: 100 },
  ];

  const subTotal = products.reduce((sum, p) => sum + p.total, 0);
  const gst = subTotal * 0.18;
  const totalAmount = subTotal + gst;

  return (
    <div className="min-h-screen flex items-start justify-center pb-10">
      {/* Invoice container */}
      <div className="bg-white w-full max-w-3xl shadow-lg rounded-lg px-10 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
           <div className=''>
          <img src={logo} alt="" className='h-12'/>
        </div>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-bold">INVOICE GENERATOR</h2>
            <p className="text-sm text-gray-500">
              Sample Output should be this
            </p>
          </div>
        </div>

        {/* Name + Email Section */}
        <div
           className="rounded-xl text-white flex justify-between items-center px-6 py-4 mb-6"
          style={{
            background: `radial-gradient(circle at top left, 
              #303661, 
              #0F0F0F , 
              #0F0F0F , 
              #191919 , 
              #303661 )`,
          }}
        >
          <div className='space-y-3.5'>
            <p className="text-sm">Name</p>
            <p className="text-lg font-semibold text-lime-300">Person_name</p>
          </div>
          <div className="text-right space-y-3.5">
            <p className="text-sm">Date: 12/04/23</p>
            <p className="bg-white text-black px-3 py-1 rounded-full text-sm mt-1">
              example@email.com
            </p>
          </div>
        </div>

        {/* Product Header */}
          <div
            className="grid grid-cols-4 items-center px-6 py-3 rounded-full font-semibold text-white mb-1"
            style={{
              background: "linear-gradient(90deg, #303661 0%, #263406 100%)",
            }}
          >
            <div>Product</div>
            <div className="text-center">Qty</div>
            <div className="text-center">Rate</div>
            <div className="text-right">Total Amount</div>
          </div>


        {/* Product List */}
        <div className="space-y-3 mb-8">
          {products.map((p, idx) => (
            <div
              key={p.id}
              className={`grid grid-cols-4 items-center px-6 py-4 rounded-full font-medium
                ${idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}
              `}
            >
              <div>({p.name})</div>
              <div className="text-center">{p.quantity}</div>
              <div className="text-center"> {p.price}</div>
              <div className="text-right">USD {p.total}</div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="flex justify-end mt-8">
          <div className="border rounded-lg p-4 w-64 h-32 space-y-2 text-sm">
            <div className="flex justify-between ">
              <span className='font-light'>Total Charges</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className='font-light'>GST (18%)</span>
              <span>${gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total Amount</span>
              <span className="text-blue-600">₹ {totalAmount.toFixed(0)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
          <p className="text-xs text-gray-500 mt-6">Date: 12/04/23</p>
        <div className="text-center my-12">
          <p
            className="px-6 py-3 rounded-full text-xs text-white"
            style={{ backgroundColor: "#272833" }}
          >
            We are pleased to provide any further information you may require
            and look forward to assisting with your next order. Rest assured, it
            will receive our prompt and dedicated attention.
          </p>
        </div>

      </div>
    </div>
  );
}
