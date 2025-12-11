module.exports = (req, res) => {
  res.status(200).json({
    kpi: {
      revenue: 120000000,
      orders: 320,
      customers: 85,
    },
    categories: [
      { name: "Electronics", value: 45 },
      { name: "Fashion", value: 30 },
      { name: "Food", value: 25 },
    ],
    topCustomers: [
      { name: "PT ABC", total: 25000000 },
      { name: "CV Jaya", total: 18000000 },
      { name: "UD Makmur", total: 12000000 },
    ],
  });
};
