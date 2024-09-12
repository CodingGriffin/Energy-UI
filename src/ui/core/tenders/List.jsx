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

    const getDateFormated = (dateString) => {
        const date = new Date(dateString);

        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getUTCDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

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
                        <table className='over-flow-auto table-auto'>
                            <thead>
                                <tr className='flex'>
                                    <th className='text-center border-white text-sm flex align-middle' style={{ width: '185px' }}><span className='m-auto'>Last Update</span></th>
                                    <th className='flex-1 text-center border-white text-sm flex align-middle'><span className='m-auto' style={{ minWidth: '200px' }}>Address</span></th>
                                    <th className='text-center border-white text-sm flex align-middle' style={{ width: '100px', minWidth: '100px' }}><span className='m-auto'>LCOE*</span></th>
                                    <th className='text-center border-white text-sm flex align-middle' style={{ width: '100px', minWidth: '100px' }}><span className='m-auto'>ROI*</span></th>
                                    <th className='text-center border-white text-sm flex align-middle' style={{ width: '100px', minWidth: '100px' }}><span className='m-auto'>IRR*</span></th>
                                    <th className='text-center border-white text-sm flex align-middle' style={{ width: '150px', minWidth: '100px' }}><span className='m-auto'>Consumption(pm)</span></th>
                                    <th className='text-center border-white text-sm flex align-middle' style={{ width: '100px', minWidth: '100px' }}><span className='m-auto'>Income(pm)</span></th>
                                    <th className='text-center border-white text-sm flex align-middle' style={{ width: '100px', minWidth: '100px' }}><span className='m-auto'>System Cost</span></th>
                                    <th className='text-center border-white text-sm flex align-middle justify-around' style={{ width: '100px', minWidth: '100px' }}>
                                        <span>Size</span>
                                        <div style={{ cursor: 'pointer' }}
                                            onClick={handleFilter}
                                        >
                                            <img src={filter ? '/assets/images/icons/filter.svg' :
                                                '/assets/images/icons/cross.svg'
                                            } />
                                        </div>
                                    </th>
                                </tr>
                                {!filter ? <tr>
                                    <Filter />
                                </tr> : null}
                            </thead>
                            <tbody className='overflow-auto'>
                                {
                                    tenderData && tenderData.length ? tenderData.map((data, index) => {
                                        data.updatedAt = getDateFormated(data.updatedAt)
                                        return (<tr key={index} className='flex'>
                                            <td className='text-center border-white border-2 p-1' style={{ width: '185px' }}>
                                                {data.address_id}<br />
                                                {data.updatedAt}
                                            </td>
                                            <td className='flex-1 text-center border-white border-2 flex justify-center align-middle'><span className='my-auto' style={{ minWidth: '200px' }}>{data.formatted_address}</span></td>
                                            <td className='text-center border-white border-2 p-1 flex justify-center align-middle' style={{ width: '100px' }}><span className='my-auto'>R{data.lcoe}</span></td>
                                            <td className='text-center border-white border-2 p-1 flex justify-center align-middle' style={{ width: '100px' }}><span className='my-auto'>{data.roi}%</span></td>
                                            <td className='text-center border-white border-2 p-1 flex justify-center align-middle' style={{ width: '100px' }}><span className='my-auto'>{data.irr}kw</span></td>
                                            <td className='text-center border-white border-2 p-1 flex justify-center align-middle' style={{ width: '150px' }}><span className='my-auto'>{data.monthly_consumption_kwh}kw</span></td>
                                            <td className='text-center border-white border-2 p-1 flex justify-center align-middle' style={{ width: '100px' }}><span className='my-auto'>R{data.npv}</span></td>
                                            <td className='text-center border-white border-2 p-1 flex justify-center align-middle' style={{ width: '100px' }}><span className='my-auto'>R{data.system_cost_incl}</span></td>
                                            <td className='w-[250] text-center border-white border-2 p-1 flex justify-center align-middle' style={{ width: '100px' }}><span className='my-auto'>{data.total_panels} Panels<br />{data.total_ems}EMS</span></td>
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
