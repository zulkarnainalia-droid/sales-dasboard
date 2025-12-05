-- Minimal seed data to try queries quickly

INSERT INTO customers (name, region, join_date) VALUES
('PT Alpha', 'Jakarta', '2022-01-10'),
('CV Beta', 'Bali', '2023-05-20'),
('PT Gamma', 'Surabaya', '2024-03-15');

INSERT INTO products (name, category, price) VALUES
('Product A', 'Electronics', 1200000.00),
('Product B', 'Home', 250000.00),
('Product C', 'Electronics', 800000.00);

INSERT INTO sales (customer_id, product_id, quantity, total, date) VALUES
(1,1,3,3600000.00,'2024-10-01'),
(2,2,5,1250000.00,'2024-11-12'),
(3,1,1,1200000.00,'2025-01-05'),
(1,3,2,1600000.00,'2025-02-10');
