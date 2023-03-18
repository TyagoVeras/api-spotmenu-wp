'use strict'
/* função para controlle e emissão de lista de seleção */

exports.sendListButtons = async (client, params) => {

    /* 
      params.number ex,.: 5516997141457@c.us
      params.fields ex.:  
                  {
                    buttonText: 'Cardápio',
                    description: "Selecione um ítem do cardápio",
                    sections: [{
                      title: 'Porções',
                      rows: [{
                        rowId: 'rowid1',
                        title: 'batata frita',
                        description: "Batatas frita acompanhada de queijo mutsarella, e bacon.",
                      },{
                        rowId: 'rowid2',
                        title: 'Filé Minhon',
                        description: "Porção de filé minhón, acebolado, com queijo.",
                      }]
                    }]
                  }
    */
                  
    return new Promise( async (resolve, reject) => {

                /* verificar se exite o cliente */
                if(!client){
                  resolve(false);
                  return;
                }

                if(!params){
                  resolve(false);
                  return;
                }

                //formatar função de listButtons
                let res = null;

                try{

                  res = await client.sendMessageOptions(params.number,null ,params.buttons);

                }catch(erro){
                  console.log("Erro ao enviar os buttons: ", erro);
                  resolve(false);
                  return;

                }


                if(res){
                  resolve(res);
                }else{
                  resolve(false);
                }


    });

}