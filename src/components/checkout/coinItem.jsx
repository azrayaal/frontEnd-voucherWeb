import React from 'react';
import { NumericFormat } from 'react-number-format';

export default function CoinItem(props) {
  const { verifyID, jumlahCoin, jenisCoin, hargaCoin } = props;

  return (
    <div class="purchase pt-md-50 pt-30">
      <h2 class="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
      <p class="text-lg color-palette-1 mb-20">
        Your Game ID <span class="purchase-details">{verifyID}</span>
      </p>
      {/* <p class="text-lg color-palette-1 mb-20">
        Order ID <span class="purchase-details">#GG001</span>
      </p> */}
      <p class="text-lg color-palette-1 mb-20">
        Item <span class="purchase-details">{`${jumlahCoin} ${jenisCoin}`}</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Price{' '}
        <span class="purchase-details">
          <NumericFormat value={hargaCoin} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
        </span>
      </p>
      {/* <p class="text-lg color-palette-1 mb-20">
        Tax (10%) <span class="purchase-details">Rp 4.228.000</span>
      </p> */}

      <p class="text-lg color-palette-1 mb-20">
        Total{' '}
        <span class="purchase-details color-palette-4">
          <NumericFormat value={hargaCoin} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
        </span>
      </p>
    </div>
  );
}
