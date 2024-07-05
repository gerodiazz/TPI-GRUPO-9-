import { API_URL } from "./constant"

export const getCart = async () => {
    try{
        const response = await fetch(API_URL + '/cart' , {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
            },
            method: 'GET'
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}

export const buyProduct = async (pid) => {
    try{
        const response = await fetch(API_URL + '/cart', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
            },
            method: 'POST',
            body: JSON.stringify({
                quantity: 1,
                productId: pid
            })
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}

export const quitProduct = async (pid) => {
    try{
        const response = await fetch(API_URL + '/cart', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
            },
            method: 'DELETE',
            body: JSON.stringify({
                quantity: 1,
                productId: pid
            })
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}


export const buyCart = async () => {
    try{
        const response = await fetch(API_URL + '/cart/clear', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('auth-token')
            },
            method: 'DELETE',
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}
