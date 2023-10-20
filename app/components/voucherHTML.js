import React from 'react';

function VoucherHTMLContent({ paymentData }) {
  const {
    id,
    reference,
    sequence,
    approval,
    lote,
    datetime,
    amount,
  } = paymentData;

  return (
    <div className="p-4 border border-gray-700 rounded-lg mt-4">
      <table className="w-full bg-white">
        <tbody>
          <tr>
            <td colSpan="4" className="text-center font-normal text-sm">
              COPIA - CLIENTE
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="text-center font-bold text-2xl">
              <br /> BANESCO
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="text-center font-bold text-xl">
              <br /> COMPRA
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="text-center font-bold text-xl">
              <br />
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="h-8"></td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="4">
              TECNOLOGIA INSTAPAGO
            </td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="4">
              DEMOSTRACIÓN
            </td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="4">
              J-000000000
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="h-8"></td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="1">
              FECHA:
            </td>
            <td className="font-normal text-xs" colSpan="3">
              {datetime}
            </td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="1">
              NRO CUENTA:
            </td>
            <td className="font-normal text-xs" colSpan="2">
              000000******0000
            </td>
            <td className="text-right font-normal text-xs">'0'</td>
          </tr>
          <tr>
            <td className="font-normal text-xs">
              NRO. REF.:
            </td>
            <td className="font-normal text-xs">
              {reference}
            </td>
            <td className="text-right font-normal text-xs">
              LOTE:
            </td>
            <td className="text-right font-normal text-xs">
              {lote}
            </td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="1">
              APROBACION:
            </td>
            <td className="font-normal text-xs" colSpan="3">
              {approval}
            </td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="1">
              SECUENCIA:
            </td>
            <td className="font-normal text-xs" colSpan="3">
              {sequence}
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="h-8"></td>
          </tr>
          <tr>
            <td colSpan="4" className="text-center font-bold text-xl">
              <br /> MONTO BS. {amount}
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="h-8"></td>
          </tr>
          <tr>
            <td colSpan="4" className="text-center font-bold text-2xl">
              RIF: J-000000000
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="h-8"></td>
          </tr>
          <tr>
            <td colSpan="4" className="font-normal text-xs">
              <b> <br /> </b>
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="font-normal text-xs">
              <br />CREDITO
            </td>
          </tr>
          <tr>
            <td className="font-normal text-xs" colSpan="1">
              ID:
            </td>
            <td className="font-normal text-xs" colSpan="3">
              {id}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VoucherHTMLContent;
