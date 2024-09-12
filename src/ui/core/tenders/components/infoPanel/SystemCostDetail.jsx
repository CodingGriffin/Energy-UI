const SystemCostDetail = (props) => {
    return (
        <div className="w-full p-2 bg-gray-50">
            <table className="table-auto w-full text-sm p-0">
                <tr>
                    <td>HardWare Cost</td>
                    <td>R279 000.00</td>
                </tr>
                <tr>
                    <td>Kit Cost</td>
                    <td>R10500.00</td>
                </tr>
                <tr>
                    <td>Delivery Cost</td>
                    <td>R3826.50</td>
                </tr>
                <tr>
                    <td>Labour</td>
                    <td>R179175.50</td>
                </tr>
                <tr>
                    <td>
                        Total Cost Exl
                    </td>
                    <td>R179175.50</td>
                </tr>
                <tr>
                    <td>VAT</td>
                    <td>R179175.50</td>
                </tr>
                <tr>
                    <td>Total Cost Incl</td>
                    <td>R179175.50</td>
                </tr>
            </table>
        </div>
    )
}

export default SystemCostDetail;