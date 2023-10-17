"use client";
import { useState } from "react";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_ID

function PaymentComponent() {
  const [paymentData, setPaymentData] = useState({
    KeyId: apiKey, // api key
    PublicKeyId: publicKey, // Usar Llave compartida
    Amount: "", // Monto
    Description: "Pago del producto",
    CardHolder: "", // Nombre del Tarjeta habiente
    CardHolderID: "", // Cédula del Tarjeta habiente
    CardNumber: "", // Numero de la tarjeta de crédito
    CVC: "", // Código secreto de la Tarjeta de crédito
    ExpirationDate: "", // MM/AAAA fecha de expiracion
    StatusId: "2", // 2 para "Pagar" (autorizacion)
    IP: "127.0.0.1", // Reemplazar con la ip del consumidor
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !paymentData.Amount ||
      isNaN(paymentData.Amount) ||
      parseFloat(paymentData.Amount) <= 0
    ) {
      newErrors.Amount = "Monto invalido";
    }

    if (!/^[a-zA-ZñÑ\s]+$/.test(paymentData.CardHolder)) {
      newErrors.CardHolder = "Nombre requerido";
    }

    if (!/^\d{6,8}$/.test(paymentData.CardHolderID)) {
      newErrors.CardHolderID = "Cedula invalida";
    }

    if (!/^\d{15,16}$/.test(paymentData.CardNumber)) {
      newErrors.CardNumber = "Numero de tarjeta invalido";
    }

    if (!isValidExpirationDate(paymentData.ExpirationDate)) {
      newErrors.ExpirationDate = "Fecha de expiracion invalida";
    }

    if (!/^\d{3}$/.test(paymentData.CVC)) {
      newErrors.CVC = "CVC invalido";
    }

    return newErrors;
  };
  // Validar fecha
  const isValidExpirationDate = (date) => {
    const today = new Date();
    const inputDate = new Date(`01/${date}`);
    return inputDate > today;
  };

  const handlePayment = async () => {
    console.log('Boton de pago clickeado!');
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {

        const options = {
          method: 'POST',
          url:'/api/pay',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Access-Control-Allow-Origin' : '*',
            //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
          data: paymentData
          
        } 
        console.log(options)
        const response = await axios.request(options);
  
        const responseData = response.data;
        console.log("Payment Response:", responseData);
        // Manejo de errores
      } catch (error) {
        console.error("Payment Error:", error);
        // Manejar error de pago aca
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Detalles del Pago</h2>
      <div className="mb-4">
        <label className="block text-gray-600">Monto a Debitar:</label>
        <input
          type="text"
          name="Amount"
          value={paymentData.Amount}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
        />
        <span className="text-red-500">{errors.Amount}</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">
          Nombre del Tarjeta habiente:
        </label>
        <input
          type="text"
          name="CardHolder"
          value={paymentData.CardHolder}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
        />
        <span className="text-red-500">{errors.CardHolder}</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">
          Cédula del Tarjeta habiente:
        </label>
        <input
          type="text"
          name="CardHolderID"
          value={paymentData.CardHolderID}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
        />
        <span className="text-red-500">{errors.CardHolderID}</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Numero de la tarjeta:</label>
        <input
          type="text"
          name="CardNumber"
          value={paymentData.CardNumber}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
        />
        <span className="text-red-500">{errors.CardNumber}</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">
          Fecha de expiración (MM/AAAA):
        </label>
        <input
          type="text"
          name="ExpirationDate"
          value={paymentData.ExpirationDate}
          onChange={handleChange}
          placeholder="MM/YYYY"
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
        />
        <span className="text-red-500">{errors.ExpirationDate}</span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">CVC:</label>
        <input
          type="text"
          name="CVC"
          value={paymentData.CVC}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
        />
        <span className="text-red-500">{errors.CVC}</span>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        onClick={handlePayment}
      >
        Pagar
      </button>
    </div>
  );
}

export default PaymentComponent;
