import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, putProduct } from '../../Fetching/productsFetching';


const EditProduct = () => {
    const [errorText, setErrorText ] = useState('')
	const [formValues, setFormValues] = useState({
		name: '',
		quantity: '',
		thumbnail: '',
        price: ''
	});
    const {pid} = useParams()

    useEffect(() => {
        getProductById(pid).then(product => {
            setFormValues({
                name: product.name,
                quantity: product.quantity,
                thumbnail: product.thumbnail,
                price: product.price
            })
        }) 
    }, [])

	const navigation = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleEditProduct = (e) => {
		e.preventDefault();
		putProduct(pid, {...formValues, price:Number(formValues.price), quantity: Number(formValues.quantity)}).then(res => {
			if(res.message === 'Token inválido'){
                navigation('/login')
            }
            else if(res.message){
				setErrorText(res.message)
			}
			else{
				navigation('/product/detail/' + pid)
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
            name: 'quantity',
            label: 'Stock disponible del producto:',
            placeholder: '10',
            type: 'number'
        }
    ]
  return (
    <main>

        <Navbar/>
        
        <form className='form' onSubmit={handleEditProduct}>
            <h1>Editar un producto</h1>
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
            <button className='btn-primary' type='submit'>Editar producto</button>
        </form>
    </main>
  )
}

export default EditProduct