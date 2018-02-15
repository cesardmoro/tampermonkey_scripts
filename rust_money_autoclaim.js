// ==UserScript==
// @name         Rust Money Autoclaim
// @namespace    https://github.com/cesardmoro/tampermonkey_scripts
// @version      1.2
// @description  Auto claim para rustmoney.com
// @author       Cesar Daniel Moro
// @match        https://rustmoney.com/free
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var intervalClaim = false;

    function claim(){
        if(!($('.btn.btn-green.nick-daily').is(':disabled'))){
            $('.btn.btn-green.nick-daily').trigger('click');
            window.refresh();
        }
    }
    function stopClaim(){
       $('#stopClaim').hide();
       $('#startClaim').show();
        clearInterval(intervalClaim);
    }
    function startClaim(){
      // alert('AutoClaim habilitado');
       $('#startClaim').hide();
       $('#stopClaim').show();
        
       intervalClaim = setInterval(claim, 10000);
    }

    function run(){
        $('.btn.btn-green.nick-daily').parent().append('<button class="btn btn-green" id="startClaim" >Habilitar Autoclaim</button>');
        $('.btn.btn-green.nick-daily').parent().append('<button class="btn btn-danger"  style="display:none;" id="stopClaim">Parar Autoclaim</button>');
        $('#startClaim').on("click", function() {
           startClaim();
        });
         $('#stopClaim').on("click", function() {
           stopClaim();
        });
        startClaim();

    }
    run();
    console.log('enabled');

   
})();
