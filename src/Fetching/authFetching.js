import { API_URL } from "./constant"

export const login = async (formValues) => {
    try{
        const response = await fetch(API_URL + '/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formValues)
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}

export const register = async (formValues) => {
    try{
        const response = await fetch(API_URL + '/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formValues)
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}