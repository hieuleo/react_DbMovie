import { useCallback, useState } from 'react';

export const useLocation = (keyWords, defaultValue) => {
    const [valueLocalStorage, setValueLocalStorage] = useState(() =>{
        try{
            let value = window.localStorage.getItem(keyWords);
            if(value) {
                return JSON.parse(value);
            }else{
                window.localStorage.setItem(keyWords, JSON.stringify(defaultValue));
                return defaultValue;
            }
        }catch(e){
            return defaultValue;
        }
    })

    const setValue = useCallback((newValue) => {
        try{
            window.localStorage.setItem(keyWords, JSON.stringify(newValue));
        }catch(e){
            console.error(e);
        }
        setValueLocalStorage(newValue);
    }, [keyWords])

    return [valueLocalStorage, setValue];
}
