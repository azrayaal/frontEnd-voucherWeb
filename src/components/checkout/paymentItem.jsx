import React from 'react';

export default function PaymentItem() {
  return (
    <div class="payment pt-md-50 pb-md-50 pt-10 pb-10">
      <h2 class="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
      <p class="text-lg color-palette-1 mb-20">
        Your Account Name <span class="purchase-details">Masayoshi Angga Zero</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Type <span class="payment-details">Worldwide Transfer</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Bank Name <span class="payment-details">Mandiri</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Bank Account Name <span class="payment-details">PT Store GG Indonesia</span>
      </p>
      <p class="text-lg color-palette-1 mb-20">
        Bank Number <span class="payment-details">1800 - 9090 - 2021</span>
      </p>
    </div>
  );
}
