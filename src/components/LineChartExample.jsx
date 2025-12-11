import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export default function LineChartExample() {
    const data = [
        { year: 2016, vue: 15, react: 32, angular: 6 },
        { year: 2017, vue: 30, react: 43, angular: 11 },
        { year: 2018, vue: 23, react: 49, angular: 12 },
        { year: 2019, vue: 18, react: 52, angular: 19 },
        { year: 2020, vue: 14, react: 55, angular: 22 },
        { year: 2021, vue: 31, react: 64, angular: 25 },
        { year: 2022, vue: 44, react: 70, angular: 29 },
        { year: 2023, vue: 52, react: 82, angular: 33 },
    ]

    return (
        <div>
            <h2>Line Chart Example</h2>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey={"year"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type={"monotone"} dataKey={'react'} stroke="#2196F3" strokeWidth={2} />
                <Line type={"monotone"} dataKey={'vue'} stroke="#FFCA29" strokeWidth={2} />
                <Line type={"monotone"} dataKey={'angular'} stroke="#F44236" strokeWidth={2} />
            </LineChart>
            <hr />
        </div>
    )
}
