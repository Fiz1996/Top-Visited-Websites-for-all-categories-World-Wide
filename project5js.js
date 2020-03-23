/** 
<!--File Information -->
<!--Document Name:  Prject5js.txt -->
<!--Author: Faisal Aleissa -->
<!--Date Created: 12/03/2019 -->
<!--Date Updated: 12/03/2019 ( footer margin top has been added)-->
<!-- Description:This is the main file, will create the sever ,
 create the output for project5.json,
 and will display the file (project1.html with the picture) successfully in the bowser.
  Check the attached output file.
   Open your browser 
   and enter the following address http://127.0.0.1:7000/ ;
    the project1.html, which include the picture will displayed as your first proje
ct was displayed including the picture. Check the attached output >
<!-- ******************************************************************** -->
*/
// reading Json file

var fs = require('fs');
fs.readFile('Project5json.json','utf8',function (err,data){
    if(err) throw err;
    var jsonData =JSON.parse(data);
    console.log("------- For Better Decisions  ----------");
    for(var i=0; i < jsonData.length; ++i){
        console.log("Web Site Number: "+jsonData[i].web_id);
        console.log("Name: "+jsonData[i].name);
        console.log("Category: "+jsonData[i].category);
        console.log("Pages/Visit: "+jsonData[i].page_visit);
        console.log('- - - - - - - - - - - - - - - - - - - - -');
    }
});

// reading html
var http = require('http');

var fs = require('fs');

var path = require('path');

http.createServer(function (request, response) {

  console.log('request starting...');



   

  var filePath = '.' + request.url;

  if (filePath == './')

      filePath = './project1html.html';



  var extname = path.extname(filePath);

  var contentType = 'text/html';

  switch (extname) {

      
      case '.css':

          contentType = 'text/css';

          break;

      

      case '.png':

          contentType = 'image/png';

         

  }

fs.readFile(filePath, function(error, content) {

      if (error) {

          if(error.code == 'ENOENT'){

              fs.readFile('./404.html', function(error, content) {

                  response.writeHead(200, { 'Content-Type': contentType });

                  response.end(content, 'utf-8');

              });

          }

          else {

              response.writeHead(500);

              response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');

              response.end(); 

          }

      }
      else {

          response.writeHead(200, { 'Content-Type': contentType });

          response.end(content, 'utf-8');

      }
  });

}).listen(7000);
console.log('Server running at  http://127.0.0.1:7000/')

 



