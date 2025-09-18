import React, { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if (!res?.ok) {
                    setError(new Error(`Error ${res.status}: ${res.statusText}`));
                } else {
                    const json = await res.json();
                    setData(json);
                }
            } catch (error) {
                setError(error);
            }finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);


    return { isLoading, data, error }
}

export default useFetch;