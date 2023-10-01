import PaymentComponent from './components/payment.js';

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-4">Pasarela de pago</h1>
        <p className="mb-4">Formulario de la pasarela de pago.</p>
        
        {/* Componente de pago */}
        <PaymentComponent />
      </div>
    </div>
  );
}

export default LandingPage;
