<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'denuti');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '3uqx[xxHZb:{<gWCVT&vP#zv$iR/keJLao,Rstz/dj/w2vF*w6yfnjyR=aUQ2/QM');
define('SECURE_AUTH_KEY', 'I(LRrL@4iWL(5q954Zm9QEltL3Z`T>YAeEk^t(4 {.Z):YKes-{<pi}|v-h,N4MQ');
define('LOGGED_IN_KEY', 'H~^?4p*T{W*Lp?Wcbh-H+6` M?XV-?%eLT)F,8a76gwG/8dArc7I]H`5c^s7KES8');
define('NONCE_KEY', 'Xt/yg}DBxKGnKA~1WUI|j8azYdXXe~_78~%&r<uAQ9W^|$[{|&)dd!D5o{>YQ]C:');
define('AUTH_SALT', 'cwA#Q/4Jpd7)9<dY#a9x5/mwcDp@{.TPh]g?>Ce~^_AP(ZS<hRu)0`%_>sccIki,');
define('SECURE_AUTH_SALT', 'DgPsoT$?gqyX 8Pu.((CMH1`MlQIFW0-hIW`_)4V#%(a |(d@sJk2OFa4GFr4fq2');
define('LOGGED_IN_SALT', 'OxRsqKiM388l)rsVv5q4sE+^p&hfQy&E|D,m;JS?*L]QL4g`(?~,9B XBP-0ax^^');
define('NONCE_SALT', 'Ox3a/{%T/Te`u0|iu.e^m)O=rHG?[G4-|lIdw7Nhv+ xF9W<vbN@v NtuQgJzA}s');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

