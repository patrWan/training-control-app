import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], fill : ['#ccc'], stroke :['#ccc'],  }]}
            series={[
                {
                    data: [3, 5.5, 2, 8.5, 1.5, 5],
                    color: '#fdb462',

                },
            ]}
            width={500}
            height={300}
            grid={{ vertical: true, horizontal: true }}

            
        />
    );
}