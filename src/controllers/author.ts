import { Request, Response } from 'express';
import Author from "../models/author";
import { parse, data } from '../utilities/pagination';

export const get = async(req: Request, res: Response): Promise<Response> => {
  const page = parseInt(req.query.page as string) || 0;
  const size = parseInt(req.query.size as string) || 10;
  const { limit, offset } = parse(page, size)

  let { order_by, order_type } = req.query as { order_by?: string; order_type?: string };

  try{
    const list = await Author.findAndCountAll({
      ...req.query.pagination == 'true' && {
        offset: offset,
        limit: limit
    },
    order: [[ order_by || 'id', order_type || 'DESC' ]],
    });
    return res.status(200).json({
        data: data(list, page, size),
        msg: "berhasil mendapatkan data",
        error: false,
    }); 
  }catch(err){
    console.log(err);
    return res.status(500).json({
        data: null,
        msg: "Gagal mengambil data",
        error: true,
    }); 
  }
}

export const post = async(req: Request, res: Response): Promise<Response> => {
    const body = req.body;

    try{
        const data = await Author.create(body);

        return res.status(200).json({
            data: data,
            msg: "berhasil membuat data",
            error: false,
          });
    }catch(err){
        console.log(err);

        return res.status(500).json({
            data: null,
            msg: "Gagal membuat data",
            error: true,
          }); 
    }
}

export const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params; // Mengambil id dari query params
    const body = req.body;
  
    try {
      const data = await Author.findByPk(id);
  
      if (!data) {
        return res.status(404).json({
          data: null,
          msg: "Data tidak ditemukan",
          error: true,
        });
      }
  
      await data.update(body);
  
      return res.status(200).json({
        data: data,
        msg: "Data berhasil diperbarui",
        error: false,
      });
    } catch (err) {
      console.log(err);
  
      return res.status(500).json({
        data: null,
        msg: "Gagal memperbarui data",
        error: true,
      });
    }
};

export const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params; // Mengambil id dari query params
  
    try {
      const data = await Author.findByPk(id);
  
      if (!data) {
        return res.status(404).json({
          data: null,
          msg: "Data tidak ditemukan",
          error: true,
        });
      }
  
      await data.destroy();
  
      return res.status(200).json({
        data: null,
        msg: "Data berhasil dihapus",
        error: false,
      });
    } catch (err) {
      console.log(err);
  
      return res.status(500).json({
        data: null,
        msg: "Gagal menghapus data",
        error: true,
      });
    }
};