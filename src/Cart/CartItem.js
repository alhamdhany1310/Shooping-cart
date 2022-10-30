import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { decrementWitchCheckingAction, increment } from '../app/features/Shopping/actions';

const CartItem = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="col-md-8">
      <div class="card mb-4 border-0 shadow bg-body">
        <div className="card-header bg-white py-3">
          <h5 className="mb-0">Cart (2 items)</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="rounded w-100" alt="Blue Jeans Jacket" />
              </div>
            </div>

            <div className="col-lg-9 mb-lg-0">
              <div className="row justify-content-between">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <p className="mb-0">
                    <strong>Blue denim shirt</strong>
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div class="d-flex quantity">
                    <button onClick={() => dispatch(decrementWitchCheckingAction(1))} class="btn border-secondary btn-sm rounded-start rounded-0">
                      <i class="fas fa-minus"></i>
                    </button>

                    <div class="input-group input-group-sm">
                      <input id="form1" min="0" name="quantity" value={count} type="number" class="rounded-0 form-control" />
                    </div>

                    <button onClick={() => dispatch(increment(1))} class="btn  btn-sm border-secondary rounded-end rounded-0">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-12">
                  <p className="mb-1">SHIRT-BLUE</p>
                  <p className="mb-1">BLUE</p>
                  <p>SIZE M</p>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="d-flax">
                    <span>
                      <i class="fa-solid fa-trash-can"></i> REMOVE ITEM
                    </span>
                    <span className="px-3">
                      <i class="fa-solid fa-heart"></i> MOVE TO WISHLIST
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <p>
                    <strong>$17.99</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp" className="rounded w-100" alt="Blue Jeans Jacket" />
              </div>
            </div>

            <div className="col-lg-9 mb-lg-0">
              <div className="row justify-content-between">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <p className="mb-0">
                    <strong>Red Hoodie</strong>
                  </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <div class="d-flex quantity">
                    <button class="btn border-secondary btn-sm rounded-start rounded-0">
                      <i class="fas fa-minus"></i>
                    </button>

                    <div class="input-group input-group-sm">
                      <input id="form1" min="0" name="quantity" value="1" type="number" class="rounded-0 form-control" />
                    </div>

                    <button class="btn  btn-sm border-secondary rounded-end rounded-0">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-12">
                  <p className="mb-1">HOODIE-RED</p>
                  <p className="mb-1">RED</p>
                  <p>SIZE M</p>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="d-flax">
                    <span>
                      <i class="fa-solid fa-trash-can"></i> REMOVE ITEM
                    </span>
                    <span className="px-3">
                      <i class="fa-solid fa-heart"></i> MOVE TO WISHLIST
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <p>
                    <strong>$35.99</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
