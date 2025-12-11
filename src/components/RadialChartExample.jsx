import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts"

export default function RadialChartExample() {
    const data = [
        { name: 'Farvardin', sale: 91, fill: '#8884d8' },
        { name: 'Ordibehesht', sale: 150, fill: '#83a6ed' },
        { name: 'Farvardin', sale: 190, fill: '#8dd1e1' },
    ]
    return (
        <div>
            <h2>Radial Chart Example</h2>
            <RadialBarChart
                width={730}
                height={250}
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar
                    minAngle={15}
                    label={{ fill: "#666", position: "insideStart" }}
                    background
                    clockWise={true}
                    dataKey={"sale"}
                />
                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
                <Tooltip />
            </RadialBarChart>
            <hr />
        </div>
    )
}