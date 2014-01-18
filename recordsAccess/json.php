<?php

/**
 * PHP REST SQL XML renderer class
 * This class renders the REST response data as XML.
 */
class PHPRestSQLRenderer {
   
    /**
     * @var PHPRestSQL PHPRestSQL
     */
    var $PHPRestSQL;
   
    /**
     * Constructor.
     * @param PHPRestSQL PHPRestSQL
     */
    function render($PHPRestSQL) {
        $this->PHPRestSQL = $PHPRestSQL;
        switch($PHPRestSQL->display) {
            case 'database':
                $this->database();
                break;
            case 'table':
                $this->table();
                break;
            case 'row':
                $this->row();
                break;
        }
    }
    
    /**
     * Output the top level table listing. HTML.
     */
    function database() {
        header('Content-Type: text/html');
        echo '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN">'."\n";
        echo '<html>'."\n";
        echo '<head>'."\n";
        echo '<title>PHP REST SQL : Database "'.htmlspecialchars($this->PHPRestSQL->config['database']['database']).'"</title>'."\n";
        echo '</head>'."\n";
        echo '<body>'."\n";
        echo '<h1>Tables in database "'.htmlspecialchars($this->PHPRestSQL->config['database']['database']).'"</h1>'."\n";
        if (isset($this->PHPRestSQL->output['database'])) {
            echo '<ul>'."\n";
            foreach ($this->PHPRestSQL->output['database'] as $table) {
                echo '<li><a href="'.htmlspecialchars($table['xlink']).'">'.htmlspecialchars($table['value']).'</a></li>'."\n";
            }
            echo '</ul>'."\n";
        }
        echo '</body>'."\n";
        echo '</html>'."\n";
    }

    /**
     * Output the rows within a table.
     */

    function table() {
        header('Content-Type: application/json');
        $rows = array();
        if (isset($this->PHPRestSQL->output['table'])) {
            foreach ($this->PHPRestSQL->output['table'] as $row) {
                $rows['members'][] = $row;
            }
            print(json_encode($rows));
        }
    }
    
    /**
     * Output the entry in a table row.
     */
    function row() {
        header('Content-Type: application/json');
        if (isset($this->PHPRestSQL->output['row'])) {
            $row = array();
            $row['member'][] = $this->PHPRestSQL->output['row'];
            print(json_encode($row));
        }
    }

}
