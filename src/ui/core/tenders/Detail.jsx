import {
    useEffect,
    useState,
} from 'react';

import {
    useParams
} from 'react-router-dom'

import {
    withCommon
} from 'common/hocs';

import {
    Button
} from 'common/components';

import {
    Constants
} from 'common';

import {
    DataStore,
    Logger,
} from 'common';

import {
    TodoApi
} from 'api';

import styles from './Tenders.module.css'
import { tenderData } from './sample';
import { yearData } from './sample';
import InfoPanel from './components/infoPanel/InfoPanel';

const DetailComponent = (props) => {

    const urlParams = useParams();
    console.log("urlParams:", urlParams)

    const { identifier } = urlParams

    const onBackClick = () => {

    }

    return (
        <div className='flex flex-col bg-gray-100' style={{ height: 'calc(100% - 150px)', width: '100%' }}>
            <div className='flex-1 flex flex-col m-2 rounded-md bg-white'>
                <div className='flex justify-between'>
                    <div className='flex align-middle'>
                        <div className='flex justify-center align-middle' onClick={onBackClick} style={{ cursor: "pointer" }}>
                            <img src='/assets/images/icons/goback.svg' />
                        </div>
                        <div className='flex justify-center align-middle'><p className='m-auto text-'>{tenderData[identifier].id}</p></div>
                    </div>

                    <div className='my-auto p-1'>
                        <Button type="secondary" text="Invest" style={{padding:'1em', height:'30'}}/> 
                    </div>
                </div>
                <div className='flex flex-1 bg-gray-100 m-2 rounded-lg'>
                    <div className='flex flex-1'>
                        <div className='w-8/12 flex flex-col'>
                            <div className='flex-1 m-2 bg-white rounded-lg'>
                            </div>
                            <div className='flex flex-1 m-2 bg-white rounded-lg'>
                                <div className='w-[200] text-sm p-2'>
                                    <div className='text-center border-gray-100 border-2'>Year</div>
                                    <div>Panel Efficiency</div>
                                    <div>Escalation pa</div>
                                    <div>Annual Income</div>
                                    <div>Initial Investment</div>
                                    <div>Total Cashflow</div>
                                </div>
                                <div className='flex flex-1 text-sm p-2 overflow-auto'>
                                    {
                                        yearData.map((data, index) => {
                                            return <div key={index} className='w-[200]'>
                                                <div>{data.year}</div>
                                                <div>{data.pe}</div>
                                                <div>{data.ep}</div>
                                                <div>{data.ai}</div>
                                                <div>{data.ii}</div>
                                                <div>{data.tc}</div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <InfoPanel/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export const Detail = withCommon(DetailComponent);