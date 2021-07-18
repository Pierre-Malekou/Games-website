 document.write("<br>chien</br>");
 var time = new Date();
 if (time >= 6 && time < 19) {
     document.write("bonjour");
 } else if (time >= 18 && time < 22) { document.write("<i>bonsoir</i>"); } else { document.write("<i><br>bonne fin de soiree</br></i>") }
 str1 = "read"
 str2 = "red"
 document.write(str1.fontcolor(str2));
 str = "something"
 document.write(str.bold());
 compt = 1;
 while (compt < 9) {
     document.write("ligne:" + compt + "<br>");
     compt++;
 }
 document.write("<tableborder=9>");
 document.write("<tr>");
 document.write("<td>");
 document.write("votre texte ");
 document.write("</td>");
 document.write("<td>");
 document.write("votre texte");
 document.write("</td>");
 document.write("</tr>");
 document.write("</table>");

 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');

 canvas.width = 1290;
 canvas.height = 140;

 // ctx.fillRect(100, 100, 100, 100)
 // ctx.fillect(160, 160, 101, 60)

 //ctx.beginPath();
 //ctx.moveTo(75, 50);
 //ctx.lineTo(400, 300);
 // ctx.stroke();


 //ctx.beginPath();
 // ctx.arc(75, 75, 50, 0, 2 * Math.PI);
 //ctx.fillStyle = 'yellow';
 //ctx.strokeStyle = 'yellow';
 //ctx.lineWidth = 6;
 //ctx.fill()
 //ctx.stroke();

 var x = 75;
 var v = 10;

 function anim() {
     requestAnimationFrame(anim);
     console.log("hello");
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     ctx.beginPath();
     ctx.arc(x, 75, 50, 0, 2 * Math.PI);
     ctx.fillStyle = 'red';
     ctx.strokeStyle = 'red';
     ctx.fill();
     ctx.stroke();


     x += v;
     if (x + 50 > canvas.width || x - 50 < 0) {
         v = -v;
     }
 }
 anim();