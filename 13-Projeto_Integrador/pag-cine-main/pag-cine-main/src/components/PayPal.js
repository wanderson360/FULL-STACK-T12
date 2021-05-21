import React, { useRef, useEffect } from "react";
 const Paypal = () => {
  const paypal = useRef();
    
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Ingresso",
                amount: {
                  currency_code: "BRL",
                  value: 5.00,

                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {          
          const order = await actions.order.capture();                      
          console.log(order.value);
          window.location.href = "http://localhost:3000/ConfirmaCompra";   
                   
        },
        onError: (err) => {
          console.log(err);          
        },
      })
      .render(paypal.current);      
  }, []);

  return (
    <div>  
      <div ref={paypal} ></div>      
    </div>
  );
}

export default Paypal;
