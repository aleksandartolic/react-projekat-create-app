import { useContext, useRef } from 'react';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';
import Modal from './Modal';
import Input from './Input';
import MessageHolder from './MessageHolder';

const Delivery = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)} din`;
    const hasItems = cartCtx.items.length > 0;

    const nameInputRef = useRef();
    const addressInputRef = useRef();

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const handleItemsOrdered = () => {
        alert('Uspesno ste porucili. Hvala Vam.');
        window.location.reload();
    };

    const cartItems = (
        <ul className="cart-items">
        {cartCtx.items.map((item) => (
            <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}
        </ul>
    );

    const handleDeliveryRequest = (event) => {
        event.preventDefault();
    
        const name = nameInputRef.current.value;
        const lastname = addressInputRef.current.value;

        if(name.length === 0 || lastname.length === 0) {
            alert('Molimo Vas da unesete odgovarajuce podatke.');
        } else {
            let str = 'Hvala Vam za porudzbinu. Porucili ste po sledecim podacima: \n';
            str += 'Ime: ' + name + '\n';
            str += 'Prezime: ' + lastname + '\n';
            cartCtx.items.map((item) => {
                str += item.name + ' x' + item.amount + '\n';
            });
            str += 'Ukupno: ' + `${cartCtx.totalAmount.toFixed(2)} din`;

            alert(str);
            document.location.reload();
        }
        
        console.log(cartCtx.items);

        <MessageHolder />
    };

    return (
        <Modal onClose={props.onClose}>
        {cartItems}
        {cartCtx.items.length > 0 && 
        <div>
        <h1>Podaci o dostavi</h1>
        
        <form id="delivery-form" name="delivery-form" label="Dostava" onSubmit={handleDeliveryRequest}>
            <Input
                ref={nameInputRef}
                label='Ime'
                input={{
                id: 'delivery_' + props.id,
                type: 'text',
                min: '3',
                max: '15',
                defaultValue: '',
                }}
            />
            {/* <input className="delivery-form-input" type="text" name="name"></input> */}
            <Input
                ref={addressInputRef}
                label='Adresa'
                input={{
                id: 'delivery_' + props.id,
                type: 'text',
                min: '3',
                max: '25',
                defaultValue: '',
                }}
            />
            {/* <input className="delivery-form-input" type="text" name="address"></input> */}
            <button className="button delivery-button" type="submit" onClick={handleDeliveryRequest}><i className="fas fa-shipping-fast"></i>Zakazi dostavu</button>
        </form>
        </div>
        }
        {cartCtx.items.length <= 0 && <p>Niste odabrali ni jedan proizvod.</p>}
        </Modal>
    );
};

export default Delivery;