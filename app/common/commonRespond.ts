export class CommonRes{

    static badRequest(res:any, message:string){
        return res.status(400).send({
            success: 'false',
            message: message
        });
    }
}