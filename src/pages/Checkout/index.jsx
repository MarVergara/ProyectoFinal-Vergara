import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { services } from "../../services";
import CartItem from "../../components/CartItem/CartItem";
import "./checkout.css";

export default function Checkout() {
  const { items, total, removeItem, clearCart } = useCart();
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const disabled = !values.name || !values.email || !values.phone || !items.length;

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (disabled) return;
    setLoading(true);
    try {
      const id = await services.orders.create({
        buyer: values,
        items: items.map(({ id, title, price, qty }) => ({ id, title, price, qty })),
        total: Number(total),
      });
      setOrderId(id);
      clearCart();
    } catch (err) {
      alert(err?.message || "Unexpected error creating order.");
    } finally {
      setLoading(false);
    }
  }

  if (orderId) {
    return (
      <section className="checkout">
        <h1>Thank you!</h1>
        <p>Your order was created successfully.</p>
        <p><strong>Order ID:</strong> {orderId}</p>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      {!items.length ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((it) => (
              <CartItem
                key={it.id}
                id={it.id}
                title={it.title}
                price={it.price}
                qty={it.qty}
                img={it.img}
                onRemove={removeItem}
              />
            ))}
          </ul>

          <div className="cart-summary">
            <p className="total">Total: <strong>${total.toFixed(2)}</strong></p>
            <button className="btn-link" onClick={clearCart}>Clear cart</button>
          </div>
        </>
      )}

      <form className="form" onSubmit={onSubmit}>
        <label>
          <span>Name</span>
          <input name="name" value={values.name} onChange={onChange} required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={values.email} onChange={onChange} required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" value={values.phone} onChange={onChange} required />
        </label>
        <button disabled={disabled || loading} className="btn-primary">
          {loading ? "Processing…" : "Confirm purchase"}
        </button>
      </form>
    </section>
  );
}
