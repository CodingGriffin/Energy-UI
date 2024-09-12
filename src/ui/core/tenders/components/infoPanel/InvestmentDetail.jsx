const InvestmentDetail = (props) => {
    return (
        <div className="w-full p-2 bg-gray-50">
            <table className="table-auto w-full text-sm p-0">
                <tbody>
                    <tr>
                        <td>ROI</td>
                        <td>R{props.data.roi}</td>
                    </tr>
                    <tr>
                        <td>IRR</td>
                        <td>R{props.data.irr}</td>
                    </tr>
                    <tr>
                        <td>NPV</td>
                        <td>R{props.data.npv}</td>
                    </tr>
                    <tr>
                        <td>Payback Period</td>
                        <td>{props.data.payback_period} Years</td>
                    </tr>
                    <tr>
                        <td>Cost Escalation pa</td>
                        <td>{props.data.percentage_escalation}%</td>
                    </tr>
                    <tr>
                        <td>Avg usage pm</td>
                        <td>900 kWh</td>
                    </tr>
                    <tr>
                        <td>Avg Income pm</td>
                        <td>R1 200.50</td>
                    </tr>
                    <tr>
                        <td>Initial Investment</td>
                        <td>R179 175.50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InvestmentDetail;