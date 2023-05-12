import prisma from "../../../lib/prisma";

const handler = async(req,res) => {
    if( req.method === 'POST' ){

        const { id } = req.body;

        const deleteBook = await prisma.baju.delete({
            where: {
              id: id,
            },
          })

        return res.status(200).json({message: 'speak berhasil dihapus'});
    }else{
        return res.status(404).json({ message: 'permintaan anda tidak diizinkan' })
    }
}

export default handler;