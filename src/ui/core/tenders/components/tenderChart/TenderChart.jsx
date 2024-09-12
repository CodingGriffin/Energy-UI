import React from "react";
import { Bar } from "react-chartjs-2";

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
        }
    ]
};

const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                }
            }
        }
    }
};

const TenderChart = () => (
    <div>
        <h2>Monthly Sales Data</h2>
        <Bar data={barData} options={barOptions} />
    </div>
);

export default TenderChart;