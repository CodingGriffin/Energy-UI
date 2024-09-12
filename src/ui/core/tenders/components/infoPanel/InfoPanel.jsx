import InfoItem from "../infoItem/InfoItem";
import InvestmentDetail from "./InvestmentDetail";
import NewCostDetail from "./NewCostDetail";
import SystemCostDetail from "./SystemCostDetail";

const InfoPanel = (props) => {
    console.log(props.data)
    return (
        <div className='w-4/12 flex flex-col overflow-auto'>
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
                    hiddenChild={<NewCostDetail data={props.data} />}
                >
                    <div>R7.5</div>
                </InfoItem>
                <div className="flex justify-between">
                    <InfoItem title={"EMS"} showDetailedButton={false}>
                        <p>{props.data.total_ems}</p>
                    </InfoItem>
                    <div className="w-5"></div>
                    <InfoItem title={"Panels"} showDetailedButton={false}>
                        <p>{props.data.total_panels}</p>
                    </InfoItem>
                </div>
                <InfoItem title={"System Cost"} hiddenChild={<SystemCostDetail />}>
                    <div>R210510.25</div>
                </InfoItem>
                <div className="flex justify-between">
                    <InfoItem title={"EMS"} showDetailedButton={false}>
                        <p>{props.data.roi}%</p>
                    </InfoItem>
                    <div className="w-5"></div>
                    <InfoItem title={"Panels"} showDetailedButton={false}>
                        <p>{props.data.irr}%</p>
                    </InfoItem>
                </div>
                <InfoItem title={"Consumption per month"} showDetailedButton={false}>
                    <p>{props.data.monthly_consumption_kwh}</p>
                </InfoItem>
                <InfoItem title={"Income per month"} showDetailedButton={false}>
                    {/* fake */}
                    <p>{props.data.monthly_consumption_kwh}</p>
                </InfoItem>
                <InfoItem title={"Investment Details"} hiddenChild={<InvestmentDetail data={props.data}/>}/>
            </div>
        </div>
    )
}

export default InfoPanel;