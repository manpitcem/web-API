<?php
# Menyemak nilai pembolehubah session['tahap']
if($_SESSION['tahap'] != "staff")
{
	# jika nilainya tidak sama dengan staff. aturcara akan dihentikan
	die("<script>alert('sila login');
	window.location.href='logout.php';</script>");
}
?>