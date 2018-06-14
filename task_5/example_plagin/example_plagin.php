<?php

 /*
        Plugin Name:  Plagin MargaritaFir.
    */

add_action('the_content', function($content) {
	return $content . '<hr><h5>&copy; MargaritaFIr!</h5>';
});
?>