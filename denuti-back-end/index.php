<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli('localhost', 'root', '', 'denutifinal');

//Configuración de abeceras
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$app->get("/pruebas", function() use($app, $db){
	echo "Hola Mundo desde SLIM PHP";	
});

$app->get("/pruebas2", function() use($app){
	echo "Hola Mundo desde SLIM PHP CON RODRIGO";
});

//DEVOLVER TODOS LOS PRODUCTOS
$app->get('/productos', function()use($db,$app){
	$sql = 'SELECT * FROM productos ORDER BY id DESC;';
	$query = $db->query($sql);

	$productos = array();
	while($producto = $query->fetch_assoc()){
		$productos[] = $producto;
	}
	$result = array(
		'status' => 'succes',
		'code' => 200,
		'data' => $productos
	);

	echo json_encode($result);
});

// DEVOLVER UN SOLO PRODUCTO
$app->get('/producto/:id', function($id) use($db,$app){
	$sql = 'SELECT * FROM productos WHERE id = '.$id;
	$query = $db->query($sql);
	
	$result = array(
		'status' => 'error',
		'code' => 404,
		'message' => 'Producto no disponible'
	);

	if($query->num_rows == 1){
		$producto = $query->fetch_assoc();

		$result = array(
			'status' => 'succes',
			'code' => 200,
			'data' => $producto
	);
	}
	echo json_encode($result);
});

//ELIMINAR UN PRODUCTO
$app->get('/borrar-producto/:id', function($id) use($db,$app){
	$sql = 'DELETE FROM productos WHERE id = '.$id;
	$query = $db->query($sql);
	
	if($query){
		$result = array(
			'status' => 'succes',
			'code' => 200,
			'message' => 'Producto eliminado correctamente !!'
		);
	}else{
		$result = array(
			'status' => 'error',
			'code' => 404,
			'message' => 'Producto NO eliminado !!'
		);
	}
	echo json_encode($result);
});

//ACTUALIZAR UN PRODUCTO
$app->post('/actualizar-producto/:id', function($id) use($db,$app){
	$json = $app->request->post('json');
	$data = json_decode($json,true);

	$sql = "UPDATE productos SET ".
			"nombre = '{$data["nombre"]}',".
			"descripcion = '{$data["descripcion"]}',";
	if(isset($data['imagen'])){
		$sql .= "imagen = '{$data["imagen"]}',";
	}
			
	$sql .= "mostrarpagina = '{$data["mostrarpagina"]}' WHERE id = {$id}";
	$query = $db->query($sql);
	
	if($query){
		$result = array(
			'status' => 'success',
			'code' => 200,
			'message' => 'Producto actualizado Correctamente !!'
		);
	}else{
		$result = array(
			'status' => 'error',
			'code' => 404,
			'message' => 'Producto NO se ha actualizado !!'
		);
	}
	echo json_encode($result);
});

//SUBIR IMAGEN PRODUCTO
$app->post('/subir-imagen',function() use($db,$app){
	$result = array(
		'status' => 'error',
		'code' => 404,
		'message' => 'El archivo no se ha subido  JODER!!'
	);
	if(isset($_FILES['uploads'])){
		$piramideUploader = new PiramideUploader();

		$upload = $piramideUploader->upload('image', "uploads", "uploads", array('image/jpeg','image/png', 'image/gif'));
		$file = $piramideUploader->getInfoFile();
		$file_name = $file['complete_name'];
		
		if(isset($upload) && $upload["uploaded"] == false){
			$result = array(
				'status' => 'error',
				'code' => 404,
				'message' => 'El archivo no se ha subido'
			);			
		}else{
			$result = array(
				'status' => 'succes',
				'code' => 200,
				'message' => 'El archivo se ha subido exitosamente!!',
				'nombrearchivo' => $file_name
			);
		}		
	}

	echo json_encode($result);
});

//GUARDAR PRODUCTOS
$app->post("/productos", function() use($app, $db){
	$json = $app->request->post('json');
	//$json = $app->request->getBody();
	
	$data = json_decode($json,true);

	if(!isset($data['nombre'])){
		$data['nombre']=null;
	}
	if(!isset($data['descripcion'])){
		$data['descripcion']=null;
	}
	if(!isset($data['imagen'])){
		$data['imagen']=null;
	}
	if(!isset($data['mostrarpagina'])){
		$data['mostrarpagina']=null;
	}	

	$query = "INSERT INTO productos VALUES(NULL,".
			 "'{$data['nombre']}',".
			 "'{$data['descripcion']}',".
			 "'{$data['imagen']}',".
			 "'{$data['mostrarpagina']}'".
				");";

	// var_dump($query);

	$insert = $db->query($query);

	$result = array(
			'status' => 'error',
			'code' => 404,
			'message' => 'El producto NO se ha creado'
	);

	if($insert){
		$result = array(
			'status' => 'succes',
			'code' => 200,
			'message' => 'Producto creado exitosamente'
		);
	}

	echo json_encode($result);
});

//Backend Recetas
//DEVOLVER TODAS LAS RECETAS
$app->get('/recetas', function()use($db,$app){
	$sql = 'SELECT * FROM recetas ORDER BY id DESC;';
	$query = $db->query($sql);

	$recetas = array();
	while($receta = $query->fetch_assoc()){
		$recetas[] = $receta;
	}
	$result = array(
		'status' => 'succes',
		'code' => 200,
		'data' => $recetas
	);

	echo json_encode($result);
});

// DEVOLVER UNA SOLA RECETA
$app->get('/receta/:id', function($id) use($db,$app){
	$sql = 'SELECT * FROM recetas WHERE id = '.$id;
	$query = $db->query($sql);
	
	$result = array(
		'status' => 'error',
		'code' => 404,
		'message' => 'Receta no disponible'
	);

	if($query->num_rows == 1){
		$receta = $query->fetch_assoc();

		$result = array(
			'status' => 'succes',
			'code' => 200,
			'data' => $receta
	);
	}
	echo json_encode($result);
});

//ELIMINAR UNA RECETA
$app->get('/borrar-receta/:id', function($id) use($db,$app){
	$sql = 'DELETE FROM recetas WHERE id = '.$id;
	$query = $db->query($sql);
	
	if($query){
		$result = array(
			'status' => 'succes',
			'code' => 200,
			'message' => 'Receta eliminada correctamente !!'
		);
	}else{
		$result = array(
			'status' => 'error',
			'code' => 404,
			'message' => 'Receta NO eliminado !!'
		);
	}
	echo json_encode($result);
});

//ACTUALIZAR UNA RECETA
$app->post('/actualizar-receta/:id', function($id) use($db,$app){
	$json = $app->request->post('json');
	$data = json_decode($json,true);

	$sql = "UPDATE recetas SET ".
			"nombre = '{$data["nombre"]}',".
			"ingredientes = '{$data["ingredientes"]}',".
			"preparacion = '{$data["preparacion"]}',";
	if(isset($data['imagen'])){
		$sql .= "imagen = '{$data["imagen"]}'";
	}
			
	$sql .= "WHERE id = {$id}";
	$query = $db->query($sql);
	
	if($query){
		$result = array(
			'status' => 'success',
			'code' => 200,
			'message' => 'Receta actualizada Correctamente !!'
		);
	}else{
		$result = array(
			'status' => 'error',
			'code' => 404,
			'message' => 'Receta NO se ha actualizado !!,SQL '.$sql
		);
	}
	echo json_encode($result);
});

//GUARDAR RECETAS
$app->post("/recetas", function() use($app, $db){
	$json = $app->request->post('json');
	//$json = $app->request->getBody();
	
	$data = json_decode($json,true);

	if(!isset($data['nombre'])){
		$data['nombre']=null;
	}
	if(!isset($data['ingredientes'])){
		$data['ingredientes']=null;
	}
	if(!isset($data['imagen'])){
		$data['imagen']=null;
	}
	if(!isset($data['preparacion'])){
		$data['preparacion']=null;
	}	

	$query = "INSERT INTO recetas VALUES(NULL,".
			 "'{$data['nombre']}',".
			 "'{$data['ingredientes']}',".
			 "'{$data['preparacion']}',".
			 "'{$data['imagen']}'".			 
				");";

	//var_dump($query);

	$insert = $db->query($query);

	$result = array(
			'status' => 'error',
			'code' => 404,
			'message' => 'La Receta NO se ha creado, query '.$query
	);

	if($insert){
		$result = array(
			'status' => 'succes',
			'code' => 200,
			'message' => 'Recta creada exitosamente'
		);
	}

	echo json_encode($result);
});

$app->run();