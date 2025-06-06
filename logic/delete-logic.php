<?php
    $data = file_get_contents(__DIR__."/../data/data.json");
    $data = json_decode($data,true);
    $expenses = $data["expenses"];

    if(isset($_POST["id"])){
        $encontrado = false;
        foreach($expenses as $expense){
            if($expense["id"] == $_POST["id"]){
                $encontrado = true;
            }
        }

        if($encontrado){

            $expenses = array_values(array_filter($expenses, callback: function($expense){
                return $expense["id"] !== $_POST["id"];
            }));

            $res = ["expenses" => $expenses];

            file_put_contents(__DIR__."/../data/data.json", json_encode($res,JSON_PRETTY_PRINT));

            $alerta = [
                "solution"=> true
            ];

        } else {
            $alert = [
                "solution" => false,
                "text" => "there isn't expense with 'id' => ".$_POST[" id"]
            ];
        }
    } else {
        $alert = [
            "solution" => false,
            "text"=> "id is not found"
        ];
    }

    echo json_encode($alerta)
?>