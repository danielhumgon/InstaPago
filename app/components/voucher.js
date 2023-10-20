import React from 'react';
import VoucherHTML from './voucherHTML';

function VoucherComponent({ paymentInfo, clientData }) {
  return (
    <div className="border p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Datos del cliente</h2>
      <div className="mb-2">
        <strong>Nombre:</strong> {clientData.CardHolder}
      </div>
      <div className="mb-2">
        <strong>C.I:</strong> {clientData.CardHolderID}
      </div>
      <div className="mb-2">
        <strong>Voucher:</strong> 
        <VoucherHTML paymentData={paymentInfo} />
      </div>
    </div>
  );
}

export default VoucherComponent;

