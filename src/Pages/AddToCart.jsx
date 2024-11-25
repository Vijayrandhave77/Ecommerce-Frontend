import { useSelector, useDispatch } from "react-redux";
import { Remove, Inc, Dec,COUNT } from "../Stores/ManAddToCart";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function AddToCart() {

  const orderhandler = ()=>{
    toast.success("Order placed succesfully.", {
      theme: "colored",
       position: "top-center"
    })
  }
  const dispatch = useDispatch();
  const [finalLocalData, setfinalLocalData] = useState([]);

  let Price = finalLocalData.reduce((accu, calPrice) => {
    return (accu = accu + calPrice.price);
  }, 0);

  let totalPrice = 99 + Price;
  const setData = useSelector((state) => state.ManAddToCart.setData);
  const Quntity = finalLocalData.length
  useEffect(() => {
    const getlocalData = localStorage.getItem("cartData");
    setfinalLocalData(JSON.parse(getlocalData));
    dispatch(COUNT(finalLocalData.length))
  }, [setData]);

  let handleinc = (beg) => {
    dispatch(Inc(beg));
  };

  let handledec = (beg) => {
    dispatch(Dec(beg));
  };

  return (
    <>
      <div className="bag-page">
        {finalLocalData.map((beg) => (
          <div className="bag-items-container" key={beg._id}>
            <div className="bag-item-container">
              <div className="item-left-part">
                <img className="bag-item-img" src={beg.img1} loading="lazy" />
              </div>
              <div className="item-right-part">
                <div className="company">{beg.brand}</div>
                <div className="item-name">{beg.name}</div>
                <div className="price-container">
                  <span className="current-price">Rs {beg.price}</span>
                </div>
                <div className="return-period">
                  <span className="return-period-days">{beg.return} days</span>{" "}
                  return available
                </div>

                {/* <div className="quentity-area-box">
                  <div className="quantiiy-area">
                    <button
                      className="decrement"
                      onClick={() => handledec(beg)}
                    >
                      -
                    </button>
                    <div className="qnum">{beg.q}</div>
                    <button
                      className="increment"
                      onClick={() => handleinc(beg)}
                    >
                      +
                    </button>
                  </div>
                </div> */}
              </div>

              <div
                className="remove-from-cart"
                onClick={() => dispatch(Remove(beg))}
              >
                X
              </div>
            </div>
          </div>
        ))}

        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({} Items) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹ {Price}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Total Quantity</span>
              <span className="price-item-value priceDetail-base-discount">
                {Quntity}
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">₹ 99</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>

              <span className="price-item-value">₹ {totalPrice}</span>
            </div>
          </div>
          <button className="btn-place-order" onClick={orderhandler}>
            <div className="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
        <ToastContainer autoClose={1000}/>
      </div>
    </>
  );
}

export default AddToCart;
