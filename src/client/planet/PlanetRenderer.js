import * as soundworks from 'soundworks/client';
import * as d3 from 'd3';
import * as topojson from 'topojson';

class PlanetRenderer extends soundworks.Renderer {
  constructor(ctx, topology, dragProxy, zoomProxy) {
    super();

    this.ctx = ctx;
    this.dragProxy = dragProxy;
    this.zoomProxy = zoomProxy;
    this.topology = topology;
    this.projection = d3.geoOrthographic();
    this.graticule = d3.geoGraticule();
    this.land = topojson.feature(topology, topology.objects.land);

    this.path = d3.geoPath()
      .projection(this.projection)
      .context(ctx);
  }

  init() {
    const { canvasWidth, canvasHeight } = this;
    const padding = canvasHeight / 3;
    const size = Math.min(canvasWidth, canvasHeight);

    this.projection
      .translate([canvasWidth / 2, canvasHeight / 2])
      .scale((size - padding) / 2);
  }

  onResize(canvasWidth, canvasHeight) {
    super.onResize(canvasWidth, canvasHeight);

    this.projection.translate([canvasWidth / 2, canvasHeight / 2]);
  }

  update(dt) {

  }

  render(ctx) {
    const sphere = { type: 'Sphere' };
    const { dragProxy, projection, path } = this;

    // render only when something changed (let's see if it make sens...)
    const dragChanged = this.dragProxy.execute(projection);
    const zoomChanged = this.zoomProxy.execute(projection);

    if (!dragChanged && !zoomChanged)
      return;

    ctx.save();
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // background
    projection.clipAngle(180);

    // drawPings();
    // oceans
    ctx.beginPath();
    path(sphere);
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fill();

    // land background
    ctx.beginPath();
    path(this.land);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();

    // meridiens
    // ctx.beginPath();
    // path(grid);
    // ctx.lineWidth = .5;
    // ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    // ctx.stroke();

    this.projection.clipAngle(90);

    // oceans
    ctx.beginPath();
    path(sphere);
    ctx.lineWidth = 1;
    // ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';

    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fill();

    // meridiens
    // ctx.beginPath();
    // path(grid);
    // ctx.lineWidth = .5;
    // ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    // ctx.stroke();

    // getPattern();
    // const pattern = ctx.createPattern($pattern, 'repeat');

    projection.clipAngle(90);
    // land foreground
    ctx.beginPath();
    path(this.land);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // drawPings();
  }
}

export default PlanetRenderer;
