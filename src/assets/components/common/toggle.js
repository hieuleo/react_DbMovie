import React, {useState, useEffect, useRef} from 'react';
import './css/toggle.css';
const ToggleSwitchComponent = ({left, right}) => {

    const ref = useRef(null);

    const [oldWidth, setOldWidth] = useState(0)
    const [checked, setChecked] = useState('toggle-left');
    const [widthNumber, setWidthNumber] = useState(0);

    const change = (e) => {
        setChecked(e.target.className)
        setWidthNumber(e.target.clientWidth)
    }

    useEffect(() => {
        if(ref.current){
            setWidthNumber( ref.current.offsetWidth)
            setOldWidth(ref.current.offsetWidth)
        } 
      }, []);

    return (
    <div className="theme-toggler" title="MODE">
        <span className="toggler">
            <span 
                ref={ref} 
                onClick={(e) => (change(e))} 
                className="toggle-left" 
                style={checked === "toggle-left" ? {color: "#000"} : {color: "#fff"}}
                >{left}
            </span>
            <span 
                onClick={(e) => (change(e))}
                className="toggle-right"
                style={checked === "toggle-right" ? {color: "#000"} : {color: "#fff"}}
                >{right}
            </span>
            <span 
                className='toggle-btn' 
                style={checked === 'toggle-left' ? {width: widthNumber, left: 0}: {width: widthNumber, left: oldWidth}}/>
        </span>
    </div>
    )
}

export default React.memo(ToggleSwitchComponent)
