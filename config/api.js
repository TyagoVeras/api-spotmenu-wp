'use strict' 
/* link de referencia: https://github.com/open-wa/wa-automate-nodejs/issues/563#issuecomment-647030529 */

var configs = {  
  "files": {
        "return_patch_files": false, /* ao retornar arquivos recebidos nas mensagens - retornar false=base64 ou true= diretorio local do arquivo  */
        "send_patch_files":false, /* no envio de arquivos para mensagens, false = base64 e true= url do arquivo (parâmetros de envio) */
        "decript_file_chat":true /* descriptografar arquivo do chat */
  },
  "sessions": {
       "autoClose" : 2 /* minutos */
  },
  /* ==== configurar envio de post a um link ==== */
  "send_post_php":{
      "active":true,
      "post_url":{
        "link":"https://app.spotmenu.com.br/api/1.1/wf/whatsapp",
        "autenticar":false,
        "user":"",
        "passwd":""
      },
      "sendSeen":false, /* tornar nova msg recebida como lida ? */
      "sendForMe":false, /* enviar msg enviadas */
      "sendForGroups":false,
      "sendForStatus":false
  },
  "send_action_message":{
    "active":false,
    "post_url":{
      "link":"http://localhost/client_api/webhook.php",
      "autenticar":false,
      "user":"",
      "passwd":""
    },
    "sendSeen":false /* tornar nova msg recebida como lida ? */
} 
};

configs.sessions.autoClose = (configs.sessions.autoClose) * 60000; /* converter minutos em milisegundos */
 
 module.exports = configs;
