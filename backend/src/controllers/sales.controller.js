import db from "../database/db.js";

export const getKPIs = async (req, res) => {
  try {
    const [rows] = await db.query(\`
      SELECT
        SUM(total) AS total_sales,
        COUNT(DISTINCT DATE_FORMAT(date, '%Y-%m')) AS months_count
      FROM sales
    \`);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getCategoryDistribution = async (req, res) => {
  try {
    const [rows] = await db.query(\`
      SELECT p.category, SUM(s.total) AS revenue
      FROM sales s
      JOIN products p ON s.product_id = p.id
      GROUP BY p.category
    \`);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getTopCustomers = async (req, res) => {
  try {
    const [rows] = await db.query(\`
      SELECT c.name, SUM(s.total) AS total_spent
      FROM sales s
      JOIN customers c ON s.customer_id = c.id
      GROUP BY c.id
      ORDER BY total_spent DESC
      LIMIT 10
    \`);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
