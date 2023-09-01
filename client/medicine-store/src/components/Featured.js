import { useState, useEffect } from "react";
import "../css/Featured.css";
import ProductCard from "./ProductCard";


function Featured() {
  const [products, setProducts] = useState([]);
  const [type , setType] = useState("Vitamins");
  const [filter, setFilter] = useState([products]);

  useEffect(() => {
    import('../database/products.json')
      .then(data => {
        setProducts(data.products);
        setFilter(data.products);
      })
      .catch(error => {
        console.error('Error fetching local JSON data:', error);
      });
  }, []);

  
  useEffect(()=>{
    setFilter([]);
    for(let i=0;i<products.length;i++)
    {
        if(products[i].type[0] === type || products[i].type[1] === type)
        { 
          setFilter(filter => [...filter, products[i]]);
        }    
    }
  },[type])

  return (
    <div className="featured-container section-padding">
      <div className="featured-title">
        <h2>Featured Products</h2>
      </div>
      <div className="product-categories">
        <button className="active" onClick={()=>setType("Vitamins")} name="Vitamins">Vitamins</button>
        <button onClick={()=>setType("Face Care")}  name="Face Care">Face Care</button>
        <button onClick={()=>setType("Body Care")}  name="Body Care">Body Care</button>
        <button onClick={()=>setType("Medical Equipment")}  name="Medical Equipment">Medical Equiment</button>
        <button onClick={()=>setType("Health")}  name="Health">Health</button>
        {/* <button onClick={()=>setType("Personal Care")}  name="Personal Care">Personal Care</button> */}
        <button onClick={()=>setType("Muscle Care")}  name="Muscle Care">Muscle Care</button>
      </div>
      <div className="products-filtered"> 
          {filter.map((filter)=>(
            <ProductCard key={filter.id} props={filter}/>
          ))
            
          }
        
      </div>
     
    </div>
  );
}

export default Featured;
