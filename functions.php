<?php
function get_browser_type()
{
    $u_agent = $_SERVER['HTTP_USER_AGENT'];
    $UserBrowser = '';
    if(preg_match('/MSIE/i',$u_agent))
    {
        $UserBrowser = "ie";
    }
    elseif(preg_match('/Firefox/i',$u_agent))
    {
        $UserBrowser = "firefox";
    }
    elseif(preg_match('/Chrome/i',$u_agent))
    {
		    if(preg_match('/Macintosh/i',$u_agent))
          $UserBrowser = "chrome-mac";
				else
          $UserBrowser = "chrome";
    }
    elseif(preg_match('/Safari/i',$u_agent))
    {
        $UserBrowser = "safari";
    }
    elseif(preg_match('/Flock/i',$u_agent))
    {
        $UserBrowser = "flock";
    }
    elseif(preg_match('/Opera/i',$u_agent))
    {
        $UserBrowser = "opera";
    }
   
    return $UserBrowser;
}
?>