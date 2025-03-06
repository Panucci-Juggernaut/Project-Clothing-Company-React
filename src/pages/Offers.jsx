import { useState } from "react"

export default function Offers() {
  const [items] = useState([
    { title: 'Switch Hoodie', price: 11999 },
    { title: 'Switch Sneakers', price: 34999 },
    { title: 'Switch Tee', price: 12999 }
  ])

  return (
    <div>
      <h3>Latest Offers</h3>
      <div className="offers">
        {items.map(item => (
          <div key={item.title}>
            <img src="https://placehold.co/350x200" alt="product" />
            <h4>{item.title}</h4>
            <p>&#8358;{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}