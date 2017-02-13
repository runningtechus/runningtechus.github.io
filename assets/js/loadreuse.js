$( document ).ready(function() {
    $("#headeritems").load("reuse/headeritems.html");
    $("#footer").load("reuse/footer.html");
    loadScripts(["assets/js/main.js"],noop());
});

function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function run(){
        if(array.length!=0){
            loader(array.shift(), run);
        }else{
            callback && callback();
        }
    })();
}

function noop(){}