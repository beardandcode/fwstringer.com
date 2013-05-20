
(function() {

   "use strict";

   var canvas = document.createElement("canvas"),
       context;

   document.getElementById('email-me').href = "mailto:" + [ 'f', '@', 'fwstringer', '.com' ].join('');

   canvas.width = document.documentElement.clientWidth;
   canvas.height = document.documentElement.clientHeight - 5;

   if (window.G_vmlCanvasManager) G_vmlCanvasManager.initElement(canvas);

   document.body.appendChild(canvas);

   context = canvas.getContext('2d');

   L.examples.tree.system.iterate(L.examples.tree.iterations, function(out) {

      new L.Turtle.Organic(
         L.examples.tree.state
            .withPosition(canvas.width - 350, canvas.height, 0), 
         L.turtle.fns
      ).render(out, context);

   });

}());
