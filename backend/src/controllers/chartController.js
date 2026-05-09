import { pool } from "../db/postgres.js"

export async function getPriceChart(req, res) {

    const carId = req.params.carId

    try {
        const result = await pool.query(`
            SELECT price, created_at
            FROM fuel_entries
            WHERE car_id = $1
            ORDER BY created_at DESC
            LIMIT 10
            `, [carId]
        );

        const rows = result.rows;

        rows.reverse();

        const response = {
            labels: rows.map(row => {
                // Convert ISO date to something readable
                return new Date(row.created_at)
                    .toLocaleDateString('de-DE', {
                        month: 'short',
                        day: 'numeric'
                    });
            }),

            datasets: [
                {
                    label: 'Fuel Price per liter',
                    data: rows.map(row => row.price / row.liters)
                }
            ]
        };

        res.json(response);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
    
}


/* chart: {
            labels: ['Jan','Feb','Mar','Apr'],
            datasets:[
                {
                label:'Fuel consumption per km',
                data:[7.1,6.9,7.3,7.0]
                }
            ]
        } */


export async function getLitersChart(req, res) {

    const carId = req.params.carId

    try {
        const result = await pool.query(`
            SELECT liters, mileage, created_at
            FROM fuel_entries
            WHERE car_id = $1
            ORDER BY created_at DESC
            LIMIT 10
            `, [carId]
        );

        const rows = result.rows;

        rows.reverse();

        const response = {
            labels: rows.map(row => {
                // Convert ISO date to something readable
                return new Date(row.created_at)
                    .toLocaleDateString('de-DE', {
                        month: 'short',
                        day: 'numeric'
                    });
            }),

            datasets: [
                {
                    label: 'Fuel usage per 100 km',
                    data: rows.map(row => 100 * row.liters / row.mileage)
                }
            ]
        };

        res.json(response);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
    
}