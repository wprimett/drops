'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _soundworksClient = require('soundworks/client');

var _soundworksClient2 = _interopRequireDefault(_soundworksClient);

var _Performance = require('./Performance');

var _Performance2 = _interopRequireDefault(_Performance);

var dropsFiles = ['sounds/drops/01-drops-A-C2.mp3', 'sounds/drops/01-drops-B-C2.mp3', 'sounds/drops/02-drops-A-E2.mp3', 'sounds/drops/02-drops-B-E2.mp3', 'sounds/drops/03-drops-A-G2.mp3', 'sounds/drops/03-drops-B-G2.mp3', 'sounds/drops/04-drops-A-A2.mp3', 'sounds/drops/04-drops-B-A2.mp3', 'sounds/drops/05-drops-A-C3.mp3', 'sounds/drops/05-drops-B-C3.mp3', 'sounds/drops/06-drops-A-D3.mp3', 'sounds/drops/06-drops-B-D3.mp3', 'sounds/drops/07-drops-A-G3.mp3', 'sounds/drops/07-drops-B-G3.mp3', 'sounds/drops/08-drops-A-A3.mp3', 'sounds/drops/08-drops-B-A3.mp3', 'sounds/drops/09-drops-A-C4.mp3', 'sounds/drops/09-drops-B-C4.mp3', 'sounds/drops/10-drops-A-E4.mp3', 'sounds/drops/10-drops-B-E4.mp3', 'sounds/drops/11-drops-A-A4.mp3', 'sounds/drops/11-drops-B-A4.mp3', 'sounds/drops/12-drops-A-C5.mp3', 'sounds/drops/12-drops-B-C5.mp3'];

var drops2Files = ['sounds/drops2/01-drops2-A.mp3', 'sounds/drops2/01-drops2-B.mp3', 'sounds/drops2/02-drops2-A.mp3', 'sounds/drops2/02-drops2-B.mp3', 'sounds/drops2/03-drops2-A.mp3', 'sounds/drops2/03-drops2-B.mp3', 'sounds/drops2/04-drops2-A.mp3', 'sounds/drops2/04-drops2-B.mp3', 'sounds/drops2/05-drops2-A.mp3', 'sounds/drops2/05-drops2-B.mp3', 'sounds/drops2/06-drops2-A.mp3', 'sounds/drops2/06-drops2-B.mp3', 'sounds/drops2/07-drops2-A.mp3', 'sounds/drops2/07-drops2-B.mp3', 'sounds/drops2/08-drops2-A.mp3', 'sounds/drops2/08-drops2-B.mp3', 'sounds/drops2/09-drops2-A.mp3', 'sounds/drops2/09-drops2-B.mp3', 'sounds/drops2/10-drops2-A.mp3', 'sounds/drops2/10-drops2-B.mp3', 'sounds/drops2/11-drops2-A.mp3', 'sounds/drops2/11-drops2-B.mp3', 'sounds/drops2/12-drops2-A.mp3', 'sounds/drops2/12-drops2-B.mp3'];

var noiseFiles = ['sounds/noise/01-noise-A.mp3', 'sounds/noise/01-noise-B.mp3', 'sounds/noise/02-noise-A.mp3', 'sounds/noise/02-noise-B.mp3', 'sounds/noise/03-noise-A.mp3', 'sounds/noise/03-noise-B.mp3', 'sounds/noise/04-noise-A.mp3', 'sounds/noise/04-noise-B.mp3', 'sounds/noise/05-noise-A.mp3', 'sounds/noise/05-noise-B.mp3', 'sounds/noise/06-noise-A.mp3', 'sounds/noise/06-noise-B.mp3', 'sounds/noise/07-noise-A.mp3', 'sounds/noise/07-noise-B.mp3', 'sounds/noise/08-noise-A.mp3', 'sounds/noise/08-noise-B.mp3', 'sounds/noise/09-noise-A.mp3', 'sounds/noise/09-noise-B.mp3', 'sounds/noise/10-noise-A.mp3', 'sounds/noise/10-noise-B.mp3', 'sounds/noise/11-noise-A.mp3', 'sounds/noise/11-noise-B.mp3', 'sounds/noise/12-noise-A.mp3', 'sounds/noise/12-noise-B.mp3'];

var voxFiles = ['sounds/vox/01-drop-vox-A.mp3', 'sounds/vox/01-drop-vox-B.mp3', 'sounds/vox/02-drop-vox-A.mp3', 'sounds/vox/02-drop-vox-B.mp3', 'sounds/vox/03-drop-vox-A.mp3', 'sounds/vox/03-drop-vox-B.mp3', 'sounds/vox/04-drop-vox-A.mp3', 'sounds/vox/04-drop-vox-B.mp3', 'sounds/vox/05-drop-vox-A.mp3', 'sounds/vox/05-drop-vox-B.mp3', 'sounds/vox/06-drop-vox-A.mp3', 'sounds/vox/06-drop-vox-B.mp3', 'sounds/vox/07-drop-vox-A.mp3', 'sounds/vox/07-drop-vox-B.mp3', 'sounds/vox/08-drop-vox-A.mp3', 'sounds/vox/08-drop-vox-B.mp3', 'sounds/vox/09-drop-vox-A.mp3', 'sounds/vox/09-drop-vox-B.mp3', 'sounds/vox/10-drop-vox-A.mp3', 'sounds/vox/10-drop-vox-B.mp3', 'sounds/vox/11-drop-vox-A.mp3', 'sounds/vox/11-drop-vox-B.mp3', 'sounds/vox/12-drop-vox-A.mp3', 'sounds/vox/12-drop-vox-B.mp3'];

var audioFiles = dropsFiles;
var client = _soundworksClient2['default'].client;

client.init('player');

function bootstrap() {
  window.top.scrollTo(0, 1);

  var loader = new _soundworksClient2['default'].Loader({ files: audioFiles });
  var welcome = new _soundworksClient2['default'].Welcome({ fullScreen: false });
  var sync = new _soundworksClient2['default'].ClientSync();
  var checkin = new _soundworksClient2['default'].ClientCheckin();
  var control = new _soundworksClient2['default'].ClientControl();
  var performance = new _Performance2['default'](loader, control, sync, checkin);

  client.start(function (seq, par) {
    return seq(par(welcome, loader), control, par(sync, checkin), performance);
  });
}

window.addEventListener('load', bootstrap);
//# sourceMappingURL=data:application/json;base64,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LEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSw4QkFBVyxVQUFVLEVBQUUsQ0FBQztBQUN6QyxNQUFNLE9BQU8sR0FBRyxJQUFJLDhCQUFXLGFBQWEsRUFBRSxDQUFDO0FBQy9DLE1BQU0sT0FBTyxHQUFHLElBQUksOEJBQVcsYUFBYSxFQUFFLENBQUM7QUFDL0MsTUFBTSxXQUFXLEdBQUcsNkJBQWdCLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUVwRSxRQUFNLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7V0FDcEIsR0FBRyxDQUNELEdBQUcsQ0FDRCxPQUFPLEVBQ1AsTUFBTSxDQUNQLEVBQ0QsT0FBTyxFQUNQLEdBQUcsQ0FDRCxJQUFJLEVBQ0osT0FBTyxDQUNSLEVBQ0QsV0FBVyxDQUNaO0dBQUEsQ0FDRixDQUFDO0NBQ0g7O0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvY2xpZW50L3BsYXllci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb3VuZHdvcmtzIGZyb20gJ3NvdW5kd29ya3MvY2xpZW50JztcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICcuL1BlcmZvcm1hbmNlJztcblxuY29uc3QgZHJvcHNGaWxlcyA9IFtcbiAgJ3NvdW5kcy9kcm9wcy8wMS1kcm9wcy1BLUMyLm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMDEtZHJvcHMtQi1DMi5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzAyLWRyb3BzLUEtRTIubXAzJyxcbiAgJ3NvdW5kcy9kcm9wcy8wMi1kcm9wcy1CLUUyLm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMDMtZHJvcHMtQS1HMi5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzAzLWRyb3BzLUItRzIubXAzJyxcbiAgJ3NvdW5kcy9kcm9wcy8wNC1kcm9wcy1BLUEyLm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMDQtZHJvcHMtQi1BMi5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzA1LWRyb3BzLUEtQzMubXAzJyxcbiAgJ3NvdW5kcy9kcm9wcy8wNS1kcm9wcy1CLUMzLm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMDYtZHJvcHMtQS1EMy5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzA2LWRyb3BzLUItRDMubXAzJyxcbiAgJ3NvdW5kcy9kcm9wcy8wNy1kcm9wcy1BLUczLm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMDctZHJvcHMtQi1HMy5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzA4LWRyb3BzLUEtQTMubXAzJyxcbiAgJ3NvdW5kcy9kcm9wcy8wOC1kcm9wcy1CLUEzLm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMDktZHJvcHMtQS1DNC5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzA5LWRyb3BzLUItQzQubXAzJyxcbiAgJ3NvdW5kcy9kcm9wcy8xMC1kcm9wcy1BLUU0Lm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMTAtZHJvcHMtQi1FNC5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzExLWRyb3BzLUEtQTQubXAzJyxcbiAgJ3NvdW5kcy9kcm9wcy8xMS1kcm9wcy1CLUE0Lm1wMycsXG4gICdzb3VuZHMvZHJvcHMvMTItZHJvcHMtQS1DNS5tcDMnLFxuICAnc291bmRzL2Ryb3BzLzEyLWRyb3BzLUItQzUubXAzJ1xuXTtcblxuY29uc3QgZHJvcHMyRmlsZXMgPSBbXG4gICdzb3VuZHMvZHJvcHMyLzAxLWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzAxLWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzAyLWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzAyLWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzAzLWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzAzLWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA0LWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA0LWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA1LWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA1LWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA2LWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA2LWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA3LWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA3LWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA4LWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA4LWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA5LWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzA5LWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzEwLWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzEwLWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzExLWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzExLWRyb3BzMi1CLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzEyLWRyb3BzMi1BLm1wMycsXG4gICdzb3VuZHMvZHJvcHMyLzEyLWRyb3BzMi1CLm1wMydcbl07XG5cbmNvbnN0IG5vaXNlRmlsZXMgPSBbXG4gICdzb3VuZHMvbm9pc2UvMDEtbm9pc2UtQS5tcDMnLFxuICAnc291bmRzL25vaXNlLzAxLW5vaXNlLUIubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8wMi1ub2lzZS1BLm1wMycsXG4gICdzb3VuZHMvbm9pc2UvMDItbm9pc2UtQi5tcDMnLFxuICAnc291bmRzL25vaXNlLzAzLW5vaXNlLUEubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8wMy1ub2lzZS1CLm1wMycsXG4gICdzb3VuZHMvbm9pc2UvMDQtbm9pc2UtQS5tcDMnLFxuICAnc291bmRzL25vaXNlLzA0LW5vaXNlLUIubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8wNS1ub2lzZS1BLm1wMycsXG4gICdzb3VuZHMvbm9pc2UvMDUtbm9pc2UtQi5tcDMnLFxuICAnc291bmRzL25vaXNlLzA2LW5vaXNlLUEubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8wNi1ub2lzZS1CLm1wMycsXG4gICdzb3VuZHMvbm9pc2UvMDctbm9pc2UtQS5tcDMnLFxuICAnc291bmRzL25vaXNlLzA3LW5vaXNlLUIubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8wOC1ub2lzZS1BLm1wMycsXG4gICdzb3VuZHMvbm9pc2UvMDgtbm9pc2UtQi5tcDMnLFxuICAnc291bmRzL25vaXNlLzA5LW5vaXNlLUEubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8wOS1ub2lzZS1CLm1wMycsXG4gICdzb3VuZHMvbm9pc2UvMTAtbm9pc2UtQS5tcDMnLFxuICAnc291bmRzL25vaXNlLzEwLW5vaXNlLUIubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8xMS1ub2lzZS1BLm1wMycsXG4gICdzb3VuZHMvbm9pc2UvMTEtbm9pc2UtQi5tcDMnLFxuICAnc291bmRzL25vaXNlLzEyLW5vaXNlLUEubXAzJyxcbiAgJ3NvdW5kcy9ub2lzZS8xMi1ub2lzZS1CLm1wMydcbl07XG5cbmNvbnN0IHZveEZpbGVzID0gW1xuICAnc291bmRzL3ZveC8wMS1kcm9wLXZveC1BLm1wMycsXG4gICdzb3VuZHMvdm94LzAxLWRyb3Atdm94LUIubXAzJyxcbiAgJ3NvdW5kcy92b3gvMDItZHJvcC12b3gtQS5tcDMnLFxuICAnc291bmRzL3ZveC8wMi1kcm9wLXZveC1CLm1wMycsXG4gICdzb3VuZHMvdm94LzAzLWRyb3Atdm94LUEubXAzJyxcbiAgJ3NvdW5kcy92b3gvMDMtZHJvcC12b3gtQi5tcDMnLFxuICAnc291bmRzL3ZveC8wNC1kcm9wLXZveC1BLm1wMycsXG4gICdzb3VuZHMvdm94LzA0LWRyb3Atdm94LUIubXAzJyxcbiAgJ3NvdW5kcy92b3gvMDUtZHJvcC12b3gtQS5tcDMnLFxuICAnc291bmRzL3ZveC8wNS1kcm9wLXZveC1CLm1wMycsXG4gICdzb3VuZHMvdm94LzA2LWRyb3Atdm94LUEubXAzJyxcbiAgJ3NvdW5kcy92b3gvMDYtZHJvcC12b3gtQi5tcDMnLFxuICAnc291bmRzL3ZveC8wNy1kcm9wLXZveC1BLm1wMycsXG4gICdzb3VuZHMvdm94LzA3LWRyb3Atdm94LUIubXAzJyxcbiAgJ3NvdW5kcy92b3gvMDgtZHJvcC12b3gtQS5tcDMnLFxuICAnc291bmRzL3ZveC8wOC1kcm9wLXZveC1CLm1wMycsXG4gICdzb3VuZHMvdm94LzA5LWRyb3Atdm94LUEubXAzJyxcbiAgJ3NvdW5kcy92b3gvMDktZHJvcC12b3gtQi5tcDMnLFxuICAnc291bmRzL3ZveC8xMC1kcm9wLXZveC1BLm1wMycsXG4gICdzb3VuZHMvdm94LzEwLWRyb3Atdm94LUIubXAzJyxcbiAgJ3NvdW5kcy92b3gvMTEtZHJvcC12b3gtQS5tcDMnLFxuICAnc291bmRzL3ZveC8xMS1kcm9wLXZveC1CLm1wMycsXG4gICdzb3VuZHMvdm94LzEyLWRyb3Atdm94LUEubXAzJyxcbiAgJ3NvdW5kcy92b3gvMTItZHJvcC12b3gtQi5tcDMnXG5dO1xuXG5jb25zdCBhdWRpb0ZpbGVzID0gZHJvcHNGaWxlcztcbmNvbnN0IGNsaWVudCA9IHNvdW5kd29ya3MuY2xpZW50O1xuXG5jbGllbnQuaW5pdCgncGxheWVyJyk7XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgd2luZG93LnRvcC5zY3JvbGxUbygwLCAxKTtcblxuICBjb25zdCBsb2FkZXIgPSBuZXcgc291bmR3b3Jrcy5Mb2FkZXIoeyBmaWxlczogYXVkaW9GaWxlcyB9KTtcbiAgY29uc3Qgd2VsY29tZSA9IG5ldyBzb3VuZHdvcmtzLldlbGNvbWUoeyBmdWxsU2NyZWVuOiBmYWxzZSB9KTtcbiAgY29uc3Qgc3luYyA9IG5ldyBzb3VuZHdvcmtzLkNsaWVudFN5bmMoKTtcbiAgY29uc3QgY2hlY2tpbiA9IG5ldyBzb3VuZHdvcmtzLkNsaWVudENoZWNraW4oKTtcbiAgY29uc3QgY29udHJvbCA9IG5ldyBzb3VuZHdvcmtzLkNsaWVudENvbnRyb2woKTtcbiAgY29uc3QgcGVyZm9ybWFuY2UgPSBuZXcgUGVyZm9ybWFuY2UobG9hZGVyLCBjb250cm9sLCBzeW5jLCBjaGVja2luKTtcblxuICBjbGllbnQuc3RhcnQoKHNlcSwgcGFyKSA9PlxuICAgIHNlcShcbiAgICAgIHBhcihcbiAgICAgICAgd2VsY29tZSxcbiAgICAgICAgbG9hZGVyXG4gICAgICApLFxuICAgICAgY29udHJvbCxcbiAgICAgIHBhcihcbiAgICAgICAgc3luYyxcbiAgICAgICAgY2hlY2tpblxuICAgICAgKSxcbiAgICAgIHBlcmZvcm1hbmNlXG4gICAgKVxuICApO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGJvb3RzdHJhcCk7XG4iXX0=