import { Legend, Pie, PieChart, Tooltip } from "recharts"

export default function PieChartExample() {
    const react = [
        { year: 2016, react: 32 },
        { year: 2017, react: 43 },
        { year: 2018, react: 49 },
        { year: 2019, react: 52 },
        { year: 2020, react: 55 },
        { year: 2021, react: 64 },
        { year: 2022, react: 70 },
        { year: 2023, react: 82 },
    ]

    const vue = [
        { year: 2016, vue: 15 },
        { year: 2017, vue: 30 },
        { year: 2018, vue: 23 },
        { year: 2019, vue: 18 },
        { year: 2020, vue: 14 },
        { year: 2021, vue: 31 },
        { year: 2022, vue: 44 },
        { year: 2023, vue: 52 },
    ]

    return (
        <div>
            <h2>Pie Chart Example</h2>
            <PieChart width={730} height={250}>
                <Pie data={react} dataKey={"react"} nameKey={"year"} cx={"50%"} cy={"50%"} outerRadius={50} fill="#2196F3"
                    animationDuration={800} />
                <Pie data={vue} dataKey={"vue"} nameKey={"year"} cx={"50%"} cy={"50%"} outerRadius={80} innerRadius={60} fill="#FFCA29" animationDuration={800} />
                <Tooltip />
                <Legend />
            </PieChart>
            <hr />
        </div>
    )
}
