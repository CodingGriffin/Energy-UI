import {
    useState
} from 'react'

const Filter = ({ show = false }) => {

    const [formatted_address, setFormatted_address] = useState('');
    const [address_id, setAddress_id] = useState('');
    const [less_lcoe, setLess_lcoe] = useState('');
    const [less_roi, setLessRoi] = useState('');
    const [less_irr, setLessIrr] = useState('');
    const [less_mck, setLessMck] = useState('');
    const [less_income, setLessIncome] = useState('');

    return (
        <div>
            <div className='flex'>
                <div className='text-center border-white text-sm' style={{ width: '185px' }}><input type="text" name="address_id" placeholder="SystemID" /></div>
                <div className='flex-1 text-center border-white text-sm'>
                    <div className="flex justify-between">
                        <input type="text" className="w-[70%]" name="formatted_address" placeholder="Address" />
                        <div className="text-sm w-[30%]">Less Than</div>
                    </div>
                </div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="lcoe" className="w-full" placeholder="<LCOE" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="roi" className="w-full" placeholder="<ROI" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="irr" className="w-full" placeholder="<IRR" /></div>
                <div className='text-center border-white text-sm' style={{ width: '150px', minWidth: '100px' }}><input type="text" name="monthly_consumption_kwh" className="w-full" placeholder="<" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="npv" className="w-full" placeholder="<INCOME" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="system_cost_incl" className="w-full" placeholder="<Cost" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>
                    <input type="text" name="total_panels" className="w-full" placeholder="<Panles" />
                </div>
            </div>
            <div className='flex'>
                <div className='text-center border-white text-sm' style={{ width: '185px' }}></div>
                <div className='flex-1 text-center border-white text-sm'>
                    <div className="flex justify-between">
                        <div className="w-[70%]" name="formatted_address"/>
                        <div className="text-sm w-[30%]">More Than</div>
                    </div>
                </div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="lcoe" className="w-full" placeholder=">LCOE" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="roi" className="w-full" placeholder=">ROI" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="irr" className="w-full" placeholder=">IRR" /></div>
                <div className='text-center border-white text-sm' style={{ width: '150px', minWidth: '100px' }}><input type="text" name="monthly_consumption_kwh" className="w-full" placeholder=">" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="npv" className="w-full" placeholder=">INCOME" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}><input type="text" name="system_cost_incl" className="w-full" placeholder=">Cost" /></div>
                <div className='text-center border-white text-sm' style={{ width: '100px', minWidth: '100px' }}>
                    <input type="text" name="total_panels" className="w-full" placeholder=">Panles" />
                </div>
            </div>
        </div>
    )
}

export default Filter;