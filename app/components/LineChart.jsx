import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({ data, type }) {
    return (
        <div className="bg-white text-white h-80 m-2 w-96 rounded-lg shadow-md my-4">
            <LineChart
                xAxis={[{
                    dataKey: 'date', scaleType: 'band',
                    valueFormatter: (date, context) => context.location === 'tick' ?
                        date.toLocaleString("es-CL", { day: "numeric", month: 'short' }) : ''
                }]}
                series={[
                    {
                        dataKey: 'repetition',
                        color: '#fdb462',
                        label: type

                    },
                ]}
                dataset={data}
            />
        </div>

    );
}