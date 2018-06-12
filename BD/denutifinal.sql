-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-06-2018 a las 01:59:11
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `denutifinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `mostrarpagina` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `imagen`, `mostrarpagina`) VALUES
(43, 'Prueba de editar 2 parte', 'Editar productos\nDesde consola\nprimer punto\nCualquier cosa', 'image-1527998288-Clasico2.jpg', 0),
(45, 'Hummus de Pimenton', 'Producto con bastante pimenton', 'image-1528246001-ETIQUETAS DENUTI - FINALES ENERO-04.jpg', 1),
(46, 'Taboule', 'Taboule', 'image-1528246129-ETIQUETAS DENUTI - FINALES ENERO-01.jpg', 0),
(47, 'Hummus Tropical', 'Hummus Tropical', 'image-1528246064-ETIQUETAS DENUTI - FINALES ENERO-02.jpg', 0),
(49, 'Hummus de Aguacate', 'Hummus de Aguacate', 'image-1528245971-ETIQUETAS DENUTI - FINALES ENERO-05.jpg', 0),
(50, 'Hummus Cilantro', 'Hummus Cilantro', 'image-1528245915-ETIQUETAS DENUTI - FINALES ENERO-07.jpg', 0),
(51, 'Hummus Original', 'Hummus Original es el complemento perfecto para cualquier refrigerio o comida. Hecho con garbanzos sanos y aceite de oliva 100% puro, Hummus Original no solo es sabroso, tiene 0 g de grasa saturada por porciÃ³n.', 'image-1528245638-ETIQUETAS DENUTI - FINALES ENERO-03.jpg', 0),
(52, 'Hummus de Ajo', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus mollitia totam facere ipsam dolorem nisi aliquam assumenda repellat deserunt tempora, pariatur, est voluptatem? Quaerat eveniet autem nihil magni perferendis incidunt?', 'image-1528245534-ETIQUETAS DENUTI - FINALES ENERO-06.jpg', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `ingredientes` text NOT NULL,
  `preparacion` text NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id`, `nombre`, `ingredientes`, `preparacion`, `imagen`) VALUES
(2, 'Fajitas de pollo y hummus', '2 pechugas de pollo. 4 cucharadas de curry molido.\n4 tomates. 80 g de aceitunas negras sin hueso.\nRÃºcula fresca. Cilantro fresco.\n8 obleas de fajitas de trigo. Aceite de oliva.\nSal. Hummus:\n1 bote de garbanzos cocidos Luengo. 1 diente de ajo pequeÃ±o.\n1 cucharadita de tahine. Zumo de 1 limÃ³n.\nAgua frÃ­a.', '1. Sazonar la pechuga y espolvorear homogÃ©neamente el curry. Cocinar en una sartÃ©n antiadherente con unas gotas de aceite, a fuego medio, dorando su exterior y cocinando su interior.\n2. Pelar los tomates, despepitar y picar en cubos menudos. Picar las aceitunas en el mismo tamaÃ±o.\n3. Para el hummus: lavar los garbanzos Luengo sacados de la conserva sobre un colador de malla fina para retirar el jugo de cocciÃ³n adherido, dejar escurrir.\n4. Introducir dentro de un vaso todos los ingredientes, triturar aÃ±adiendo el agua hasta obtener un purÃ© fino y sedoso. Corregir el punto de sal y pimienta al gusto.\n5. Cortar el pollo en finas lonchas. En una sartÃ©n caliente, tostar las fajitas por ambas caras, retirar y reservar.\n6. Montar sobre cada fajita los ingredientes. Primero untar el hummus sobre la superficie, luego colocar unas laminas de pollo, esparcir el tomate y las aceituna, aÃ±adir hojas de rÃºcula y el cilantro a gusto. Cerrar sobre si mismo dejando atrapado el contenido en su interior.', 'image-1528127958-Fajittas de pollo y hummus.jpg'),
(3, 'Receta 4', '2 Gr de aceite de oliva\n1 Cucharadita de sal\n1 Pizca de pimienta\n400 Gr de pollo', 'Precaliente el horno a 300 grados', 'image-1528090427-Burritos.jpg'),
(5, 'fghj', 'bnm', 'hjk', 'image-1528090758-receta-hummus-con-tortitas.jpg'),
(6, 'Hummus pizza', '1 taza de garbanzos cocidos y escurridos (sirven de bote)\n1 cucharada de tahini\n1 diente de ajo (pelado y sin nervio)\n3 cucharadas de levadura de cerveza desamargada\n1 cucharada de triple concentrado de tomate\n1 tomate seco (rehidratado en agua)\nÂ½ cucharadita de orÃ©gano\n1 cucharada de aceite de oliva\nÂ¼ de cucharadita de sal\nPara decorar: aceite de oliva, orÃ©gano y pimentÃ³n dulce', 'BÃ¡telo todo junto con la batidora hasta obtener una crema homogÃ©nea, sin trocitos.\nPuedes servirlo con un chorrito de aceite de oliva, orÃ©gano y pimentÃ³n dulce, y si quieres tambiÃ©n con un poco de levadura de cerveza y pimienta negra reciÃ©n molida.', 'image-1528142707-Burritos.jpg'),
(8, 'Hummus con leche de coco y shichimi togarashi', '400 gramos de garbanzos cocidos\n80 gramos de leche de coco*\n7 gramos de jengibre fresco\n1 diente de ajo grande\n10 gramos de tahini\nc/n de cilantro fresco (al gusto)\n1/2 c/c de comino molido\n1/2 c/c de pimienta negra molida\nc/n de shichimi togarashi\naceite de oliva virgen extra\nsal\npan de gambas.', 'Este purÃ© se puede hacer triturando a mano, obteniendo asÃ­ una textura mÃ¡s rÃºstica, pero generalmente se hace con la batidora, pudiendo dejar la textura tan fina como se desee, nosotros preferimos que no quede muy fino y ademÃ¡s muy espeso.\n\nUna vez que los garbanzos estÃ©n cocidos y escurridos, ponlos en el recipiente de la batidora o Thermomix, aÃ±ade el jengibre previamente pelado y cortado en trozos. AÃ±ade tambiÃ©n el ajo pelado y sin el germen del interior, incorpora el tahini (mejor si es tahini casero), las hojas de cilantro, el comino, la pimienta, una pizca de shichimi, sal y un hilo de aceite de oliva.', 'image-1528250656-hummus_coco1.jpg'),
(9, 'Hummus con kalamata y hierbas', '1 taza de garbanzos cocidos y escurridos (sirven de bote)\n10-12 aceitunas kalamata (sin hueso)\n1 cucharada de pasta de albahaca (o 5-6 hojas de albahaca fresca grandes)\n1 cucharada de perejil fresco (un manojo pequeÃ±o sin tallos)\n1 cucharada de orÃ©gano\n1 cucharada de tahini (para mi gusto mejor el tahini blanco, pero sirve el tostado)\n1 cucharada de zumo de limÃ³n reciÃ©n exprimido\n1/2 diente de ajo (pelado y sin nervio)\nUna pizca de comino en polvo\nPara decorar: aceite de oliva y unas aceitunas kalamata', 'Bate todos los ingredientes juntos hasta lograr una crema suave y sin trocitos. PruÃ©balo y aÃ±ade una pizca de sal si lo ves necesario (las aceitunas ya son bastante saladas). SÃ­rvelo con una pizca de aceite por encima y unas aceitunas.', 'image-1528141229-Hummus con kalamata y hierbas.jpg'),
(10, 'Hummus con tapenade y piquillos', 'Rebanadas de pan tantas como se quieran degustar\nhummus\ntapenade\npimientos del piquillo en tiras\naceite de oliva virgen extra.\n', '100 gramos de garbanzos cocidos\n2 c/s de tahini aprox\n2 dientes de ajo sin el germen\nel zumo de medio limÃ³n\nunas ramitas de cilantro fresco\naceite de oliva virgen extra\ncomino en polvo\npimentÃ³n picante o dulce\npimienta negra reciÃ©n molida\nsal.', 'image-1528251379-hummus_piquillos_tapenade.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
