import { Funnel, FunnelChart, LabelList, Tooltip } from "recharts"

export default function FunnelChartExample() {
    const data = [
        { name: 'Farvardin', sale: 91, fill: '#8884d8' },
        { name: 'Ordibehesht', sale: 150, fill: '#83a6ed' },
        { name: 'Khordad', sale: 190, fill: '#8dd1e1' },
        { name: 'Tir', sale: 240, fill: '#a4de6c' },
        { name: 'Mordad', sale: 230, fill: '#82ca9d' },
    ]

    return (
        <div style={{ marginBottom: '100px' }}>
            <h2>Funnel Chart Example</h2>
            <FunnelChart width={780} height={250} margin={{ right: 150 }}>
                <Tooltip />
                <Funnel dataKey={"sale"} data={data} isAnimationActive>
                    <LabelList position={"right"} fill="#000" stroke="none" dataKey={"name"} />
                </Funnel>
            </FunnelChart>
        </div>
    )
}
