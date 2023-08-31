/*import React from "react";
const useAsync = fn => {
    const initialState = { loading: false, error: null, value: null };
    const stateReducer = (_, action) => {
        switch(action.type) {
            case 'start':
            return { loading: true, error: null, value: null };
            case 'finish':
            return { loading: false, error: null, value: action.value };
            case 'error':
            return{loading :false ,  error: action.error, value: null };
        }
    };
    const [state, dispatch] = React.useReducer(stateReducer, initialState);

    const run = async (args = null) => {
        try{
            dispatch({type: 'start'});
            const value = await fn(args);
            dispatch({type: 'finish', value});
        }catch(error){
            dispatch({type: 'error', error});
        }
    };
    return {...state, run};
};

export const RandomImage = props => {
    const imgFecth = useAsync( url => fetch(url).then(response => response.json()) );
    return(
        <div>
            <button onClick={() => imgFecth.run('https://dog.ceo/api/breeds/image/random')} disabled= {imgFecth.isLoading}>
                Load Image
            </button>
            <br />
            {imgFecth.loading && <div>Loading...</div> }
            {imgFecth.error && <div> Error {imgFecth.error} </div>}
            {imgFecth.value && (
                <img
                src={imgFecth.value.message}
                alt="avatar"
                width={400}
                height="auto"
                />
            )}
        </div>
    );
};*/
