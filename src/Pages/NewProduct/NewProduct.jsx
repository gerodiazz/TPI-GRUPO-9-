import React, { useState } from 'react'
import { Navbar } from '../../Components'
import { useNavigate } from 'react-router-dom';
import { postProduct } from '../../Fetching/productsFetching';

const NewProduct = () => {
    const [errorText, setErrorText ] = useState('')
	const [formValues, setFormValues] = useState({
		name: '',
		stock: '',
		thumbnail: '',
        price: ''
	});
	const navigation = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleCreateProduct = (e) => {
		e.preventDefault();
		postProduct({...formValues, price:Number(formValues.price), quantity: Number(formValues.quantity)}).then(res => {
            if(res.message === 'Token inválido'){
                navigation('/login')
            }
            else if(res.message){
				setErrorText(res.message)
			}
			else{
				navigation('/')
			}
			
		})
	};
    const formSchema = [
        {
            name: 'name',
            placeholder: 'prueba',
            label: 'Nombre del producto:',
            type: 'text'
        },
        {
            name: 'price',
            label: 'Precio del producto:',
            placeholder: '$1000',
            type: 'number'
        },
        {
            name: 'thumbnail',
            label: 'Url de la imagen del producto:',
            placeholder: 'https://nombre-direccion-imagen',
            type: 'text'
        },
        {
            name: 'stock',
            label: 'Stock disponible del producto:',
            placeholder: '10',
            type: 'number'
        }
    ]
  return (
    <main>

        <Navbar/>
        
        <form className='form' onSubmit={handleCreateProduct}>
            <h1>Crear un producto</h1>
            {
                formSchema.map(input => {
                    return (
                        <div className='form-row' key={input.name}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input
                                type={input.type}
                                id={input.name}
                                name={input.name}
                                placeholder={input.placeholder}
                                value={formValues[input.name]}
                                onChange={handleChange}
                            />
					    </div>
                    )
                })
            }
            {errorText && <span className='error-text'>{errorText}</span>}
            <button className='btn-primary' type='submit'>Crear producto</button>
        </form>
    </main>
  )
}

export default NewProduct