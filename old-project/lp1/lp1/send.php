<?php

$message = 'Заявка с нового лендинга: '.$_GET['phone'];
file_put_contents('1.txt', $message."\n", FILE_APPEND );
mail('valeravilks@gmail.com', 'Заявка с лендинга', $message);

echo 'Успешно отправлено';