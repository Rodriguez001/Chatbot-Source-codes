import axios from "axios";

export default async function handler(req, res) {
  const referer = req.headers.referer || req.headers.referrer; // get the referer from the request headers

  if (req.method !== "GET") {
    res.status(405).json({ message: "Method should be GET" });
  }
  //  else if (process.env.NODE_ENV !== "development") {
  //   if (!referer || referer !== process.env.APP_URL) {
  //     res.status(401).json({ message: 'Unauthorized' });
  //   }
  // }
  else {
    try {
      const { prompt } = req.query; 
      const botapi = process.env.BOTAPI_HOST
      const url = `http://${botapi}:8080/bot/chat?prompt=${prompt}`;
      
      const response = await axios.get(url);

      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
