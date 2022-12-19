import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { setCheckout } from '../../services/pages';

export default function CheckoutConfirmation() {
  const [checkbox, setCheckBox] = useState(false);

  const onSubmit = async () => {
    const dataItemFromLocal = localStorage.getItem('data-item');
    const dataTopupFromLocal = localStorage.getItem('checkout-item');
    const dataItem = JSON.parse(dataItemFromLocal);
    const dataTopup = JSON.parse(dataTopupFromLocal);

    if (!checkbox) {
      toast.error('Pastikan anda telah melakukan pembayaran', {
        theme: 'colored',
      });
    }

    const data = {
      verifyId: dataTopup.verifyID,
      nameGame: dataItem.nameGame,
      payment: dataTopup.paymentItem.bank_name,
      jenisCoin: dataTopup.coinItem.jenisCoin,
      jumlahCoin: dataTopup.coinItem.jumlahCoin,
      hargaCoin: dataTopup.coinItem.hargaCoin,
      total: dataTopup.coinItem.hargaCoin,
    };

    console.log(data);

    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.message, {
        theme: 'colored',
      });
    } else {
      toast.success('Check-Out Berhasil!!', {
        theme: 'colored',
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <label class="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckBox(!checkbox)} />
        <span class="checkmark"></span>
      </label>
      <div class="d-md-block d-flex flex-column flex-wrap align-items-center w-100  py-3 mx-auto" onClick={onSubmit}>
        <a class="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" href="/checkout-succes" role="button">
          Confirm Payment
        </a>
      </div>
    </>
  );
}
