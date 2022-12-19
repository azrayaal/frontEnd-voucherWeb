import React from 'react';

export default function CoinItem() {
  return (
    <div class="purchase pt-md-50 pt-30">
      <h2 class="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
      <p class="text-lg color-palette-1 mb-20">
        Your Game ID <span class="purchase-details">masayoshizero</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Order ID <span class="purchase-details">#GG001</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Item <span class="purchase-details">250 Diamonds</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Price <span class="purchase-details">Rp 42.280.500</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Tax (10%) <span class="purchase-details">Rp 4.228.000</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Total <span class="purchase-details color-palette-4">Rp 55.000.600</span>
      </p>
    </div>
  );
}
