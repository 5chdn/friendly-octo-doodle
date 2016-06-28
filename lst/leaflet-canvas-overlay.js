<div id="map"></div>

<script type="text/javascript">
  let map = L.map('map');
  let ovl = L.canvasOverlay()
             .drawing(drawGL)
             .addTo(map);
  let cnv = ovl.canvas();
  let ovl.canvas.width  = cnv.clientWidth;
  let ovl.canvas.height = cnv.clientHeight;
</script>

