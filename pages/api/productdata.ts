// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    _id: number;
    title: string;
    price: number;
    image: string;
    arimage: string;
    category: string;
}[];

const productData =[
    {
        _id:101,
        title:"Wood Chair",
        price:499,
        image:"https://i.ibb.co/yn4GxLj/chair.png",
        arimage:"https://i.ibb.co/gV1MBk7/archair.jpg",
        category:"chair"
    },
    {
      _id:102,
      title:"Wood Desk",
      price:899,
      image:"https://i.ibb.co/7Y7SXN1/desk.jpg",
      arimage:"https://i.ibb.co/GcFLLLJ/chair-ar.jpg",
      category:"desk"
    },
    {
      _id:103,
      title:"Soft Chair",
      price:899,
      image:"https://i.ibb.co/SsGn7b5/softchair.webp",
      arimage:"https://i.ibb.co/GcFLLLJ/chair-ar.jpg",
      category:"chair"
    },
    {
      _id:104,
      title:"Plastic Chair",
      price:999,
      image:"https://i.ibb.co/kSv8Ypy/plasticchair.webp",
      arimage:"https://i.ibb.co/GcFLLLJ/chair-ar.jpg",
      category:"chair"
    },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData);
}
