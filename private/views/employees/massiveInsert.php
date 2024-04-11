<link rel="stylesheet" href="public/css/massiveInsert.css">

<div class="topSeparation"></div>
<div class="formCont">
    <form action="" method="POST" enctype="multipart/form-data" id="filesForm">
        <div class="downloadField">
            <div class="imgDownload"></div>
            <button class="butDownload btn btn-primary" onClick="DownloadFromUrl('private/views/muestra.csv','muestra.csv')">Descargar Archivo Modelo</button>
        </div>
        <div class="uploadField">
            <div class="warningUpload">
                <p style="text-align: center; color: #31708f;margin-bottom: 0px;">Recuerda que se debe guardar el archivo con extensión .csv</p>
                <div class="imgCont"></div>
            </div>
            <div class="mb-3" style="width: 80%;">
                <input class="form-control" type="file" id="formFile" name="fileEmployees">
            </div>
            <button type="button" id="botonSubmit" class="btn btn-primary" style="width: 6em;" onclick="uploadEmployees();">submit</button>
        </div>
    </form>
</div>

<script src="public/js/massiveInsert.js"></script>