const NewCostDetail = (props) => {
    return (
        <div className="w-full p-2 bg-gray-50">
            <table className="table-auto w-full text-sm p-0">
                <tbody>
                    <tr>
                        <td>LCOE</td>
                        <td>R{props.data.lcoe}</td>
                    </tr>
                    <tr>
                        <td>Maintenance</td>
                        <td>R{props.data.percentage_maintenance}</td>
                    </tr>
                    <tr>
                        <td>Insurance</td>
                        <td>R{props.data.percentage_insurance}</td>
                    </tr>
                    <tr>
                        <td>Breakage</td>
                        <td>R{props.data.percentage_breakage}</td>
                    </tr>
                    <tr>
                        <td>Warrany Fund</td>
                        <td>R{props.data.percentage_warranty}</td>
                    </tr>
                    <tr>
                        <td>DBR</td>
                        <td>R{props.data.dbr}</td>
                    </tr>
                    <tr>
                        <td>Service Center</td>
                        <td>R{props.data.percentage_service_center}</td>
                    </tr>
                    <tr>
                        <td>Roof Owner</td>
                        <td>R{props.data.percentage_roof_owner}</td>
                    </tr>
                    <tr>
                        <td>System Owner</td>
                        <td>R{props.data.percentage_system_owner}</td>
                    </tr>
                    <tr>
                        <td>New Cost per Unit</td>
                        <td>R{props.data.unit_cost_new}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NewCostDetail;