import { API_URL } from "./constant"

export const getProducts = async () => {
    try{
        const response = await fetch(API_URL + '/products', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}

export const getProductById = async (pid) => {
    try{
        const response = await fetch(API_URL + '/products/' + pid, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}


export const postProduct = async (product) => {
    const token = localStorage.getItem('auth-token')
    try{
        const response = await fetch(API_URL + '/products', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            method: 'POST',
            body: JSON.stringify(product)
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}


export const deleteProduct = async (pid) => {
    const token = localStorage.getItem('auth-token')
    try{
        const response = await fetch(API_URL + '/products/' + pid, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            method: 'DELETE',
        })
        return response.json()
    }
    catch(error){
        throw error
    }
}


export const putProduct = async (pid, product) => {
    const token = localStorage.getItem('auth-token')
    try{
        const response = await fetch(API_URL + '/products/' + pid, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            method: 'PUT',
            body: JSON.stringify(product)
        })
        return response.json(product)
    }
    catch(error){
        throw error
    }
}