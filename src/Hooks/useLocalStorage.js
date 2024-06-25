
const isWindow = typeof window !== 'undefined';

const useLocalStorage =  (key , initialValue) => {

    if(!isWindow) return [initialValue, ()=> {},()=>{}];

    if(!key) throw new Error('Key must be defined');

    const storedValue = JSON.parse(localStorage.getItem(key));

    const initial = storedValue ?? initialValue;

    const [value, setValue] = useState(initial);

    const set = (newValue) => {
        try {
            const valueToBeUpdated = ( newValue instanceof Function ) ? newValue(value) : newValue;
            setValue(valueToBeUpdated);
            localStorage.setItem(key,JSON.stringify(valueToBeUpdated));
            
        } catch (error) {
            console.error(error);
        }

    }

    const remove  = () => {

        try {
            localStorage.removeItem(key);
            setValue(undefined);
        } catch (error) {
            console.error(error);
        }

    }





    return [value, set, remove];

}


export default useLocalStorage;