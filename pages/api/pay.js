import axios from "axios";

export default async function handler(req, res) {
  console.log("API route recibio una llamada!");
  if (req.method === "POST") {
    try {
      const options = {
        method: "POST",
        url: "https://api.instapago.com/payment",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          //'Access-Control-Allow-Origin' : '*',
          //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: req.body,
      };
      console.log(options);
      const response = await axios.request(options);

      const responseData = response.data;
      console.log("Payment Response:", responseData);
      res.status(200).json(responseData);
    } catch (error) {
      console.error("Payment Error:", error);
      res.status(500).json({ error: "Payment error" });
    }
  } else {
    res.status(405).end(); // Method not allowed.
  }
}
