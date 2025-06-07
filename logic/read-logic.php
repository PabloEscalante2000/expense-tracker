<?php
    if(isset($_POST["id"])){

        $id = $_POST["id"];

        $json = file_get_contents(__DIR__."/../data/data.json");
        $data = json_decode($json, true);
        $expenses = $data["expenses"];

        $alerta = [
            "solution" => false,
            "text" => "There is no expense with the id: ".$id
        ];

        foreach($expenses as $expense){
            if($expense["id"] === $id){
                $alerta = $expense;
                $alerta["solution"] = true;
                break;
            }
        }
    }  else {
        $alerta = [
            "solution" => false,
            "text" => "id is not valid"
        ];
    }

    echo json_encode($alerta)
?>