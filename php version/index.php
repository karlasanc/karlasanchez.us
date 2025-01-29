<?php

// Define the root directory constant
define('ROOT', __DIR__);

// Get the requested URL path
$urlPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Remove leading and trailing slashes from the URL path
$urlPath = trim($urlPath, '/');

// If the URL path is empty (i.e., root), set it to 'home'
if ($urlPath === '') {
    $urlPath = '/';
}

// Load the requested page based on the URL path
switch ($urlPath) {
  case '/':
    // Display the homepage
    include ROOT . '/views/home.php';
    break;
  case 'about':
    // Display the about page
    include ROOT . '/views/about.php';
    break;
  case 'skills':
    // Display the contact page
    include ROOT . '/views/skills.php';
    break;
  case 'contact':
    // Display the contact page
    include ROOT . '/views/contact.php';
    break;
  case 'portfolio':
    // Display the contact page
    include ROOT . '/views/portfolio.php';
    break;
  case 'database':
    // Display project1 page
    include ROOT . '/views/projects/database.php';
    break;
  case 'diceroll':
    // Display project1 page
    include ROOT . '/views/projects/diceroll.php';
    break;
  case 'eportal':
    // Display project1 page
    include ROOT . '/views/projects/eportal.php';
    break;
  case 'esystem':
    // Display project1 page
    include ROOT . '/views/projects/esystem.php';
    break;
  case 'registration':
    // Display project1 page
    include ROOT . '/views/projects/registration.php';
    break;
  default:
    // Page not found, display a 404 error
    echo "error";
    break;
}