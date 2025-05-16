const OrderHistoryPage = () => {
  const pastOrders = [
    {
      id: 1,
      date: "2025-05-10",
      restaurant: "Chicken Republic",
      items: [
        { name: "Fried Chicken Meal", price: "$12.99" },
        { name: "Chapman Drink", price: "$4.50" }
      ],
      total: "$17.49",
      status: "Delivered"
    },
    {
      id: 2,
      date: "2025-05-05",
      restaurant: "Item 7",
      items: [
        { name: "Special Platter", price: "$15.99" },
        { name: "Fruit Juice", price: "$3.50" }
      ],
      total: "$19.49",
      status: "Delivered"
    },
    {
      id: 3,
      date: "2025-04-28",
      restaurant: "Bitemore",
      items: [
        { name: "Pasta Special", price: "$11.99" },
        { name: "Garlic Bread", price: "$3.00" },
        { name: "Soda", price: "$2.50" }
      ],
      total: "$17.49",
      status: "Delivered"
    }
  ];

  const reorder = (order) => {
    // In a real app, this would add all items to cart
    alert(`Reordering ${order.restaurant} items!`);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-8">Order History</h1>
        
        <div className="space-y-6">
          {pastOrders.map(order => (
            <div key={order.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-white">{order.restaurant}</h2>
                  <p className="text-sm text-white/60">{order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  order.status === "Delivered" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"
                }`}>
                  {order.status}
                </span>
              </div>
              
              <div className="mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm py-1 border-b border-white/10 last:border-0">
                    <span className="text-white/80">{item.name}</span>
                    <span className="text-white">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-white">Total: {order.total}</span>
                <button 
                  onClick={() => reorder(order)}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm transition"
                >
                  Reorder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OrderHistoryPage