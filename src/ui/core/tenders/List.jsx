import {
    useEffect,
    useState,
} from 'react';

import {
    withCommon
} from 'common/hocs';

import {
    Button
} from 'common/components';

import {
    DataStore,
    Logger,
} from 'common';

import {
    SystemApi
} from 'api';

import Filter from './components/filter/Filter';
import styles from './Tenders.module.css'
// import { tenderData } from './sample';

const ListComponent = (props) => {

    const displayValue = DataStore.get('valueFromPage1') || 'No value entered on page 1';

    const [filter, setFilter] = useState(true);
    const [tenderData, setTenderData] = useState([]);

    useEffect(() => {
        
        SystemApi.getSystemInfo().then(
            (data) => {
                console.log(data)

                setTenderData(data.data);
            }
        ).catch(()=>console.log("error!"));

        console.log(tenderData);
    }, [])

    const handleFilter = () => {
        console.log("filter", filter)
        setFilter(!filter);
    }
    return (
        <div className='flex flex-col' style={{ height: 'calc(100% - 150px)', width: '100%' }}>
            <div className='overflow-auto m-2 shadow flex flex-col flex-1 border-2 rounded-lg'>
                <div className='text-lg m-2'>Public Tenders</div>
                <div className='mt-1 overflow-auto flex flex-1 flex-col'>
                    <div className='flex flex-1 m-2 rounded-lg bg-gray-100 justify-between p-1 text-sm flex-col overflow-auto'>
                        <table className='over-flow-auto'>
                            <thead>
                                <tr className='flex'>
                                    <td className='text-center border-white text-sm table' style={{ width: '185px' }}>Last Update</td>
                                    <td className='flex-1 text-center border-white text-sm'>Address</td>
                                    <td className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>LCOE*</td>
                                    <td className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>ROI*</td>
                                    <td className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>IRR*</td>
                                    <td className='text-center border-white text-sm' style={{ width: '150px', minWidth: '100px' }}>Consumption(pm)</td>
                                    <td className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>Income(pm)</td>
                                    <td className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>System Cost</td>
                                    <td className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>
                                        <span className='flex justify-between'>Size
                                            <div style={{ cursor: 'pointer' }}
                                                onClick={handleFilter}
                                            >
                                                <img src={filter ? '/assets/images/icons/filter.svg' :
                                                    '/assets/images/icons/cross.svg'
                                                } />
                                            </div>
                                        </span>
                                    </td>
                                </tr>
                                {!filter ? <tr>
                                    <Filter />
                                </tr> : null}
                            </thead>
                            <tbody className='overflow-auto'>
                                {
                                    tenderData && tenderData.length ? tenderData.map((data, index) => {
                                        return (<tr key={index} className='flex'>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '185px' }}>
                                                {data.address_id}<br />
                                                {data.updatedAt}
                                            </td>
                                            <td className='flex-1 text-center border-white border-2'>{data.formatted_address}</td>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '100px' }}>R{data.lcoe}</td>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '100px' }}>{data.roi}%</td>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '100px' }}>{data.irr}kw</td>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '150px' }}>{data.monthly_consumption_kwh}kw</td>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '100px' }}>R{data.npv}</td>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '100px' }}>R{data.system_cost_incl}</td>
                                            <td className='w-[250] text-center border-white border-2 p-1' style={{ width: '100px' }}>{data.total_panels} Panels<br />{data.total_ems}EMS</td>
                                        </tr>)
                                    }) : null
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export const List = withCommon(ListComponent, {
    showHeaderBackButton: true,
});
