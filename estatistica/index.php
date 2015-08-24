<!DOCTYPE html>
<html>
<head>
    <title>Estatistica teste</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />

<style>
form{
  width: 200px;
  margin:auto;
}
</style>
</head>
<body>
<?php 
//mexi
 if(isset($_POST['consultar'])){
  
  $populacao = $_POST['populacao'];
  $fixa1 = 0.25;
  $confiab = $_POST['confiabilidade'];


    if($confiab == 1){
        $confiab2 = 2.57;
        $confiab = 2.57 * 2.57;
    }

     elseif ($confiab == 2){
         $confiab2 = 1.96;
        $confiab = 1.96 * 1.96;
    }
     elseif($confiab == 3){
         $confiab2= 1.64;
        $confiab = 1.64 * 1.64;

    }else {
        $confiab2 = $confiab;
        $confiab = $confiab * $confiab;

    }





     $erro = $_POST['erro'];
     $erro1 = $erro /100;
  $erroResult = $erro1 * $erro1 ;
  $dividendo = $populacao * $fixa1 * $confiab;
  $populacao2 = $populacao - 1;
  $divisor = $fixa1 * $confiab + $populacao2 * $erroResult;
  $result = $dividendo / $divisor;

     $result = ceil($result);
     echo  "<p align='center'>{$dividendo}</p>";
     echo  "<p align='center'>{$divisor}</p>";
     echo  "<p align='center'>{$result}</p>";

     echo  $populacao , " * ", $fixa1 ," * " ,$confiab2 ,"²                  =  ", $dividendo, "<br/>" ;
     echo "------------------------------------ <br/>";



     echo $fixa1, " * ", $confiab2, "²" , " + "  ,$populacao2 , " * ", $erro1 , "²         = ",$divisor ;


}
?>
<form method="post" enctype="multipart/form-data">
 
<div class="form-group">
    <label>População</label>
    <input type="text" class="form-control" name="populacao" placeholder="ex: 10000">
  </div>
  <div class="form-group">
    <label">Confiabilidade</label>
    <input type="text" class="form-control" name="confiabilidade" placeholder="1 - 2.57 , 2 - 1.96 , 3 - 1.64">
  </div>  
 <div class="form-group">
    <label">Erro</label>
    <input type="text" class="form-control" name ="erro" placeholder="ex: 5">
  </div> 
  <button type="submit" name="consultar" class="btn btn-default">Calcular</button>

</form>



</body>
</html>