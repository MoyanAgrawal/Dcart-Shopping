import React,{useContext} from 'react'
import { ProductContext } from '../Store/ProductContext'
import ProductItem from './ProductItem'
export default function ProductList(props) {
    var data = useContext(ProductContext)
    var products = []
    if(props.mc=="All" && props.br=="All" && props.sc=="All")
    products=data
    else if(props.mc!="All" && props.br=="All" && props.sc=="All")
    products=data.filter((item)=>item.maincategory==props.mc)
    else if(props.mc=="All" && props.br=="All" && props.sc!="All")
    products=data.filter((item)=>item.subcategory==props.sc)
    else if(props.mc=="All" && props.br!="All" && props.sc=="All")
    products=data.filter((item)=>item.brand==props.br)
    else if(props.mc!="All" && props.br=="All" && props.sc!="All")
    products=data.filter((item)=>item.maincategory==props.mc && item.subcategory==props.sc)
    else if(props.mc!="All" && props.br!="All" && props.sc=="All")
    products=data.filter((item)=>item.maincategory==props.mc && item.brand==props.br)
    else if(props.mc=="All" && props.br!="All" && props.sc!="All")
    products=data.filter((item)=>item.brand==props.br && item.subcategory==props.sc)
    else
    products=data.filter((item)=>item.maincategory==props.mc && item.brand==props.br && item.subcategory==props.sc)
  return (
      <div className='row'>
          {
              products.map((item,index)=>{
                  return(
                    <div  key={index} className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-2'>
                        <ProductItem
                            name = {item.name}
                            pic = {item.pic1}
                            baseprice = {item.baseprice}
                            discount = {item.discount}
                            finalprice = {item.finalprice}
                            id = {item.id}
                        />
                    </div>
                  )
              })
          }
      </div>
  )
}
