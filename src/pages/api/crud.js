import prisma from "../../../lib/prisma";

const handler = async (req,res)  => {
    if(req.method === 'GET'){
        
        const book = await prisma.baju.findMany();

        return res.status(200).json(book);

    }else if(req.method === 'POST'){
        
        const { name , merk  } = req.body; 

        if(  !name ){
            return res.status(404).json({message: 'book and genre required '})
        }

        const addBook = await prisma.baju.create({
            data: {
                name: name,
                merk: merk,
            }
        })

        return res.status(200).json({message: 'book is genre '})
    }else if(req.method === 'PUT'){
        
        const { name , merk , id } = req.body; 

        if(  !name ){
            return res.status(404).json({message: 'book and genre required '})
        }

        const addBook = await prisma.baju.update({
            where: {
                id : id,
              },
              data: {
                name : name ,
                merk : merk
              },
        })

        return res.status(200).json({message: 'book is genre '})
    } 



};

export default handler;