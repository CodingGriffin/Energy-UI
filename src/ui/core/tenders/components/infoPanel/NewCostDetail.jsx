const data = {
    unit_cost_new: '1.50',
    unit_cost_current: '4.2',
    monthly_consumption_kwh: '1532',
    percentage_degredation: '1',
    percentage_escalation: '1',
    percentage_system_owner: '0.16',
    percentage_roof_owner: '2',
    percentage_service_center: '2',
    percentage_maintenance: '2',
    percentage_insurance: '2',
    percentage_breakage: '2',
    percentage_warranty: '0.5',
    roi: '25.3',
    irr: '15.2',
    lcoe: '1.99',
    dbr: '2.12',

}


const NewCostDetail = (props) => {
    return (
        <div className="w-full p-2 bg-gray-50">
            <table className="table-auto w-full text-sm p-0">
                <tbody>
                    <tr>
                        <td>LCOE</td>
                        <td>R{data.lcoe}</td>
                    </tr>
                    <tr>
                        <td>Maintenance</td>
                        <td>R{data.percentage_maintenance}</td>
                    </tr>
                    <tr>
                        <td>Insurance</td>
                        <td>R{data.percentage_insurance}</td>
                    </tr>
                    <tr>
                        <td>Breakage</td>
                        <td>R{data.percentage_breakage}</td>
                    </tr>
                    <tr>
                        <td>Warrany Fund</td>
                        <td>R{data.percentage_warranty}</td>
                    </tr>
                    <tr>
                        <td>DBR</td>
                        <td>R{data.dbr}</td>
                    </tr>
                    <tr>
                        <td>Service Center</td>
                        <td>R{data.percentage_service_center}</td>
                    </tr>
                    <tr>
                        <td>Roof Owner</td>
                        <td>R{data.percentage_roof_owner}</td>
                    </tr>
                    <tr>
                        <td>System Owner</td>
                        <td>R{data.percentage_system_owner}</td>
                    </tr>
                    <tr>
                        <td>New Cost per Unit</td>
                        <td>R{data.unit_cost_new}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NewCostDetail;