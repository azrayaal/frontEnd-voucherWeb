import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CoinItem from '../../components/checkout/coinItem';
import PaymentItem from '../../components/checkout/paymentItem';
import './chekout.css';

export default function CheckOutForm() {
  const [dataItem, setDataItem] = useState({});
  const [dataCheckOut, setDataCheckOut] = useState({});

  useEffect(() => {
    const dataFromLocal = localStorage.getItem('data-item');
    const dataCheckOutLocal = localStorage.getItem('checkout-item');
    const dataLocal = JSON.parse(dataFromLocal);
    const itemCheckOut = JSON.parse(dataCheckOutLocal);

    setDataItem(dataLocal);
    setDataCheckOut(itemCheckOut);
  }, []);

  const IMG = process.env.ROOT_IMG;
  return (
    <div>
      <section class="bg-light checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30 my-5 rounded">
        <div class="mx-4">
          <div class="logo text-md-center text-start py-3">
            <h2 class="text-4xl fw-bold color-palette-1 mb-10 " style={{ color: '#FF2768' }}>
              Azrayaal
            </h2>
          </div>
          <div class="title-text pt-md-50 pt-0">
            <h2 class="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p class="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
          </div>
          <div class="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
            <div class="pe-4">
              <div class="cropped">
                <img src={`${IMG}/${dataItem.picture}`} class="img-fluid" alt="" />
              </div>
            </div>
            <div>
              <p class="fw-bold text-xl color-palette-1 mb-10">{dataItem.nameGame}</p>
              {/* <p class="color-palette-2 m-0">Category: Mobile</p> */}
            </div>
          </div>
          <hr />
          <CoinItem verifyID={dataCheckOut.verifyID} jumlahCoin={dataCheckOut.coinItem.jumlahCoin} jenisCoin={dataCheckOut.coinItem.jenisCoin} hargaCoin={dataCheckOut.coinItem.hargaCoin} />
          <PaymentItem bank_name={dataCheckOut.paymentItem.bank_name} />
          <label class="checkbox-label text-lg color-palette-1">
            I have transferred the money
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <div class="d-md-block d-flex flex-column flex-wrap align-items-center w-100  py-3 mx-auto ">
            <a class="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" href="./complete-checkout.html " role="button">
              Confirm Payment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
