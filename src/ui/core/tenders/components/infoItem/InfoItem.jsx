import {
    useState,
    useEffect,
} from 'react'

const InfoItem = ({ title, showDetailedButton = true, children = null, hiddenChild=null }) => {

    const [showDetail, setShowDetail] = useState(false);
    
    // console.log(showDetail)

    return (
        <div className="w-full rounded-lg p-2 mb-2 bg-white me-2">
            <div>{title}</div>
            {
                children ? children : null
            }
            {
                showDetailedButton ? <div className='bg-gray-100' 
                    onClick={() => setShowDetail(!showDetail)}>
                        <img className={!showDetail? "m-auto transform rotate-180":"m-auto"} 
                        src="/assets/images/icons/down.svg"/>
                </div> : null
            }
            {
                hiddenChild && showDetail ? hiddenChild : null
            }
        </div>
    )
}

export default InfoItem;