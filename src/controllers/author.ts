import { Request, Response } from 'express';
import Author from "../models/author";

export const get = async(req: Request, res: Response): Promise<Response> => {
    try{
        const list = await Author.findAll();

        return res.status(200).json({
            data: list,
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