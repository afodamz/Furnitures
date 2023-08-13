import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from "axios";
import {isLoading} from "expo-font";

const UseFetch = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get("");
            setData(response.data)
            setIsLoading(false)
        } catch (e) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch =()=> {
        setIsLoading(true);
        fetchData();
    }

    return (data, isLoading, error, refetch);
}

export default UseFetch;