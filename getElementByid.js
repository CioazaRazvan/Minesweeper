<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
            <!-- Bootstrap CSS -->
    <link rel="stylesheet" href=
"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
 
    <!-- Bootstrap Font Icon CSS -->
    <link rel="stylesheet" href=
"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
    <link href="css.css" rel="stylesheet" /> 
    <script src="main.js"></script>
  </head>
  <body class="centered-wrapper" onload="createButtons()">
    <script>
      function createButtons(){
        for(let i=1;i<=1;++i){
        let newButton = document.createElement("button");
        document.body.appendChild(newButton);
        newButton.style.width = '60px';
        newButton.style.height = '60px';

        newButton.id=""+(i);
        newButton.name=""+(i);
        }
        for(let i=1;i<=1;++i){
          let newButton = document.getElementById(""+i);
            newButton.addEventListener('click', () => {
            alert(newButton.id);     
        });
        }
        
      } 
      </script>
  </body>
</html>
