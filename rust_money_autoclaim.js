// ==UserScript==
// @name         Rust Money Autoclaim
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rustmoney.com/free
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var intervalClaim = false;

    function claim(){
        $('.btn.btn-green.nick-daily').trigger('click');
    }
    function stopClaim(){
       $('#stopClaim').hide();
       $('#startClaim').show();
        clearInterval(intervalClaim);
    }
    function startClaim(btn){
       alert('se arranca el auto claim, se ejecuta 1 ves por minuto pulse stop para frenarlo');
       $('#startClaim').hide();
       $('#stopClaim').show();
        claim();
       intervalClaim = setInterval(claim, 60000);
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

    }
    run();
    console.log('enabled');

    // Your code here...
})();
