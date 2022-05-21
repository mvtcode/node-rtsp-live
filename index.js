const Stream = require('node-rtsp-stream')
const stream = new Stream({
  name: 'camera1',
  streamUrl: 'rtsp://192.168.0.101:554/user=admin_password-tlJwpbo6_channel=1_stream=0.sdp?real_stream',
  // streamUrl: 'rtsp://tanmv:aA123456@192.168.0.102:554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30, // options with required values specify the value after the key
    '-c:a': 'aac',
    '-muxdelay': '0.001',
    '-s': '1280x720',
    '-b:v': '1500k'
  }
});
