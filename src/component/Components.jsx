import React from 'react';
import Plot from 'react-plotly.js';

const Components = () => {
    const originalData = [
        { name: 'Stock', value: 1500000, increase: 0.50 },
        { name: 'Profit', value: 25000, increase: 0.30 },
        { name: 'Unique Visitors', value: 2500000, increase: 0.80 }
    ];

    // Calculate new values based on the increase percentage
    const updatedData = originalData.map(item => ({
        ...item,
        updatedValue: item.value + item.value * item.increase
    }));

    // Data for the plot
    const data = [
        {
            type: 'bar',
            x: updatedData.map(item => item.name), // Names for the x-axis
            y: updatedData.map(item => item.updatedValue), // Updated values for the y-axis
            text: updatedData.map(item => `$${item.updatedValue.toLocaleString()}`), // Show updated value as text
            hoverinfo: 'text',
            marker: {
                color: 'rgba(58, 71, 80, 0.6)',
                line: { color: 'rgba(58, 71, 80, 1)', width: 1 }
            }
        }
    ];

    // Layout for the plot
    const layout = {
        title: 'Growth in Key Metrics',
        xaxis: { title: 'Metrics' },
        yaxis: { title: 'Value ($)', tickprefix: '$' },
        showlegend: false
    };
    return (
        <div className='flex justify-center pt-[10vh]'>
            <Plot data={data} layout={layout} />
        </div>
    );
}

export default Components;
