<?php
require_once '../../../php/EPCharacterCreator.php';
require_once('../other/panelHelper.php');
require_once('../other/gearHelper.php');
require_once('../other/bookPageLayer.php');

session_start();

$allAis = $_SESSION['cc']->getAis();
$currentAis = $_SESSION['cc']->getEgoAi();
$defaultAi = $_SESSION['cc']->getDefaultEgoAi();
foreach ($allAis as $m) {
  $m->book = getBookAbbreviation($m->name);
  $m->isOwned = $m->isInArray($defaultAi) || $m->isInArray($currentAis);
} 

$gears = $_SESSION['cc']->getGears();
$currentSoftGear = $_SESSION['cc']->getEgoSoftGears();
$softGear = array();
foreach($gears as $m){
  if($m->gearType == EPGear::$SOFT_GEAR){
    $m->book = getBookAbbreviation($m->name);
    $m->isOwned = $m->isInArray($currentSoftGear);
    array_push($softGear, $m);
  }
}

$freeGear=$_SESSION['cc']->getEgoSoftGears();
$result = array(
  'ai' => $allAis,
  'gear'=> $softGear,
  'free'=> $freeGear
);

header('Content-type: application/json');
echo json_encode($result);
?>
