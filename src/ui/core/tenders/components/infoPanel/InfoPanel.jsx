import InfoItem from "../infoItem/InfoItem";
import NewCostDetail from "./NewCostDetail";

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


const InfoPanel = (props) => {
    return (
        <div className='w-4/12 flex flex-col'>
            <div className="p-2">
                <InfoItem title={"Cost per Unit"} showDetailedButton={false}>
                    <div className="flex justify-between p-1 rounded-lg bg-gray-100">
                        <div className="my-auto"><img src="/assets/images/icons/decrease.svg"></img></div>
                        <div>
                            <p className="text-center text-sm text-gray-500">Cost per Unit</p>
                            <p className="text-center text-lg">R4.20</p>
                        </div>
                        <div className="my-auto"><img src="/assets/images/icons/increase.svg"></img></div>
                    </div>
                    <div className="flex-1 mt-1">
                        <div className="flex justify-between">
                            <p className="text-center text-sm">R1.50</p>
                            <p className="text-center text-sm">R5.50</p>
                        </div>
                        <input type="range" className="w-full"></input>
                    </div>
                </InfoItem>
                <InfoItem title={"New Cost per Unit"}
                    hiddenChild={ <NewCostDetail/> }
                >
                    <div>R7.5</div>
                </InfoItem>
            </div>
        </div>
    )
}

export default InfoPanel;